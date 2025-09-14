import { faviconDataUrl } from './components/favicon';
import { createHead, sidebarComponent, navigationComponent, sideCardsComponent, allStyles, allScripts } from '../index';
import { DEFAULT_SECTION_ID } from '../config/navigation';
import { getStartedModule } from '../../modules/get-started';
import { bestPracticesModule } from '../../modules/best-practices';
import { implementationModule } from '../../modules/how-to-implement';
import { howToApplyCCModule } from '../../modules/how-to-apply-cc';

/**
 * 主页 HTML 模板
 */
export const indexHtml = `<!DOCTYPE html>
<html lang="en">
${createHead(faviconDataUrl)}
<style>
/* Anti-FOUC: hide all sections by default and show only the default section.
   JS will take over to show the right section based on hash or user action. */
.content-section, .practices-page { display: none; }
#${DEFAULT_SECTION_ID} { display: block; }
${allStyles}
</style>
<body>
${sidebarComponent}
${navigationComponent}

<div class="container">
  ${getStartedModule}
  ${bestPracticesModule}
  ${implementationModule}
  ${howToApplyCCModule}
</div>

<script>
${allScripts}
</script>
</body>
</html>`;
