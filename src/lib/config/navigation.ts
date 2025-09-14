// Centralized navigation configuration
// Keep section IDs typed and export a single source of truth for defaults

export type SectionId =
  | 'get-started'
  | 'best-practices'
  | 'how-to-implement'
  | 'how-to-apply-cc';

export const SECTION_IDS: SectionId[] = [
  'get-started',
  'best-practices',
  'how-to-implement',
  'how-to-apply-cc',
];

// Default landing section for the app (single source of truth)
export const DEFAULT_SECTION_ID: SectionId = 'best-practices';
