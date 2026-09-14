import type { ContentProvenance } from '@/types/content-provenance';

export const shareProvenanceBySlug = {
  'agent-native-product-ai-maker-shanghai': {
    origin: 'original',
    rightsMode: 'owned',
    attributions: [
      {
        contributorId: 'xiaohui',
        roles: ['author', 'speaker'],
      },
    ],
  },
} as const satisfies Readonly<Record<string, ContentProvenance>>;
