import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_BRANDING, WHATSAPP_NUMBER } from '../../theme/masterThemeConfig';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const STUDIO_DISCIPLINES = [
  {
    id: 'full-stack',
    number: '01',
    scopeBadge: 'Web & SaaS',
    title: 'Full Stack Web Platforms',
    description:
      'High-concurrency web applications, enterprise dashboards, and customer portals architected with modern frontend systems and high-throughput databases.',
    practice: [
      'Responsive, accessible web applications (React, Next.js, TypeScript)',
      'High-performance REST & GraphQL APIs (Node.js, Express, Nest)',
      'Scalable relational schemas & indexing (PostgreSQL, Prisma, Redis)',
      'Role-based access control, security audits & automated testing',
    ],
    outcome:
      'Production-ready web platform deployed to cloud with full documentation, tests, and CI/CD pipelines.',
  },
  {
    id: 'cloud-devops-mlops',
    number: '02',
    scopeBadge: 'Cloud & Ops',
    title: 'AWS, DevOps & MLOps Infrastructure',
    description:
      'Resilient cloud foundations, automated container workflows, and reproducible machine learning pipelines engineered for enterprise scale and 99.9% uptime.',
    practice: [
      'Infrastructure as Code with Terraform and AWS CloudFormation',
      'Containerization and cluster orchestration (Docker, Kubernetes / EKS)',
      'Zero-downtime CI/CD delivery pipelines with automated testing',
      'MLOps pipelines, model deployment, monitoring & drift detection',
    ],
    outcome:
      'Hardened, observable cloud architecture with automated scaling, zero single points of failure, and predictable costs.',
  },
  {
    id: 'agentic-ai',
    number: '03',
    scopeBadge: 'AI & Agents',
    title: 'Agentic AI & Smart Automation',
    description:
      'Autonomous AI agents, semantic document retrieval (RAG), and intelligent process automation pipelines that transform proprietary data into active utility.',
    practice: [
      'Task-specific autonomous agents with tool calling and validation',
      'Document-grounded RAG assistants with citations and guardrails',
      'Multi-step business workflow automation & CRM webhooks',
      'Latency optimization, evaluation harnesses, and hallucination safeguards',
    ],
    outcome:
      'Reliable, self-evaluating AI pipelines integrated directly into your existing business software.',
  },
];

const STUDIO_STEPS = [
  {
    number: '01',
    title: 'Architectural Blueprint',
    description:
      'We dissect your requirements, map data models, select the ideal technology stack, and construct a milestone-driven sprint roadmap.',
  },
  {
    number: '02',
    title: 'Agile Sprints & PR Reviews',
    description:
      'Direct communication with our engineers. Bi-weekly demos, staged preview deployments, and full visibility into Git commits and code reviews.',
  },
  {
    number: '03',
    title: 'Production Handover & Zero Lock-in',
    description:
      'Complete handover of 100% IP rights, source code, CI/CD pipelines, architecture documentation, and ongoing deployment support.',
  },
];

const CONFIGURATOR_MODULES = [
  'Custom Web & SaaS Platform',
  'AWS Cloud & DevOps Infrastructure',
  'Applied AI & RAG Assistant',
  'Workflow & CRM Automation',
  'Rapid Founder MVP',
];

export default function StudioPage() {
  const [submitted, setSubmitted] = useState(false);
  const [draftUrl, setDraftUrl] = useState('');
  const [selectedModules, setSelectedModules] = useState(['Custom Web & SaaS Platform']);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    timeline: '1–3 Months',
    scope: '',
  });

  const intakeRef = useRef(null);
  const focusedDisciplinesLabel = useTextScramble('THREE CORE DISCIPLINES', {
    duration: 720,
    trigger: true,
  });

  const toggleModule = (mod) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const scrollToScope = () => {
    if (intakeRef.current) {
      intakeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('studio-intake-docket')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScopeTrack = (trackTitle) => {
    if (!selectedModules.includes(trackTitle)) {
      setSelectedModules((prev) => [...prev, trackTitle]);
    }
    setFormData((prev) => ({
      ...prev,
      scope: prev.scope ? `${prev.scope}\nInterested in: ${trackTitle}` : `Interested in: ${trackTitle}`,
    }));
    scrollToScope();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Studio Engineering Inquiry — THAKSA.AI*

*Company:* ${formData.company}
*Contact:* ${formData.name}
*Email:* ${formData.email}
*Selected Modules:* ${selectedModules.join(', ')}
*Timeline:* ${formData.timeline}
*Project Scope:* ${formData.scope}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    setDraftUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>THAKSA Software Studio · Web, Cloud &amp; AI Engineering | THAKSA.AI</title>
        <meta
          name="description"
          content="Partner with THAKSA Software Studio in Gachibowli, Hyderabad for custom web platforms, AWS cloud/DevOps, and agentic AI systems with 100% source code handover."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        {/* Dark Spatial Hero Stage */}
        <section className="relative w-full text-white thaksa-hero-scene thaksa-hero--studio border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3659D9]/20 blur-[140px]"
          />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-5 thaksa-coded-label">
                <>THAKSA SOFTWARE STUDIO / {focusedDisciplinesLabel}</>
              </p>
              <h1 className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6 text-4xl sm:text-5xl lg:text-6xl">
                Production software engineered for your business.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                Direct engineering from our Gachibowli software division. Alongside institutional
                programs, our senior team designs and ships custom web platforms, resilient cloud
                architectures, and autonomous AI systems with 100% IP rights and source code
                handover.
              </p>
              <div className="flex flex-wrap gap-3">
                <DepthButton onClick={scrollToScope} variant="electric" size="lg">
                  Scope your build <span aria-hidden="true">→</span>
                </DepthButton>
                <a
                  href="#studio-disciplines"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore the 3 disciplines
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20">
          {/* Section 1: The Three Disciplines */}
          <section
            id="studio-disciplines"
            aria-labelledby="studio-disciplines-heading"
            className="scroll-mt-28"
          >
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                THREE CORE DISCIPLINES
              </p>
              <h2
                id="studio-disciplines-heading"
                className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]"
              >
                What our engineering studio ships.
              </h2>
              <p className="mt-3 text-base text-[#5B6475] leading-relaxed">
                Built by senior software practitioners in Gachibowli, Hyderabad with
                production-grade rigor, complete transparency, and zero agency bloat.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {STUDIO_DISCIPLINES.map((item) => (
                <SpotlightCard
                  key={item.id}
                  tone="light"
                  className="h-full p-6 sm:p-7 flex flex-col gap-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex min-h-8 items-center rounded-full bg-[#101828] px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#C7F36B]">
                      DISCIPLINE {item.number}
                    </span>
                    <span className="text-xs font-semibold text-[#5B6475]">
                      {item.scopeBadge}
                    </span>
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
                      What we architect &amp; ship
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
                      Production deliverable
                    </p>
                    <p className="text-sm leading-relaxed text-[#101828]">{item.outcome}</p>
                  </div>

                  <DepthButton
                    onClick={() => handleScopeTrack(item.title)}
                    variant="precision"
                    size="md"
                    className="w-full"
                  >
                    Scope this capability <span aria-hidden="true">→</span>
                  </DepthButton>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* Section 2: Studio Engineering Lifecycle */}
          <section aria-labelledby="studio-steps-heading" className="mt-16 sm:mt-24">
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                ENGINEERING LIFECYCLE
              </p>
              <h2
                id="studio-steps-heading"
                className="text-2xl sm:text-3xl font-display font-bold text-[#101828]"
              >
                Simple, transparent, and milestone-driven.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STUDIO_STEPS.map((step) => (
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

          {/* Section 3: Interactive Project Scope Configurator + Intake Form */}
          <section
            ref={intakeRef}
            id="studio-intake-docket"
            aria-labelledby="studio-intake-heading"
            className="mt-16 sm:mt-24 scroll-mt-28"
          >
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">
                DIRECT ARCHITECT INTAKE
              </p>
              <h2
                id="studio-intake-heading"
                className="text-3xl sm:text-4xl font-display font-bold text-[#101828]"
              >
                Scope your build with our Gachibowli team.
              </h2>
              <p className="mt-3 text-base text-[#5B6475] leading-relaxed">
                Select the capability modules you need and share your target timeline. You will
                speak directly with an engineering lead—never a commission salesperson.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: HQ Details & Guarantees */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <SpotlightCard tone="light" className="p-6 flex flex-col gap-4">
                  <div className="font-mono text-xs text-[#3659D9] uppercase tracking-wider font-bold">
                    STUDIO HEADQUARTERS
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#101828]">
                      {SITE_BRANDING.buildingName}
                    </h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed mt-1">
                      {SITE_BRANDING.officeAddress}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E3E5DE] space-y-1.5 text-xs font-mono text-[#5B6475]">
                    <div>Direct Line: {SITE_BRANDING.supportPhone}</div>
                    <div>General Desk: {SITE_BRANDING.contactEmail}</div>
                  </div>
                </SpotlightCard>

                <SpotlightCard tone="light" className="p-6 flex flex-col gap-3">
                  <div className="font-mono text-xs text-[#3659D9] uppercase tracking-wider font-bold">
                    THE STUDIO GUARANTEES
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#5B6475]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3659D9] font-bold">✓</span>
                      <span>100% IP rights and source code ownership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3659D9] font-bold">✓</span>
                      <span>Direct pairing with senior software architects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3659D9] font-bold">✓</span>
                      <span>Production CI/CD pipelines &amp; test suites included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3659D9] font-bold">✓</span>
                      <span>Zero lock-in or proprietary framework traps</span>
                    </li>
                  </ul>
                </SpotlightCard>
              </div>

              {/* Right Column: Intake Scope Configurator */}
              <div className="lg:col-span-7">
                <SpotlightCard tone="light" className="p-7 sm:p-9">
                  {submitted ? (
                    <div className="py-10 text-center flex flex-col items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#3659D9] text-white font-mono text-2xl font-bold flex items-center justify-center">
                        ✓
                      </div>
                      <h3 className="text-2xl font-display font-bold text-[#101828]">
                        Studio WhatsApp Draft Prepared
                      </h3>
                      <p className="text-sm text-[#5B6475] max-w-md">
                        Your project specifications have been drafted in WhatsApp. Review the
                        message in WhatsApp and tap Send to connect directly with our engineering
                        leads.
                      </p>
                      <a
                        href={draftUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#3659D9] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2c4abf] transition-all"
                      >
                        Reopen WhatsApp draft ↗
                      </a>
                      <DepthButton
                        onClick={() => setSubmitted(false)}
                        variant="precision"
                        size="md"
                      >
                        <span>Configure Another Scope</span>
                      </DepthButton>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-[#3659D9] font-bold block mb-2.5">
                          1. Select Required Capability Modules
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {CONFIGURATOR_MODULES.map((mod) => {
                            const active = selectedModules.includes(mod);
                            return (
                              <button
                                key={mod}
                                type="button"
                                onClick={() => toggleModule(mod)}
                                className={`px-3.5 py-2 rounded-xl font-mono text-xs border transition-all cursor-pointer ${
                                  active
                                    ? 'bg-[#101828] text-[#C7F36B] border-[#101828] font-bold shadow-sm'
                                    : 'bg-white text-[#5B6475] border-[#E3E5DE] hover:border-[#3659D9] hover:text-[#101828]'
                                }`}
                              >
                                {active ? `✓ ${mod}` : `+ ${mod}`}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="studio-company"
                            className="font-mono text-xs uppercase text-[#5B6475] font-semibold"
                          >
                            Company / Startup Name *
                          </label>
                          <input
                            id="studio-company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Technologies"
                            className="min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E3E5DE] text-[15px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="studio-name"
                            className="font-mono text-xs uppercase text-[#5B6475] font-semibold"
                          >
                            Your Name *
                          </label>
                          <input
                            id="studio-name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Alex Morgan"
                            className="min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E3E5DE] text-[15px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="studio-email"
                            className="font-mono text-xs uppercase text-[#5B6475] font-semibold"
                          >
                            Work Email *
                          </label>
                          <input
                            id="studio-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@acme.com"
                            className="min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E3E5DE] text-[15px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="studio-timeline"
                            className="font-mono text-xs uppercase text-[#5B6475] font-semibold"
                          >
                            Target Timeline *
                          </label>
                          <select
                            id="studio-timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-[#E3E5DE] text-[15px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                          >
                            <option value="Immediate / MVP (< 1 Month)">Immediate / MVP (&lt; 1 Month)</option>
                            <option value="1–3 Months">1–3 Months</option>
                            <option value="3–6 Months">3–6 Months</option>
                            <option value="Ongoing Retainer">Ongoing Architecture Retainer</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="studio-scope"
                          className="font-mono text-xs uppercase text-[#5B6475] font-semibold"
                        >
                          Project Scope &amp; Engineering Goals
                        </label>
                        <textarea
                          id="studio-scope"
                          name="scope"
                          rows={3}
                          value={formData.scope}
                          onChange={handleChange}
                          placeholder="Outline the core platform, technical stack requirements, key integrations, or existing infrastructure..."
                          className="px-4 py-3 rounded-xl bg-white border border-[#E3E5DE] text-[15px] text-[#101828] focus:outline-2 focus:outline-[#3659D9] leading-relaxed resize-y"
                        />
                      </div>

                      <DepthButton type="submit" variant="electric" size="lg" className="w-full">
                        <span>Draft WhatsApp Scoping Docket</span>
                        <span aria-hidden="true">→</span>
                      </DepthButton>
                    </form>
                  )}
                </SpotlightCard>
              </div>
            </div>
          </section>

          {/* Section 4: Bottom Closing Dark SpotlightCard */}
          <SpotlightCard tone="dark" className="mt-16 sm:mt-24 p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-2">
                  GACHIBOWLI ENGINEERING DIVISION
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Have a high-impact platform or AI workflow to build?
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Whether you need a full-stack SaaS platform, enterprise cloud orchestration, or
                  custom agentic AI pipelines, our engineering studio delivers with production
                  rigor.
                </p>
              </div>
              <DepthButton onClick={scrollToScope} variant="electric" size="lg">
                Scope your build <span aria-hidden="true">→</span>
              </DepthButton>
            </div>
          </SpotlightCard>
        </main>
      </div>
    </>
  );
}
