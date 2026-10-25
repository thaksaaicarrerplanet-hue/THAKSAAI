import React from 'react';
import { Helmet } from 'react-helmet-async';
import PaperHero from './sections/PaperHero';
import PaperProofStrip from './sections/PaperProofStrip';
import PaperAudienceRouting from './sections/PaperAudienceRouting';
import PaperMethodology from './sections/PaperMethodology';
import PaperGallery from './sections/PaperGallery';
import PaperFounderQuote from './sections/PaperFounderQuote';
import PaperClosingCTA from './sections/PaperClosingCTA';
import { SITE_BRANDING } from '../../theme/masterThemeConfig';

const EDUCATIONAL_ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_BRANDING.name,
  url: 'https://www.thaksa.ai',
  email: SITE_BRANDING.contactEmail,
  telephone: SITE_BRANDING.supportPhone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Diamond Hills, Lumbini Avenue, Gachibowli',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500032',
    addressCountry: 'IN',
  },
  areaServed: ['Hyderabad', 'Warangal', 'Telangana'],
  description:
    'Industry–academia technical training institution and software studio delivering Workshops, Campus Recruitment Training (CRT), Domain Internships, and Final-Year Engineering Projects across Telangana.',
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>THAKSA.AI | Real Engineers. Real Code. Real Careers.</title>
        <meta
          name="description"
          content="THAKSA.AI is an industry–academia engineering training institution and software studio in Hyderabad and Warangal. Practical Workshops, CRT, Internships, and Final-Year Projects."
        />
        <script type="application/ld+json">{JSON.stringify(EDUCATIONAL_ORG_JSON_LD)}</script>
      </Helmet>

      {/* 1. Full-Screen 60fps Wave Hero + Simple Kinetic Typography */}
      <PaperHero />

      {/* 2. Scroll-Scrubbed Manifesto + Velocity Marquee + Verified Proof */}
      <PaperProofStrip />

      {/* 3. Pinned Horizontal Scroll Cinema Reel: 01 Workshops · 02 CRT · 03 Internships · 04 Projects */}
      <PaperAudienceRouting />

      {/* 4. 4-Stage Execution Pipeline: Assess → Train → Build → Defend */}
      <PaperMethodology />

      {/* 5. Dual-Direction Auto-Scrolling Portfolio & Campus Lab Filmstrip */}
      <PaperGallery />

      {/* 6. Dynamic Scroll-Animated Leadership & Vision Stage */}
      <PaperFounderQuote />

      {/* 7. Closing Institutional & Studio Launchpad CTA */}
      <PaperClosingCTA />
    </>
  );
}
