/**
 * ============================================================================
 *  THREE THEME PRESETS
 * ============================================================================
 *
 *  Each theme is a complete design system — colors, typography, spacing,
 *  motion. Switch between them by setting `theme` in site.config.ts.
 *
 *  All three pull only from Google Fonts (free, portable, fast) and use
 *  CSS custom properties so the runtime cost of theming is zero.
 *
 *  Don't edit a theme to make small tweaks for one business. Either:
 *    1. Pick a different preset (best — saves you hours).
 *    2. Add a 4th preset here and select it in site.config.ts.
 *    3. (Last resort) Override individual tokens in global.css under
 *       a `[data-theme="xxx"]` selector.
 * ============================================================================
 */

import type { ThemeName } from './types';

export interface ThemeTokens {
  name: string;
  description: string;
  colors: {
    /** Page background. */
    bg: string;
    /** Slightly elevated surface (cards, sections). */
    surface: string;
    /** Lower-contrast surface for alternating sections. */
    surfaceAlt: string;
    /** Primary text. */
    text: string;
    /** Secondary text (descriptions, captions). */
    textMuted: string;
    /** Tertiary text (timestamps, micro-copy). */
    textSubtle: string;
    /** Primary brand color (used for CTAs, links). */
    primary: string;
    /** Hover/active state of primary. */
    primaryHover: string;
    /** Foreground color on primary background. */
    primaryFg: string;
    /** Accent color (used sparingly for emphasis). */
    accent: string;
    accentFg: string;
    /** Border color (subtle, used everywhere). */
    border: string;
    /** Stronger border (form fields, dividers). */
    borderStrong: string;
    /** Success / positive state. */
    success: string;
    /** Warning state. */
    warning: string;
    /** Error / destructive state. */
    error: string;
    /** Star rating color. */
    star: string;
  };
  fonts: {
    /** Display font (headlines, hero). */
    display: string;
    /** Body font (paragraphs, UI). */
    body: string;
    /** Monospace (only used if needed). */
    mono: string;
    /** Google Fonts URL — embedded automatically. */
    googleFontsUrl: string;
  };
  type: {
    /** Base font size in rem. */
    base: string;
    /** Type scale ratio (e.g., 1.25 = major third). */
    scale: number;
    /** Line height for body. */
    lineHeight: string;
    /** Line height for headlines. */
    lineHeightDisplay: string;
    /** Letter spacing for headlines. */
    letterSpacingDisplay: string;
    /** Letter spacing for body. */
    letterSpacingBody: string;
    /** Font weight for body. */
    weightBody: number;
    /** Font weight for body strong/bold. */
    weightBodyBold: number;
    /** Font weight for display/headlines. */
    weightDisplay: number;
  };
  space: {
    /** Container max-width. */
    container: string;
    /** Container side padding. */
    containerPad: string;
    /** Section padding (vertical). */
    sectionPad: string;
    /** Section padding for hero (extra-large). */
    heroPad: string;
  };
  radius: {
    /** Small radius (buttons, inputs). */
    sm: string;
    /** Medium radius (cards). */
    md: string;
    /** Large radius (hero cards, callouts). */
    lg: string;
    /** Pill (fully rounded). */
    pill: string;
  };
  shadow: {
    /** Subtle shadow. */
    sm: string;
    /** Card shadow. */
    md: string;
    /** Lifted shadow (hover state). */
    lg: string;
    /** Focus ring. */
    focus: string;
  };
  motion: {
    /** Default transition duration. */
    duration: string;
    /** Default easing curve. */
    easing: string;
  };
  /** Optional: distinctive background pattern or texture. */
  decoration?: string;
}

// ============================================================================
//  THEME 1 — TRUST-FORWARD WARM
//  Most universal. Fraunces (display) + DM Sans (body). Warm, inviting.
//  Best for: any service business — plumber → lawyer → dentist.
// ============================================================================
const warm: ThemeTokens = {
  name: 'Trust-Forward Warm',
  description:
    'Universal default. Warm off-white background, terracotta primary, ' +
    'deep teal accent. Sophisticated serif display + humanist sans body.',
  colors: {
    bg: '#FAF7F2',
    surface: '#FFFFFF',
    surfaceAlt: '#F2EDE4',
    text: '#1C1B17',
    textMuted: '#5A554B',
    textSubtle: '#8E8779',
    primary: '#B8462C',
    primaryHover: '#9C3A24',
    primaryFg: '#FFFFFF',
    accent: '#0F4C5C',
    accentFg: '#FFFFFF',
    border: '#E8E1D4',
    borderStrong: '#D5CCBA',
    success: '#2E7D5B',
    warning: '#C77B19',
    error: '#B83C3C',
    star: '#D4A537',
  },
  fonts: {
    display: '"Fraunces", "Times New Roman", Georgia, serif',
    body: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1rem',
    scale: 1.25,
    lineHeight: '1.65',
    lineHeightDisplay: '1.05',
    letterSpacingDisplay: '-0.02em',
    letterSpacingBody: '-0.005em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 500,
  },
  space: {
    container: '1240px',
    containerPad: 'clamp(1.25rem, 4vw, 2rem)',
    sectionPad: 'clamp(3rem, 6vw, 5rem)',
    heroPad: 'clamp(2rem, 4vw, 3.5rem)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '18px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(28, 27, 23, 0.04), 0 1px 1px rgba(28, 27, 23, 0.03)',
    md: '0 4px 12px rgba(28, 27, 23, 0.06), 0 2px 4px rgba(28, 27, 23, 0.04)',
    lg: '0 12px 32px rgba(28, 27, 23, 0.10), 0 4px 12px rgba(28, 27, 23, 0.05)',
    focus: '0 0 0 3px rgba(184, 70, 44, 0.25)',
  },
  motion: {
    duration: '240ms',
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
};

// ============================================================================
//  THEME 2 — EDITORIAL PREMIUM
//  Sophisticated, high-end. Instrument Serif (display) + Manrope (body).
//  Best for: law, accounting, consulting, design, agencies, premium services.
// ============================================================================
const editorial: ThemeTokens = {
  name: 'Editorial Premium',
  description:
    'Sophisticated and high-end. Parchment background, deep brown primary, ' +
    'editorial serif display + geometric humanist body. Reads like a magazine.',
  colors: {
    bg: '#F4EFE6',
    surface: '#FBF7EF',
    surfaceAlt: '#EAE2D2',
    text: '#221E18',
    textMuted: '#5C5447',
    textSubtle: '#8B8275',
    primary: '#3F2E1E',
    primaryHover: '#2A1F14',
    primaryFg: '#F4EFE6',
    accent: '#A0763A',
    accentFg: '#FBF7EF',
    border: '#DDD3BD',
    borderStrong: '#C4B89D',
    success: '#3F6B4F',
    warning: '#A0763A',
    error: '#A03F2C',
    star: '#A0763A',
  },
  fonts: {
    display: '"Instrument Serif", "Times New Roman", Georgia, serif',
    body: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1.0625rem',
    scale: 1.333,
    lineHeight: '1.7',
    lineHeightDisplay: '1.0',
    letterSpacingDisplay: '-0.025em',
    letterSpacingBody: '-0.005em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 400,
  },
  space: {
    container: '1180px',
    containerPad: 'clamp(1.5rem, 4vw, 2.5rem)',
    sectionPad: 'clamp(3.5rem, 7vw, 5.5rem)',
    heroPad: 'clamp(2.5rem, 5vw, 4.5rem)',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '12px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(34, 30, 24, 0.04)',
    md: '0 6px 20px rgba(34, 30, 24, 0.08), 0 2px 6px rgba(34, 30, 24, 0.04)',
    lg: '0 16px 48px rgba(34, 30, 24, 0.12), 0 6px 16px rgba(34, 30, 24, 0.06)',
    focus: '0 0 0 3px rgba(63, 46, 30, 0.25)',
  },
  motion: {
    duration: '300ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// ============================================================================
//  THEME 3 — MODERN TECHNICAL
//  Modern, tech-forward, dark. Geist (display) + Inter (body).
//  Best for: IT services, software consulting, engineering, modern agencies.
// ============================================================================
const technical: ThemeTokens = {
  name: 'Modern Technical',
  description:
    'Modern dark theme. Deep zinc background, electric blue primary, ' +
    'crisp geometric sans throughout. Tech-forward, confident, clean.',
  colors: {
    bg: '#0B0D10',
    surface: '#13161B',
    surfaceAlt: '#1A1E25',
    text: '#F5F7FA',
    textMuted: '#A1A8B3',
    textSubtle: '#6B7280',
    primary: '#3D8EFF',
    primaryHover: '#5A9FFF',
    primaryFg: '#FFFFFF',
    accent: '#10B981',
    accentFg: '#FFFFFF',
    border: '#1F242C',
    borderStrong: '#2A313A',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    star: '#FBBF24',
  },
  fonts: {
    display: '"Geist", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"Geist Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1rem',
    scale: 1.25,
    lineHeight: '1.6',
    lineHeightDisplay: '1.08',
    letterSpacingDisplay: '-0.03em',
    letterSpacingBody: '-0.01em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 600,
  },
  space: {
    container: '1280px',
    containerPad: 'clamp(1.25rem, 4vw, 2rem)',
    sectionPad: 'clamp(3rem, 6vw, 5rem)',
    heroPad: 'clamp(2rem, 4vw, 3.5rem)',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)',
    lg: '0 12px 32px rgba(61, 142, 255, 0.18), 0 4px 12px rgba(0, 0, 0, 0.3)',
    focus: '0 0 0 3px rgba(61, 142, 255, 0.40)',
  },
  motion: {
    duration: '200ms',
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
  },
};

// ============================================================================
//  THEME 4 — COASTAL CALM
//  Light, airy, refined. Cormorant Garamond (display) + Outfit (body).
//  Best for: spas, salons, hospitality, wellness, beach-area services.
// ============================================================================
const coastal: ThemeTokens = {
  name: 'Coastal Calm',
  description:
    'Light and airy with soft ocean tones. Sandy off-white background, ' +
    'gentle blue primary, warm sand accent. Refined serif display + clean ' +
    'humanist sans body. Reads like a Kinfolk feature.',
  colors: {
    bg: '#F7F4EE',
    surface: '#FFFFFF',
    surfaceAlt: '#EBE6DB',
    text: '#1F2A2E',
    textMuted: '#4F6066',
    textSubtle: '#8FA0A6',
    primary: '#5A91A8',
    primaryHover: '#4A7E94',
    primaryFg: '#FFFFFF',
    accent: '#D9A574',
    accentFg: '#1F2A2E',
    border: '#DCD5C7',
    borderStrong: '#BFB6A4',
    success: '#4F8B7D',
    warning: '#D9A574',
    error: '#B85C5C',
    star: '#C9A567',
  },
  fonts: {
    display: '"Cormorant Garamond", "Times New Roman", Georgia, serif',
    body: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1.0625rem',
    scale: 1.333,
    lineHeight: '1.75',
    lineHeightDisplay: '1.0',
    letterSpacingDisplay: '-0.02em',
    letterSpacingBody: '0',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 500,
  },
  space: {
    container: '1200px',
    containerPad: 'clamp(1.5rem, 4vw, 2.5rem)',
    sectionPad: 'clamp(3.5rem, 6.5vw, 5.5rem)',
    heroPad: 'clamp(2.25rem, 4.5vw, 4rem)',
  },
  radius: {
    sm: '8px',
    md: '14px',
    lg: '24px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(31, 42, 46, 0.04)',
    md: '0 4px 16px rgba(31, 42, 46, 0.06), 0 2px 4px rgba(31, 42, 46, 0.03)',
    lg: '0 16px 40px rgba(31, 42, 46, 0.10), 0 4px 12px rgba(31, 42, 46, 0.04)',
    focus: '0 0 0 3px rgba(90, 145, 168, 0.30)',
  },
  motion: {
    duration: '320ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// ============================================================================
//  THEME 5 — HERITAGE TRADE
//  Sturdy, established, proudly old-school. Roboto Slab (display) + Inter (body).
//  Best for: plumbers, electricians, contractors, mechanics, landscapers.
// ============================================================================
const heritage: ThemeTokens = {
  name: 'Heritage Trade',
  description:
    'Established craftsmanship aesthetic. Cream background, deep forest green ' +
    'primary, copper accent. Slab serif display + clean sans body. Reads like ' +
    'a decades-old family business that takes pride in their work.',
  colors: {
    bg: '#F4EFE3',
    surface: '#FBF7EC',
    surfaceAlt: '#E6DFCC',
    text: '#14271F',
    textMuted: '#4D5950',
    textSubtle: '#7C8579',
    primary: '#2A4D38',
    primaryHover: '#1F3A29',
    primaryFg: '#F4EFE3',
    accent: '#B8742A',
    accentFg: '#FBF7EC',
    border: '#D8CFB8',
    borderStrong: '#B8AB8C',
    success: '#5A8C5C',
    warning: '#B8742A',
    error: '#9F3A2A',
    star: '#B8742A',
  },
  fonts: {
    display: '"Roboto Slab", Georgia, serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1rem',
    scale: 1.25,
    lineHeight: '1.65',
    lineHeightDisplay: '1.1',
    letterSpacingDisplay: '-0.01em',
    letterSpacingBody: '-0.005em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 700,
  },
  space: {
    container: '1240px',
    containerPad: 'clamp(1.25rem, 4vw, 2rem)',
    sectionPad: 'clamp(3rem, 6vw, 5rem)',
    heroPad: 'clamp(2rem, 4vw, 3.5rem)',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '10px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(20, 39, 31, 0.06)',
    md: '0 3px 10px rgba(20, 39, 31, 0.08), 0 1px 3px rgba(20, 39, 31, 0.05)',
    lg: '0 10px 28px rgba(20, 39, 31, 0.14), 0 3px 10px rgba(20, 39, 31, 0.06)',
    focus: '0 0 0 3px rgba(42, 77, 56, 0.30)',
  },
  motion: {
    duration: '220ms',
    easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
};

// ============================================================================
//  THEME 6 — CLINICAL CALM
//  Calm, professional, restoring. Crimson Pro (display) + Plus Jakarta Sans (body).
//  Best for: dental, medical, therapy, clinics, wellness practices.
// ============================================================================
const clinical: ThemeTokens = {
  name: 'Clinical Calm',
  description:
    'Calm professional aesthetic for healthcare. Soft mint-white background, ' +
    'medical sage primary, gentle terracotta accent. Refined humanist serif + ' +
    'clean geometric sans. Reads as both expert and reassuring.',
  colors: {
    bg: '#F7FAF8',
    surface: '#FFFFFF',
    surfaceAlt: '#EAF1EC',
    text: '#1A2D26',
    textMuted: '#4D6258',
    textSubtle: '#8AA197',
    primary: '#4A8C7A',
    primaryHover: '#3A7565',
    primaryFg: '#FFFFFF',
    accent: '#C97D5C',
    accentFg: '#FFFFFF',
    border: '#DCE5DF',
    borderStrong: '#B8C7BD',
    success: '#4A8C7A',
    warning: '#DAB872',
    error: '#C75555',
    star: '#DAB872',
  },
  fonts: {
    display: '"Crimson Pro", Georgia, serif',
    body: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1.0625rem',
    scale: 1.25,
    lineHeight: '1.7',
    lineHeightDisplay: '1.1',
    letterSpacingDisplay: '-0.015em',
    letterSpacingBody: '-0.01em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 500,
  },
  space: {
    container: '1200px',
    containerPad: 'clamp(1.25rem, 4vw, 2rem)',
    sectionPad: 'clamp(3.5rem, 6.5vw, 5.5rem)',
    heroPad: 'clamp(2rem, 4vw, 3.5rem)',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(26, 45, 38, 0.04)',
    md: '0 4px 14px rgba(26, 45, 38, 0.06), 0 2px 4px rgba(26, 45, 38, 0.03)',
    lg: '0 14px 36px rgba(26, 45, 38, 0.10), 0 4px 10px rgba(26, 45, 38, 0.04)',
    focus: '0 0 0 3px rgba(74, 140, 122, 0.30)',
  },
  motion: {
    duration: '280ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// ============================================================================
//  THEME 7 — LUXURY NOIR
//  Sophisticated, ultra-premium. Cormorant Garamond (display) + Inter (body).
//  Best for: real estate, finance, jewelry, luxury cleaning, premium specialty.
// ============================================================================
const luxury: ThemeTokens = {
  name: 'Luxury Noir',
  description:
    'Ultra-premium dark aesthetic. Deep warm-black background, champagne gold ' +
    'primary. Editorial serif display + crisp sans body. Reads like a Hermès ' +
    'showroom or a private banking site.',
  colors: {
    bg: '#0E0D0B',
    surface: '#161412',
    surfaceAlt: '#1F1C19',
    text: '#F0E9D8',
    textMuted: '#B5AA94',
    textSubtle: '#7A7264',
    primary: '#C9A567',
    primaryHover: '#D4B578',
    primaryFg: '#0E0D0B',
    accent: '#8C6B3D',
    accentFg: '#F0E9D8',
    border: '#2A2622',
    borderStrong: '#3D3833',
    success: '#8FA876',
    warning: '#C9A567',
    error: '#C77A5C',
    star: '#C9A567',
  },
  fonts: {
    display: '"Cormorant Garamond", "Times New Roman", Georgia, serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1rem',
    scale: 1.333,
    lineHeight: '1.7',
    lineHeightDisplay: '1.05',
    letterSpacingDisplay: '-0.02em',
    letterSpacingBody: '-0.005em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 500,
  },
  space: {
    container: '1240px',
    containerPad: 'clamp(1.5rem, 4vw, 2.5rem)',
    sectionPad: 'clamp(3.5rem, 7vw, 6rem)',
    heroPad: 'clamp(2.5rem, 5vw, 4.5rem)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '14px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
    md: '0 4px 16px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
    lg: '0 16px 40px rgba(201, 165, 103, 0.20), 0 4px 12px rgba(0, 0, 0, 0.4)',
    focus: '0 0 0 3px rgba(201, 165, 103, 0.40)',
  },
  motion: {
    duration: '300ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// ============================================================================
//  THEME 8 — BOLD ENERGETIC
//  High-contrast, action-oriented. Bricolage Grotesque (display) + Inter (body).
//  Best for: fitness, automotive, modern detailing/cleaning, action services.
// ============================================================================
const bold: ThemeTokens = {
  name: 'Bold Energetic',
  description:
    'High-contrast modern aesthetic. Pure white background, vibrant coral primary, ' +
    'sharp black accent. Bold modern grotesque display + crisp sans body. Reads ' +
    'like a launch announcement.',
  colors: {
    bg: '#FFFFFF',
    surface: '#FAFAFA',
    surfaceAlt: '#F0F0EE',
    text: '#0A0A0A',
    textMuted: '#525252',
    textSubtle: '#8A8A8A',
    primary: '#FF5733',
    primaryHover: '#E64525',
    primaryFg: '#FFFFFF',
    accent: '#0A0A0A',
    accentFg: '#FFFFFF',
    border: '#E5E5E5',
    borderStrong: '#C7C7C7',
    success: '#00B881',
    warning: '#FFB800',
    error: '#E63946',
    star: '#FFB800',
  },
  fonts: {
    display: '"Bricolage Grotesque", -apple-system, system-ui, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap',
  },
  type: {
    base: '1rem',
    scale: 1.333,
    lineHeight: '1.55',
    lineHeightDisplay: '0.95',
    letterSpacingDisplay: '-0.04em',
    letterSpacingBody: '-0.01em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 700,
  },
  space: {
    container: '1320px',
    containerPad: 'clamp(1.25rem, 4vw, 2rem)',
    sectionPad: 'clamp(2.75rem, 5.5vw, 4.5rem)',
    heroPad: 'clamp(1.5rem, 3vw, 3rem)',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '10px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
    lg: '0 8px 24px rgba(255, 87, 51, 0.20), 0 4px 8px rgba(0, 0, 0, 0.06)',
    focus: '0 0 0 3px rgba(255, 87, 51, 0.30)',
  },
  motion: {
    duration: '180ms',
    easing: 'cubic-bezier(0.2, 0, 0, 1)',
  },
};

// ============================================================================
//  THEME 9 — GLAM (BEAUTIFUL YOU MED SPA)
//  Soft, feminine, refined. Rose-gold pink primary + charcoal accent + crisp
//  white background. Playfair Display (display) + Plus Jakarta Sans (body) +
//  Sacramento (script accent — for the brand wordmark moments).
//  Best for: med spas, aesthetic clinics, beauty boutiques, female-founded
//  service businesses with a glam-but-clinical aesthetic.
// ============================================================================
const glam: ThemeTokens = {
  name: 'Boutique Glam',
  description:
    'Refined feminine aesthetic for boutique med spas and aesthetic studios. ' +
    'Crisp white background, rose-gold pink primary, charcoal accent. Editorial ' +
    'serif display (Playfair Display) + clean sans body (Plus Jakarta Sans) + ' +
    'a Sacramento script for hero/brand-mark moments. Reads as both clinical ' +
    'and beautiful.',
  colors: {
    bg: '#FFFFFF',
    surface: '#FFFBFC',
    surfaceAlt: '#FBEFF1',
    text: '#1A1014',
    textMuted: '#5C4D52',
    textSubtle: '#9A8B90',
    primary: '#C2748A',
    primaryHover: '#A95E73',
    primaryFg: '#FFFFFF',
    accent: '#1A1014',
    accentFg: '#FFFFFF',
    border: '#F0E2E5',
    borderStrong: '#D9C5CA',
    success: '#5A8C7A',
    warning: '#D9A574',
    error: '#B85C5C',
    star: '#C9A567',
  },
  fonts: {
    display: '"Playfair Display", "Times New Roman", Georgia, serif',
    body: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Menlo, monospace',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sacramento&display=swap',
  },
  type: {
    base: '1.0625rem',
    scale: 1.333,
    lineHeight: '1.7',
    lineHeightDisplay: '1.05',
    letterSpacingDisplay: '-0.015em',
    letterSpacingBody: '-0.005em',
    weightBody: 400,
    weightBodyBold: 600,
    weightDisplay: 500,
  },
  space: {
    container: '1200px',
    containerPad: 'clamp(1.5rem, 4vw, 2.5rem)',
    sectionPad: 'clamp(3.5rem, 6.5vw, 5.5rem)',
    heroPad: 'clamp(2.25rem, 4.5vw, 4rem)',
  },
  radius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(26, 16, 20, 0.04)',
    md: '0 4px 16px rgba(194, 116, 138, 0.08), 0 2px 4px rgba(26, 16, 20, 0.04)',
    lg: '0 16px 40px rgba(194, 116, 138, 0.14), 0 4px 12px rgba(26, 16, 20, 0.06)',
    focus: '0 0 0 3px rgba(194, 116, 138, 0.30)',
  },
  motion: {
    duration: '300ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

// ============================================================================
//  EXPORT
// ============================================================================
export const themes: Record<ThemeName, ThemeTokens> = {
  warm,
  editorial,
  technical,
  coastal,
  heritage,
  clinical,
  luxury,
  bold,
  glam,
};

/**
 * Convert a theme's tokens into a CSS custom properties string.
 * Used by BaseLayout to inject the active theme's vars into <head>.
 */
export function themeToCssVars(theme: ThemeTokens): string {
  const lines: string[] = [];
  // Colors
  for (const [key, val] of Object.entries(theme.colors)) {
    lines.push(`  --color-${kebab(key)}: ${val};`);
  }
  // Fonts
  lines.push(`  --font-display: ${theme.fonts.display};`);
  lines.push(`  --font-body: ${theme.fonts.body};`);
  lines.push(`  --font-mono: ${theme.fonts.mono};`);
  // Type
  lines.push(`  --type-base: ${theme.type.base};`);
  lines.push(`  --type-scale: ${theme.type.scale};`);
  lines.push(`  --type-line-height: ${theme.type.lineHeight};`);
  lines.push(`  --type-line-height-display: ${theme.type.lineHeightDisplay};`);
  lines.push(`  --type-letter-spacing-display: ${theme.type.letterSpacingDisplay};`);
  lines.push(`  --type-letter-spacing-body: ${theme.type.letterSpacingBody};`);
  lines.push(`  --type-weight-body: ${theme.type.weightBody};`);
  lines.push(`  --type-weight-body-bold: ${theme.type.weightBodyBold};`);
  lines.push(`  --type-weight-display: ${theme.type.weightDisplay};`);
  // Space
  for (const [key, val] of Object.entries(theme.space)) {
    lines.push(`  --space-${kebab(key)}: ${val};`);
  }
  // Radius
  for (const [key, val] of Object.entries(theme.radius)) {
    lines.push(`  --radius-${key}: ${val};`);
  }
  // Shadow
  for (const [key, val] of Object.entries(theme.shadow)) {
    lines.push(`  --shadow-${key}: ${val};`);
  }
  // Motion
  lines.push(`  --motion-duration: ${theme.motion.duration};`);
  lines.push(`  --motion-easing: ${theme.motion.easing};`);
  return ':root {\n' + lines.join('\n') + '\n}';
}

function kebab(s: string): string {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
