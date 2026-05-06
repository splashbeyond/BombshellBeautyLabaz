/**
 * ============================================================================
 *  BEAUTIFUL YOU MED SPA — SITE CONFIGURATION
 * ============================================================================
 *
 *  Owned and operated by Odilette Trevizo, RN, BSN.
 *  209 E Baseline Rd. Ste E106 #1, Tempe, AZ 85283 (NAP matches Square booking).
 *
 *  This file is the single source of truth for everything business-specific
 *  on the site — copy, prices, services, hours, schema. Edit this file and
 *  the entire site updates.
 *
 * ============================================================================
 */

import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  // ==========================================================================
  // 1. THEME — custom 'glam' preset (rose-gold + charcoal + white)
  // ==========================================================================
  theme: 'glam',

  // ==========================================================================
  // 2. SITE URL — production domain (placeholder until real one is decided)
  // ==========================================================================
  url: 'https://beautifulyouaz.com',

  // ==========================================================================
  // 3. BUSINESS IDENTITY
  // ==========================================================================
  business: {
    name: 'Beautiful You Med Spa',
    legalName: 'Beautiful You Med Spa, LLC',
    tagline: 'RN-led aesthetic care in Tempe, by appointment.',
    footerTagline: 'Tempe Premier Med Spa',
    description:
      'Beautiful You Med Spa is a registered nurse-owned aesthetic studio in ' +
      'Tempe, Arizona, founded by Odilette Trevizo, RN, BSN. As an Allergan- and ' +
      'Galderma-certified injector, Odilette specializes in personalized Botox, ' +
      'dermal fillers, the Vampire Facial, medical-grade chemical peels, IV ' +
      'therapy, and physician-supervised weight-loss programs, all by appointment.',
    aboutHeroLede:
      'Beautiful You Med Spa is an aesthetic studio in Tempe, Arizona, founded by ' +
      'Odilette Trevizo. As an Allergan- and Galderma-certified injector, Odilette ' +
      'specializes in personalized Botox, dermal fillers, the Vampire Facial, ' +
      'medical-grade chemical peels, IV therapy, and physician-supervised ' +
      'weight-loss programs, all by appointment.',
    industry: 'Medical Spa',
    // 'MedicalSpa' is the most specific schema.org subtype for an aesthetic clinic.
    // https://schema.org/MedicalSpa
    schemaType: 'MedicalSpa',
    logoUrl: '/images/logo.png',
  },

  // ==========================================================================
  // 4. CONTACT INFO
  // ==========================================================================
  contact: {
    phone: '(602) 730-1654',
    phoneE164: '+16027301654',
    email: 'injector.nurseodi@gmail.com',
    address: {
      street: '209 E Baseline Rd. Ste E106 #1',
      city: 'Tempe',
      state: 'AZ',
      zip: '85283',
      country: 'US',
    },
    geo: {
      lat: 33.37778,
      lng: -111.93642,
    },
    // Hours: mirror https://beautiful-you-med-spa.square.site/ (Location & hours).
    hours: [
      { day: 'Monday', open: '09:00', close: '17:00' },
      { day: 'Tuesday', closed: true },
      { day: 'Wednesday', open: '09:00', close: '17:00' },
      { day: 'Thursday', closed: true },
      { day: 'Friday', closed: true },
      { day: 'Saturday', open: '09:00', close: '15:00' },
      { day: 'Sunday', open: '09:00', close: '12:00' },
    ],
    // We repurpose the 'emergencyService' slot to surface the by-appointment-only
    // policy in the sticky bar — far more relevant for a med spa than a 24/7 line.
    emergencyService: true,
    emergencyText: 'By Appointment Only',
  },

  // ==========================================================================
  // 5. LOCATION — single Tempe studio (homepage “Where we work” + schema cities)
  // ==========================================================================
  serviceArea: {
    primaryCity: 'Tempe',
    primaryRegion: 'Arizona',
    cities: ['Tempe'],
    sectionIntro:
      'Beautiful You Med Spa is one private, RN-led studio in Tempe, by appointment only. ' +
      'No walk-ins.',
    studioDetails: [
      'Our address is 209 E Baseline Rd. Ste E106 #1, Tempe, AZ 85283. The suite sits in a ' +
        'professional office and retail complex along Baseline; enter the building and follow ' +
        'suite signage to E106.',
      'Parking is available on-site. Check your confirmation for arrival notes. We greet patients ' +
        'at their scheduled time so the lobby stays calm and private.',
    ],
  },

  // ==========================================================================
  // 5b. PRACTICE SPOTLIGHT — homepage band below services (Moon Valley–style)
  // ==========================================================================
  practiceSpotlight: {
    ribbonTop: 'Tempe Premier Med Spa',
    headline: 'Beautiful You Med Spa',
    bodyHtml:
      '<p>Located in Tempe, <strong>Beautiful You Med Spa</strong> is an RN-owned aesthetic studio ' +
      'where personalized care comes first. From <strong>Botox</strong>, <strong>Dysport</strong>, ' +
      'and <strong>Jeuveau</strong> to <strong>dermal fillers</strong>, <strong>microneedling</strong> ' +
      'and the <strong>Vampire Facial</strong>, <strong>VI Peel</strong>, <strong>PDO threads</strong>, ' +
      '<strong>IV therapy</strong>, and physician-supervised <strong>Semaglutide</strong> weight loss. ' +
      'Every treatment is tailored to your goals in a private, appointment-only setting.</p>',
    bodyHtml2:
      '<p>Led by <strong>Odilette Trevizo, RN, BSN</strong>, our team combines clinical training ' +
      'with an eye for natural results. Whether you are refining lines and contours, refreshing skin ' +
      'texture, or pursuing wellness support, we focus on honest recommendations and outcomes you can feel confident about.</p>',
    image: '/images/hero.png',
    imageAlt:
      'RN-led aesthetic care at Beautiful You Med Spa in Tempe, Arizona.',
  },

  // ==========================================================================
  // 6. SEO DEFAULTS
  // ==========================================================================
  seo: {
    defaultTitle: 'Beautiful You Med Spa | RN-Led Botox, Filler & Aesthetic Care in Tempe, AZ',
    titleTemplate: '{title} | {business}',
    description:
      'RN-owned med spa in Tempe, Arizona. Allergan- and Galderma-certified injector ' +
      'Odilette Trevizo, RN offers Botox, fillers, the Vampire Facial, chemical peels, ' +
      'IV therapy, and Semaglutide weight loss, all by appointment.',
    keywords: [
      'med spa tempe',
      'botox tempe',
      'filler tempe',
      'rn injector tempe',
      'vampire facial tempe',
      'semaglutide tempe',
      'aesthetic injector arizona',
      'pdo threads tempe',
      'iv therapy tempe',
      'chemical peel tempe',
    ],
    ogImage: '/images/logo.png',
    ogImageWidth: 1020,
    ogImageHeight: 1020,
    locale: 'en_US',
    googleSiteVerification: '',
    bingVerification: '',
  },

  // ==========================================================================
  // 7. SOCIAL & EXTERNAL LINKS
  // ==========================================================================
  social: {
    googleBusiness: '',
    facebook: '',
    instagram: 'https://instagram.com/odi_nurseinjector',
    linkedin: '',
    twitter: '',
    youtube: '',
    yelp: '',
    bbb: '',
    // Linktree (handy hub for booking + Cherry financing).
    industrySpecific: 'https://linktr.ee/beautifulyouaz',
  },

  // ==========================================================================
  // 8. TRUST SIGNALS
  // ==========================================================================
  trust: {
    rating: 5.0,
    reviewCount: 3,
    license: {
      number: 'AZ-RN',
      label: 'Registered Nurse, Arizona Licensed',
    },
    insured: true,
    certifications: [
      { name: 'Allergan Certified Injector: Botox & Juvederm' },
      { name: 'Galderma Certified Injector: Dysport & Restylane' },
      { name: 'Revanesse Versa Certified' },
      { name: 'PRP & Vampire Facial Certified' },
      { name: 'Medical-Grade Chemical Peel Certified' },
    ],
    guarantee:
      'Personalized treatment plans. No-pressure consultations. Every patient seen ' +
      'by an RN, by appointment only.',
  },

  // ==========================================================================
  // 9. HERO SECTION
  // ==========================================================================
  hero: {
    eyebrow: 'Beautiful You Med Spa',
    headline: 'RN-Led Med Spa in Tempe, Arizona',
    subheadline:
      'Allergan- and Galderma-certified injector Odilette Trevizo, RN, BSN. ' +
      'Personalized Botox, fillers, Vampire Facial, IV therapy, and Semaglutide ' +
      'weight loss, by appointment only.',
    primaryCta: {
      label: 'Book Consultation',
      href: 'https://beautiful-you-med-spa.square.site/',
    },
    secondaryCta: {
      label: 'Call (602) 730-1654',
      href: 'tel:+16027301654',
    },
    backgroundImage: '/images/hero.png',
    backgroundAlt:
      'Odilette Trevizo, RN, BSN, performing an aesthetic treatment at Beautiful You Med Spa in Tempe, Arizona.',
  },

  // ==========================================================================
  // 8b. HOMEPAGE HERO CAROUSEL — full-bleed Moon Valley–style (v1 homepage only)
  // ==========================================================================
  heroCarousel: {
    enabled: true,
    serviceRibbon:
      'BOTOX & DYSPORT · DERMAL FILLERS · MICRONEEDLING & VAMPIRE FACIAL · VI PEEL · PRP & SCULPTRA · PDO THREADS · IV THERAPY · MEDICAL WEIGHT LOSS',
    locationLine: 'Located in Tempe, Arizona',
    brandLine: 'Beautiful You Med Spa',
    autoplayMs: 8000,
    /** First carousel slide background (services ribbon + script brand sit above in layout). */
    introSlide: {
      image: '/images/hero.png',
      imageAlt:
        'Beautiful You Med Spa: RN-led aesthetic treatments in Tempe, Arizona.',
      tagline:
        'RN-led injectables, skin rejuvenation & wellness, by appointment in Tempe.',
    },
    slides: [
      {
        slug: 'botox-dysport-jeuveau',
        title: 'Botox, Dysport & Jeuveau',
        tagline: 'FDA-approved neurotoxins: smooth lines with tailored RN dosing.',
        bio:
          'FDA-approved neurotoxins tailored to your anatomy: smooth lines, soften expression, and refresh naturally. Allergan- and Galderma-certified dosing by an RN, never one-size-fits-all.',
        image: '/images/services/botox.png',
        imageAlt: 'Botox and injectable consultation at Beautiful You Med Spa, Tempe AZ.',
      },
      {
        slug: 'dermal-fillers',
        title: 'Dermal Fillers',
        tagline: 'Hyaluronic acid fillers for lips, cheeks, chin & jawline.',
        bio:
          'Hyaluronic acid fillers for lips, cheeks, chin, jawline, and tear troughs (Versa, Restylane, and Juvederm). Advanced cannula work where it matters. Same RN, every syringe.',
        image: '/images/services/fillers.png',
        imageAlt: 'Dermal filler results and lip enhancement at Beautiful You Med Spa.',
      },
      {
        slug: 'microneedling-vampire-facial',
        title: 'Microneedling & Vampire Facial',
        tagline: 'Medical microneedling with HA, VAMP, or PRP for collagen & glow.',
        bio:
          'Medical microneedling with HA, VAMP (salmon DNA), or PRP. The Vampire Facial boosts collagen and glow with your own growth factors. Minimal downtime, real texture change.',
        image: '/images/services/microneedling.png',
        imageAlt: 'Microneedling and Vampire Facial treatment in Tempe med spa.',
      },
      {
        slug: 'vi-peel-chemical-peels',
        title: 'VI Peel & Chemical Peels',
        tagline: 'Medium-depth VI Peel for pigment, texture & melasma.',
        bio:
          'Medium-depth VI Peel for pigment, texture, acne scars, and melasma, safe across skin tones. Peeling days 3–7 with a brighter, even canvas underneath.',
        image: '/images/services/chemical-peel.png',
        imageAlt: 'VI Peel chemical peel consultation at Beautiful You Med Spa.',
      },
      {
        slug: 'prp-sculptra-biostimulators',
        title: 'PRP & Sculptra',
        tagline: 'Your growth factors & collagen stimulation for long-game rejuvenation.',
        bio:
          'PRP for hair, face, and the Vampire Facial; Sculptra rebuilds volume by stimulating your own collagen over months. Long-game rejuvenation, RN-guided protocols.',
        image: '/images/services/prp-sculptra.png',
        imageAlt: 'PRP and biostimulator treatments at Beautiful You Med Spa, Tempe.',
      },
      {
        slug: 'pdo-threads',
        title: 'PDO Threads',
        tagline: 'Non-surgical lift & tightening with dissolvable PDO threads.',
        bio:
          'Non-surgical lifting and tightening with dissolvable PDO threads (jawline, cheeks, brows, neck). Instant lift plus collagen stimulation as threads integrate.',
        image: '/images/services/pdo-threads.png',
        imageAlt: 'PDO thread lift consultation at Beautiful You Med Spa.',
      },
      {
        slug: 'iv-therapy-wellness-shots',
        title: 'IV Therapy & Wellness Shots',
        tagline: 'Hydration, beauty & recovery drips, plus B12, MIC & NAD.',
        bio:
          'Hydration, beauty, recovery, and energy drips, plus B12, MIC, and NAD shots, administered by an RN in a private studio, not a cocktail lounge.',
        image: '/images/services/iv-therapy.png',
        imageAlt: 'IV therapy lounge at Beautiful You Med Spa in Tempe, Arizona.',
      },
      {
        slug: 'semaglutide-weight-loss',
        title: 'Semaglutide Weight Loss',
        tagline: 'Physician-supervised program with labs, weigh-ins & coaching.',
        bio:
          'Physician-supervised Semaglutide with labs, weigh-ins, and coaching: structured monthly care for qualifying patients who want sustainable results.',
        image: '/images/services/semaglutide.png',
        imageAlt: 'Medical weight loss consultation at Beautiful You Med Spa.',
      },
    ],
  },

  // ==========================================================================
  // 9b. OWNER — “Meet Odi” section (homepage + about)
  // ==========================================================================
  owner: {
    preferredName: 'Odi',
    fullName: 'Odilette Trevizo',
    credentials: 'RN, BSN',
    roleTitle: 'Owner & Lead Injector',
    photoUrl: '/images/odi-trevizo.png',
    photoAlt:
      'Odilette Trevizo, RN, BSN, registered nurse, certified injector, and owner of Beautiful You Med Spa in Tempe, Arizona.',
    intro:
      'Every patient is treated by me personally. Same hands, every visit. No rotating injectors, no rush.',
    bioParagraphs: [
      'I\'m an Arizona-licensed Registered Nurse (BSN) and I founded Beautiful You Med Spa in Tempe. One rule: you always know who is treating you. Every injectable, peel, and consultation is with me, by appointment only.',
      'I\'m certified with Allergan (Botox, Juvederm), Galderma (Dysport, Restylane), and Revanesse Versa; trained in PRP and the Vampire Facial; and certified in medical-grade chemical peels. I also offer IV therapy, B12/MIC shots, EltaMD sunscreen, and a physician-supervised Semaglutide program for qualifying patients.',
    ],
  },

  // ==========================================================================
  // 10. SERVICES — eight SEO-targeted service pages
  // ==========================================================================
  // Prices and descriptions sourced verbatim from the official Square booking
  // catalog (verified 2026-05). Update prices via the customer's Square admin
  // first; mirror them here second.
  services: [
    {
      slug: 'botox-dysport-jeuveau',
      name: 'Botox, Dysport & Jeuveau',
      shortDescription: 'Smooth wrinkles. Soften lines. Refresh naturally.',
      longDescription:
        'Wrinkle-relaxing injections that soften horizontal forehead lines, ' +
        'crow\'s feet, worry lines, neck bands, and gummy smiles. Lip flips and ' +
        'subtle brow lifts available. All three FDA-approved neurotoxins offered, ' +
        'with dosing tailored to your facial anatomy and aesthetic goals, never one-size-fits-all.',
      icon: 'star',
      image: '/images/services/botox.png',
      priceFrom: '$11/unit',
      features: [
        'Botox, Dysport, or Jeuveau available',
        'Allergan & Galderma certified injector',
        'Lip flips, brow lifts, neck bands, masseter slimming',
        'Personalized dosing for natural-looking results',
      ],
      process: [
        {
          step: 1,
          title: 'Consult',
          description:
            '15-minute consultation to map facial anatomy, discuss goals, and choose the right neurotoxin for you.',
        },
        {
          step: 2,
          title: 'Inject',
          description:
            'Treatment performed by an RN in 15–30 minutes. Numbing as needed. Zero downtime.',
        },
        {
          step: 3,
          title: 'Reveal',
          description:
            'Results emerge over 7–14 days. Last 3–4 months on average. Touch-ups available at 2 weeks if needed.',
        },
      ],
      faq: [
        {
          question: 'How much does Botox cost in Tempe?',
          answer:
            'Botox, Dysport, and Jeuveau at Beautiful You Med Spa start at $11 per unit. ' +
            'A typical first treatment uses 20–60 units depending on the areas treated, so ' +
            'most patients invest $220–$660 per session. Your custom dosing plan is set during the consultation.',
        },
        {
          question: 'How long does it take to see results?',
          answer:
            'Most patients notice softening of lines within 3–5 days, with full results visible at ' +
            '10–14 days. Results typically last 3–4 months; consistent treatment can extend duration ' +
            'as the muscle becomes trained.',
        },
      ],
    },

    {
      slug: 'dermal-fillers',
      name: 'Dermal Fillers',
      shortDescription: 'Restore volume. Define features. Lift and contour.',
      longDescription:
        'Hyaluronic acid (HA) fillers from Versa, Restylane (Classic, Defyne, Refyne, Silk, Kysse), ' +
        'and Juvederm. Lip enhancement, chin and jawline contouring, cheek volume, tear trough ' +
        'correction, and even ear filler available. Advanced injection technique with cannula ' +
        'where appropriate, using only as much product as your goals require.',
      icon: 'star',
      image: '/images/services/fillers.png',
      priceFrom: '$650/syringe',
      features: [
        'Mini Lip Plump (0.5mL HA), $295',
        'Chin & jawline contouring, $650',
        'Filler dissolver (Hyaluronidase / Hylenex), $160',
        'Allergan + Galderma + Revanesse certified',
      ],
      process: [
        {
          step: 1,
          title: 'Consult',
          description:
            'In-person consultation to assess facial proportions, discuss goals, and choose the ' +
            'right filler product and injection technique.',
        },
        {
          step: 2,
          title: 'Treat',
          description:
            'Numbing applied. Filler placed with needle or blunt cannula depending on the area. ' +
            'Most sessions take 30–60 minutes.',
        },
        {
          step: 3,
          title: 'Refine',
          description:
            'Mild swelling settles in 1–2 weeks. Full results visible at 2–4 weeks. ' +
            'HA fillers typically last 9–18 months depending on product and area.',
        },
      ],
      faq: [
        {
          question: 'How much does lip filler cost?',
          answer:
            'A Mini Lip Plump using 0.5mL of HA filler is $295, ideal for first-time patients ' +
            'wanting a subtle enhancement. A full syringe (1mL) starts at $650. Filler typically ' +
            'lasts 9–12 months in the lips.',
        },
        {
          question: 'Can you dissolve filler I had done elsewhere?',
          answer:
            'Yes. Hyaluronidase (Hylenex) is a $160 service that dissolves HA filler placed by ' +
            'another injector. Most patients need 1–3 sessions spaced one week apart depending on ' +
            'how much product needs to be removed.',
        },
      ],
    },

    {
      slug: 'microneedling-vampire-facial',
      name: 'Microneedling & Vampire Facial',
      shortDescription: 'Stimulate collagen. Tighten skin. Glow naturally.',
      longDescription:
        'Medical-grade microneedling for face, neck, and décolletage, with three options. With HA ' +
        'serum for hydration and texture, with VAMP (salmon DNA) for next-level rejuvenation, or ' +
        'with PRP from your own blood: the famous Vampire Facial. All three stimulate collagen, ' +
        'minimize pores, and improve texture and tone with minimal downtime.',
      icon: 'star',
      image: '/images/services/microneedling.png',
      priceFrom: '$260',
      features: [
        'Vampire Facial (microneedling + PRP), $450',
        'Microneedling + HA serum, $260',
        'Microneedling + VAMP (salmon DNA), $260',
        'Add Dermaplaning before treatment, $120',
      ],
      process: [
        {
          step: 1,
          title: 'Prep',
          description:
            'Skin is cleansed and topical numbing applied for 20–30 minutes. PRP is drawn and ' +
            'spun if you\'re booked for the Vampire Facial.',
        },
        {
          step: 2,
          title: 'Treat',
          description:
            'Medical-grade pen creates controlled micro-channels. Serum, VAMP, or PRP is layered ' +
            'into the skin during the procedure. ~45 minutes for the full face.',
        },
        {
          step: 3,
          title: 'Heal',
          description:
            'Mild redness for 24–48 hours, similar to a sunburn. Results build over 4–6 weeks ' +
            'as new collagen forms. Recommended every 4–6 weeks for a series of 3–6 treatments.',
        },
      ],
      faq: [
        {
          question: 'What is the Vampire Facial?',
          answer:
            'The Vampire Facial combines medical-grade microneedling with Platelet-Rich Plasma ' +
            '(PRP) drawn from your own blood. The PRP is rich in growth factors that accelerate ' +
            'healing, stimulate collagen, and amplify the rejuvenating effects of microneedling. ' +
            'It\'s $450 at Beautiful You and includes the blood draw, processing, and full-face treatment.',
        },
        {
          question: 'How is microneedling with VAMP different?',
          answer:
            'VAMP uses purified salmon DNA (polynucleotides) instead of PRP. It\'s a $260 alternative ' +
            'that delivers similar collagen-boosting and rejuvenating benefits without a blood draw, ' +
            'great for needle-averse patients or those wanting a quicker session.',
        },
      ],
    },

    {
      slug: 'vi-peel-chemical-peels',
      name: 'VI Peel & Chemical Peels',
      shortDescription: 'Reset your skin at the cellular level.',
      longDescription:
        'The VI Peel is a medium-depth medical-grade chemical peel formulated to rejuvenate aging ' +
        'skin, soften fine lines, even tone, and prevent future damage. Suitable for all skin types ' +
        'and tones, including melanin-rich skin where many peels are not. Pair with same-day Botox ' +
        'in our ToxBooster combo for total facial rejuvenation.',
      icon: 'star',
      image: '/images/services/chemical-peel.png',
      priceFrom: '$250',
      features: [
        'VI Peel (medium-depth), $250',
        'ToxBooster (VI Peel + Botox same-day combo)',
        'Suitable for all skin types and tones',
        'Performed by a medical-grade peel certified RN',
      ],
      process: [
        {
          step: 1,
          title: 'Prep',
          description:
            'Skin is cleansed and degreased. We review your post-peel kit and aftercare timeline ' +
            'before applying any acid.',
        },
        {
          step: 2,
          title: 'Peel',
          description:
            'VI Peel solution layered onto the skin in the office. ~30 minutes total. Mild stinging ' +
            'is normal and brief.',
        },
        {
          step: 3,
          title: 'Shed',
          description:
            'Light to moderate peeling begins on day 3 and resolves by day 5–7, revealing fresh, ' +
            'brighter, more even-toned skin underneath.',
        },
      ],
      faq: [
        {
          question: 'What does the VI Peel treat?',
          answer:
            'The VI Peel is FDA-cleared for treating fine lines and wrinkles, hyperpigmentation, ' +
            'melasma, sun damage, acne, acne scarring, rough texture, and dull skin. It works on ' +
            'all skin types and tones, including darker skin, where many other peels carry risk.',
        },
        {
          question: 'How much downtime does a VI Peel require?',
          answer:
            'Plan on 5–7 days of light peeling and pinkness. Most patients return to work ' +
            'comfortably with light makeup by day 4. The full benefit appears at 2–3 weeks. Avoid ' +
            'sun exposure and follow the post-peel kit for best results.',
        },
      ],
    },

    {
      slug: 'prp-sculptra-biostimulators',
      name: 'PRP & Sculptra',
      shortDescription: 'Regenerate from within. Stimulate your own collagen.',
      longDescription:
        'Platelet-Rich Plasma (PRP) is drawn from your own blood and used to restore tissue: ' +
        'for hair restoration on a thinning scalp, facial rejuvenation, and the Vampire Facial. ' +
        'Sculptra (poly-L-lactic acid) is a long-lasting biostimulator that gradually rebuilds ' +
        'your own collagen for years of natural-looking volume restoration in the cheeks, temples, ' +
        'and lower face.',
      icon: 'star',
      image: '/images/services/prp-sculptra.png',
      priceFrom: '$375',
      features: [
        'PRP Hair Restoration, $375',
        'PRP Facial Injections (cannula), $450',
        'Sculptra, $400 deposit required (Zelle)',
        'All using FDA-cleared products and protocols',
      ],
      process: [
        {
          step: 1,
          title: 'Plan',
          description:
            'Consultation to determine the right protocol: PRP for hair, PRP for face, or Sculptra ' +
            'for collagen rebuilding. We\'ll outline a series and total investment up front.',
        },
        {
          step: 2,
          title: 'Treat',
          description:
            'PRP requires a blood draw and ~10 minutes in the centrifuge before injection. Sculptra ' +
            'is reconstituted on-site and placed into deeper tissue with a cannula or needle.',
        },
        {
          step: 3,
          title: 'Build',
          description:
            'Results emerge over weeks (PRP) to months (Sculptra) as your body responds. Sculptra ' +
            'results can last 2+ years; PRP series typically run monthly for 3–6 sessions.',
        },
      ],
      faq: [
        {
          question: 'How much does PRP hair restoration cost?',
          answer:
            'PRP hair restoration is $375 per session. Most patients see visible regrowth after ' +
            'a series of 3–6 monthly sessions. We offer free progress photo tracking so you can ' +
            'objectively measure results between sessions.',
        },
        {
          question: 'Why does Sculptra require a deposit?',
          answer:
            'Sculptra has a $400 deposit (Zelle to 602-510-3948) because each vial is reconstituted ' +
            '24–72 hours in advance specifically for your appointment. The deposit is applied to ' +
            'your treatment cost. No deposit, no appointment.',
        },
      ],
    },

    {
      slug: 'pdo-threads',
      name: 'PDO Threads',
      shortDescription: 'Lift, tighten, and contour without surgery.',
      longDescription:
        'Polydioxanone (PDO) threads are dissolvable sutures placed beneath the skin to instantly ' +
        'lift sagging tissue, redefine the jawline, and stimulate long-term collagen production. ' +
        'A non-surgical alternative to face lifts with minimal downtime. Custom thread mapping ' +
        'designed around your specific anatomy and goals.',
      icon: 'star',
      image: '/images/services/pdo-threads.png',
      priceFrom: 'Deposit required',
      features: [
        'Non-surgical lift: instant + progressive',
        'Stimulates natural collagen for months after',
        'Custom thread placement plan',
        '$300 deposit required (Zelle to 602-510-3948)',
      ],
      process: [
        {
          step: 1,
          title: 'Map',
          description:
            'In-person consultation to mark vector lines along the jawline, cheeks, brows, or neck ' +
            'and review thread types and counts. Deposit secures the appointment.',
        },
        {
          step: 2,
          title: 'Place',
          description:
            'Local anesthetic applied. Threads are placed via micro-cannula along the planned ' +
            'vectors. Most appointments run 60–90 minutes.',
        },
        {
          step: 3,
          title: 'Settle',
          description:
            'Mild bruising and tightness for 1–2 weeks. Initial lift visible immediately; collagen-' +
            'driven improvement continues for 3–6 months as threads dissolve.',
        },
      ],
      faq: [
        {
          question: 'How long do PDO threads last?',
          answer:
            'PDO threads themselves dissolve over 4–8 months, but the collagen they trigger continues ' +
            'lifting and tightening for 12–18 months total. Many patients pair PDO with filler or ' +
            'Sculptra for combined volume + lift results.',
        },
        {
          question: 'Why is a deposit required for PDO Threads?',
          answer:
            'PDO Threads require a $300 deposit via Zelle to 602-510-3948 because the threads ' +
            'are ordered specifically for your appointment and the procedure blocks a 90-minute ' +
            'time slot. The deposit is applied to your total. No deposit, no appointment.',
        },
      ],
    },

    {
      slug: 'iv-therapy-wellness-shots',
      name: 'IV Therapy & Wellness Shots',
      shortDescription: 'Hydrate, energize, recover.',
      longDescription:
        'Custom IV drips and quick injectable shots designed for energy, recovery, beauty, and ' +
        'wellness. From the Youthful Beauty Drip and Myer\'s cocktail to NAD, B12, and B12/MIC ' +
        'fat-burning injections, all administered by a registered nurse in a private clinical ' +
        'setting (not a strip-mall cocktail bar).',
      icon: 'star',
      image: '/images/services/iv-therapy.png',
      priceFrom: '$20',
      features: [
        'Youthful IV (skin, hair, nails), $250',
        'Executive IV (basic hydration), $165',
        'Myer\'s IV (B12 + Vitamin C + Magnesium), $165',
        'B12/MIC fat-burning shot, $25 · NAD shot, $30',
      ],
      process: [
        {
          step: 1,
          title: 'Choose',
          description:
            'Pick a drip or shot based on your goal: energy, beauty, recovery, fat metabolism, ' +
            'immune support, or B12 deficiency.',
        },
        {
          step: 2,
          title: 'Infuse',
          description:
            'IV access placed by an RN. Drips run 45–55 minutes in a private treatment room. Shots ' +
            'take 5–10 minutes total. Bring your phone or a book.',
        },
        {
          step: 3,
          title: 'Feel',
          description:
            'Most patients feel hydrated and energized within hours. Recommended frequency ranges ' +
            'from weekly (B12 shots) to monthly (drips), depending on your goals.',
        },
      ],
      faq: [
        {
          question: 'What\'s the difference between Myer\'s and Performance IV?',
          answer:
            'Myer\'s IV ($165) contains a high dose of vitamin C, vitamin B12, and magnesium, ' +
            'great for general wellness, immune support, and B12 deficiency. The Performance IV ' +
            '($200) is formulated for athletes and active patients, with electrolytes and amino ' +
            'acids tailored for stamina, recovery, and pre/post-workout hydration.',
        },
        {
          question: 'Are NAD shots worth it?',
          answer:
            'NAD (nicotinamide adenine dinucleotide) is a coenzyme that helps cells produce energy, ' +
            'repair DNA, and regulate gene expression. NAD shots are $30 and have become popular ' +
            'for energy, mental focus, and longevity support. Frequency depends on your goals; ' +
            'we\'ll discuss a protocol at your consultation.',
        },
      ],
    },

    {
      slug: 'semaglutide-weight-loss',
      name: 'Semaglutide Medical Weight Loss',
      shortDescription: 'Medically supervised weight loss with Semaglutide.',
      longDescription:
        'A physician-supervised weight-loss program using compounded Semaglutide. After lab review ' +
        'and consultation, qualifying patients begin a structured monthly protocol with weigh-ins, ' +
        'dosing adjustments, and lifestyle coaching. Real, sustainable results, not a quick fix.',
      icon: 'star',
      image: '/images/services/semaglutide.png',
      priceFrom: '$200/month',
      features: [
        'Physician-supervised program',
        'Includes lab review + medication',
        'Monthly weigh-ins + dose adjustments',
        'New patient: $200 · Established patient: $350/mo',
      ],
      process: [
        {
          step: 1,
          title: 'Qualify',
          description:
            'Initial consultation ($400) reviews your medical history, labs, and goals. Our medical ' +
            'provider determines whether Semaglutide is appropriate for you.',
        },
        {
          step: 2,
          title: 'Start',
          description:
            'New-patient pickup ($200) includes your first month of medication, weigh-in, and ' +
            'detailed dosing instructions. Side-effect management is reviewed in person.',
        },
        {
          step: 3,
          title: 'Continue',
          description:
            'Monthly established-patient pickups ($350) include weigh-in, dosage titration as ' +
            'tolerated, and ongoing coaching on diet, hydration, and exercise.',
        },
      ],
      faq: [
        {
          question: 'How much does Semaglutide cost in Tempe?',
          answer:
            'Beautiful You Med Spa\'s Semaglutide program starts with a $400 qualifying consultation. ' +
            'New patients pay $200 for their first month\'s medication and orientation. Established ' +
            'patients pay $350 per month for follow-up visits and medication. All visits include ' +
            'weigh-ins and provider check-ins.',
        },
        {
          question: 'Who qualifies for the Semaglutide program?',
          answer:
            'Semaglutide is appropriate for adults with a BMI of 27 or higher (or 30+ without ' +
            'related conditions) and no contraindications such as personal or family history of ' +
            'medullary thyroid carcinoma. Our medical provider reviews labs and history at your ' +
            'consultation before any medication is dispensed.',
        },
      ],
    },
  ],

  // ==========================================================================
  // 11. RESULTS — before/after & outcomes (add more items as you receive photos)
  // ==========================================================================
  results: {
    eyebrow: 'Results',
    title: 'Real outcomes. Real patients.',
    lede:
      'Documented transformations from treatments at Beautiful You. More coming soon as we grow our gallery.',
    items: [
      {
        imageSrc: '/images/results/jeuveau-forehead-before-after.png',
        alt:
          'Before and after Jeuveau treatment on the forehead: horizontal expression lines softened after 14 days.',
        title: 'Jeuveau: forehead',
        description:
          'Just 14 days post-Jeuveau and the difference is clear: fine lines softened and a naturally youthful look restored.',
      },
      {
        images: [
          '/images/results/vamp-microneedling-1.png',
          '/images/results/vamp-microneedling-2.png',
        ],
        imageAlts: [
          'Before and after VAMP serum with microneedling, frontal view: sun damage and hyperpigmentation visibly improved.',
          'Before and after VAMP serum with microneedling, profile view: brighter, smoother skin with softened fine lines.',
        ],
        alt: 'Before and after VAMP microneedling treatment showing clearer, brighter skin.',
        title: 'VAMP + microneedling',
        description:
          'VAMP = Vitamins, Antioxidants, Minerals, and Peptides: a powerhouse serum that’s designed to ' +
          'supercharge your microneedling results.',
      },
      {
        images: ['/images/results/vipeel-1.png', '/images/results/vipeel-2.png'],
        imageAlts: [
          'Before and after VI Peel, profile view: acne and redness reduced, skin clearer and more even.',
          'Before and after VI Peel, profile comparison: smoother texture and more even tone after one peel.',
        ],
        alt: 'Before and after VI Peel chemical peel showing improved skin clarity and texture.',
        title: 'VI Peel',
        description:
          'You can see a noticeable difference in your skin’s clarity, texture, and tone with just one VI Peel.',
      },
      {
        imageSrc: '/images/results/myers-iv-treatment.png',
        alt:
          'Patient receiving a Myers IV drip with vitamin-rich fluid at Beautiful You Med Spa in Tempe.',
        title: 'Need a boost?',
        description:
          'Myers IV is packed with magnesium, calcium, B vitamins, and vitamin C, a classic blend for ' +
          'hydration and recovery.',
      },
      {
        imageSrc: '/images/results/semaglutide-before-after.png',
        alt:
          'Before and after Semaglutide weight loss: same patient showing a slimmer profile and visible progress.',
        title: 'Down 23 pounds 👏',
        description:
          'Semaglutide supports appetite regulation and metabolic health, helping patients achieve ' +
          'sustainable weight loss when combined with lifestyle changes. Real progress. Real results.',
      },
      {
        images: ['/images/results/microneedling-1.png', '/images/results/microneedling-2.png'],
        imageAlts: [
          'Before and after microneedling, profile view: smoother skin texture and softened fine lines around the eye.',
          'Before and after microneedling, frontal view: more even tone, refined texture, and a brighter complexion.',
        ],
        alt: 'Before and after microneedling showing improved skin texture and radiance.',
        title: '✨ Microneedling Magic ✨',
        description:
          'Microneedling helps improve skin texture, reduce fine lines, and fade acne scars, revealing a ' +
          'smoother, more radiant complexion.',
      },
    ],
  },

  // ==========================================================================
  // 12. PROCESS — how a visit works
  // ==========================================================================
  process: [
    {
      step: 1,
      icon: 'clipboard',
      title: 'Book',
      description:
        'Reserve a slot online through our secure Square portal, or call (602) 730-1654. ' +
        'Most services have appointments within 1–2 weeks.',
    },
    {
      step: 2,
      icon: 'phone',
      title: 'Consult',
      description:
        '15-minute consultation to align on your goals, review anatomy and medical history, ' +
        'and build a personalized treatment plan. No pressure, no upselling.',
    },
    {
      step: 3,
      icon: 'star',
      title: 'Treat',
      description:
        'Treatment performed by an RN in a clean, private treatment room. Numbing as ' +
        'appropriate. Most appointments run 30–60 minutes.',
    },
    {
      step: 4,
      icon: 'checkCircle',
      title: 'Glow',
      description:
        'Detailed aftercare instructions and follow-up if needed. We track your progress ' +
        'in person at every visit so your treatment plan evolves with you.',
    },
  ],

  // ==========================================================================
  // 13. TESTIMONIALS — verbatim Google reviews (5-star, real customers)
  // ==========================================================================
  testimonials: [
    {
      name: 'Myra A.',
      city: 'Tempe, AZ',
      rating: 5,
      date: '2024-05-15',
      service: 'Aesthetic Treatment',
      quote:
        'Odi is an amazing nurse! She is very friendly, respectful, and knowledgeable. She ' +
        'explained the procedure and treatment well and answered all my questions. I highly ' +
        'recommend Odi. I will definitely return soon!',
    },
    {
      name: 'Ana M.',
      city: 'Tempe, AZ',
      rating: 5,
      date: '2023-08-15',
      service: 'Chemical Peels, Fillers, B12 Shots',
      quote:
        'Nurse Odi is the best! She walks you through the steps beforehand and answers all ' +
        'your questions. From chemical peels, to fillers (including ear filler) and B12 shots, ' +
        'this is the place to go.',
    },
    {
      name: 'Stella V.',
      city: 'Tempe, AZ',
      rating: 5,
      date: '2023-04-15',
      service: 'Lip Filler',
      quote:
        'The best place to go for that change... loving my lips. Will recommend 100%. ' +
        'Great service and friendly.',
    },
  ],

  // ==========================================================================
  // 14. FAQ — homepage FAQ + FAQPage schema (AI Overviews-optimized)
  // ==========================================================================
  faq: [
    {
      question: 'Who performs the treatments at Beautiful You Med Spa?',
      answer:
        'Every treatment at Beautiful You Med Spa is performed by Odilette Trevizo, RN, BSN, ' +
        'a Registered Nurse and certified injector trained directly by Allergan (Botox, Juvederm), ' +
        'Galderma (Dysport, Restylane), and Revanesse Versa. Patients are never seen by a tech, ' +
        'aesthetician, or rotating provider. Same hands, every visit.',
    },
    {
      question: 'How much does Botox cost in Tempe, AZ?',
      answer:
        'Botox, Dysport, and Jeuveau at Beautiful You Med Spa start at $11 per unit. A typical ' +
        'first treatment uses 20–60 units depending on the areas treated, putting most sessions ' +
        'in the $220–$660 range. Custom dosing is determined at your consultation, and you can ' +
        'apply for Cherry financing to spread payments over time.',
    },
    {
      question: 'Do you offer financing for treatments?',
      answer:
        'Yes. Beautiful You Med Spa partners with Cherry, which offers flexible monthly payment ' +
        'plans on treatments and packages including Botox, fillers, microneedling, Sculptra, PDO ' +
        'threads, and Semaglutide. You can apply in seconds at pay.withcherry.com/beautifulyouaz ' +
        'and most patients receive an instant decision.',
    },
    {
      question: 'What is the Vampire Facial?',
      answer:
        'The Vampire Facial combines medical-grade microneedling with Platelet-Rich Plasma (PRP) ' +
        'drawn from your own blood. The PRP is rich in growth factors that accelerate healing, ' +
        'stimulate collagen, and amplify the rejuvenating effects of microneedling. At Beautiful You ' +
        'it\'s $450 and includes the blood draw, PRP processing, and full-face treatment by an RN.',
    },
    {
      question: 'Do you offer Semaglutide for weight loss?',
      answer:
        'Yes. Beautiful You Med Spa runs a physician-supervised Semaglutide program. After a $400 ' +
        'qualifying consultation that reviews your labs and medical history, qualifying patients ' +
        'pick up their first month of medication for $200 and continue with $350 monthly visits ' +
        'that include weigh-ins and dose adjustments.',
    },
    {
      question: 'What is your appointment policy?',
      answer:
        'Beautiful You is a by-appointment-only studio. We do not accept walk-ins so each patient ' +
        'gets full, undistracted attention. Online booking is available at any time through our ' +
        'Square portal at beautiful-you-med-spa.square.site. Same-week availability is common.',
    },
    {
      question: 'Why do PDO Threads and Sculptra require deposits?',
      answer:
        'PDO Threads ($300 deposit) and Sculptra ($400 deposit) require non-refundable deposits via ' +
        'Zelle to 602-510-3948 because the materials are ordered or reconstituted specifically for ' +
        'your appointment and the procedure blocks a long time slot. The deposit is fully applied ' +
        'to your treatment cost (it is not an additional fee).',
    },
    {
      question: 'What credentials and certifications does the injector hold?',
      answer:
        'Odilette Trevizo is a Registered Nurse (BSN) licensed in Arizona. She holds Allergan ' +
        'certifications for Botox and Juvederm, Galderma certifications for Dysport and Restylane ' +
        'hyaluronic acid fillers, Revanesse Versa product certification, Platelet-Rich Plasma (PRP) ' +
        'training (including Vampire Facial), and medical-grade medium-depth chemical peel certification.',
    },
  ],

  // ==========================================================================
  // 15. NAV LINKS
  // ==========================================================================
  nav: [
    { label: 'Services', href: '/services/' },
    { label: 'Meet Odi', href: '/#meet-odi' },
    { label: 'About', href: '/about/' },
    { label: 'Reviews', href: '/#testimonials' },
    { label: 'Contact', href: '/contact/' },
  ],

  // ==========================================================================
  // 16. FOOTER LINKS
  // ==========================================================================
  footer: {
    columns: [
      {
        heading: 'Services',
        links: [
          { label: 'Botox, Dysport & Jeuveau', href: '/services/botox-dysport-jeuveau/' },
          { label: 'Dermal Fillers', href: '/services/dermal-fillers/' },
          { label: 'Microneedling & Vampire Facial', href: '/services/microneedling-vampire-facial/' },
          { label: 'Semaglutide Weight Loss', href: '/services/semaglutide-weight-loss/' },
          { label: 'All Services', href: '/services/' },
        ],
      },
      {
        heading: 'Beautiful You',
        links: [
          { label: 'About', href: '/about/' },
          { label: 'Service Area', href: '/contact/#service-area' },
          { label: 'Reviews', href: '/#testimonials' },
          { label: 'Contact', href: '/contact/' },
        ],
      },
      {
        heading: 'Book & Pay',
        links: [
          { label: 'Book Online (Square)', href: 'https://beautiful-you-med-spa.square.site/' },
          { label: 'Cherry Financing', href: 'https://pay.withcherry.com/beautifulyouaz' },
          { label: 'Privacy Policy', href: '/privacy/' },
          { label: 'Terms of Service', href: '/terms/' },
        ],
      },
    ],
  },
};
