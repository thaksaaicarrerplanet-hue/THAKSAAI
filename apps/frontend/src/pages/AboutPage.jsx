import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { DepthButton } from '../components/ui/DepthButton';
import { SITE_BRANDING } from '../theme/masterThemeConfig';
import { useTextScramble } from '../hooks/useTextScramble';

const EDUCATIONAL_ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_BRANDING.name,
  url: 'https://www.thaksaai.in/about',
  founder: {
    '@type': 'Person',
    name: 'K. Tharunkrishna',
    jobTitle: 'Founder & CEO',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Diamond Hills, Lumbini Avenue, Gachibowli',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500032',
    addressCountry: 'IN',
  },
};

export default function AboutPage() {
  const eyebrow = useTextScramble('ABOUT THAKSA.AI // MISSION, RESEARCH & LEADERSHIP', {
    duration: 600,
    trigger: true,
  });

  return (
    <div className="w-full bg-[#F7F8F4] min-h-screen pb-24 overflow-x-clip">
      <Helmet>
        <title>About THAKSA.AI | Mission, Leadership &amp; Engineering Pedagogy</title>
        <meta
          name="description"
          content="Learn about THAKSA.AI's mission, leadership under Founder & CEO K. Tharunkrishna, and our execution-first engineering pedagogy across Hyderabad and Warangal."
        />
        <script type="application/ld+json">{JSON.stringify(EDUCATIONAL_ORG_JSON_LD)}</script>
      </Helmet>

      {/* Dark Spatial Hero Section */}
      <section className="relative w-full bg-[#080D1A] text-white iso-grid-dark border-b border-white/10 py-16 sm:py-24 mb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/3 w-[500px] h-[500px] rounded-full bg-[#3659D9]/20 blur-[140px]"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 text-[#C7F36B] px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-[0.16em] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h1
            className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw + 1rem, 4.25rem)' }}
          >
            Developing engineers who can{' '}
            <span className="text-[#C7F36B]">create value independently.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At THAKSA.AI, we believe in zero hyped content and real face-to-face engineering skills.
            We bring production coding environments, structured mentorship, and verifiable
            execution pipelines directly to college campuses across Telangana.
          </p>
        </div>
      </section>

      {/* Why Engineering Education Must Be Reformed */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-24">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] block mb-2">
            RESEARCH &amp; PEDAGOGY // 02
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#101828] tracking-[-0.02em]">
            Why Engineering Education Must Be Reformed
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SpotlightCard tone="light" tilt maxTilt={3} className="p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#3659D9] font-bold mb-3">01 // SYNTACTIC GAP</div>
              <h3 className="text-xl font-display font-bold text-[#101828] mb-3">
                The Gap Between Degrees &amp; Production Reality
              </h3>
              <p className="text-sm text-[#5B6475] leading-relaxed mb-6">
                Most graduates have textbook knowledge but struggle when placed in a real software
                team. Our cohorts train students directly inside Git workflows, API contracts, and
                live cloud deployment environments.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E3E5DE]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#5B6475] block mb-1">
                Academic Reference
              </span>
              <a
                href="https://jwel.mit.edu/assets/document/global-state-art-engineering-education"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#3659D9] hover:underline"
              >
                MIT Global State of the Art in Engineering Education &amp; CDIO Framework ↗
              </a>
            </div>
          </SpotlightCard>

          <SpotlightCard tone="light" tilt maxTilt={3} className="p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#3659D9] font-bold mb-3">
                02 // COLLABORATIVE RIGOR
              </div>
              <h3 className="text-xl font-display font-bold text-[#101828] mb-3">
                Technical Communication &amp; Viva Defense
              </h3>
              <p className="text-sm text-[#5B6475] leading-relaxed mb-6">
                Writing code is only half the requirement. Modern engineering teams hire graduates
                who can articulate architectural trade-offs, defend system designs, and collaborate
                under sprint deadlines.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E3E5DE]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#5B6475] block mb-1">
                Academic Reference
              </span>
              <a
                href="https://wheebox.com/india-skills-report"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#3659D9] hover:underline"
              >
                India Skills Report &amp; Royal Academy of Engineering: Engineers 2030 ↗
              </a>
            </div>
          </SpotlightCard>

          <SpotlightCard tone="dark" tilt maxTilt={3} className="p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#C7F36B] font-bold mb-3">
                03 // EXPERIENTIAL PROOF
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Learning by Actually Building
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Every THAKSA pathway culminates in a working, inspectable artifact—whether a
                deployed web application, a benchmarked CRT algorithmic dossier, or a live
                capstone defense.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                Academic Reference
              </span>
              <a
                href="https://onlinelibrary.wiley.com/journal/21689830"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#C7F36B] hover:underline"
              >
                Journal of Engineering Education (Experiential &amp; Integrated Learning) ↗
              </a>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Meet the Founder Section — Restored White Bottom Shade Gradient + Navy Tagline */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 mb-24">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] block mb-2">
            EXECUTIVE LEADERSHIP // 03
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#101828] tracking-[-0.02em]">
            Meet the Founder
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-[#E3E5DE] shadow-[0_24px_48px_-24px_rgba(16,24,40,0.24)] flex flex-col md:flex-row items-stretch max-w-5xl mx-auto">
          {/* Portrait Side */}
          <div className="w-full md:w-5/12 min-h-[420px] md:min-h-[500px] relative">
            <img
              src="/images/founders/cofounder.jpg"
              alt="K. Tharunkrishna - Founder & CEO of THAKSA.AI"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Signature white bottom shade gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#F7F8F4] via-[#F7F8F4]/55 to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 text-left">
              <p className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">
                K. Tharunkrishna
              </p>
              <span
                className="inline-block mt-1.5 text-xs font-sans font-extrabold uppercase tracking-[0.12em]"
                style={{ color: '#0a2540' }}
              >
                FOUNDER &amp; CEO &bull; CAREER TRANSFORMATION MENTOR
              </span>
            </div>
          </div>

          {/* Bio Side */}
          <div className="w-full md:w-7/12 p-8 sm:p-12 md:p-14 flex flex-col justify-center">
            <blockquote className="text-xl sm:text-2xl font-display italic text-[#101828] leading-relaxed mb-6 font-medium">
              “We don’t measure our success by the certificates our students receive, but by the real software they build and the life-changing careers they secure.”
            </blockquote>

            <p className="text-[#5B6475] text-base leading-relaxed mb-8">
              Driven by a mission to bridge the divide between university curricula and production
              engineering, K. Tharunkrishna leads THAKSA.AI’s academic partnerships, Campus
              Recruitment Training (CRT) architecture, and hands-on mentorship programs across
              Hyderabad and Warangal.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://www.linkedin.com/in/tharunkrishna-kaithoju-185140261/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-3 bg-[#0a66c2] text-white font-semibold py-3 px-7 rounded-xl hover:bg-[#004182] transition-all"
              >
                <span>Connect on LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
              <DepthButton to="/contact" variant="primary" size="md">
                <span>Partner with Directorate</span>
              </DepthButton>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy & Operations Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] block mb-2">
            INSTITUTIONAL ADVISORY // 04
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#101828] tracking-[-0.02em]">
            Strategy &amp; Operations Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SpotlightCard tone="light" className="p-8 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#101828] text-[#C7F36B] font-display font-bold text-xl flex items-center justify-center mb-5">
              M
            </div>
            <h4 className="text-xl font-display font-bold text-[#101828]">Dr. Murthy</h4>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3659D9] mt-1 mb-4">
              Senior Business &amp; Institutional Lead
            </p>
            <p className="text-sm text-[#5B6475] leading-relaxed">
              Spearheads THAKSA.AI’s university partnerships and corporate strategy, aligning
              departmental training calendars with enterprise engineering expectations.
            </p>
          </SpotlightCard>

          <SpotlightCard tone="light" className="p-8 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#101828] text-[#C7F36B] font-display font-bold text-xl flex items-center justify-center mb-5">
              S
            </div>
            <h4 className="text-xl font-display font-bold text-[#101828]">R. Sudheer</h4>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3659D9] mt-1 mb-4">
              Operations &amp; Cohort Execution Lead
            </p>
            <p className="text-sm text-[#5B6475] leading-relaxed">
              Oversees on-campus workshop logistics, lab readiness, and student milestone tracking
              across partner engineering colleges in Telangana.
            </p>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
