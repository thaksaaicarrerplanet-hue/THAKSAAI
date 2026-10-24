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
    'A hands-on technical learning studio and software engineering team delivering practical workshops, campus recruitment training, internships, and final-year engineering projects across Telangana.',
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>THAKSA.AI | Real Engineers. Real Code. Real Careers.</title>
        <meta
          name="description"
          content="THAKSA.AI is a hands-on engineering learning and software studio in Hyderabad and Warangal. Explore practical workshops, placement training, internships, and final-year projects."
        />
        <script type="application/ld+json">{JSON.stringify(EDUCATIONAL_ORG_JSON_LD)}</script>
      </Helmet>

      {/* Art direction and WebGL renderer live inside the hero for predictable layering. */}
      <PaperHero />

      {/* Interactive, adaptive 3D capability architecture */}
      <CapabilityReactor />

      {/* Scroll-scrubbed manifesto, program context, and proof ledger */}
      <PaperProofStrip />

      {/* Program discovery and audience-specific pathways */}
      <PaperAudienceRouting />

      {/* Assess → Train → Build → Demonstrate methodology */}
      <PaperMethodology />

      {/* Documentary gallery with reduced-motion support */}
      <PaperGallery />

      {/* Leadership and vision */}
      <PaperFounderQuote />

      {/* Software Studio showcase */}
      <PaperStudioHighlight />

      {/* Training and Studio conversion paths */}
      <PaperClosingCTA />
    </>
  );
}
