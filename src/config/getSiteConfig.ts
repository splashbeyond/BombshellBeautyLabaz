/**
 * Resolve the active SiteConfig for the current request (variant v1 / v2 / v3).
 * Set by middleware from cookie `demo-variant` or `?variant=` query (see `src/middleware.ts`).
 */
import type { SiteConfig } from './types';
import { siteConfig as siteConfigV1 } from './site.config.v1';
import { siteConfig as siteConfigV2 } from './site.config.v2';
import { siteConfig as siteConfigV3 } from './site.config.v3';

const variants = {
  v1: siteConfigV1,
  v2: siteConfigV2,
  v3: siteConfigV3,
} as const;

export type SiteVariant = keyof typeof variants;

export function getSiteConfig(variant: string | undefined | null): SiteConfig {
  if (variant === 'v2' || variant === 'v3') return variants[variant];
  return variants.v1;
}

/** Astro config + scripts that need a fixed URL before middleware runs. */
export const siteConfigBuild = siteConfigV1;
