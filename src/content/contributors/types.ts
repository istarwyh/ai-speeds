export type ContributorKind = 'person' | 'team' | 'organization';

export type ContributionRole = 'creator' | 'author' | 'maintainer' | 'collaborator' | 'speaker' | 'curator';

export type ContentOrigin = 'original' | 'collaboration' | 'curated';
export type RightsMode = 'owned' | 'licensed' | 'linked-only';
export type PublicationStatus = 'draft' | 'review' | 'public' | 'archived';

export type Contributor = {
  id: string;
  kind: ContributorKind;
  displayName: string;
  description?: string;
  profileHref?: string;
  avatarUrl?: string;
};

export type ContentAttribution = {
  contributorId: string;
  roles: readonly ContributionRole[];
};

export type ContentProvenance = {
  origin: ContentOrigin;
  attributions: readonly ContentAttribution[];
  rightsMode: RightsMode;
  sourceUrl?: string;
  canonicalUrl?: string;
  license?: string;
};
