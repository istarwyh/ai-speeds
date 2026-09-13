import type { Contributor } from './types';

const contributorDefinitions = [
  {
    id: 'xiaohui',
    kind: 'person',
    displayName: '王艺辉 / 晓灰',
    profileHref: 'https://xiaohui.cool',
  },
] as const satisfies readonly Contributor[];

export type ContributorId = (typeof contributorDefinitions)[number]['id'];

export const contributors: readonly Contributor[] = contributorDefinitions;

export function getContributorById(id: string): Contributor | undefined {
  return contributors.find(contributor => contributor.id === id);
}

export function validateContributorRegistry(): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const contributor of contributors) {
    if (ids.has(contributor.id)) {
      errors.push(`贡献者 ID 重复：${contributor.id}`);
    }
    ids.add(contributor.id);

    if (contributor.id.trim().length === 0 || contributor.displayName.trim().length === 0) {
      errors.push(`贡献者缺少 ID 或展示名称：${contributor.id || '(empty)'}`);
    }

    for (const [field, href] of [
      ['主页', contributor.profileHref],
      ['头像', contributor.avatarUrl],
    ] as const) {
      if (href === undefined) {
        continue;
      }

      try {
        const url = new URL(href);
        if (url.protocol !== 'https:') {
          errors.push(`贡献者${field}必须使用 HTTPS：${contributor.id}`);
        }
      } catch {
        errors.push(`贡献者${field} URL 无效：${contributor.id}`);
      }
    }
  }

  return errors;
}
