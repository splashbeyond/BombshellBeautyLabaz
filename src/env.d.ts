/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    /** Set by `src/middleware.ts` in dev. Undefined during static prerender (defaults to v1). */
    siteVariant?: 'v1' | 'v2' | 'v3';
  }
}