import { AboutPreview } from './AboutPreview';
import { GetStartedPreview } from './GetStartedPreview';
import { HomeClosingCta } from './HomeClosingCta';
import { ManifestoSection } from './ManifestoSection';
import { MissionHero } from './MissionHero';
import { ProductStories } from './ProductStories';
import { PublicWorkSection } from './PublicWorkSection';
import { ToolCollection } from './ToolCollection';

export function HomePage() {
  return (
    <main>
      <MissionHero />
      <ProductStories />
      <ManifestoSection />
      <ToolCollection />
      <PublicWorkSection />
      <GetStartedPreview />
      <AboutPreview />
      <HomeClosingCta />
    </main>
  );
}
