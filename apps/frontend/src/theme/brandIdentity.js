/**
 * ============================================================================
 * MASTER BRAND IDENTITY & ASSET REGISTRY - THAKSAAI
 * Enterprise Identity Configuration & Cache-Busting Asset Pipeline
 * ============================================================================
 */

export const BRAND_VERSION = "5.0.0-THAKSAAI";

export const BRAND_ASSETS = {
  // Primary Interactive UI Logos
  logoPng: `/brand-logo.png?v=${BRAND_VERSION}`,
  logoSvg: `/brand-logo.svg?v=${BRAND_VERSION}`,
  logoDarkSvg: `/brand-logo-dark.svg?v=${BRAND_VERSION}`,
  logoLightSvg: `/brand-logo-light.svg?v=${BRAND_VERSION}`,
  loginLogo: `/login-logo.svg?v=${BRAND_VERSION}`,
  footerLogo: `/footer-logo.svg?v=${BRAND_VERSION}`,
  headerLogo: `/header-logo.svg?v=${BRAND_VERSION}`,

  // Favicon Family (Cache Immune & Self-Contained)
  faviconIco: `/favicon.ico?v=${BRAND_VERSION}`,
  faviconSvg: `/favicon.svg?v=${BRAND_VERSION}`,
  favicon16: `/favicon-16x16.png?v=${BRAND_VERSION}`,
  favicon32: `/favicon-32x32.png?v=${BRAND_VERSION}`,
  favicon48: `/favicon-48x48.png?v=${BRAND_VERSION}`,
  favicon64: `/favicon-64x64.png?v=${BRAND_VERSION}`,
  favicon96: `/favicon-96x96.png?v=${BRAND_VERSION}`,
  favicon128: `/favicon-128x128.png?v=${BRAND_VERSION}`,
  favicon192: `/favicon-192x192.png?v=${BRAND_VERSION}`,
  favicon256: `/favicon-256x256.png?v=${BRAND_VERSION}`,
  favicon512: `/favicon-512x512.png?v=${BRAND_VERSION}`,

  // Mobile & Operating System Touch Icons
  appleTouchIcon: `/apple-touch-icon.png?v=${BRAND_VERSION}`,
  appleTouchIcon152: `/apple-touch-icon-152x152.png?v=${BRAND_VERSION}`,
  appleTouchIcon167: `/apple-touch-icon-167x167.png?v=${BRAND_VERSION}`,
  appleTouchIcon180: `/apple-touch-icon-180x180.png?v=${BRAND_VERSION}`,
  androidChrome192: `/android-chrome-192x192.png?v=${BRAND_VERSION}`,
  androidChrome512: `/android-chrome-512x512.png?v=${BRAND_VERSION}`,
  msTile150: `/mstile-150x150.png?v=${BRAND_VERSION}`,
  maskIcon: `/mask-icon.svg?v=${BRAND_VERSION}`,

  // Social Sharing & AI Discovery Assets (Canonical TLD: www.thaksaai.in)
  ogImage: `https://www.thaksaai.in/og-image.png?v=${BRAND_VERSION}`,
  twitterCard: `https://www.thaksaai.in/twitter-card.png?v=${BRAND_VERSION}`,
  organizationLogo: `https://www.thaksaai.in/organization-logo.png?v=${BRAND_VERSION}`,

  // PWA Manifests
  webmanifest: `/site.webmanifest?v=${BRAND_VERSION}`,
  manifestJson: `/manifest.json?v=${BRAND_VERSION}`,
};

export const BRAND_METADATA = {
  name: "THAKSAAI",
  shortName: "THAKSAAI",
  domain: "www.thaksaai.in",
  url: "https://www.thaksaai.in",
  tagline: "Develop engineers who can create value independently.",
  description:
    "Industry-Academia collaboration platform conducting practical engineering bootcamps, campus recruitment training (CRT), and verified capstone projects.",
  defaultThemeColor: "#EDEEF5",
  darkThemeColor: "#1a1a1a",
  keywords: [
    "THAKSAAI",
    "Career Accelerator",
    "Campus Recruitment Training",
    "Engineering Bootcamps",
    "Final Year Projects",
    "Software Internships",
    "Placement Readiness",
  ],
};
