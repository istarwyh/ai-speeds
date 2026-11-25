import type { ContentProvenance } from '@/types/content-provenance';

export const shareProvenanceBySlug = {
  'insurance-quick-check-shanghai-2026': {
    origin: 'original',
    rightsMode: 'owned',
    attributions: [{ contributorId: 'xiaohui', roles: ['author'] }],
  },
  'mcp-advisor-oceanbase-hackathon': {
    origin: 'collaboration',
    rightsMode: 'owned',
    attributions: [
      { contributorId: 'xiaohui', roles: ['author', 'speaker'] },
      { contributorId: 'lu-guanrong', roles: ['collaborator', 'speaker'] },
    ],
  },
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
  'agent-native-product-ccf-tf179': {
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
