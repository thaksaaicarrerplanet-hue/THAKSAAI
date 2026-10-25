/**
 * ============================================================================
 * THAKSAAI â€” "Architectural Intelligence" Design System
 * Single Source of Truth for Design Tokens & Brand Metadata
 * ============================================================================
 */

export const tokens = {
  color: {
    midnight:  "#101828", // ink, dark spatial stages
    midnight2: "#1A2335", // elevated dark surface
    porcelain: "#F7F8F4", // primary editorial page background
    paper:     "#FFFFFF", // crisp card surface
    hairline:  "#E3E5DE", // precision structural border
    slate:     "#5B6475", // secondary supporting text
    precision: "#3659D9", // primary action / links
    electric:  "#C7F36B", // signal accent â€” replaces #C7F36B
    danger:    "#D14343", // error / alert state
  },
  font: {
    display: "'Plus Jakarta Sans', 'Instrument Sans', system-ui, -apple-system, sans-serif",
    body:    "'Work Sans', 'Inter', system-ui, -apple-system, sans-serif",
    mono:    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
    serif:   "'Instrument Serif', Georgia, serif",
  },
  type: {
    d1:    "clamp(2.5rem, 5.2vw + 1rem, 4.75rem)",
    d2:    "clamp(2.1rem, 3.8vw + 0.9rem, 3.75rem)",
    h1:    "clamp(1.75rem, 2.4vw + 1rem, 2.75rem)",
    h2:    "1.5rem",
    body:  "1.0625rem",
    small: "0.875rem",
    micro: "0.75rem",
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192],
  radius: { sm: 6, md: 10, lg: 16, xl: 24 },
  elevation: {
    e0: "none",
    e1: "0 1px 2px rgba(16, 24, 40, 0.06)",
    e2: "0 8px 24px -12px rgba(16, 24, 40, 0.18)",
    e3: "0 24px 48px -24px rgba(16, 24, 40, 0.28)",
    e4: "0 40px 80px -32px rgba(16, 24, 40, 0.38)",
  },
  z: { base: 0, raised: 10, sticky: 40, nav: 50, overlay: 80, modal: 100, toast: 120 },
  motion: {
    ease:   [0.22, 1, 0.36, 1],
    easeIn: [0.4, 0, 1, 1],
    spring: { type: "spring", stiffness: 260, damping: 30, mass: 0.9 },
    dur:    { xs: 0.12, sm: 0.2, md: 0.35, lg: 0.6, xl: 0.9 },
  },
};

export const MASTER_PALETTE = {
  ink:          tokens.color.midnight,
  inkMuted:     tokens.color.slate,
  paper:        tokens.color.porcelain,
  paperDeep:    "#EAECE4",
  hairline:     tokens.color.hairline,
  hairlineDark: "rgba(16, 24, 40, 0.14)",
  brandGreen:   tokens.color.electric,
  midnight:     tokens.color.midnight,
  midnight2:    tokens.color.midnight2,
  precision:    tokens.color.precision,

  background:   tokens.color.porcelain,
  textPrimary:  tokens.color.midnight,
  textMuted:    tokens.color.slate,
  accentWhite:  tokens.color.paper,
  surfaceDark:  tokens.color.midnight,
  borderSubtle: tokens.color.hairline,
  neonLime:     tokens.color.electric,
  primary:      { main: tokens.color.precision, dark: tokens.color.midnight, contrastText: "#FFFFFF" },
  secondary:    { main: tokens.color.electric, contrastText: tokens.color.midnight },
};

export const MASTER_FONTS = {
  serif:   tokens.font.serif,
  sans:    tokens.font.body,
  mono:    tokens.font.mono,
  display: tokens.font.display,
  body:    tokens.font.body,
};

export const SITE_BRANDING = {
  name:          "THAKSAAI",
  domain:        "https://www.thaksaai.in",
  supportPhone:  "+91 94948 08669",
  contactPhone:  "+91 94948 08669",
  contactEmail:  "contact@thaksaai.in",
  hrEmail:       "hr@thaksaai.in",
  buildingName:  "Jyothi Imperial",
  shortAddress:  "Gachibowli, Hyderabad",
  officeAddress: "Jyothi Imperial, Diamond Hills, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032",
  address:       "Jyothi Imperial, Diamond Hills, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032",
  copyright:     `Â© ${new Date().getFullYear()} THAKSAAI Directorate. Industry-Academia Capability Institution.`,
  heroSub:       "THAKSAAI conducts hands-on campus workshops, structured Campus Recruitment Training (CRT), supervised internships, and defense-ready final-year engineering projects across Hyderabad, Warangal, and Telangana.",
};

export const WHATSAPP_NUMBER = SITE_BRANDING.contactPhone.replace(/\D/g, "");

export const THEME = {
  name:         SITE_BRANDING.name,
  domain:       SITE_BRANDING.domain,
  contactPhone: SITE_BRANDING.contactPhone,
  contactEmail: SITE_BRANDING.contactEmail,
  hrEmail:      SITE_BRANDING.hrEmail,
  buildingName: SITE_BRANDING.buildingName,
  shortAddress: SITE_BRANDING.shortAddress,
  address:      SITE_BRANDING.address,
  copyright:    SITE_BRANDING.copyright,
  colors:       MASTER_PALETTE,
  typography:   MASTER_FONTS,
  tokens,
  metrics: {
    headerHeight: "72px",
    containerMax: "1280px",
    gridGap:      "2rem",
    cardRadius:   "16px",
  },
  content: {
    heroHeading: "Engineered to learn. Built to do.",
    heroSub:     SITE_BRANDING.heroSub,
    ctaPrimary:  "Partner with us",
    ctaSecondary: "Explore programs",
  },
};
