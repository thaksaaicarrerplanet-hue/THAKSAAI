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
  url: 'https://www.thaksa.ai/about',
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

const PEDAGOGY_PILLARS = [
  {
    number: '01',
    code: 'PRACTICE / 01',
    title: 'Zero Hyped Slides — 100% Real Code',
    description:
      'Students do not watch passive slide presentations. Every single session is conducted directly inside real IDEs, writing code, resolving stack traces, and pushing commits to Git.',
    practice: [
      'Hands-on keyboard time from minute one of every workshop',
      'Real terminal commands, branch management & pull requests',
      'Debugging live syntax, runtime, and API integration exceptions',
      'Automated test execution before code is deployed or submitted',
    ],
    outcome:
      'Graduates leave with the muscle memory, debugging habits, and instincts of practicing software engineers.',
  },
  {
    number: '02',
    code: 'MENTORSHIP / 02',
    title: 'Mentorship by Active Engineers',
    description:
      'Taught directly by engineers who design and ship software at our Gachibowli engineering studio—bringing current architectural standards directly to campus.',
    practice: [
      'Curricula continuously updated to reflect real tech industry demand',
      'Insights into real-world system bottlenecks and design patterns',
      'Code reviews modeled after high-performing product engineering teams',
      'Uncompromising emphasis on clean, readable, maintainable code',
    ],
    outcome:
      'Students bridge the wide gap between academic syllabus theory and enterprise engineering expectations.',
  },
  {
    number: '03',
    code: 'DEFENSE / 03',
    title: 'System Design & Viva Readiness',
    description:
      'Writing code is only half of engineering. Students learn to articulate architectural trade-offs, defend their design decisions, and excel in technical interviews.',
    practice: [
      '1-on-1 code defense and system architecture walkthroughs',
      'Explaining time and space complexity trade-offs aloud',
      'Defending database schema choices, indexing, and security policies',
      'Mock technical interview panels with structured rubric evaluations',
    ],
    outcome:
      'Graduates articulate system design with confidence, winning competitive campus placement interviews.',
  },
];

const COLLABORATION_STEPS = [
  {
    number: '01',
    title: 'Departmental Alignment',
    description:
      'We coordinate with college leadership and department heads to map exact student batch requirements, prerequisites, and placement targets.',
  },
  {
    number: '02',
    title: 'Intensive Lab Execution',
    description:
      'Our engineering team deploys directly to your campus labs, delivering intensive hands-on coding bootcamps with zero software installation overhead.',
  },
  {
    number: '03',
    title: 'Viva Defense & Placement Impact',
    description:
      'Students present their live projects, receive rigorous rubric evaluations, and enter campus placement season with verified proof of work.',
  },
];

export default function AboutPage() {
  const eyebrow = useTextScramble('MISSION, PEDAGOGY & LEADERSHIP', {
    duration: 600,
    trigger: true,
  });

  return (
    <>
      <Helmet>
        <title>About THAKSA.AI | Mission, Leadership &amp; Engineering Pedagogy</title>
        <meta
          name="description"
          content="Learn about THAKSA.AI's mission, leadership under Founder &amp; CEO K. Tharunkrishna, and our execution-first engineering pedagogy across Hyderabad and Warangal."
        />
        <script type="application/ld+json">{JSON.stringify(EDUCATIONAL_ORG_JSON_LD)}</script>
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        {/* Dark Spatial Hero Section */}
        <section className="relative w-full text-white thaksa-hero-scene thaksa-hero--about border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3659D9]/20 blur-[140px]"
          />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-5 thaksa-coded-label">
                <>ABOUT THAKSA.AI / {eyebrow}</>
              </p>
              <h1 className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6 text-4xl sm:text-5xl lg:text-6xl">
                Developing engineers who create value independently.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                At THAKSA.AI, we believe in zero hyped content and real face-to-face engineering
                skills. We bring production coding environments, structured mentorship, and
                verifiable execution pipelines directly to college campuses across Telangana.
              </p>
              <div className="flex flex-wrap gap-3">
                <DepthButton to="/contact" variant="electric" size="lg">
                  Partner with THAKSA <span aria-hidden="true">→</span>
                </DepthButton>
                <DepthButton to="/workshops" variant="ghostDark" size="lg">
                  Explore our programs
                </DepthButton>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20">
          {/* Section 1: Educational Pedagogy & Three Pillars */}
          <section
            id="pedagogy-pillars"
            aria-labelledby="pedagogy-heading"
            className="scroll-mt-28"
          >
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                EDUCATIONAL PEDAGOGY
              </p>
              <h2
                id="pedagogy-heading"
                className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]"
              >
                Why engineering education must be reformed.
              </h2>
              <p className="mt-3 text-base text-[#5B6475] leading-relaxed">
                Most graduates have textbook knowledge but struggle when placed in real software
                teams. Our cohorts train students directly inside Git workflows, API contracts,
                and live cloud deployment environments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {PEDAGOGY_PILLARS.map((item) => (
                <SpotlightCard
                  key={item.number}
                  tone="light"
                  className="h-full p-6 sm:p-7 flex flex-col gap-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex min-h-8 items-center rounded-full bg-[#101828] px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#C7F36B]">
                      PILLAR {item.number}
                    </span>
                    <span className="text-xs font-semibold text-[#5B6475]">{item.code}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight tracking-[-0.02em] text-[#101828]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5B6475] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="border-t border-[#E3E5DE] pt-4">
                    <h4 className="text-sm font-bold text-[#101828] mb-3">
                      How we train students
                    </h4>
                    <ul className="space-y-2.5">
                      {item.practice.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B6475]"
                        >
                          <span aria-hidden="true" className="mt-0.5 text-[#3659D9] font-bold">
                            ✓
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto rounded-xl border border-[#E3E5DE] bg-[#F7F8F4] p-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#3659D9] mb-1">
                      Pedagogical outcome
                    </p>
                    <p className="text-sm leading-relaxed text-[#101828]">{item.outcome}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* Section 2: Executive Leadership & Meet the Founder */}
          <section
            id="founder-section"
            aria-labelledby="founder-heading"
            className="mt-16 sm:mt-24 scroll-mt-28"
          >
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                EXECUTIVE LEADERSHIP
              </p>
              <h2
                id="founder-heading"
                className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]"
              >
                Meet the Founder.
              </h2>
              <p className="mt-3 text-base text-[#5B6475] leading-relaxed">
                Direct leadership combining hands-on technical architecture and a relentless drive
                to transform student careers across Telangana.
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#E3E5DE] shadow-[0_24px_48px_-24px_rgba(16,24,40,0.16)] flex flex-col md:flex-row items-stretch">
              {/* Portrait Side */}
              <div className="w-full md:w-5/12 min-h-[380px] md:min-h-[480px] relative">
                <img
                  src="/images/founders/cofounder.jpg"
                  alt="K. Tharunkrishna - Founder & CEO of THAKSA.AI"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#F7F8F4] via-[#F7F8F4]/50 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">
                    K. Tharunkrishna
                  </h3>
                  <span
                    className="inline-block mt-1.5 text-xs font-sans font-extrabold uppercase tracking-[0.12em]"
                    style={{ color: '#0a2540' }}
                  >
                    FOUNDER &amp; CEO &bull; CAREER TRANSFORMATION MENTOR
                  </span>
                </div>
              </div>

              {/* Bio & Vision Side */}
              <div className="w-full md:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
                <blockquote className="text-xl sm:text-2xl font-display italic text-[#101828] leading-relaxed mb-6 font-medium">
                  “We don’t measure our success by the certificates our students receive, but by the
                  real software they build and the life-changing careers they secure.”
                </blockquote>

                <p className="text-[#5B6475] text-base leading-relaxed mb-8">
                  Driven by a mission to bridge the divide between university curricula and production
                  engineering, K. Tharunkrishna leads THAKSA.AI’s academic partnerships, Campus
                  Recruitment Training (CRT) architecture, and hands-on mentorship programs across
                  Hyderabad and Warangal. Under his direction, THAKSA cohorts engineer live systems,
                  defend their code in technical vivas, and achieve top placement outcomes.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://www.linkedin.com/in/tharunkrishna-kaithoju-185140261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white font-display font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                  </a>

                  <DepthButton to="/contact" variant="precision" size="md">
                    <span>Partner with Directorate</span>
                    <span aria-hidden="true">→</span>
                  </DepthButton>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Institutional Governance & Advisory */}
          <section aria-labelledby="advisory-heading" className="mt-16 sm:mt-24">
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                INSTITUTIONAL ADVISORY
              </p>
              <h2
                id="advisory-heading"
                className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]"
              >
                Strategy &amp; Operations Leadership.
              </h2>
              <p className="mt-3 text-base text-[#5B6475] leading-relaxed">
                Guiding institutional collaboration, corporate placement relationships, and campus
                logistics with seasoned academic expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <SpotlightCard tone="light" className="p-7 sm:p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#101828] text-[#C7F36B] font-display font-bold text-xl flex items-center justify-center">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#101828]">Dr. Murthy</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3659D9] mt-1">
                    Senior Business &amp; Institutional Lead
                  </p>
                </div>
                <p className="text-sm text-[#5B6475] leading-relaxed">
                  Spearheads THAKSA.AI’s university partnerships and corporate strategy, aligning
                  departmental training calendars with enterprise engineering expectations.
                </p>
              </SpotlightCard>

              <SpotlightCard tone="light" className="p-7 sm:p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#101828] text-[#C7F36B] font-display font-bold text-xl flex items-center justify-center">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#101828]">R. Sudheer</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#3659D9] mt-1">
                    Operations &amp; Cohort Execution Lead
                  </p>
                </div>
                <p className="text-sm text-[#5B6475] leading-relaxed">
                  Oversees on-campus workshop logistics, lab readiness, and student milestone
                  tracking across partner engineering colleges in Telangana.
                </p>
              </SpotlightCard>
            </div>
          </section>

          {/* Section 4: How We Partner With Colleges */}
          <section aria-labelledby="partnership-steps-heading" className="mt-16 sm:mt-24">
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                HOW WE PARTNER
              </p>
              <h2
                id="partnership-steps-heading"
                className="text-2xl sm:text-3xl font-display font-bold text-[#101828]"
              >
                A seamless institutional collaboration.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {COLLABORATION_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-[#E3E5DE] bg-white p-6 sm:p-7"
                >
                  <span className="font-mono text-sm font-bold text-[#3659D9]">{step.number}</span>
                  <h3 className="mt-3 text-lg font-display font-bold text-[#101828]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B6475]">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Closing Institutional Partner SpotlightCard */}
          <SpotlightCard tone="dark" className="mt-16 sm:mt-24 p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-2">
                  FOR INSTITUTIONS &amp; UNIVERSITIES
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Let's build an engineering powerhouse at your institution.
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Partner with THAKSA.AI to bring production software bootcamps, CRT excellence, and
                  industry internships directly to your campus.
                </p>
              </div>
              <DepthButton to="/contact" variant="electric" size="lg">
                Initiate partnership <span aria-hidden="true">→</span>
              </DepthButton>
            </div>
          </SpotlightCard>
        </main>
      </div>
    </>
  );
}
