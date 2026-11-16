import assert from 'node:assert/strict';
import test from 'node:test';
import { getShareAssetContentDisposition } from './share-asset-metadata.mjs';

/** @type {Array<[string, string]>} */
const cases = [
  ['deck.pdf', 'attachment; filename="example-share-v2-fix.pdf"'],
  ['source.pptx', 'attachment; filename="example-share-v2-fix.pptx"'],
  ['transcript.md', 'attachment; filename="example-share-v2-fix-transcript.md"'],
  ['article.md', 'attachment; filename="example-share-article.md"'],
  ['cover.webp', 'inline'],
  ['slides/001.webp', 'inline'],
  ['thumbnails/001.webp', 'inline'],
  ['manifest.json', 'inline'],
];

for (const [file, expected] of cases) {
  test(`${file} has its intended disposition and filename`, () => {
    assert.equal(getShareAssetContentDisposition(file, 'example-share', 'v2-fix'), expected);
  });
}

test('download names follow the selected share rather than the old fixed share', () => {
  assert.equal(
    getShareAssetContentDisposition('deck.pdf', 'mcp-advisor-oceanbase-hackathon', 'v1'),
    'attachment; filename="mcp-advisor-oceanbase-hackathon-v1.pdf"',
  );
  assert.equal(
    getShareAssetContentDisposition('article.md', 'agent-native-product-ccf-tf179', 'v1'),
    'attachment; filename="agent-native-product-ccf-tf179-article.md"',
  );
});
