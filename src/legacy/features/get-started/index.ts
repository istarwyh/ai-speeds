// src/features/get-started/index.ts
import { setupComponent } from './components/setup';
import { deploymentComponent } from './components/deployment';

export const getStartedModule = `
<section class="content-section" id="get-started">
    ${setupComponent}
    ${deploymentComponent}
</section>`;

export * from './components/setup';
export * from './components/deployment';
