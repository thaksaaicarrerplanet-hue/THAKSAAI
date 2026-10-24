import React, { useLayoutEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PaperHero from './sections/PaperHero';
import CapabilityReactor from '../../components/ui/CapabilityReactor';
import HeroBackgroundCanvas from '../../components/ui/HeroBackgroundCanvas';
import { useReducedMotion } from '../../hooks/useReducedMotion';
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
  const sectionFlowRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Preserve native scrolling and each section's existing animations. This layer adds
  // only a low-cost opacity reveal, so it does not introduce transformed ancestors
  // that could interfere with scroll-linked effects or sticky/pinned content.
  useLayoutEffect(() => {
    const flow = sectionFlowRef.current;
    if (!flow) return undefined;

    const sections = Array.from(flow.querySelectorAll(":scope > section"));
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      sections.forEach((section) => {
        section.style.opacity = "1";
        section.style.transition = "none";
      });
      return () => {
        sections.forEach((section) => {
          section.style.removeProperty("opacity");
          section.style.removeProperty("transition");
        });
      };
    }

    sections.forEach((section, index) => {
      section.style.transition = "opacity 680ms cubic-bezier(0.22, 1, 0.36, 1)";
      section.style.opacity = index === 0 ? "1" : "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    // Hero content has its own entrance and spring-parallax treatment.
    sections.slice(1).forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.style.removeProperty("opacity");
        section.style.removeProperty("transition");
      });
    };
  }, [prefersReducedMotion]);

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

      {/* Original perspective-wave ambience, scoped to the homepage instead of every public route. */}
      <HeroBackgroundCanvas />

      <div ref={sectionFlowRef} className="home-section-flow">
        {/* 1. Full-Screen 60fps Wave Hero + Simple Kinetic Typography */}
        <PaperHero />
        <CapabilityReactor />

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

        {/* 7. Executive Software Studio Showcase (Moved to the end of the page) */}
        <PaperStudioHighlight />

        {/* 8. Closing Institutional & Studio Launchpad CTA */}
        <PaperClosingCTA />
      </div>
    </>
  );
}
