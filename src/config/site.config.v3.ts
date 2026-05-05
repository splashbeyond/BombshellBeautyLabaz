/**
 * Design variant v3 — fork of v1 via deep clone. Edit freely; changes do not affect v1.
 */
import type { SiteConfig } from './types';
import { siteConfig as base } from './site.config.v1';

export const siteConfig: SiteConfig = structuredClone(base);
if (siteConfig.heroCarousel) {
  siteConfig.heroCarousel = { ...siteConfig.heroCarousel, enabled: false };
}
