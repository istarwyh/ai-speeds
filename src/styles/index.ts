import { designTokens } from './designTokens';
import { baseStyles } from './baseStyles';
import { componentStyles } from './componentStyles';
import { bestPracticesOverviewCardStyles } from './bestPracticesOverviewCards';
import { articleStyles } from './articleStyles';
import { sideCardStyles } from './sideCardStyles';
import { navigationStyles } from './navigationStyles';
import { commandsCheatsheetStyles } from './commandsCheatsheetStyles';

export const allStyles = `
${designTokens}
${baseStyles}
${componentStyles}
${navigationStyles}
${bestPracticesOverviewCardStyles}
${articleStyles}
${sideCardStyles}
${commandsCheatsheetStyles}
`;
