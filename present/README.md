# Cycle design variants

**Use one dev server:** `npm run dev`. The top strip uses ← → and **v1 / v2 / v3** to switch templates — **no extra ports**.

Switching stores a cookie (`demo-variant`). You can also open any URL with **`?variant=v2`** (or `v3`) once; middleware syncs the cookie.

Files:

1. **`src/config/site.config.v1.ts`** — baseline site config.
2. **`site.config.v2.ts`** / **`site.config.v3.ts`** — alternate configs (edit themes, copy, etc.).
3. **`src/middleware.ts`** + **`src/config/getSiteConfig.ts`** — resolve the active variant per request.

Optional: open **`present/demo-shell.html`** for a simple iframe presenter (same origin as your dev URL).

## Production build

`npm run build` prerenders with **v1** (no request cookie in static generation). To ship one variant only, edit/build from the chosen `site.config.v*.ts` as needed.

## “Save” a checkpoint (Git)

If the folder is a Git repo:

```bash
git add -A && git commit -m "Beautiful You — design v1 baseline"
git tag design-v1-baseline
```
