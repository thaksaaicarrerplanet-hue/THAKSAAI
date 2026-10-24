import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SITE_BRANDING } from '../../theme/masterThemeConfig';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const INTERNSHIP_DOMAINS = [
  {
    id: 'ai-genai',
    code: 'DOM // 01',
    badge: 'AI & GenAI Engineering Intern',
    title: 'Artificial Intelligence, RAG & Agent Systems',
    duration: '8 to 16 Weeks · In-Office (Gachibowli)',
    desc: 'Sit alongside our AI engineers to build production LLM applications—document-grounded RAG assistants, intelligent workflow automation, and structured API services.',
    stack: ['Python', 'FastAPI', 'OpenAI / Gemini', 'Vector DBs', 'Docker'],
    sprints: [
      'Weeks 01–03 // Python API Architecture, Git Branching & Prompt Guardrails',
      'Weeks 04–08 // Vector Embeddings, Hybrid Search & RAG Microservice Build',
      'Weeks 09–12 // Agentic Tool-Calling & Frontend Integration',
      'Weeks 13–16 // Production Load Testing, Code Review & Live Deployment',
    ],
  },
  {
    id: 'fullstack-web',
    code: 'DOM // 02',
    badge: 'Full-Stack Software Intern',
    title: 'Modern Full-Stack Web & API Engineering',
    duration: '8 to 16 Weeks · In-Office (Gachibowli)',
    desc: 'Build complete, production-grade web applications from relational database schemas and authenticated REST APIs to responsive React interfaces on real studio projects.',
    stack: ['React 19', 'Node.js / Express', 'PostgreSQL', 'TypeScript', 'Git'],
    sprints: [
      'Weeks 01–03 // Relational Schema Design, SQL Indexing & Git PR Workflow',
      'Weeks 04–08 // JWT Auth, Role-Based Access & REST API Endpoints',
      'Weeks 09–12 // Component Architecture, State Management & Performance',
      'Weeks 13–16 // End-to-End Testing, CI/CD & Production Release',
    ],
  },
  {
    id: 'cloud-devops',
    code: 'DOM // 03',
    badge: 'Cloud & DevOps Intern',
    title: 'Cloud Infrastructure, Docker & CI/CD Automation',
    duration: '8 to 12 Weeks · In-Office / Hybrid',
    desc: 'Master the infrastructure skills very few freshers possess: containerizing applications, writing GitHub Actions pipelines, managing Linux servers, and monitoring uptime.',
    stack: ['Linux', 'Docker', 'GitHub Actions', 'Nginx', 'Cloud Hosting'],
    sprints: [
      'Weeks 01–03 // Linux Administration, Shell Scripting & Networking',
      'Weeks 04–06 // Multi-Stage Dockerfiles & Container Orchestration',
      'Weeks 07–09 // Automated Testing & CI/CD Deployment Pipelines',
      'Weeks 10–12 // Reverse Proxies, SSL, Security & Uptime Observability',
    ],
  },
  {
    id: 'digital-growth',
    code: 'DOM // 04',
    badge: 'Growth & Product Marketing Intern',
    title: 'Digital Growth, Analytics & Technical Positioning',
    duration: '8 to 12 Weeks · In-Office (Gachibowli)',
    desc: 'Learn how software products and B2B brands acquire users—running measurable campaigns, conversion funnels, SEO architecture, and performance analytics.',
    stack: ['Search & SEO', 'Funnel Analytics', 'Content Systems', 'CRM Automation'],
    sprints: [
      'Weeks 01–03 // Market Positioning, ICP Research & Funnel Architecture',
      'Weeks 04–06 // High-Conversion Landing Pages & Content Execution',
      'Weeks 07–09 // Paid & Organic Campaign Operations',
      'Weeks 10–12 // Attribution Reporting & Growth Portfolio Defense',
    ],
  },
];

export default function InternshipsPage() {
  const navigate = useNavigate();
  const [selectedDomainId, setSelectedDomainId] = useState(INTERNSHIP_DOMAINS[0].id);

  const eyebrow = useTextScramble(
    'PILLAR 03 // IN-OFFICE STUDIO INTERNSHIPS AT GACHIBOWLI HQ',
    { duration: 600, trigger: true }
  );

  const activeDomain =
    INTERNSHIP_DOMAINS.find((d) => d.id === selectedDomainId) || INTERNSHIP_DOMAINS[0];

  return (
    <>
      <Helmet>
        <title>Supervised In-Office Engineering Internships | THAKSA.AI</title>
        <meta
          name="description"
          content="Apply for face-to-face engineering internships in AI & GenAI, Full-Stack Web, Cloud DevOps, and Digital Growth at THAKSA.AI HQ in Jyothi Imperial, Gachibowli, Hyderabad."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828]">
        {/* Dark Spatial Hero */}
        <section className="relative w-full bg-[#080D1A] text-white iso-grid-dark border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C7F36B]/12 blur-[140px]"
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C7F36B]">
                  {eyebrow}
                </span>
              </div>

              <h1
                className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4.5vw + 1rem, 4.25rem)' }}
              >
                Forget recorded videos.{' '}
                <span className="text-[#C7F36B]">Sit beside senior developers and ship.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Our internships happen face-to-face inside our engineering studio at{' '}
                <strong className="text-white">{SITE_BRANDING.buildingName}, Gachibowli, Hyderabad</strong>.
                You work on real sprint tickets, undergo daily pull-request code reviews, and
                graduate with verifiable production experience.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <DepthButton to="/contact?track=internships" variant="electric" size="lg">
                  <span>Apply for Gachibowli Internship</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
                <DepthButton
                  href={SITE_BRANDING.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghostDark"
                  size="lg"
                >
                  <span>WhatsApp Coordinator</span>
                </DepthButton>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive 16-Week Sprint Explorer + Domain Grid */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
          {/* Interactive Sprint Roadmap Stage */}
          <SpotlightCard tone="dark" className="p-6 sm:p-10 mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] block mb-2">
                  INTERACTIVE 16-WEEK SPRINT INSPECTOR
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  How we mentor interns week by week at our Gachibowli office
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {INTERNSHIP_DOMAINS.map((dom) => {
                  const active = dom.id === selectedDomainId;
                  return (
                    <button
                      key={dom.id}
                      type="button"
                      onClick={() => setSelectedDomainId(dom.id)}
                      className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C7F36B] text-[#101828] border-[#C7F36B] font-bold'
                          : 'bg-white/[0.05] text-slate-300 border-white/10 hover:text-white'
                      }`}
                    >
                      {dom.code}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="font-mono text-xs text-[#C7F36B] uppercase tracking-wider">
                  {activeDomain.badge} · {activeDomain.duration}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">{activeDomain.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activeDomain.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeDomain.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-[#C7F36B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeDomain.sprints.map((sprint, i) => (
                  <div
                    key={sprint}
                    className="p-4 rounded-2xl bg-[#070B14] border border-white/10 flex flex-col justify-between gap-2"
                  >
                    <span className="font-mono text-xs font-bold text-[#C7F36B]">
                      STAGE 0{i + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
                      {sprint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* All Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {INTERNSHIP_DOMAINS.map((item) => (
              <SpotlightCard
                key={item.id}
                tone="light"
                tilt
                maxTilt={3}
                className="p-7 sm:p-9 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#101828] text-[#C7F36B] font-mono text-xs font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-[#3659D9] font-semibold">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#101828] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E3E5DE]">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F7F8F4] border border-[#E3E5DE] text-[#101828]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <DepthButton
                  onClick={() =>
                    navigate(
                      `/contact?track=internships&query=${encodeURIComponent(item.badge)}`
                    )
                  }
                  variant="precision"
                  size="md"
                  className="w-full"
                >
                  <span>Apply for {item.badge}</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
              </SpotlightCard>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
