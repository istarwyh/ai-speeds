import { sidebarScript } from './sidebar';
import { navigationScript } from './navigation';
import { codeExamplesScript } from './codeExamples';
import { providerDetailsClientScript } from '../generated/providerDetailsBundle';
import { providerScripts } from './providers';

export const allScripts = `
${providerScripts}
${sidebarScript}
${navigationScript}
${codeExamplesScript}
${providerDetailsClientScript}
`;
