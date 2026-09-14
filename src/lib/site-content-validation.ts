export type RegistryValidator = {
  label: string;
  validate: () => string[];
};

export function validateSiteContentRegistries(registryValidators: readonly RegistryValidator[]): string[] {
  return registryValidators.flatMap(({ label, validate }) => validate().map(error => `${label}: ${error}`));
}

export function assertSiteContentRegistries(registryValidators: readonly RegistryValidator[]): void {
  const errors = validateSiteContentRegistries(registryValidators);

  if (errors.length > 0) {
    throw new Error(`站点内容注册表校验失败：\n- ${errors.join('\n- ')}`);
  }
}
