# Acme Template

A premium, SEO-first website template for service businesses. One config file
re-skins the entire site for any business — plumber, lawyer, dentist, HVAC,
accountant, or any other local service company.

**Built for:** Lighthouse 100/100/100/100, Google AI Overviews citations, the local pack, and conversion.

---

## What's special

- **Astro-based** — ships near-zero JavaScript by default. The fastest static
  site framework on the market.
- **Eight premium design themes** — switch with a single string in `site.config.ts`.
  Each is a complete, polished aesthetic system covering every common service-business archetype:
  - `warm` — Trust-Forward Warm (universal: Fraunces + DM Sans, terracotta + teal)
  - `editorial` — Editorial Premium (pro services: Instrument Serif + Manrope, parchment + brown)
  - `technical` — Modern Technical (tech-forward: Geist + Inter, dark zinc + electric blue)
  - `coastal` — Coastal Calm (spa/wellness: Cormorant Garamond + Outfit, sandy + ocean blue)
  - `heritage` — Heritage Trade (trades: Roboto Slab + Inter, cream + forest green + copper)
  - `clinical` — Clinical Calm (healthcare: Crimson Pro + Plus Jakarta Sans, mint + sage)
  - `luxury` — Luxury Noir (premium: Cormorant Garamond + Inter, warm-black + champagne gold)
  - `bold` — Bold Energetic (fitness/auto: Bricolage Grotesque + Inter, white + coral + black)
- **Full schema.org JSON-LD** — `LocalBusiness` (with geo + areaServed + sameAs),
  `Service`, `FAQPage`, `BreadcrumbList`, `Review`, `Organization`, `WebSite`,
  `Article`. Most templates ship just `LocalBusiness` name/address. This one ships
  all of it, wired together by `@id` references.
- **AI Overviews ready** — every FAQ answer is a self-contained paragraph
  (the format Google's generative search prefers). Question-format H2s.
  Named-author bios on blog. `dateModified` properly populated.
- **Sticky phone bar** — at the top of every page, with `tel:` E.164 link,
  emergency-service indicator, 48px tap target. The single biggest conversion
  lever for local service businesses.
- **WCAG 2.1 AA accessibility** — contrast 4.5:1+, semantic HTML, skip link,
  keyboard-navigable everything, proper labeling. SEO benefit + legal protection.
- **One config file** — `src/config/site.config.ts` drives every business-specific
  string, image path, color, and font in the entire site. Heavy `// CUSTOMIZE:`
  comments at every seam.

---

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Fill in CUSTOMER_INTAKE.md with the customer's info
#    (every field maps directly to site.config.ts)

# 3. Edit src/config/site.config.ts with the answers from intake

# 4. Replace placeholder images in /public/images/ (see PROMPTS.md
#    + the Image Checklist at the bottom of CUSTOMER_INTAKE.md)

# 5. Run dev server
npm run dev

# 6. Build for production
npm run build
```

**Tip:** `CUSTOMER_INTAKE.md` is a comprehensive checklist of every piece of
information the site needs. Fill it in first — once it's complete, `site.config.ts`
becomes a 5-minute paste job. Send it to the customer if you're collecting info
on their behalf.

The static output lands in `dist/`. Deploy that folder to Netlify, Vercel,
Cloudflare Pages, or any static host.

---

## Customization map (where to edit what)

| What you want to change | Where to edit |
|---|---|
| Business name, phone, address, hours | `src/config/site.config.ts` → `business`, `contact` |
| Theme (colors, typography, motion) | `src/config/site.config.ts` → `theme: 'warm' \| 'editorial' \| 'technical'` |
| Services list (cards, detail pages) | `src/config/site.config.ts` → `services[]` |
| Testimonials | `src/config/site.config.ts` → `testimonials[]` |
| FAQ | `src/config/site.config.ts` → `faq[]` |
| Why-choose-us bullets | `src/config/site.config.ts` → `whyUs[]` |
| Process steps | `src/config/site.config.ts` → `process[]` |
| Cities served + geo coords | `src/config/site.config.ts` → `serviceArea`, `contact.geo` |
| Hero copy | `src/config/site.config.ts` → `hero` |
| Trust signals (rating, license, certs) | `src/config/site.config.ts` → `trust` |
| Social links (powers schema sameAs) | `src/config/site.config.ts` → `social` |
| Nav links | `src/config/site.config.ts` → `nav[]` |
| Footer columns | `src/config/site.config.ts` → `footer.columns[]` |
| Blog posts | Add markdown files to `src/content/blog/` |
| Theme tokens (deep customization) | `src/config/themes.ts` (rarely needed) |
| Page structure | `src/pages/` |
| Component visuals | `src/components/sections/*.astro` |
| Global CSS | `src/styles/global.css` |
| Images | `public/images/` (see `public/images/PROMPTS.md`) |

---

## Agent prompt — copy this to customize the template

When you (or a customer) want an agent to re-skin this template for a specific
business, paste this prompt:

```
You are customizing the Acme Template for a new business. The template is in
the current working directory. Your job is to edit src/config/site.config.ts
and replace placeholder images so the site is ready to deploy for this client.

Client info:
  • Business name: [e.g., Johnson Plumbing]
  • Industry: [e.g., Plumbing]
  • Service area (primary city + state): [e.g., Austin, TX]
  • Phone: [e.g., (512) 555-0123]
  • Email: [e.g., hello@johnsonplumbing.com]
  • Address: [full street address]
  • Google Business Profile URL: [paste URL]
  • Website URL (will deploy to): [e.g., https://johnsonplumbing.com]
  • Years in business / founded: [e.g., 1998]
  • Brand vibe (pick one): warm | editorial | technical

Steps:
  1. Read src/config/site.config.ts thoroughly — every CUSTOMIZE: comment
     marks a value you need to update.
  2. Use the Google Business Profile URL to extract: rating, review count,
     hours, full address, geo coordinates.
  3. Replace business identity fields (name, legalName, tagline, description,
     foundedYear, industry, schemaType — pick the most specific schema.org
     subtype, e.g., "Plumber" not "LocalBusiness").
  4. Replace contact fields: phone, phoneE164 (in +1XXXXXXXXXX format),
     email, full address, geo coordinates, hours.
  5. Replace serviceArea.primaryCity, primaryRegion, and rebuild the
     `cities` array with 8–12 real cities the business serves.
  6. Replace social links with real URLs (only those that exist; leave
     empty strings for missing ones).
  7. Replace trust info: rating, reviewCount (exactly matching Google),
     license number/label, certifications (real ones only).
  8. Replace hero copy: headline must include primary service + city for
     SEO. Subheadline = one outcome-focused sentence.
  9. Replace services array with the business's actual services. Each
     needs: slug, name, descriptions, features, process, FAQ.
 10. Replace testimonials with real reviews from Google Business Profile
     (or leave them as the placeholders if no reviews are accessible).
 11. Replace FAQ with 5–8 real customer questions. Each answer must be a
     self-contained paragraph (Google AI Overviews format).
 12. Set theme to one of: 'warm' (most universal), 'editorial' (high-end
     pro services), 'technical' (modern tech-forward).
 13. Update site URL in `url` field.
 14. List the images that need replacement (see public/images/PROMPTS.md
     for spec). Either generate them or instruct the user to provide them.

Verification:
  • Run `npm run build` — should complete without errors.
  • All `// CUSTOMIZE:` comments should now reference real values.
  • Check that phone displayed format matches the schema and is identical
    in footer + sticky bar + contact page (NAP consistency).
  • Verify schema.org subtype is the most specific available for this
    industry.
```

---

## Deploy

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```
Add a `_redirects` file to `public/` if you need redirects from old URLs.

### Vercel
```bash
# Framework preset: Astro
# Build command: npm run build
# Output directory: dist
```

### Cloudflare Pages
```bash
# Build command: npm run build
# Build output directory: dist
```

---

## Lighthouse score expectations

After deploying with real (optimized) images, you should see:

- **Performance:** 95–100 on mobile, 100 on desktop
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

If you see lower scores, the most common culprits are:

- Hero image too large (use WebP, < 200KB)
- Forgot to set `width` and `height` on images (causes CLS)
- Third-party scripts loaded synchronously (chat widgets, analytics)
- Missing meta description on a page

Use `npx unlighthouse --site http://localhost:4321` after `npm run dev` for
a full audit.

---

## File structure

```
acme-template/
├── public/
│   ├── images/             # Replace placeholders per PROMPTS.md
│   ├── fonts/              # (optional self-hosted fonts)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── config/
│   │   ├── site.config.ts  # ← THE FILE YOU EDIT
│   │   ├── themes.ts       # Three theme presets (rarely edit)
│   │   └── types.ts        # Type definitions
│   ├── components/
│   │   ├── seo/            # JSON-LD schema components
│   │   ├── layout/         # PhoneBar, Header, Footer, Breadcrumbs
│   │   └── sections/       # Hero, ServicesGrid, FAQ, etc.
│   ├── layouts/            # BaseLayout — wraps every page
│   ├── styles/             # Reset + global CSS (uses theme variables)
│   ├── content/            # Blog posts (markdown)
│   └── pages/              # File-based routing
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## License

Commercial license. See `LICENSE.txt` for terms.

---

## Support

Questions about the template? Open an issue or contact the seller.
