#!/usr/bin/env node

import { error, log } from 'node:console';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

export const SUPPORTED_NODE_RANGE = '^22.18.0 || >=24.0.0';
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const stableVersionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

/** @param {unknown} value @returns {[number, number, number] | undefined} */
function parseStableNodeVersion(value) {
  if (typeof value !== 'string') {
    return undefined;
  }
  const match = stableVersionPattern.exec(value);
  if (!match || match[0] !== value) {
    return undefined;
  }
  const parts = match.slice(1).map(Number);
  if (parts.length !== 3 || parts.some(part => !Number.isSafeInteger(part))) {
    return undefined;
  }
  const [major, minor, patch] = parts;
  if (major === undefined || minor === undefined || patch === undefined) {
    return undefined;
  }
  return [major, minor, patch];
}

/** @param {unknown} version @returns {boolean} */
export function isSupportedNodeVersion(version) {
  const parsed = parseStableNodeVersion(version);
  if (!parsed) {
    return false;
  }
  const [major, minor, patch] = parsed;
  return (major === 22 && (minor > 18 || (minor === 18 && patch >= 0))) || major >= 24;
}

/** @param {unknown} [version] */
export function assertSupportedNodeVersion(version = process.versions.node) {
  if (isSupportedNodeVersion(version)) {
    return;
  }
  const received = typeof version === 'string' ? version : String(version);
  throw new Error(
    `[NODE001] Unsupported Node.js version ${JSON.stringify(received)}. Supported versions: ${SUPPORTED_NODE_RANGE}. ` +
      'Install and activate Node.js 22.18.0 or newer in the 22.x line, or Node.js 24.0.0 or newer, then rerun this command.',
  );
}

function assertDeclaredNodeRange() {
  let packageJson;
  try {
    packageJson = JSON.parse(readFileSync(resolve(repoRoot, 'package.json'), 'utf8'));
  } catch (cause) {
    throw new Error('[NODE001] Unable to read package.json while validating engines.node', { cause });
  }
  const declaredRange = packageJson?.engines?.node;
  if (declaredRange !== SUPPORTED_NODE_RANGE) {
    throw new Error(
      `[NODE001] package.json engines.node must equal ${JSON.stringify(SUPPORTED_NODE_RANGE)}; ` +
        `received ${JSON.stringify(declaredRange)}`,
    );
  }
}

function runSelfTest() {
  const cases = [
    { version: '0.0.0', supported: false },
    { version: '22.17.99', supported: false },
    { version: '22.18.0', supported: true },
    { version: '22.18.1', supported: true },
    { version: '22.99.99', supported: true },
    { version: '23.0.0', supported: false },
    { version: '23.99.99', supported: false },
    { version: '24.0.0', supported: true },
    { version: '25.0.0', supported: true },
    { version: '122.0.0', supported: true },
    { version: '22.18', supported: false },
    { version: 'v22.18.0', supported: false },
    { version: '22.18.0-rc.1', supported: false },
    { version: '22.18.0+build.1', supported: false },
    { version: '22.018.0', supported: false },
    { version: ' 22.18.0', supported: false },
    { version: '22.18.0 ', supported: false },
    { version: '22.18.0\n', supported: false },
    { version: '', supported: false },
    { version: null, supported: false },
  ];

  for (const testCase of cases) {
    const actual = isSupportedNodeVersion(testCase.version);
    if (actual !== testCase.supported) {
      throw new Error(
        `Self-test failed for ${JSON.stringify(testCase.version)}: expected ${testCase.supported}, received ${actual}`,
      );
    }
    let assertionPassed = true;
    try {
      assertSupportedNodeVersion(testCase.version);
    } catch (cause) {
      assertionPassed = false;
      if (
        testCase.supported ||
        !(cause instanceof Error) ||
        !cause.message.includes('[NODE001]') ||
        !cause.message.includes(SUPPORTED_NODE_RANGE)
      ) {
        throw cause;
      }
    }
    if (assertionPassed !== testCase.supported) {
      throw new Error(`Self-test assertion mismatch for ${JSON.stringify(testCase.version)}`);
    }
  }

  log(`node-runtime: self-test passed (${cases.length} cases)`);
}

function main() {
  const arguments_ = process.argv.slice(2);
  if (arguments_.length === 1 && arguments_[0] === '--self-test') {
    runSelfTest();
    return;
  }
  if (arguments_.length > 0) {
    throw new Error(`Unknown argument: ${arguments_[0]}`);
  }
  assertSupportedNodeVersion();
  assertDeclaredNodeRange();
  log(`node-runtime: Node.js ${process.versions.node} is supported (${SUPPORTED_NODE_RANGE})`);
}

const entryPath = process.argv[1];
if (entryPath && resolve(entryPath) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    error(`node-runtime: ${message}`);
    process.exitCode = 1;
  }
}
