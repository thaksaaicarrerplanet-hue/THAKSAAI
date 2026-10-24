import React from 'react';
import { Helmet } from 'react-helmet-async';
import PaperHero from './sections/PaperHero';
import CapabilityReactor from '../../components/ui/CapabilityReactor';
import PaperProofStrip from './sections/PaperProofStrip';
import PaperAudienceRouting from './sections/PaperAudienceRouting';
import PaperMethodology from './sections/PaperMethodology';
import PaperStudioHighlight from './sections/PaperStudioHighlight';
import PaperGallery from './sections/PaperGallery';
import PaperFounderQuote from './sections/PaperFounderQuote';
import PaperClosingCTA from './sections/PaperClosingCTA';
import { SITE_BRANDING } from '../../theme/masterThemeConfig';

const EDUCATIONAL_ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_BRANDING.name,
  url: 'https://www.thaksaai.in',
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

      {/* 1. Editorial hero with clear program pathways */}
      <PaperHero />

      {/* 2. Interactive, adaptive 3D capability architecture */}
      <CapabilityReactor />

      {/* 3. Scroll-scrubbed manifesto, program context, and proof ledger */}
      <PaperProofStrip />

      {/* 4. Program discovery and audience-specific pathways */}
      <PaperAudienceRouting />

      {/* 5. Assess → Train → Build → Demonstrate methodology */}
      <PaperMethodology />

      {/* 6. Documentary gallery with reduced-motion support */}
      <PaperGallery />

      {/* 7. Leadership and vision */}
      <PaperFounderQuote />

      {/* 8. Software Studio showcase */}
      <PaperStudioHighlight />

      {/* 9. Training and Studio conversion paths */}
      <PaperClosingCTA />
    </>
  );
}
