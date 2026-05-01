// Centralized navigation configuration
// Keep section IDs typed and export a single source of truth for defaults

export type SectionId = 'home' | 'get-started';

export const SECTION_IDS: SectionId[] = ['home', 'get-started'];

// Default landing section for the app (single source of truth)
export const DEFAULT_SECTION_ID: SectionId = 'home';
