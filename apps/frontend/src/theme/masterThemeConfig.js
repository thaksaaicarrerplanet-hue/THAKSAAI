/**
 * ============================================================================
 * Mentality-Inspired Design System Adapted for THAKSAAI
 * Master Theme & Branding Configuration
 * ============================================================================
 */

export const MASTER_PALETTE = {
  // Canonical Institutional Design Tokens
  ink: "#1a1a1a",
  inkMuted: "#64748b",
  paper: "#EDEEF5",
  paperDeep: "#E2E4EE",
  hairline: "rgba(0, 0, 0, 0.08)",
  hairlineDark: "rgba(0, 0, 0, 0.15)",
  brandGreen: "#9fff00",
  midnight: "#020617",

  // Extended Utility Palette Tokens
  background: "#EDEEF5",
  textPrimary: "#1a1a1a",
  textMuted: "#64748b",
  accentWhite: "#ffffff",
  surfaceDark: "#020617",
  borderSubtle: "#cbd5e1",
  neonLime: "#9fff00",
  primary: { main: "#1a1a1a", dark: "#0f172a", contrastText: "#ffffff" },
  secondary: { main: "#9fff00", contrastText: "#000000" }
};

export const MASTER_FONTS = {
  serif: "'Instrument Serif', serif",
  sans: "'Work Sans', sans-serif",
  mono: "'Plus Jakarta Sans', sans-serif",
  display: "'Instrument Serif', serif",
  body: "'Work Sans', sans-serif",
};

export const SITE_BRANDING = {
  name: "THAKSAAI",
  domain: "https://www.thaksaai.in",
  supportPhone: "+91 94948 08669",
  contactPhone: "+91 94948 08669",
  contactEmail: "contact@thaksaai.in",
  hrEmail: "hr@thaksaai.in",
  buildingName: "Jyothi Imperial",
  shortAddress: "Gachibowli, Hyderabad",
  officeAddress: "Jyothi Imperial, Diamond Hills, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032",
  address: "Jyothi Imperial, Diamond Hills, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032",
  copyright: `© ${new Date().getFullYear()} THAKSAAI Directorate. Verified Placement Readiness.`,
  heroSub: "THAKSAAI operates on-campus algorithmic bootcamps and verified engineering capstones. Designed explicitly for college leadership demanding top-tier placement milestones without textbook redundancy.",
};

/**
 * Centralised WhatsApp contact number (E.164 format, no +).
 * Always derive WhatsApp URLs from this — never hardcode the number directly.
 */
export const WHATSAPP_NUMBER = SITE_BRANDING.contactPhone.replace(/\D/g, "");

export const THEME = {
  name: SITE_BRANDING.name,
  domain: SITE_BRANDING.domain,
  contactPhone: SITE_BRANDING.contactPhone,
  contactEmail: SITE_BRANDING.contactEmail,
  hrEmail: SITE_BRANDING.hrEmail,
  buildingName: SITE_BRANDING.buildingName,
  shortAddress: SITE_BRANDING.shortAddress,
  address: SITE_BRANDING.address,
  copyright: SITE_BRANDING.copyright,
  colors: MASTER_PALETTE,
  typography: MASTER_FONTS,
  metrics: {
    headerHeight: "84px",
    containerMax: "1440px",
    gridGap: "2rem",
    cardRadius: "4px",
  },
  content: {
    heroHeading: "Develop engineers who can create value independently.",
    heroSub: SITE_BRANDING.heroSub,
    ctaPrimary: "Initialize College Partnership",
    ctaSecondary: "View Placement Milestones",
  },
};
