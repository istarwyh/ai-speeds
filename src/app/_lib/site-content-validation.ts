import { validateFeatureRegistry } from '@/config/features';
import { validateContributorRegistry } from '@/content/contributors';
import { shares, validateShareProvenance } from '@/content/shares';
import { validateNavigationRegistry } from '@/lib/navigation';
import { validateSearchIndex } from './site-search';

type RegistryValidator = {
  label: string;
  validate: () => string[];
};

const registryValidators: readonly RegistryValidator[] = [
  {
    label: 'Feature Registry',
    validate: validateFeatureRegistry,
  },
  {
    label: 'Navigation Registry',
    validate: validateNavigationRegistry,
  },
  {
    label: 'Contributor Registry',
    validate: validateContributorRegistry,
  },
  {
    label: 'Share Provenance',
    validate: () => validateShareProvenance(shares),
  },
  {
    label: 'Search Index',
    validate: validateSearchIndex,
  },
];

export function validateSiteContentRegistries(): string[] {
  return registryValidators.flatMap(({ label, validate }) => validate().map(error => `${label}: ${error}`));
}

export function assertSiteContentRegistries(): void {
  const errors = validateSiteContentRegistries();

  if (errors.length > 0) {
    throw new Error(`站点内容注册表校验失败：\n- ${errors.join('\n- ')}`);
  }
}
