/**
 * Type definitions for the site configuration.
 *
 * Editing these types is rarely necessary — they describe the shape of
 * `site.config.ts`. If you need to add a new field to the config, add it here
 * first and TypeScript will tell you everywhere it needs to be wired in.
 */

export type ThemeName =
  | 'warm'
  | 'editorial'
  | 'technical'
  | 'coastal'
  | 'heritage'
  | 'clinical'
  | 'luxury'
  | 'bold'
  | 'glam';

export interface SiteConfig {
  theme: ThemeName;
  url: string;
  business: BusinessConfig;
  contact: ContactConfig;
  serviceArea: ServiceAreaConfig;
  seo: SeoConfig;
  social: SocialConfig;
  trust: TrustConfig;
  hero: HeroConfig;
  /** Optional full-bleed carousel hero (homepage). When enabled, replaces split hero layout. */
  heroCarousel?: HeroCarouselConfig;
  /** Founder / clinical lead — dedicated “Meet the owner” section */
  owner: OwnerConfig;
  /**
   * Moon Valley–style intro band: image + ribbon headline + body (homepage).
   * Copy may include basic HTML (e.g. `<strong>`) — sourced from your config only.
   */
  practiceSpotlight: PracticeSpotlightConfig;
  services: Service[];
  /** Before/after and outcome stories — expandable list */
  results: ResultsSectionConfig;
  process: ProcessStep[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  nav: NavLink[];
  footer: FooterConfig;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  /** Shown under the logo in the site footer; falls back to `tagline` if omitted */
  footerTagline?: string;
  description: string;
  /** About page hero paragraph; falls back to `description` if omitted */
  aboutHeroLede?: string;
  /** When set, shown as “Est. YYYY” / “since YYYY” and in schema. Omit if unknown. */
  foundedYear?: number;
  industry: string;
  /** schema.org LocalBusiness subtype, e.g. "Plumber", "Dentist", "LegalService". */
  schemaType: string;
  logoUrl: string;
}

export interface ContactConfig {
  /** Display format: (XXX) XXX-XXXX */
  phone: string;
  /** E.164 format for tel: links and schema: +1XXXXXXXXXX */
  phoneE164: string;
  email: string;
  address: PostalAddress;
  geo: { lat: number; lng: number };
  hours: BusinessHour[];
  emergencyService: boolean;
  emergencyText: string;
}

export interface PostalAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface BusinessHour {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  open?: string;
  close?: string;
  closed?: boolean;
}

export interface ServiceAreaConfig {
  primaryCity: string;
  primaryRegion: string;
  /** Listed in schema / location routes — cities where you see patients */
  cities: string[];
  /** “Where we work” lede on the homepage */
  sectionIntro: string;
  /** Suite, parking, how to find the building — plain paragraphs */
  studioDetails: string[];
}

export interface SeoConfig {
  defaultTitle: string;
  /** e.g. "{title} | {business}" */
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  locale: string;
  googleSiteVerification?: string;
  bingVerification?: string;
}

export interface SocialConfig {
  googleBusiness?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  yelp?: string;
  bbb?: string;
  industrySpecific?: string;
}

export interface TrustConfig {
  rating: number;
  reviewCount: number;
  license: { number: string; label: string };
  insured: boolean;
  certifications: { name: string; logoUrl?: string }[];
  guarantee: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  backgroundImage?: string;
  backgroundAlt?: string;
}

/** Full-bleed homepage hero carousel (optional — Beautiful You v1). */
export interface HeroCarouselSlide {
  slug: string;
  title: string;
  bio: string;
  image: string;
  imageAlt: string;
  /** Short line under the script title (rendered as `<small>`). */
  tagline?: string;
}

/** First carousel slide — image only; business name + services list come from `brandLine` + `serviceRibbon`. */
export interface HeroCarouselIntroSlide {
  image: string;
  imageAlt: string;
  /** Short line under the brand script title (rendered as `<small>`). */
  tagline?: string;
}

export interface HeroCarouselConfig {
  enabled: boolean;
  /** Upper ribbon — services menu style (small caps). */
  serviceRibbon: string;
  locationLine: string;
  /** Brand line — pairs with script titles (Playfair on glam theme). */
  brandLine: string;
  /** Prepended as the first slide (overview); individual services follow in `slides`. */
  introSlide?: HeroCarouselIntroSlide;
  slides: HeroCarouselSlide[];
  /** Auto-advance interval in ms; omit or 0 to disable. */
  autoplayMs?: number;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface PracticeSpotlightConfig {
  /** Upper teal / accent caps line */
  ribbonTop: string;
  /** Main serif headline — usually business name */
  headline: string;
  /** First body block; may include `<strong>` for service names */
  bodyHtml: string;
  /** Optional second paragraph */
  bodyHtml2?: string;
  /** Lower accent caps line (optional) */
  ribbonBottom?: string;
  image: string;
  imageAlt: string;
}

export interface OwnerConfig {
  /** Friendly name patients use, e.g. "Odi" */
  preferredName: string;
  fullName: string;
  credentials: string;
  roleTitle: string;
  photoUrl: string;
  photoAlt: string;
  /** One line under the headline */
  intro: string;
  /** Full bio — each string is a paragraph */
  bioParagraphs: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image?: string;
  priceFrom?: string;
  features: string[];
  process: ProcessStep[];
  faq: FaqItem[];
}

export interface ResultItem {
  /** Single image — omit when using `images` for a carousel */
  imageSrc?: string;
  /** Multiple images — renders as an in-card carousel */
  images?: string[];
  /** Per-slide alt text; should match `images` length when provided */
  imageAlts?: string[];
  /** Fallback alt when only `imageSrc`; base text when using `images` without `imageAlts` */
  alt: string;
  description: string;
  /** Optional short headline above the caption */
  title?: string;
  /** Optional bullet list (e.g. IV benefits) — shown below `description` */
  benefits?: string[];
  /** Label above `benefits`; default “Helps with” when `benefits` is set */
  benefitsHeading?: string;
}

export interface ResultsSectionConfig {
  eyebrow: string;
  title: string;
  lede: string;
  items: ResultItem[];
}

export interface ProcessStep {
  step: number;
  icon?: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  /** ISO date: YYYY-MM-DD */
  date: string;
  service: string;
  quote: string;
  photoUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  columns: {
    heading: string;
    links: NavLink[];
  }[];
}
