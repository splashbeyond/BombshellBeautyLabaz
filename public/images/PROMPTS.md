# Image Prompts

This template uses placeholder slots for every image. Replace each with real
photography or AI-generated images that match the prompts below. Better images
are the single biggest visual difference between a "template" site and a
custom-feeling site.

## Universal rules — read first

- **Real over stock.** Generic stock photos of strangers shaking hands erode
  trust. The best service-business photography shows YOUR actual team doing
  YOUR actual work. If you can hire a local photographer for one half-day
  shoot, the ROI is enormous.
- **Editorial over AI-art.** No glowing particles, neon effects, sci-fi
  atmospheres. Think Wired Magazine documentary photography, not AI art.
- **Environmental context.** A technician should be in a real environment
  (kitchen, basement, office) — not floating against a colored background.
- **Natural lighting.** Window light and daylight always beat studio lighting
  for the trust-forward aesthetic.

## Required images

### `/images/hero.jpg` — primary hero (CRITICAL — this is the LCP element)
**Aspect ratio:** 4:5 portrait, 900×1100px minimum, < 200KB after WebP compression.
**Subject:** Single team member or small team, in uniform/professional attire,
in the middle of doing the actual work. Eye contact is fine but not required.
**Mood:** Confident, competent, approachable. Natural daylight.
**Examples:** A licensed electrician at a panel; a hygienist greeting a patient;
a paralegal at a desk reviewing documents; an HVAC tech inspecting a furnace.

### `/images/og-default.jpg` — OpenGraph share image
**Aspect ratio:** 16:9, exactly 1200×630px, < 200KB.
**Subject:** Brand-forward composition. Logo + tagline + a representative photo,
or a strong workplace shot with the business name overlaid. Used when anyone
shares your site on Facebook/Twitter/LinkedIn.

### `/images/services/[slug].jpg` — one per service
**Aspect ratio:** 16:9, 1200×675px minimum, < 150KB.
**Subject:** Subject of the service in action. For "Diagnostics" → tech with
diagnostic tool. For "Installation" → hands installing equipment. For
"Maintenance" → clean, organized service callout sheet on a clipboard.

### `/images/testimonials/[name].jpg` — one per testimonial
**Aspect ratio:** 1:1 square, 200×200px minimum.
**Subject:** Real customer photo if available (with permission). If unavailable,
omit the photoUrl field — DO NOT use stock photos of fake "customers."

### `/images/certs/[name].svg` — certification badges
**Format:** SVG preferred (scales perfectly).
**Source:** Real cert organizations only (BBB, NATE, manufacturer programs).
Many provide official logo download kits.

### `/images/logo.svg` — brand logo
**Format:** SVG.
**Specs:** Square, designed to work on both light and dark backgrounds.
The favicon.svg is also generated from this.

## How to source quickly

1. **Hire a local photographer for 4 hours.** Get hero + 3 services + 4
   team headshots in one shoot. Cost: ~$500–800. ROI: enormous.
2. **Use a real-photo AI tool** (Midjourney, Flux, Imagen) with editorial-style
   prompts. Avoid the default "AI art" look — request photojournalism, natural
   light, environmental portrait.
3. **Stock photo last resort:** Unsplash and Pexels have curated trade-service
   sets. Search the actual trade name (e.g., "plumber", not "service worker").
   Always credit per the license.

## Quick checklist before shipping

- [ ] All images are WebP or optimized JPG, < 200KB each
- [ ] Hero image is exactly the dimensions Hero.astro expects
- [ ] All images have descriptive alt text in `site.config.ts`
- [ ] OG image is exactly 1200×630px (test with Facebook debugger)
- [ ] Logo SVG exists and is referenced correctly
- [ ] No images of strangers in fake-customer poses
