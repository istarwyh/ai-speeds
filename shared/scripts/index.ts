import { sidebarScript } from './sidebar';
import { navigationScript } from './navigation';
import { codeExamplesScript } from './codeExamples';
import { bestPracticesClientScript } from './generated/bestPracticesBundle';
import { howToImplementClientScript } from './generated/howToImplementBundle';
import { howToApplyCCClientScript } from './generated/howToApplyCCBundle';
import { providerScripts } from './providers';

export const allScripts = `
${providerScripts}
${sidebarScript}
${navigationScript}
${codeExamplesScript}
${bestPracticesClientScript}
${howToImplementClientScript}
${howToApplyCCClientScript}
`;
