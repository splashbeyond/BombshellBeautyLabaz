# Customer Intake Checklist

> Single source of truth for every piece of information you need to launch a
> new site from this template. Fill in every section, then map your answers
> straight into `src/config/site.config.ts`.
>
> **Required** = must have a value or the site looks broken.
> **Optional** = leave empty if not applicable; the site adapts.
>
> When in doubt, copy answers verbatim from the customer's Google Business
> Profile — it's the source of record for NAP (Name/Address/Phone), hours,
> reviews, and photos.

---

## How to use this document

1. Send a copy to the customer (or fill in yourself if you have all the info).
2. Work top-to-bottom. Skip nothing — empty fields are how launches get delayed.
3. Once filled, every answer maps to a specific path in `site.config.ts`.
   The mapping is shown next to each field as `→ business.name`, etc.
4. Drop the values into `site.config.ts`. Replace placeholder images per the
   **Image Checklist** at the bottom.
5. Run `npm install && npm run build`. Site is ready.

---

## 0. Visual style decisions

These two choices determine the entire look + layout.

### 0.1 Theme `→ theme`
**Required.** Pick exactly one. See `src/config/themes.ts` for full specs.

| Code | Name | Best for |
|---|---|---|
| `warm` | Trust-Forward Warm | Universal default — works anywhere |
| `editorial` | Editorial Premium | Law, accounting, consulting, agencies |
| `technical` | Modern Technical | IT, software, engineering |
| `coastal` | Coastal Calm | Spas, salons, hospitality, wellness |
| `heritage` | Heritage Trade | Plumbers, electricians, contractors |
| `clinical` | Clinical Calm | Dental, medical, therapy, clinics |
| `luxury` | Luxury Noir | Real estate, finance, jewelry, premium |
| `bold` | Bold Energetic | Fitness, automotive, action services |

**Your choice:** `_____________`

### 0.2 Structure `→ structure` *(future field — not yet wired into Astro)*
**Required (for the demo).** Default to `classic` for any general service business.

| Code | Best for |
|---|---|
| `classic` | Default service business (this checklist covers all classic fields) |
| `wellness` | Med spas, aesthetic, salons (use intake-wellness.md if making one later) |
| `trades` | Trades (HVAC, plumbing, electrical, etc.) |
| `professional` | Law, accounting, advisory |
| `clinical` | Dentist, medical, healthcare |

**Your choice:** `classic`

---

## 1. Business identity

### 1.1 Display name `→ business.name`
**Required.** Short brand name shown in nav, footer, schema. Max ~40 chars.
Good example: `Johnson Plumbing`
**Your answer:** `_____________`

### 1.2 Legal name `→ business.legalName`
**Required.** Full legal entity, used in copyright + Organization schema.
Good example: `Johnson Plumbing Services, LLC`
**Your answer:** `_____________`

### 1.3 Tagline `→ business.tagline`
**Required.** One-line strapline. Max ~60 chars. Used in footer, meta tags.
Good example: `Same-day plumbing in Austin since 2003.`
**Your answer:** `_____________`

### 1.4 Description `→ business.description`
**Required.** 2–3 sentence company description. Used in About + LocalBusiness schema. 200–400 chars.
Good example: `Johnson Plumbing is a family-owned plumbing company serving Austin and Travis County. Licensed, insured, and trusted by 5,000+ Austin homeowners since 2003. We answer 24/7 and guarantee every job.`
**Your answer:**
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

### 1.5 Year founded `→ business.foundedYear`
**Required.** 4-digit year. Used in trust bar, About, schema.
Good example: `2003`
**Your answer:** `_____________`

### 1.6 Industry `→ business.industry`
**Required.** Human-readable industry name. Used in copy + meta.
Good examples: `Plumbing` · `HVAC Services` · `Family Dentistry` · `Personal Injury Law`
**Your answer:** `_____________`

### 1.7 schema.org subtype `→ business.schemaType`
**Required.** Pick the most specific subtype available. Critical for local SEO.
Use one of these where possible:

| Industry | schemaType value |
|---|---|
| Plumbing | `Plumber` |
| HVAC | `HVACBusiness` |
| Electrical | `Electrician` |
| Roofing | `RoofingContractor` |
| Painting | `HousePainter` |
| Locksmithing | `Locksmith` |
| Pest control | `PestControlService` |
| Cleaning | `HouseCleaning` |
| Moving | `MovingCompany` |
| Auto repair | `AutoRepair` |
| Dental | `Dentist` |
| Medical (general) | `MedicalClinic` |
| Physical therapy | `PhysicalTherapy` |
| Optometry | `Optician` |
| Law | `LegalService` or `Attorney` |
| Accounting | `AccountingService` |
| Financial advisory | `FinancialService` |
| Hair salon | `HairSalon` |
| Day spa | `DaySpa` |
| Beauty salon | `BeautySalon` |

(Full list: <https://schema.org/LocalBusiness>)

**Your answer:** `_____________`

### 1.8 Logo `→ business.logoUrl`
**Required.** Path inside `/public/`. Square SVG preferred, transparent background.
**Your answer:** `/images/logo.svg` (drop your file at `public/images/logo.svg`)

---

## 2. Contact information

This is the most-touched data on the site. Everything here MUST exactly match the
Google Business Profile — that's how Google verifies your business identity.

### 2.1 Phone — display format `→ contact.phone`
**Required.** Format: `(XXX) XXX-XXXX`
Good example: `(512) 555-0123`
**Your answer:** `_____________`

### 2.2 Phone — E.164 format `→ contact.phoneE164`
**Required.** Used in `tel:` links and schema. `+1` prefix for US.
Good example: `+15125550123`
**Your answer:** `_____________`

### 2.3 Email `→ contact.email`
**Required.** Primary contact email.
Good example: `hello@johnsonplumbing.com`
**Your answer:** `_____________`

### 2.4 Street address `→ contact.address.street`
**Required.** Just the street line.
Good example: `123 Main Street, Suite 200`
**Your answer:** `_____________`

### 2.5 City `→ contact.address.city`
**Required.**
**Your answer:** `_____________`

### 2.6 State / region `→ contact.address.state`
**Required.** 2-letter US state code, or full region name internationally.
Good example: `TX`
**Your answer:** `_____________`

### 2.7 ZIP / postal code `→ contact.address.zip`
**Required.**
**Your answer:** `_____________`

### 2.8 Country `→ contact.address.country`
**Required.** ISO 2-letter code.
Good example: `US`
**Your answer:** `_____________`

### 2.9 Geo coordinates — latitude `→ contact.geo.lat`
**Required.** Decimal degrees, 4–6 decimal places. Find via Google Maps → right-click address → first row is `lat, lng`.
Good example: `30.2672`
**Your answer:** `_____________`

### 2.10 Geo coordinates — longitude `→ contact.geo.lng`
**Required.** Decimal degrees.
Good example: `-97.7431`
**Your answer:** `_____________`

### 2.11 Business hours `→ contact.hours[]`
**Required.** 24-hour format. Mark closed days as `closed: true`. Each row = one day.

| Day | Open | Close | Closed? |
|---|---|---|---|
| Monday | `_____` | `_____` | ☐ |
| Tuesday | `_____` | `_____` | ☐ |
| Wednesday | `_____` | `_____` | ☐ |
| Thursday | `_____` | `_____` | ☐ |
| Friday | `_____` | `_____` | ☐ |
| Saturday | `_____` | `_____` | ☐ |
| Sunday | `_____` | `_____` | ☐ |

### 2.12 Emergency service `→ contact.emergencyService`
**Required.** `true` if you offer 24/7 emergency response, otherwise `false`.
**Your answer:** `_____________`

### 2.13 Emergency text `→ contact.emergencyText`
**Required if emergency = true.** Shown in sticky bar.
Good example: `24/7 Emergency Service Available`
**Your answer:** `_____________`

---

## 3. Service area

### 3.1 Primary city `→ serviceArea.primaryCity`
**Required.** The main city you serve. Appears in H1s, hero, schema, page titles.
Good example: `Austin`
**Your answer:** `_____________`

### 3.2 Primary region `→ serviceArea.primaryRegion`
**Required.** State or region. Appears in copy + schema.
Good example: `Texas`
**Your answer:** `_____________`

### 3.3 Cities served `→ serviceArea.cities[]`
**Required.** 8–12 cities/neighborhoods you serve. One per line. These power the service-area schema and contact-page list.

```
1. _____________
2. _____________
3. _____________
4. _____________
5. _____________
6. _____________
7. _____________
8. _____________
9. _____________
10. _____________
```

### 3.4 Service radius `→ serviceArea.radiusMiles`
**Optional.** Max distance you'll travel.
Good example: `25`
**Your answer:** `_____________`

---

## 4. SEO defaults

### 4.1 Site URL `→ url`
**Required.** Production URL, no trailing slash.
Good example: `https://johnsonplumbing.com`
**Your answer:** `_____________`

### 4.2 Default page title `→ seo.defaultTitle`
**Required.** Homepage title. Max 60 chars. Pattern: `[Service] in [City] | [Business]`.
Good example: `Plumber in Austin, TX | Johnson Plumbing`
**Your answer:** `_____________`

### 4.3 Title template `→ seo.titleTemplate`
**Required.** Used for non-homepage pages. Keep `{title}` and `{business}` literal.
Good example: `{title} | {business}`
**Your answer:** `{title} | {business}`

### 4.4 Default meta description `→ seo.description`
**Required.** 140–160 chars. Action verb + benefit + city + CTA.
Good example: `Licensed plumber serving Austin since 2003. Same-day service, upfront pricing. Free estimates. Call (512) 555-0123.`
**Your answer:**
```
_____________________________________________________________
_____________________________________________________________
```

### 4.5 Keywords `→ seo.keywords[]`
**Optional.** 3–8 keywords. Lightly weighted but useful.
Good example: `plumber, austin plumbing, emergency plumber austin, water heater repair`
**Your answer:** `_____________`

### 4.6 OG (share) image `→ seo.ogImage`
**Required.** Path to a 1200×630px image used when the site is shared on Facebook, Twitter, LinkedIn, iMessage. See **Image Checklist** below.
**Your answer:** `/images/og-default.jpg` (drop file at `public/images/og-default.jpg`)

### 4.7 Google Site Verification `→ seo.googleSiteVerification`
**Optional.** Token from Search Console (just the value, no `<meta>` wrapper).
**Your answer:** `_____________`

### 4.8 Bing verification `→ seo.bingVerification`
**Optional.** Token from Bing Webmaster Tools.
**Your answer:** `_____________`

---

## 5. Social & external links (`sameAs` corroboration)

Every URL here strengthens AI search citations + local SEO. Provide as many as
exist; leave empty (`''`) for missing profiles.

| Platform | Field | Example | Your URL |
|---|---|---|---|
| Google Business Profile | `social.googleBusiness` | `https://www.google.com/maps/place/...` | `_____` |
| Facebook | `social.facebook` | `https://facebook.com/johnsonplumbing` | `_____` |
| Instagram | `social.instagram` | `https://instagram.com/johnsonplumbing` | `_____` |
| LinkedIn | `social.linkedin` | `https://linkedin.com/company/...` | `_____` |
| Twitter / X | `social.twitter` | `https://twitter.com/...` | `_____` |
| YouTube | `social.youtube` | `https://youtube.com/@...` | `_____` |
| Yelp | `social.yelp` | `https://yelp.com/biz/...` | `_____` |
| BBB | `social.bbb` | `https://bbb.org/.../...` | `_____` |
| Industry-specific (Houzz, Avvo, Healthgrades, Angi, etc.) | `social.industrySpecific` | `https://...` | `_____` |

---

## 6. Trust signals

### 6.1 Star rating `→ trust.rating`
**Required.** Real Google rating (decimal, e.g. `4.9`). Update periodically.
**Critical:** never fake. Google issues manual penalties for fabricated ratings.
**Your answer:** `_____________`

### 6.2 Review count `→ trust.reviewCount`
**Required.** Real total review count from Google. Integer.
Good example: `527`
**Your answer:** `_____________`

### 6.3 License number `→ trust.license.number`
**Required (where applicable).** State/local license number.
Good example: `LIC-MP-12345`
**Your answer:** `_____________`

### 6.4 License label `→ trust.license.label`
**Required.** How the license appears on the site.
Good example: `TX State Master Plumber Lic. #M-12345`
**Your answer:** `_____________`

### 6.5 Insured `→ trust.insured`
**Required.** `true` or `false`.
**Your answer:** `_____________`

### 6.6 Certifications `→ trust.certifications[]`
**Optional but recommended.** Each entry: a name + (optional) logo path.

| # | Certification name | Logo file (optional) |
|---|---|---|
| 1 | `_____________` | `/images/certs/_____.svg` |
| 2 | `_____________` | `/images/certs/_____.svg` |
| 3 | `_____________` | `/images/certs/_____.svg` |
| 4 | `_____________` | `/images/certs/_____.svg` |

Common certs: `BBB Accredited A+` · `NATE Certified` · `EPA Section 608` ·
`Carrier Factory Authorized` · `Trane Comfort Specialist` · `Master Plumber` ·
`Family Owned Since [year]` · `Veteran Owned` · `Google Guaranteed`.

### 6.7 Guarantee `→ trust.guarantee`
**Required.** Specific commitment. Vague claims hurt; specifics convert.
Good example: `100% Satisfaction Guarantee — Free Re-service Within 30 Days`
**Your answer:** `_____________`

---

## 7. Hero (homepage above-the-fold)

### 7.1 Eyebrow `→ hero.eyebrow`
**Required.** Small label above headline. Often a trust signal.
Good example: `Austin's most trusted plumber since 2003`
**Your answer:** `_____________`

### 7.2 Headline (H1) `→ hero.headline`
**Required.** **Critical for SEO.** Must include primary service + city.
Good example: `Licensed Plumber in Austin, TX`
**Your answer:** `_____________`

### 7.3 Subheadline `→ hero.subheadline`
**Required.** One outcome-focused sentence. ~120 chars.
Good example: `Same-day service, upfront pricing, and a 2-year labor warranty on every job. We answer 24/7.`
**Your answer:**
```
_____________________________________________________________
```

### 7.4 Primary CTA — label `→ hero.primaryCta.label`
**Required.** Action verb. Default for trades: `Call Now`. Default for booking: `Book Online`.
**Your answer:** `_____________`

### 7.5 Primary CTA — destination `→ hero.primaryCta.href`
**Required.** Use `tel:` for "Call Now" CTAs (auto-fills from phoneE164), or a path like `/contact/`.
**Your answer:** `_____________`

### 7.6 Secondary CTA — label `→ hero.secondaryCta.label`
**Optional but recommended.** Pairs with primary.
Good example: `Free Estimate`
**Your answer:** `_____________`

### 7.7 Secondary CTA — destination `→ hero.secondaryCta.href`
**Optional.** Usually `/contact/`.
**Your answer:** `_____________`

### 7.8 Hero image `→ hero.backgroundImage`
**Required.** Path inside `/public/`. See **Image Checklist** below for specs.
**Your answer:** `/images/hero.jpg`

### 7.9 Hero image alt text `→ hero.backgroundAlt`
**Required.** Descriptive alt for accessibility + SEO.
Good example: `Master plumber from Johnson Plumbing repairing a kitchen sink in an Austin home.`
**Your answer:** `_____________`

---

## 8. Services (3–6 services)

For each service the customer offers, fill in this entire block. Add or remove
service blocks as needed (the template adapts dynamically).

### Service 1

| Field | site.config.ts path | Your answer |
|---|---|---|
| Slug (URL-safe) | `services[0].slug` | `_____________` |
| Display name | `services[0].name` | `_____________` |
| Short description (5–9 outcome-focused words) | `services[0].shortDescription` | `_____________` |
| Long description (2–3 sentences) | `services[0].longDescription` | `_____________` |
| Icon name | `services[0].icon` | `_____________` |
| Image path | `services[0].image` | `/images/services/_____.jpg` |
| Starting price | `services[0].priceFrom` | `_____________` |

**Available icon names:** `search` · `wrench` · `shield` · `bolt` · `dollar` ·
`shieldCheck` · `home` · `phone` · `truck` · `clipboard` · `checkCircle`.
Or pass raw SVG. See `src/config/icons.ts` to add more.

**Features (3–4 bullets)** `→ services[0].features[]`:
1. `_____________`
2. `_____________`
3. `_____________`
4. `_____________`

**Process steps (3 steps)** `→ services[0].process[]`:

| Step | Title | Description |
|---|---|---|
| 1 | `_____________` | `_____________` |
| 2 | `_____________` | `_____________` |
| 3 | `_____________` | `_____________` |

**Service-specific FAQ (2 items)** `→ services[0].faq[]`:

Q1: `_____________________________________________`
A1:
```
_____________________________________________________________
_____________________________________________________________
```

Q2: `_____________________________________________`
A2:
```
_____________________________________________________________
_____________________________________________________________
```

---

### Service 2

(Same structure as Service 1. Duplicate this block for each additional service.)

| Field | Your answer |
|---|---|
| Slug | `_____________` |
| Display name | `_____________` |
| Short description | `_____________` |
| Long description | `_____________` |
| Icon name | `_____________` |
| Image path | `_____________` |
| Starting price | `_____________` |

(Add features, process steps, FAQ as for Service 1.)

---

### Service 3

| Field | Your answer |
|---|---|
| Slug | `_____________` |
| Display name | `_____________` |
| Short description | `_____________` |
| Long description | `_____________` |
| Icon name | `_____________` |
| Image path | `_____________` |
| Starting price | `_____________` |

(Add features, process steps, FAQ as for Service 1.)

> Add Service 4, 5, 6 as needed. Most service businesses have 3–6 services.

---

## 9. Why choose us (differentiators)

3–4 specific, verifiable claims. AVOID generic phrases like "we pride ourselves
on quality." USE specific commitments customers can hold you to.

| # | Icon | Title | Description |
|---|---|---|---|
| 1 | `_____` | `_____________` | `_____________________________________________` |
| 2 | `_____` | `_____________` | `_____________________________________________` |
| 3 | `_____` | `_____________` | `_____________________________________________` |
| 4 | `_____` | `_____________` | `_____________________________________________` |

**Mapped to:** `whyUs[]`

---

## 10. Process ("How It Works")

3–4 steps that reduce commitment anxiety.

| Step | Icon | Title | Description |
|---|---|---|---|
| 1 | `_____` | `_____________` | `_____________________________________________` |
| 2 | `_____` | `_____________` | `_____________________________________________` |
| 3 | `_____` | `_____________` | `_____________________________________________` |
| 4 | `_____` | `_____________` | `_____________________________________________` |

**Mapped to:** `process[]`

---

## 11. Testimonials (4 minimum, more better)

**CRITICAL:** Use only authentic reviews from your Google Business Profile.
Fabricating Review schema triggers Google manual actions.

### Testimonial 1 `→ testimonials[0]`

| Field | Your answer |
|---|---|
| Reviewer name (first + last initial) | `_____________` |
| City | `_____________` |
| Star rating (1–5) | `_____________` |
| Date (YYYY-MM-DD) | `_____________` |
| Service used | `_____________` |
| Photo path (optional) | `/images/testimonials/_____.jpg` |

Quote (2–4 sentences):
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

### Testimonial 2

| Field | Your answer |
|---|---|
| Name | `_____________` |
| City | `_____________` |
| Rating | `_____________` |
| Date | `_____________` |
| Service | `_____________` |
| Photo | `_____________` |

Quote:
```
_____________________________________________________________
_____________________________________________________________
```

### Testimonial 3

| Field | Your answer |
|---|---|
| Name | `_____________` |
| City | `_____________` |
| Rating | `_____________` |
| Date | `_____________` |
| Service | `_____________` |
| Photo | `_____________` |

Quote:
```
_____________________________________________________________
_____________________________________________________________
```

### Testimonial 4

| Field | Your answer |
|---|---|
| Name | `_____________` |
| City | `_____________` |
| Rating | `_____________` |
| Date | `_____________` |
| Service | `_____________` |
| Photo | `_____________` |

Quote:
```
_____________________________________________________________
_____________________________________________________________
```

> Add Testimonial 5, 6, 7… for richer schema.org Review markup.

---

## 12. Frequently Asked Questions (5–8)

Each answer must be a **self-contained paragraph** (Google AI Overviews format).
Paste each Q+A into the table.

### FAQ 1 `→ faq[0]`
**Q:** `_____________________________________________________________`
**A:**
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

### FAQ 2
**Q:** `_____________________________________________________________`
**A:**
```
_____________________________________________________________
_____________________________________________________________
```

### FAQ 3
**Q:** `_____________________________________________________________`
**A:**
```
_____________________________________________________________
_____________________________________________________________
```

### FAQ 4
**Q:** `_____________________________________________________________`
**A:**
```
_____________________________________________________________
_____________________________________________________________
```

### FAQ 5
**Q:** `_____________________________________________________________`
**A:**
```
_____________________________________________________________
_____________________________________________________________
```

> Add up to 8 FAQs. Each one is an opportunity to be cited in Google AI Overviews.

**High-value FAQ topics for any service business:**
- How much does [service] cost in [city]?
- Do you offer same-day service?
- Are you licensed and insured in [state]?
- What areas do you serve?
- Do you provide a warranty / guarantee?
- How do I schedule an appointment?
- What forms of payment do you accept?
- Do you offer financing?

---

## 13. Navigation links

Top-of-site nav. 4–5 links is ideal.

| # | Label | href |
|---|---|---|
| 1 | `_____________` | `_____________` |
| 2 | `_____________` | `_____________` |
| 3 | `_____________` | `_____________` |
| 4 | `_____________` | `_____________` |

**Mapped to:** `nav[]`

**Defaults that work for most service businesses:**
- Services → `/services/`
- About → `/about/`
- Reviews → `/#testimonials`
- Contact → `/contact/`

---

## 14. Footer columns

3 columns by default.

### Column 1: Services
**Heading:** `Services`
**Links:**
1. `_____________` → `_____________`
2. `_____________` → `_____________`
3. `_____________` → `_____________`
4. `All Services` → `/services/`

### Column 2: Company
**Heading:** `Company`
**Links:**
1. `About` → `/about/`
2. `Service Area` → `/contact/#service-area`
3. `Blog` → `/blog/`
4. `Contact` → `/contact/`

### Column 3: Legal
**Heading:** `Legal`
**Links:**
1. `Privacy Policy` → `/privacy/`
2. `Terms of Service` → `/terms/`
3. `Sitemap` → `/sitemap-index.xml`

**Mapped to:** `footer.columns[]`

---

# Image Checklist

Every image slot the template uses, with required dimensions, aspect ratio,
and exactly what should be in the photo. Drop files at the listed path inside
`public/`.

> **Universal rules:** Real photography over stock. WebP or optimized JPG,
> < 200KB each (< 100KB ideal). Always compress with [Squoosh](https://squoosh.app)
> or `sharp` before uploading. Generic "stock people shaking hands" photos
> erode trust as fast as a strong photo builds it.

## Required images

| Slot | File path | Dimensions | Aspect | What it should show |
|---|---|---|---|---|
| **Logo** | `public/images/logo.svg` | 512×512+ (SVG ideally) | 1:1 | Brand mark. SVG with transparent background. Should look good on both light and dark surfaces. |
| **Favicon (auto from logo)** | `public/favicon.svg` | 64×64 | 1:1 | Tiny brand mark. Often a simplified version of the logo. |
| **Hero image** | `public/images/hero.jpg` | 900×1100 minimum | 4:5 portrait | The LCP element — most important image. Single team member or small team in uniform, in the middle of doing the actual work. Natural daylight, environmental context (kitchen, basement, office, etc.). NOT studio. NOT stock-photo "professional handshake." |
| **OG share image** | `public/images/og-default.jpg` | 1200×630 (exact) | 1.91:1 | Used when site is shared on Facebook/Twitter/LinkedIn/iMessage. Logo + tagline OR a strong workplace shot with business name overlaid. |

## Per-service images (one per service)

| Slot | File path | Dimensions | Aspect | What it should show |
|---|---|---|---|---|
| Service detail image | `public/images/services/<slug>.jpg` | 1200×675 | 16:9 | Subject of the service in action. Examples: "Diagnostics" → tech with a diagnostic tool. "Installation" → hands installing equipment. "Maintenance" → clean service callout sheet on clipboard. |

Repeat for each service slug (e.g., `diagnostics-assessment.jpg`, `installation-repair.jpg`, etc.)

## Per-testimonial images (optional)

| Slot | File path | Dimensions | Aspect | What it should show |
|---|---|---|---|---|
| Reviewer photo | `public/images/testimonials/<firstname>.jpg` | 200×200 minimum | 1:1 | Real customer photo (with permission). If unavailable, OMIT the `photoUrl` field — DO NOT use stock photos of fake "customers." |

## Certification logos

| Slot | File path | Dimensions | Aspect | What it should show |
|---|---|---|---|---|
| Cert badge | `public/images/certs/<name>.svg` | Native SVG (any size) | varies | Real cert organization logos only (BBB, NATE, manufacturer programs). Many provide official logo download kits on their websites. |

Examples:
- `public/images/certs/bbb.svg`
- `public/images/certs/nate.svg`
- `public/images/certs/insured.svg`
- `public/images/certs/family.svg`

---

# Quick conversion: paste into site.config.ts

Once you've filled in every section above, the structure of `site.config.ts`
mirrors this checklist exactly. The fastest workflow:

1. Open `src/config/site.config.ts`.
2. For every field you filled in, replace the placeholder value in the file.
3. The TypeScript types will catch any typos or missing required fields.
4. Run `npm run build` — if it succeeds, the site is ready.

## Required-fields shortlist (the absolute minimum)

If you only have time to fill in 12 fields, these are the ones the site CAN'T
do without. Everything else has reasonable defaults.

- [ ] `theme` (one of 8)
- [ ] `url` (production URL)
- [ ] `business.name`
- [ ] `business.description`
- [ ] `business.schemaType`
- [ ] `contact.phone` + `contact.phoneE164`
- [ ] `contact.email`
- [ ] `contact.address.*` (full address)
- [ ] `contact.geo.lat` + `contact.geo.lng`
- [ ] `contact.hours[]`
- [ ] `serviceArea.primaryCity` + `primaryRegion`
- [ ] `serviceArea.cities[]` (at least 5)
- [ ] `seo.defaultTitle` + `seo.description`
- [ ] `social.googleBusiness` (most important social link)
- [ ] `trust.rating` + `trust.reviewCount` + `trust.license.label`
- [ ] `hero.eyebrow` + `hero.headline` + `hero.subheadline`
- [ ] At least 3 services
- [ ] At least 4 testimonials
- [ ] At least 5 FAQs
- [ ] Hero image at `public/images/hero.jpg`
- [ ] OG image at `public/images/og-default.jpg`

---

**Done?** Run `npm run build` and deploy.

If anything is unclear, the canonical reference is the type definitions in
`src/config/types.ts` — every field on `SiteConfig` is documented inline.
