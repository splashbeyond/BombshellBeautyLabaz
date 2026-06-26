/**
 * ============================================================================
 *  BOMBSHELL BEAUTY LAB — SITE CONFIGURATION
 * ============================================================================
 *
 *  Draft conversion for Bombshell Beauty Lab.
 *  Replace placeholders with confirmed NAP, booking, license, and service details.
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
  url: 'https://bombshellbeautylab.com',

  // ==========================================================================
  // 3. BUSINESS IDENTITY
  // ==========================================================================
  business: {
    name: 'Bombshell Beauty Lab',
    legalName: 'Bombshell Beauty Lab, LLC',
    tagline: 'Bombshell beauty, skin, and aesthetic care by appointment.',
    footerTagline: 'Bombshell Beauty Lab',
    description:
      'Bombshell Beauty Lab is a glam-forward beauty and aesthetic studio built for ' +
      'confidence, polished results, and appointment-only care. The draft menu includes ' +
      'injectables, skin rejuvenation, chemical peels, wellness services, and body goals ' +
      'support, ready to be refined against Bombshell Beauty Lab\'s final service catalog.',
    aboutHeroLede:
      'Bombshell Beauty Lab pairs high-impact beauty goals with a polished, private studio ' +
      'experience. This draft is ready for Bombshell\'s confirmed owner bio, credentials, ' +
      'service menu, booking portal, and location details.',
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
    phone: '(000) 000-0000',
    phoneE164: '+10000000000',
    email: 'hello@bombshellbeautylab.com',
    address: {
      street: 'Address coming soon',
      city: 'your city',
      state: 'your state',
      zip: '00000',
      country: 'US',
    },
    geo: {
      lat: 0,
      lng: 0,
    },
    // Placeholder hours until Bombshell Beauty Lab confirms its schedule.
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
  // 5. LOCATION — placeholder studio details until NAP is confirmed.
  // ==========================================================================
  serviceArea: {
    primaryCity: 'your city',
    primaryRegion: 'your state',
    cities: ['your city'],
    sectionIntro:
      'Bombshell Beauty Lab is a private, appointment-only studio. ' +
      'No walk-ins.',
    studioDetails: [
      'The final studio address, parking notes, and arrival instructions will be added once confirmed.',
      'Check your confirmation for arrival notes. We greet clients ' +
        'at their scheduled time so the lobby stays calm and private.',
    ],
  },

  // ==========================================================================
  // 5b. PRACTICE SPOTLIGHT — homepage band below services (Moon Valley–style)
  // ==========================================================================
  practiceSpotlight: {
    ribbonTop: 'Bombshell Beauty Lab',
    headline: 'Bombshell Beauty Lab',
    bodyHtml:
      '<p><strong>Bombshell Beauty Lab</strong> is a glam-forward aesthetic studio ' +
      'where personalized care comes first. From <strong>Botox</strong>, <strong>Dysport</strong>, ' +
      'and <strong>Jeuveau</strong> to <strong>dermal fillers</strong>, <strong>microneedling</strong> ' +
      'and the <strong>Vampire Facial</strong>, <strong>VI Peel</strong>, <strong>PDO threads</strong>, ' +
      '<strong>IV therapy</strong>, and physician-supervised <strong>Semaglutide</strong> weight loss. ' +
      'Every treatment is tailored to your goals in a private, appointment-only setting.</p>',
    bodyHtml2:
      '<p>Whether you are refining lines and contours, refreshing skin texture, or planning a full beauty routine, ' +
      'the Bombshell experience is designed around clear recommendations, polished care, and outcomes you can feel confident about.</p>',
    image: '/images/hero.png',
    imageAlt:
      'Bombshell Beauty Lab aesthetic studio experience.',
  },

  // ==========================================================================
  // 6. SEO DEFAULTS
  // ==========================================================================
  seo: {
    defaultTitle: 'Bombshell Beauty Lab | Beauty, Skin & Aesthetic Care',
    titleTemplate: '{title} | {business}',
    description:
      'Bombshell Beauty Lab offers appointment-only beauty, skin, and aesthetic care with a glam-forward studio experience.',
    keywords: [
      'bombshell beauty lab',
      'beauty lab',
      'med spa',
      'botox',
      'dermal fillers',
      'skin rejuvenation',
      'chemical peel',
      'microneedling',
      'iv therapy',
      'body goals',
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
    instagram: '',
    linkedin: '',
    twitter: '',
    youtube: '',
    yelp: '',
    bbb: '',
    // Optional booking/social hub.
    industrySpecific: '',
  },

  // ==========================================================================
  // 8. TRUST SIGNALS
  // ==========================================================================
  trust: {
    rating: 5.0,
    reviewCount: 0,
    license: {
      number: 'Confirm license',
      label: 'Licensed aesthetic care',
    },
    insured: true,
    certifications: [
      { name: 'Credentials to be confirmed' },
      { name: 'Product trainings to be confirmed' },
      { name: 'Service menu to be finalized' },
    ],
    guarantee:
      'Personalized recommendations, polished care, and an appointment-only studio experience.',
  },

  // ==========================================================================
  // 9. HERO SECTION
  // ==========================================================================
  hero: {
    eyebrow: 'Bombshell Beauty Lab',
    headline: 'Bombshell Beauty Starts Here',
    subheadline:
      'A glam-forward beauty lab for polished skin, confident features, and appointment-only aesthetic care.',
    primaryCta: {
      label: 'Book Consultation',
      href: '/contact/',
    },
    secondaryCta: {
      label: 'Contact Us',
      href: '/contact/',
    },
    backgroundImage: '/images/hero.png',
    backgroundAlt:
      'Bombshell Beauty Lab logo and glam aesthetic treatment experience.',
  },

  // ==========================================================================
  // 8b. HOMEPAGE HERO CAROUSEL — full-bleed Moon Valley–style (v1 homepage only)
  // ==========================================================================
  heroCarousel: {
    enabled: true,
    serviceRibbon:
      'BOTOX & DYSPORT · DERMAL FILLERS · MICRONEEDLING & VAMPIRE FACIAL · VI PEEL · PRP & SCULPTRA · PDO THREADS · IV THERAPY · MEDICAL WEIGHT LOSS',
    locationLine: 'Located in your city',
    brandLine: 'Bombshell Beauty Lab',
    autoplayMs: 8000,
    /** First carousel slide background (services ribbon + script brand sit above in layout). */
    introSlide: {
      image: '/images/hero.png',
      imageAlt:
        'Bombshell Beauty Lab: glam-forward beauty and aesthetic care.',
      tagline:
        'Injectables, skin rejuvenation, beauty treatments, and wellness by appointment.',
    },
    slides: [
      {
        slug: 'botox-dysport-jeuveau',
        title: 'Botox, Dysport & Jeuveau',
        tagline: 'Smooth expression lines with a tailored aesthetic plan.',
        bio:
          'Neurotoxin treatments tailored to your anatomy: smooth lines, soften expression, and refresh naturally without a one-size-fits-all approach.',
        image: '/images/services/botox.png',
        imageAlt: 'Botox and injectable consultation at Bombshell Beauty Lab, your city your state.',
      },
      {
        slug: 'dermal-fillers',
        title: 'Dermal Fillers',
        tagline: 'Hyaluronic acid fillers for lips, cheeks, chin & jawline.',
        bio:
          'Hyaluronic acid fillers for lips, cheeks, chin, jawline, and facial balance. Treatment details and product menu will be finalized with Bombshell Beauty Lab.',
        image: '/images/services/fillers.png',
        imageAlt: 'Dermal filler results and lip enhancement at Bombshell Beauty Lab.',
      },
      {
        slug: 'microneedling-vampire-facial',
        title: 'Microneedling & Vampire Facial',
        tagline: 'Medical microneedling with HA, VAMP, or PRP for collagen & glow.',
        bio:
          'Medical microneedling with HA, VAMP (salmon DNA), or PRP. The Vampire Facial boosts collagen and glow with your own growth factors. Minimal downtime, real texture change.',
        image: '/images/services/microneedling.png',
        imageAlt: 'Microneedling and Vampire Facial treatment in your city med spa.',
      },
      {
        slug: 'vi-peel-chemical-peels',
        title: 'VI Peel & Chemical Peels',
        tagline: 'Medium-depth VI Peel for pigment, texture & melasma.',
        bio:
          'Medium-depth VI Peel for pigment, texture, acne scars, and melasma, safe across skin tones. Peeling days 3–7 with a brighter, even canvas underneath.',
        image: '/images/services/chemical-peel.png',
        imageAlt: 'VI Peel chemical peel consultation at Bombshell Beauty Lab.',
      },
      {
        slug: 'prp-sculptra-biostimulators',
        title: 'PRP & Sculptra',
        tagline: 'Your growth factors & collagen stimulation for long-game rejuvenation.',
        bio:
          'PRP and collagen-stimulating treatments support longer-term rejuvenation. Final protocols will be matched to Bombshell Beauty Lab\'s confirmed menu.',
        image: '/images/services/prp-sculptra.png',
        imageAlt: 'PRP and biostimulator treatments at Bombshell Beauty Lab, your city.',
      },
      {
        slug: 'pdo-threads',
        title: 'PDO Threads',
        tagline: 'Non-surgical lift & tightening with dissolvable PDO threads.',
        bio:
          'Non-surgical lifting and tightening with dissolvable PDO threads (jawline, cheeks, brows, neck). Instant lift plus collagen stimulation as threads integrate.',
        image: '/images/services/pdo-threads.png',
        imageAlt: 'PDO thread lift consultation at Bombshell Beauty Lab.',
      },
      {
        slug: 'iv-therapy-wellness-shots',
        title: 'IV Therapy & Wellness Shots',
        tagline: 'Hydration, beauty & recovery drips, plus B12, MIC & NAD.',
        bio:
          'Hydration, beauty, recovery, and energy services in a private studio setting.',
        image: '/images/services/iv-therapy.png',
        imageAlt: 'IV therapy lounge at Bombshell Beauty Lab in your city.',
      },
      {
        slug: 'semaglutide-weight-loss',
        title: 'Semaglutide Weight Loss',
        tagline: 'Physician-supervised program with labs, weigh-ins & coaching.',
        bio:
          'Structured body-goals support for qualifying clients. Final program details will be confirmed before launch.',
        image: '/images/services/semaglutide.png',
        imageAlt: 'Medical weight loss consultation at Bombshell Beauty Lab.',
      },
    ],
  },

  // ==========================================================================
  // 9b. OWNER / TEAM — replace with confirmed owner details.
  // ==========================================================================
  owner: {
    preferredName: 'the Bombshell team',
    fullName: 'Bombshell Beauty Lab',
    credentials: 'Beauty & Aesthetic Studio',
    roleTitle: 'Beauty Lab Team',
    photoUrl: '/images/logo.png',
    photoAlt:
      'Bombshell Beauty Lab logo.',
    intro:
      'A polished, private appointment experience for beauty, skin, and confidence goals.',
    bioParagraphs: [
      'Bombshell Beauty Lab is being shaped as a high-impact beauty and aesthetic destination with a glam editorial look, clear service pathways, and strong appointment-focused conversion.',
      'Add the real owner story, provider credentials, product trainings, and treatment philosophy here before launch.',
    ],
  },

  // ==========================================================================
  // 10. SERVICES — eight SEO-targeted service pages
  // ==========================================================================
  // Draft med-spa style menu inherited from the source project.
  // Confirm Bombshell Beauty Lab's real services, prices, and policies before launch.
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
        'Provider credentials to be confirmed',
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
            'Treatment performed in 15-30 minutes. Numbing as needed. Downtime varies by service.',
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
          question: 'How much does Botox cost in your city?',
          answer:
            'Botox, Dysport, and Jeuveau at Bombshell Beauty Lab start at $11 per unit. ' +
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
            'It\'s $450 at Bombshell and includes the blood draw, processing, and full-face treatment.',
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
        'Sculptra details to be confirmed',
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
            'Some advanced treatments may require a consultation, deposit, or pre-order timing. ' +
            'Bombshell Beauty Lab should confirm the final policy before this page goes live.',
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
        'Consultation and deposit policy to be confirmed',
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
            'PDO thread appointments may require a consultation, deposit, or product planning. ' +
            'Bombshell Beauty Lab should confirm the final policy before launch.',
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
        'fat-burning injections, all administered in a private clinical ' +
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
            'IV access placed by a qualified provider. Drips run 45-55 minutes in a private treatment room. Shots ' +
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
          question: 'How much does Semaglutide cost in your city?',
          answer:
            'Bombshell Beauty Lab\'s Semaglutide program starts with a $400 qualifying consultation. ' +
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
      'A draft gallery layout ready for Bombshell Beauty Lab before-and-after photos, treatment images, and real client outcomes.',
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
          'Patient receiving a Myers IV drip with vitamin-rich fluid at Bombshell Beauty Lab in your city.',
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
        'Request a consultation through the contact page. The final booking portal and availability language can be added once confirmed.',
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
        'Treatment performed in a clean, private treatment room. Numbing as ' +
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
  // 13. TESTIMONIALS — placeholders until real Bombshell reviews are available.
  // ==========================================================================
  testimonials: [
    {
      name: 'Bombshell Client',
      city: 'your city',
      rating: 5,
      date: '2026-06-26',
      service: 'Aesthetic Treatment',
      quote:
        'Real client reviews will appear here once Bombshell Beauty Lab shares approved testimonials.',
    },
    {
      name: 'Bombshell Client',
      city: 'your city',
      rating: 5,
      date: '2026-06-26',
      service: 'Chemical Peels, Fillers, B12 Shots',
      quote:
        'Use this card for a Google review, booking-platform review, or approved client quote.',
    },
    {
      name: 'Bombshell Client',
      city: 'your city',
      rating: 5,
      date: '2026-06-26',
      service: 'Lip Filler',
      quote:
        'Before launch, replace placeholder testimonials with real quotes and dates.',
    },
  ],

  // ==========================================================================
  // 14. FAQ — homepage FAQ + FAQPage schema (AI Overviews-optimized)
  // ==========================================================================
  faq: [
    {
      question: 'Who performs the treatments at Bombshell Beauty Lab?',
      answer:
        'Bombshell Beauty Lab should confirm the exact provider credentials, licenses, and treatment roles before launch. This draft is ready to display those details once provided.',
    },
    {
      question: 'How much does Botox cost in your city?',
      answer:
        'Botox, Dysport, and Jeuveau at Bombshell Beauty Lab start at $11 per unit. A typical ' +
        'first treatment uses 20–60 units depending on the areas treated, putting most sessions ' +
        'in the $220–$660 range. Custom dosing is determined at your consultation, and you can ' +
        'confirm final pricing with the studio before booking.',
    },
    {
      question: 'Do you offer financing for treatments?',
      answer:
        'Financing details have not been confirmed yet. Add the approved financing partner, eligibility language, and application link here if Bombshell Beauty Lab offers payment plans.',
    },
    {
      question: 'What is the Vampire Facial?',
      answer:
        'The Vampire Facial combines medical-grade microneedling with Platelet-Rich Plasma (PRP) ' +
        'drawn from your own blood. The PRP is rich in growth factors that accelerate healing, ' +
        'stimulate collagen, and amplify the rejuvenating effects of microneedling. Final pricing and protocol details should be confirmed by Bombshell Beauty Lab.',
    },
    {
      question: 'Do you offer Semaglutide for weight loss?',
      answer:
        'This draft includes a body-goals service page inherited from the source med-spa site. Bombshell Beauty Lab should confirm whether this program is offered, who supervises it, and what the final pricing is.',
    },
    {
      question: 'What is your appointment policy?',
      answer:
        'Bombshell is a by-appointment-only studio. We do not accept walk-ins so each patient ' +
        'gets full, undistracted attention. Online booking is available at any time through our ' +
        'booking portal once the final booking link is connected.',
    },
    {
      question: 'Why do PDO Threads and Sculptra require deposits?',
      answer:
        'Advanced treatments may require deposits or consultations. Replace this answer with Bombshell Beauty Lab\'s final booking and cancellation policy before launch.',
    },
    {
      question: 'What credentials and certifications does the injector hold?',
      answer:
        'Bombshell Beauty Lab should list confirmed licenses, certifications, product trainings, and provider credentials here. Avoid publishing unverified credential claims.',
    },
  ],

  // ==========================================================================
  // 15. NAV LINKS
  // ==========================================================================
  nav: [
    { label: 'Services', href: '/services/' },
    { label: 'Team', href: '/#meet-bombshell' },
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
        heading: 'Bombshell',
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
          { label: 'Book Consultation', href: '/contact/' },
          { label: 'Privacy Policy', href: '/privacy/' },
          { label: 'Terms of Service', href: '/terms/' },
        ],
      },
    ],
  },
};

Object.assign(siteConfig, {
  url: 'https://bombshellbeautylab.com',
  business: {
    ...siteConfig.business,
    name: 'Bombshell Beauty Lab',
    legalName: 'Bombshell Beauty Lab, LLC',
    tagline: 'Feel gorgeous. Get noticed.',
    footerTagline: 'Scottsdale Hair & Beauty Studio',
    description:
      'Bombshell Beauty Lab is the rebrand of Lisa Turley At Salon Studios, a Scottsdale hair salon focused on precision cuts, dimensional color, blonding, styling, and confidence-first beauty.',
    aboutHeroLede:
      'Bombshell Beauty Lab brings Lisa Turley\'s Scottsdale hair expertise into a bolder beauty-lab brand. Lisa began her hair career in 1991, trained as an educator for Rusk, and built her philosophy around balance, natural-looking color, precision shape, and teaching clients how to feel gorgeous every day.',
    foundedYear: 1991,
    industry: 'Hair Salon',
    schemaType: 'HairSalon',
  },
  contact: {
    phone: '(602) 326-7799',
    phoneE164: '+16023267799',
    email: 'hello@bombshellbeautylab.com',
    address: {
      street: '10201 N Scottsdale Rd',
      city: 'Scottsdale',
      state: 'AZ',
      zip: '85253',
      country: 'US',
    },
    geo: {
      lat: 33.5786824,
      lng: -111.9256021,
    },
    hours: [],
    emergencyService: true,
    emergencyText: 'By Appointment',
  },
  serviceArea: {
    primaryCity: 'Scottsdale',
    primaryRegion: 'Arizona',
    cities: ['Scottsdale', 'Paradise Valley', 'Phoenix'],
    sectionIntro:
      'Bombshell Beauty Lab welcomes Scottsdale-area clients by appointment at Salon Studios on North Scottsdale Road.',
    studioDetails: [
      'Google Business Profile lists the studio at 10201 N Scottsdale Rd, Scottsdale, AZ 85253.',
      'Business hours are not published on GBP yet. Call (602) 326-7799 or use the website/social links to request an appointment.',
    ],
  },
  practiceSpotlight: {
    ribbonTop: 'Scottsdale Hair & Beauty',
    headline: 'Bombshell Beauty Lab',
    bodyHtml:
      '<p><strong>Bombshell Beauty Lab</strong> is the glam rebrand of Lisa Turley At Salon Studios in Scottsdale. The salon focuses on precision haircuts, natural-looking color, blonding, dimensional highlights, and styling that helps clients feel gorgeous and get noticed.</p>',
    bodyHtml2:
      '<p>Lisa Turley began her hair career in 1991 and brings decades of Scottsdale salon experience to every consultation. Her philosophy is built around balance: flattering tones, haircuts that move, color that respects the hair, and practical styling guidance you can use after you leave the chair.</p>',
    image: '/images/logo.png',
    imageAlt: 'Bombshell Beauty Lab logo.',
  },
  seo: {
    defaultTitle: 'Bombshell Beauty Lab | Scottsdale Hair Salon',
    titleTemplate: '{title} | {business}',
    description:
      'Bombshell Beauty Lab is the rebrand of Lisa Turley At Salon Studios, a Scottsdale hair salon for precision cuts, dimensional color, blonding, and styling by appointment.',
    keywords: [
      'bombshell beauty lab',
      'scottsdale hair salon',
      'lisa turley salon studios',
      'hair color scottsdale',
      'haircut scottsdale',
      'blonding scottsdale',
      'dimensional color',
      'salon studios scottsdale',
    ],
    ogImage: '/images/logo.png',
    ogImageWidth: 1020,
    ogImageHeight: 1020,
    locale: 'en_US',
    googleSiteVerification: '',
    bingVerification: '',
  },
  social: {
    googleBusiness:
      'https://www.google.com/search?kgmid=/g/1tsyknj6&hl=en-US&q=Lisa+Turley+At+Salon+Studios',
    facebook: 'https://www.facebook.com/lisaturleysalon',
    instagram: 'https://www.instagram.com/lisaturleysalon/',
    linkedin: '',
    twitter: 'https://twitter.com/iambeautybird',
    youtube: '',
    yelp: '',
    bbb: '',
    industrySpecific: 'http://www.lisaturley.com/',
  },
  trust: {
    rating: 5.0,
    reviewCount: 3,
    license: {
      number: 'GBP hair salon',
      label: 'Scottsdale hair salon',
    },
    insured: true,
    certifications: [
      { name: 'Hair industry experience since 1991' },
      { name: 'Former Rusk educator' },
      { name: '5.0 stars on Google' },
    ],
    guarantee:
      'Balanced consultations, precision hair design, and appointment-only attention.',
  },
  hero: {
    eyebrow: 'Bombshell Beauty Lab',
    headline: 'Scottsdale Hair, Color & Confidence',
    subheadline:
      'The glam rebrand of Lisa Turley At Salon Studios: precision cuts, natural-looking color, blonding, and styling by appointment.',
    primaryCta: {
      label: 'Call to Book',
      href: 'tel:+16023267799',
    },
    secondaryCta: {
      label: 'Visit Current Website',
      href: 'http://www.lisaturley.com/',
    },
    backgroundImage: '/images/logo.png',
    backgroundAlt: 'Bombshell Beauty Lab logo.',
  },
});

siteConfig.heroCarousel = {
  enabled: true,
  serviceRibbon:
    'PRECISION CUTS · DIMENSIONAL COLOR · BLONDING · HIGHLIGHTS · STYLE COACHING · SCOTTSDALE SALON',
  locationLine: 'Located in Scottsdale, Arizona',
  brandLine: 'Bombshell Beauty Lab',
  autoplayMs: 8000,
  introSlide: {
    image: '/images/logo.png',
    imageAlt: 'Bombshell Beauty Lab logo.',
    tagline: 'Feel gorgeous. Get noticed.',
  },
  slides: [
    {
      slug: 'precision-haircuts',
      title: 'Precision Haircuts',
      tagline: 'Shape, movement, and balance that lasts beyond the appointment.',
      bio:
        'Lisa focuses on releasing weight, creating movement, and shaping hair so it feels beautiful for weeks, not just the day you leave the salon.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab precision haircut service.',
    },
    {
      slug: 'dimensional-color',
      title: 'Dimensional Color',
      tagline: 'Natural-looking tones designed around your complexion.',
      bio:
        'Color is planned around balance, softness, and tones that flatter your skin. The goal is beautiful hair that looks intentional and wearable.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab dimensional color service.',
    },
    {
      slug: 'blonding-highlights',
      title: 'Blonding & Highlights',
      tagline: 'Bright, blended, and customized to your hair goals.',
      bio:
        'From soft brightness to high-impact blonding, appointments are planned with the health of your hair and the maintenance you want in mind.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab blonding and highlight service.',
    },
    {
      slug: 'styling-coaching',
      title: 'Styling Coaching',
      tagline: 'Tools, product guidance, and styling confidence.',
      bio:
        'Lisa believes the right tools and products can be life changing. You leave with guidance for looking polished between salon visits.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab styling coaching service.',
    },
  ],
};

siteConfig.owner = {
  preferredName: 'Lisa',
  fullName: 'Lisa Turley',
  credentials: 'Hairstylist',
  roleTitle: 'Founder & Stylist',
  photoUrl: '/images/logo.png',
  photoAlt: 'Bombshell Beauty Lab logo.',
  intro:
    'Old Town Scottsdale native, longtime hairstylist, and the creative force behind the Bombshell Beauty Lab rebrand.',
  bioParagraphs: [
    'Lisa Turley began her journey in the hair industry in 1991. In her early years as a stylist, she became an educator for Rusk, an international haircare company, where she learned to master beautiful hair design.',
    'Her salon philosophy is built around balance: returning hair to flattering natural tones, releasing weight through precision texturizing, using less stress with color, and teaching clients how to style their hair at home.',
    'Bombshell Beauty Lab keeps the heart of Lisa Turley At Salon Studios and gives it a bold new identity: feel gorgeous, get noticed.',
  ],
};

siteConfig.services = [
  {
    slug: 'precision-haircuts',
    name: 'Precision Haircuts',
    shortDescription: 'Shape, movement, and balance for hair that keeps working.',
    longDescription:
      'Precision haircuts at Bombshell Beauty Lab focus on shape, balance, and movement. Lisa uses texturizing and weight release to help hair move naturally and hold its shape well beyond the appointment.',
    icon: 'star',
    image: '/images/logo.png',
    features: [
      'Custom shape based on your face, texture, and routine',
      'Weight release and precision texturizing',
      'Movement-focused finishing',
      'Styling guidance for home',
    ],
    process: [
      { step: 1, title: 'Consult', description: 'Talk through your hair history, lifestyle, and what is or is not working.' },
      { step: 2, title: 'Shape', description: 'Create a balanced cut with attention to movement, weight, and proportion.' },
      { step: 3, title: 'Style', description: 'Finish with tool and product guidance so the look is easier to recreate.' },
    ],
    faq: [
      {
        question: 'What makes a Bombshell haircut different?',
        answer:
          'The focus is balance: a shape that flatters your features, releases unnecessary weight, and gives your hair movement instead of forcing it into a rigid style.',
      },
      {
        question: 'Can I get styling tips during my appointment?',
        answer:
          'Yes. Lisa emphasizes teaching clients how to style their hair at home, including tool and product guidance.',
      },
    ],
  },
  {
    slug: 'dimensional-color',
    name: 'Dimensional Color',
    shortDescription: 'Natural-looking color designed around your skin tone.',
    longDescription:
      'Dimensional color at Bombshell Beauty Lab is planned around flattering tones, hair health, and a softer grow-out. Lisa often looks back to the natural tones that suited you best and builds color from there.',
    icon: 'star',
    image: '/images/logo.png',
    features: [
      'Custom color consultation',
      'Natural-looking tonal planning',
      'Soft dimension and movement',
      'Maintenance-aware color strategy',
    ],
    process: [
      { step: 1, title: 'Plan', description: 'Review your current color, inspiration, maintenance goals, and hair condition.' },
      { step: 2, title: 'Color', description: 'Apply a custom color strategy designed for dimension and balance.' },
      { step: 3, title: 'Maintain', description: 'Leave with guidance for protecting tone, shine, and hair health.' },
    ],
    faq: [
      {
        question: 'How do you choose the right hair color?',
        answer:
          'Lisa believes the most flattering color often connects back to your natural tones, especially the tones that suited you in your early teens.',
      },
      {
        question: 'Do you require strict color maintenance schedules?',
        answer:
          'The philosophy is less stress on the hair when possible. Lisa helps clients choose color that works with their comfort level and maintenance preferences.',
      },
    ],
  },
  {
    slug: 'blonding-highlights',
    name: 'Blonding & Highlights',
    shortDescription: 'Brightness, blend, and dimension with a healthy-hair mindset.',
    longDescription:
      'Blonding and highlights at Bombshell Beauty Lab are customized for the level of brightness, contrast, and maintenance you want while respecting the condition of your hair.',
    icon: 'star',
    image: '/images/logo.png',
    features: [
      'Custom blonding consultation',
      'Blended highlights and brightness',
      'Tone and placement planning',
      'Home-care guidance',
    ],
    process: [
      { step: 1, title: 'Assess', description: 'Review existing color, hair health, and your brightness goals.' },
      { step: 2, title: 'Brighten', description: 'Place highlights or blonding strategically for a flattering result.' },
      { step: 3, title: 'Tone', description: 'Finish with tone and care guidance for shine and longevity.' },
    ],
    faq: [
      {
        question: 'Can blonding still look natural?',
        answer:
          'Yes. The goal can be bright and noticeable while still looking balanced with your features and natural tones.',
      },
      {
        question: 'Will you help me understand maintenance?',
        answer:
          'Yes. Your appointment should include realistic guidance for upkeep, tone, products, and future visits.',
      },
    ],
  },
  {
    slug: 'style-coaching',
    name: 'Style Coaching',
    shortDescription: 'Learn the tools, products, and habits that make hair behave.',
    longDescription:
      'Style coaching helps you understand how to recreate your salon finish at home. Lisa believes the right tools and products can be life changing when they match your haircut, texture, and routine.',
    icon: 'clipboard',
    image: '/images/logo.png',
    features: [
      'Tool recommendations',
      'Product guidance',
      'At-home styling education',
      'Routine-friendly finishing tips',
    ],
    process: [
      { step: 1, title: 'Discuss', description: 'Identify what is hard about styling your hair now.' },
      { step: 2, title: 'Demonstrate', description: 'Walk through the tools, product choices, and finishing approach.' },
      { step: 3, title: 'Practice', description: 'Leave with a simpler routine for getting polished hair at home.' },
    ],
    faq: [
      {
        question: 'Is style coaching part of a haircut or color visit?',
        answer:
          'It can be woven into your appointment. Lisa wants clients to look and feel great every day, not just in the salon.',
      },
      {
        question: 'Can you recommend tools and products?',
        answer:
          'Yes. Tool and product recommendations are part of helping your hair work with your real routine.',
      },
    ],
  },
];

siteConfig.results = {
  eyebrow: 'Philosophy',
  title: 'Balanced hair. Confident clients.',
  lede:
    'Bombshell Beauty Lab is ready for a future gallery of real cuts, color, blonding, and styling work.',
  items: [
    {
      imageSrc: '/images/logo.png',
      alt: 'Bombshell Beauty Lab logo.',
      title: 'Feel Gorgeous',
      description:
        'Lisa believes your hair is the accessory you never take off, so the shape, color, and styling plan should make you feel confident every day.',
    },
    {
      imageSrc: '/images/logo.png',
      alt: 'Bombshell Beauty Lab logo.',
      title: 'Get Noticed',
      description:
        'The new Bombshell identity keeps the existing Lisa Turley Salon promise and gives it a bolder, beauty-lab edge.',
    },
  ],
};

siteConfig.process = [
  {
    step: 1,
    icon: 'phone',
    title: 'Call',
    description: 'Call (602) 326-7799 to request an appointment with Lisa in Scottsdale.',
  },
  {
    step: 2,
    icon: 'clipboard',
    title: 'Consult',
    description: 'Talk through your hair history, lifestyle, inspiration, and maintenance comfort level.',
  },
  {
    step: 3,
    icon: 'star',
    title: 'Create',
    description: 'Shape, color, or style the hair with balance, movement, and confidence in mind.',
  },
  {
    step: 4,
    icon: 'checkCircle',
    title: 'Maintain',
    description: 'Leave with practical styling and product guidance so your hair works after the appointment.',
  },
];

siteConfig.testimonials = [
  {
    name: 'Julie Onan',
    city: 'Scottsdale, AZ',
    rating: 5,
    date: '2026-06-26',
    service: 'Hair Salon',
    quote:
      'Always very professional, on schedule, and give you undivided attention.',
  },
  {
    name: 'Nate Hoelzen',
    city: 'Scottsdale, AZ',
    rating: 5,
    date: '2026-06-26',
    service: 'Hair Salon',
    quote:
      'I\'m very thankful to have found Lisa and would highly recommend her!',
  },
  {
    name: 'Facebook Reviews',
    city: 'Scottsdale, AZ',
    rating: 5,
    date: '2026-06-26',
    service: 'Hair Salon',
    quote:
      'Lisa Turley Salon is also listed with a 4.8 out of 5 rating on Facebook.',
  },
];

siteConfig.faq = [
  {
    question: 'Is Bombshell Beauty Lab the same business as Lisa Turley At Salon Studios?',
    answer:
      'Yes. Bombshell Beauty Lab is the rebrand for Lisa Turley At Salon Studios in Scottsdale, Arizona.',
  },
  {
    question: 'Where is Bombshell Beauty Lab located?',
    answer:
      'Google Business Profile lists the salon at 10201 N Scottsdale Rd, Scottsdale, AZ 85253.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Call (602) 326-7799 to request an appointment. GBP does not currently list public business hours, so visits should be treated as by appointment.',
  },
  {
    question: 'What services does Bombshell Beauty Lab offer?',
    answer:
      'The site is currently positioned around Lisa Turley\'s hair expertise: precision haircuts, dimensional color, blonding, highlights, and styling education.',
  },
  {
    question: 'How long has Lisa Turley been doing hair?',
    answer:
      'Lisa began her journey in the hair industry in 1991 and later became an educator for Rusk, an international haircare company.',
  },
];

siteConfig.nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Lisa', href: '/#meet-bombshell' },
  { label: 'Reviews', href: '/#testimonials' },
  { label: 'Contact', href: '/contact/' },
];

siteConfig.footer = {
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'Precision Haircuts', href: '/services/precision-haircuts/' },
        { label: 'Dimensional Color', href: '/services/dimensional-color/' },
        { label: 'Blonding & Highlights', href: '/services/blonding-highlights/' },
        { label: 'Style Coaching', href: '/services/style-coaching/' },
        { label: 'All Services', href: '/services/' },
      ],
    },
    {
      heading: 'Bombshell',
      links: [
        { label: 'Lisa', href: '/#meet-bombshell' },
        { label: 'Reviews', href: '/#testimonials' },
        { label: 'Contact', href: '/contact/' },
      ],
    },
    {
      heading: 'Book',
      links: [
        { label: 'Call to Book', href: 'tel:+16023267799' },
        { label: 'Current Website', href: 'http://www.lisaturley.com/' },
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'Terms of Service', href: '/terms/' },
      ],
    },
  ],
};

siteConfig.heroCarousel = {
  enabled: true,
  serviceRibbon:
    'HAIRCUT BLOWDRY · BLOWDRY/STYLING · VIRGIN COLOR · COLOR RETOUCH · GLOSSING · PURIFYING TREATMENT · CREATIVE COLOR',
  locationLine: 'Located in Scottsdale, Arizona',
  brandLine: 'Bombshell Beauty Lab',
  autoplayMs: 8000,
  introSlide: {
    image: '/images/logo.png',
    imageAlt: 'Bombshell Beauty Lab logo.',
    tagline: 'Women\'s hair services by appointment. Feel gorgeous. Get noticed.',
  },
  slides: [
    {
      slug: 'haircut-blowdry',
      title: 'Haircut Blowdry',
      tagline: 'Precision shape, movement, and a polished finish.',
      bio:
        'A custom women\'s haircut with blowdry, shaped around your hair texture, face shape, and everyday styling routine.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab haircut blowdry service.',
    },
    {
      slug: 'blowdry-styling',
      title: 'Blowdry/Styling',
      tagline: 'A finished look for everyday polish or an event.',
      bio:
        'Blowdry and styling appointments create a polished finish while helping you understand the tools and products that make your hair behave.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab blowdry and styling service.',
    },
    {
      slug: 'virgin-color',
      title: 'Virgin Color',
      tagline: 'First-time color planned around tone, shine, and balance.',
      bio:
        'Virgin color is planned for hair that has not been previously colored, with tone selection designed around your complexion and desired result.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab virgin color service.',
    },
    {
      slug: 'color-retouch',
      title: 'Color Retouch',
      tagline: 'Refresh your regrowth and keep your color looking intentional.',
      bio:
        'Color retouch appointments maintain existing color, cover regrowth, and keep your tone looking polished between larger color services.',
      image: '/images/services/color-retouch.png',
      imageAlt: 'Bombshell Beauty Lab color retouch service.',
    },
    {
      slug: 'glossing',
      title: 'Glossing',
      tagline: 'Shine, tone, and softness in one appointment.',
      bio:
        'Glossing refreshes tone, adds shine, and helps hair look more finished without a major color shift.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab glossing service.',
    },
    {
      slug: 'purifying-treatment',
      title: 'Purifying Treatment',
      tagline: 'Reset buildup so hair feels cleaner, lighter, and brighter.',
      bio:
        'A purifying treatment helps remove buildup and prepare hair for a fresher finish or future color service.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab purifying treatment service.',
    },
    {
      slug: 'creative-color',
      title: 'Creative Color',
      tagline: 'Custom color work by consultation.',
      bio:
        'Creative color starts with a consultation so Lisa can understand your inspiration, hair history, length, thickness, and desired result.',
      image: '/images/logo.png',
      imageAlt: 'Bombshell Beauty Lab creative color service.',
    },
  ],
};

siteConfig.services = [
  {
    slug: 'haircut-blowdry',
    name: 'Haircut Blowdry',
    shortDescription: 'Precision haircut with a polished blowdry finish.',
    longDescription:
      'Haircut blowdry appointments at Bombshell Beauty Lab are shaped around balance, movement, and everyday wearability. Lisa focuses on creating a cut that flatters your features, works with your texture, and finishes with a polished blowdry.',
    icon: 'star',
    image: '/images/logo.png',
    priceFrom: '$150',
    features: [
      'Women\'s haircut and blowdry',
      'Custom shape based on texture and routine',
      'Movement-focused finishing',
      'Styling guidance for home',
    ],
    process: [
      { step: 1, title: 'Consult', description: 'Talk through your hair history, lifestyle, and what is or is not working.' },
      { step: 2, title: 'Cut', description: 'Create a balanced shape with attention to movement, weight, and proportion.' },
      { step: 3, title: 'Blowdry', description: 'Finish with a polished blowdry and practical styling guidance.' },
    ],
    faq: [
      {
        question: 'How much is a haircut blowdry?',
        answer:
          'Haircut blowdry appointments start at $150. Final cost may vary based on hair length, thickness, and desired result.',
      },
      {
        question: 'Will Lisa help me style my haircut at home?',
        answer:
          'Yes. Lisa emphasizes practical styling guidance so your hair works after you leave the salon.',
      },
    ],
  },
  {
    slug: 'blowdry-styling',
    name: 'Blowdry/Styling',
    shortDescription: 'A polished finish for everyday wear or a special plan.',
    longDescription:
      'Blowdry and styling appointments are designed to give hair a finished, confident look while matching the style to your texture, cut, and day-to-day routine.',
    icon: 'star',
    image: '/images/logo.png',
    priceFrom: '$70',
    features: [
      'Blowdry and styling',
      'Smooth, polished finish',
      'Tool and product guidance',
      'Great for maintenance or events',
    ],
    process: [
      { step: 1, title: 'Plan', description: 'Discuss the finish you want and how your hair usually behaves.' },
      { step: 2, title: 'Style', description: 'Create a polished blowdry or styled finish.' },
      { step: 3, title: 'Guide', description: 'Review tools or product choices that can help recreate the look.' },
    ],
    faq: [
      {
        question: 'How much is blowdry/styling?',
        answer:
          'Blowdry/styling starts at $70. Final cost may vary based on hair length, thickness, and desired result.',
      },
    ],
  },
  {
    slug: 'virgin-color',
    name: 'Virgin Color',
    shortDescription: 'First-time color designed around tone, shine, and balance.',
    longDescription:
      'Virgin color is for hair that has not been previously colored. Lisa plans the tone around your complexion, natural hair, and desired result for a balanced, flattering finish.',
    icon: 'star',
    image: '/images/logo.png',
    priceFrom: '$185',
    features: [
      'Color for previously uncolored hair',
      'Tone selected around your complexion',
      'Consultation recommended',
      'Starting price may vary by length and thickness',
    ],
    process: [
      { step: 1, title: 'Consult', description: 'Email or text for a color consultation before booking.' },
      { step: 2, title: 'Color', description: 'Apply the color plan with your hair condition and desired result in mind.' },
      { step: 3, title: 'Finish', description: 'Style and review maintenance guidance for preserving tone and shine.' },
    ],
    faq: [
      {
        question: 'How much is virgin color?',
        answer:
          'Virgin color starts at $185. Prices listed are starting prices; final cost may vary based on hair length, thickness, and desired results.',
      },
      {
        question: 'Do I need a color consultation?',
        answer:
          'Please email or text for color consultation so Lisa can review your hair history, goals, and timing.',
      },
    ],
  },
  {
    slug: 'color-retouch',
    name: 'Color Retouch',
    shortDescription: 'Maintain regrowth and keep existing color polished.',
    longDescription:
      'Color retouch appointments refresh regrowth and maintain your existing color plan. This service keeps the overall look intentional between larger color changes.',
    icon: 'star',
    image: '/images/services/color-retouch.png',
    priceFrom: '$150',
    features: [
      'Root or regrowth retouch',
      'Existing color maintenance',
      'Tone and shine support',
      'Consultation recommended for major changes',
    ],
    process: [
      { step: 1, title: 'Review', description: 'Review your current color and regrowth.' },
      { step: 2, title: 'Retouch', description: 'Refresh the needed color area with a maintenance-focused approach.' },
      { step: 3, title: 'Finish', description: 'Style and discuss upkeep for your next visit.' },
    ],
    faq: [
      {
        question: 'How much is a color retouch?',
        answer:
          'Color retouch starts at $150. Final cost may vary based on hair length, thickness, and desired results.',
      },
    ],
  },
  {
    slug: 'glossing',
    name: 'Glossing',
    shortDescription: 'Refresh tone, shine, and softness.',
    longDescription:
      'Glossing helps refresh tone, add shine, and soften the look of hair between larger color appointments. It is a great option when hair needs polish without a major color change.',
    icon: 'star',
    image: '/images/logo.png',
    priceFrom: '$75',
    features: [
      'Tone refresh',
      'Shine enhancement',
      'Soft, polished finish',
      'Good between color services',
    ],
    process: [
      { step: 1, title: 'Assess', description: 'Review current tone and what needs refreshing.' },
      { step: 2, title: 'Gloss', description: 'Apply gloss to refresh tone and shine.' },
      { step: 3, title: 'Finish', description: 'Style and review maintenance tips.' },
    ],
    faq: [
      {
        question: 'How much is glossing?',
        answer:
          'Glossing starts at $75. Final cost may vary based on hair length, thickness, and desired results.',
      },
    ],
  },
  {
    slug: 'purifying-treatment',
    name: 'Purifying Treatment',
    shortDescription: 'A reset for buildup, dullness, and heavy-feeling hair.',
    longDescription:
      'Purifying treatments help remove buildup and refresh the feel of the hair. This can support shine, movement, and a cleaner canvas for styling or future color.',
    icon: 'star',
    image: '/images/logo.png',
    priceFrom: '$55',
    features: [
      'Buildup removal',
      'Fresh, lighter feel',
      'Supports shine and movement',
      'Helpful before styling or future color',
    ],
    process: [
      { step: 1, title: 'Assess', description: 'Discuss product buildup, water minerals, or dullness concerns.' },
      { step: 2, title: 'Purify', description: 'Use a purifying approach to refresh the hair.' },
      { step: 3, title: 'Finish', description: 'Style and review home-care suggestions.' },
    ],
    faq: [
      {
        question: 'How much is a purifying treatment?',
        answer:
          'Purifying treatment starts at $55. Final cost may vary based on hair length, thickness, and desired results.',
      },
    ],
  },
  {
    slug: 'creative-color',
    name: 'Creative Color',
    shortDescription: 'Custom color work starting with consultation.',
    longDescription:
      'Creative color is custom color work planned around your inspiration, hair history, current condition, length, thickness, and desired result. Please email or text for a color consultation before booking.',
    icon: 'star',
    image: '/images/logo.png',
    priceFrom: '$250',
    features: [
      'Starting at $250',
      'Consultation required',
      'Custom color planning',
      'Final price varies by hair and desired result',
    ],
    process: [
      { step: 1, title: 'Consult', description: 'Please email or text for color consultation before booking creative color.' },
      { step: 2, title: 'Plan', description: 'Review inspiration, hair history, length, thickness, and timing.' },
      { step: 3, title: 'Create', description: 'Execute the custom color plan with hair health and desired result in mind.' },
    ],
    faq: [
      {
        question: 'How much is creative color?',
        answer:
          'Creative color starts at $250. Prices listed are starting prices; final cost may vary based on hair length, thickness, and desired results.',
      },
      {
        question: 'Do I need a consultation for creative color?',
        answer:
          'Yes. Please email or text for color consultation so Lisa can understand your hair history, inspiration, and appointment needs.',
      },
    ],
  },
];

siteConfig.footer = {
  columns: [
    {
      heading: 'Women\'s Services',
      links: [
        { label: 'Haircut Blowdry', href: '/services/haircut-blowdry/' },
        { label: 'Blowdry/Styling', href: '/services/blowdry-styling/' },
        { label: 'Virgin Color', href: '/services/virgin-color/' },
        { label: 'Color Retouch', href: '/services/color-retouch/' },
        { label: 'Glossing', href: '/services/glossing/' },
        { label: 'Purifying Treatment', href: '/services/purifying-treatment/' },
        { label: 'Creative Color', href: '/services/creative-color/' },
        { label: 'All Services', href: '/services/' },
      ],
    },
    {
      heading: 'Bombshell',
      links: [
        { label: 'Lisa', href: '/#meet-bombshell' },
        { label: 'Reviews', href: '/#testimonials' },
        { label: 'Contact', href: '/contact/' },
      ],
    },
    {
      heading: 'Book',
      links: [
        { label: 'Call to Book', href: 'tel:+16023267799' },
        { label: 'Current Website', href: 'http://www.lisaturley.com/' },
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'Terms of Service', href: '/terms/' },
      ],
    },
  ],
};

siteConfig.faq = [
  {
    question: 'What women\'s services does Bombshell Beauty Lab offer?',
    answer:
      'The women\'s service menu includes haircut blowdry, blowdry/styling, virgin color, color retouch, glossing, purifying treatment, and creative color.',
  },
  {
    question: 'What are the starting prices?',
    answer:
      'Starting prices are $150 for haircut blowdry, $70 for blowdry/styling, $185 for virgin color, $150 for color retouch, $75 for glossing, $55 for purifying treatment, and $250 for creative color.',
  },
  {
    question: 'Do color services require a consultation?',
    answer:
      'Please email or text for color consultation, especially for virgin color or creative color.',
  },
  {
    question: 'Can final pricing change?',
    answer:
      'Yes. Prices listed are starting prices. Final cost may vary based on hair length, thickness, and desired results.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Call (602) 326-7799 to request an appointment. GBP does not currently list public business hours, so visits should be treated as by appointment.',
  },
];
