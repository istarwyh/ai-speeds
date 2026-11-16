/**
 * Download names mirror the Share registry. The caller validates slug/version.
 * Images and manifests remain inline; this helper performs no I/O.
 * @param {string} file
 * @param {string} slug
 * @param {string} version
 * @returns {string}
 */
export function getShareAssetContentDisposition(file, slug, version) {
  switch (file) {
    case 'deck.pdf':
      return `attachment; filename="${slug}-${version}.pdf"`;
    case 'source.pptx':
      return `attachment; filename="${slug}-${version}.pptx"`;
    case 'transcript.md':
      return `attachment; filename="${slug}-${version}-transcript.md"`;
    case 'article.md':
      return `attachment; filename="${slug}-article.md"`;
    default:
      return 'inline';
  }
}
