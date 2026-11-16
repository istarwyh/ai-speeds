#!/usr/bin/env node
// @ts-nocheck -- operator CLI; inputs are validated at runtime.

import { error, log } from 'node:console';
import { readFile, readdir } from 'node:fs/promises';
import { join, relative, resolve, sep, dirname, extname } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { assertSupportedNodeVersion } from './node-runtime.mjs';
import { getShareAssetContentDisposition } from './share-asset-metadata.mjs';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const bucket = 'assets-aispeeds-me';
const immutableCacheControl = 'public, max-age=31536000, immutable';
const contentTypes = new Map([
  ['.webp', 'image/webp'],
  ['.pdf', 'application/pdf'],
  ['.pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
  ['.md', 'text/markdown; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
]);
const defaultSlug = 'agent-native-product-ai-maker-shanghai';
const defaultVersion = 'v4';

function usage() {
  return [
    'Usage: node scripts/publish-share-assets.mjs [options]',
    '',
    'Dry-run is the default. Credentials and network are only used with --apply.',
    '',
    'Options:',
    `  --slug <slug>             Share slug (default: ${defaultSlug})`,
    `  --media-version <vN>      media version (default: ${defaultVersion})`,
    '  Input directory: dist/shares/<slug>/<version> (derived from the destination)',
    '  --concurrency <1-8>       upload concurrency (default: 4)',
    '  --apply                   upload; abort on existing objects; use a new version to retry',
    '  --help',
    '',
    'Required with --apply: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY.',
  ].join('\n');
}

function parseArguments(arguments_) {
  const options = { slug: defaultSlug, version: defaultVersion, staging: undefined, concurrency: 4, apply: false };
  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === '--') {
      continue;
    }
    if (argument === '--help') {
      log(usage());
      process.exit(0);
    }
    if (argument === '--apply') {
      options.apply = true;
      continue;
    }
    const value = arguments_[index + 1];
    if (!['--slug', '--media-version', '--concurrency'].includes(argument ?? '')) {
      throw new Error(`Unknown argument: ${argument}`);
    }
    if (!value) {
      throw new Error(`Missing value for ${argument}`);
    }
    index += 1;
    if (argument === '--slug') {
      options.slug = value;
    } else if (argument === '--media-version') {
      options.version = value;
    } else {
      options.concurrency = Number(value);
    }
  }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(options.slug)) {
    throw new Error('--slug must be kebab-case');
  }
  if (!/^v[1-9][0-9a-z-]*$/.test(options.version)) {
    throw new Error('--media-version must look like v1');
  }
  if (!Number.isInteger(options.concurrency) || options.concurrency < 1 || options.concurrency > 8) {
    throw new Error('--concurrency must be an integer from 1 through 8');
  }
  options.staging ??= resolve(repoRoot, 'dist', 'shares', options.slug, options.version);
  return options;
}

async function listFiles(root) {
  const output = [];
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(path);
      } else if (entry.isFile()) {
        output.push(relative(root, path).split(sep).join('/'));
      }
    }
  }
  await visit(root);
  return output.sort();
}

async function mapConcurrent(values, concurrency, worker) {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, values.length) }, async () => {
      while (next < values.length) {
        const current = next;
        next += 1;
        await worker(values[current]);
      }
    }),
  );
}

function requireEnvironment(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function publish(options) {
  const files = await listFiles(options.staging);
  if (files.length === 0) {
    throw new Error('Staging directory is empty; run shares:prepare first');
  }
  const prefix = `shares/${options.slug}/${options.version}`;
  for (const file of files) {
    if (!contentTypes.has(extname(file))) {
      throw new Error(`Unsupported file type: ${file}`);
    }
  }

  if (!options.apply) {
    log(`Dry run: ${files.length} files would be uploaded to s3://${bucket}/${prefix}/`);
    log('No credentials were read and no network requests were made. Pass --apply to publish.');
    return;
  }

  const client = new S3Client({
    region: 'auto',
    endpoint: `https://${requireEnvironment('R2_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
    forcePathStyle: true,
    credentials: {
      accessKeyId: requireEnvironment('R2_ACCESS_KEY_ID'),
      secretAccessKey: requireEnvironment('R2_SECRET_ACCESS_KEY'),
    },
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
    maxAttempts: 3,
  });

  try {
    // Upload manifest.json last so it only appears after every other file.
    const ordered = [
      ...files.filter(file => file !== 'manifest.json'),
      ...files.filter(file => file === 'manifest.json'),
    ];
    const groups = [ordered.filter(file => file !== 'manifest.json'), ordered.filter(file => file === 'manifest.json')];
    for (const group of groups) {
      await mapConcurrent(group, options.concurrency, async file => {
        try {
          await client.send(
            new PutObjectCommand({
              Bucket: bucket,
              Key: `${prefix}/${file}`,
              Body: await readFile(join(options.staging, ...file.split('/'))),
              ContentType: contentTypes.get(extname(file)),
              ContentDisposition: getShareAssetContentDisposition(file, options.slug, options.version),
              CacheControl: immutableCacheControl,
              IfNoneMatch: '*',
            }),
          );
        } catch (cause) {
          if (cause?.$metadata?.httpStatusCode === 412) {
            throw new Error(`Object already exists: ${prefix}/${file}; publish a new media version instead`, { cause });
          }
          throw new Error(`Upload failed for ${prefix}/${file}`, { cause });
        }
      });
    }
    log(`Uploaded ${files.length} files to ${prefix}/`);
  } finally {
    client.destroy();
  }
}

async function main() {
  assertSupportedNodeVersion();
  await publish(parseArguments(process.argv.slice(2)));
}

main().catch(cause => {
  error(`publish-share-assets: ${cause instanceof Error ? cause.message : String(cause)}`);
  process.exitCode = 1;
});
