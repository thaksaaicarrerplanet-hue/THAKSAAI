import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SupabaseImageCard from '../../components/common/SupabaseImageCard';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const CAPSTONE_PILLARS = [
  {
    imageKey: 'capstone-git',
    badge: 'STAGE 01 // TEAM GIT WORKFLOW',
    subtitle: 'Collaborative Engineering',
    title: 'Multi-Branch Team Development in Git',
    desc: 'Instead of copying a single ZIP folder, student teams learn how real engineering squads collaborate using Git branches, pull requests, and peer code reviews.',
  },
  {
    imageKey: 'capstone-cicd',
    badge: 'STAGE 02 // AUTOMATED QUALITY',
    subtitle: 'CI/CD & Cloud Hosting',
    title: 'Automated Testing & Live Cloud Deployment',
    desc: 'Students write automated tests and deploy their full-stack or AI system to a live cloud URL so internal examiners and job interviewers can test the working software.',
  },
  {
    imageKey: 'capstone-defense',
    badge: 'STAGE 03 // VIVA & INTERVIEW DEFENSE',
    subtitle: 'Architectural Confidence',
    title: 'Mock Viva & Technical Panel Defense',
    desc: 'Every student practices defending the system architecture, database schema, and code logic in front of senior developers—eliminating viva anxiety.',
  },
];

const BRANCH_ARCHETYPES = [
  {
    id: 'cse-it',
    branch: 'CSE & IT',
    title: 'Cloud SaaS, Microservices & Distributed Web Systems',
    projects: [
      'Multi-Tenant Campus Placement & Assessment Engine with Live Code Execution',
      'High-Concurrency Event Booking & Real-Time Notification Architecture',
      'End-to-End Encrypted Healthcare Records Portal with Role-Based Access',
    ],
  },
  {
    id: 'aiml-ds',
    branch: 'AIML & Data Science',
    title: 'Applied Generative AI, RAG & Computer Vision Pipelines',
    projects: [
      'Domain-Specific Legal/Medical Document RAG Assistant with Citation Verification',
      'Real-Time Defect Detection & Quality Inspection using Edge Computer Vision',
      'Automated Financial Anomaly Detection & Predictive Analytics Pipeline',
    ],
  },
  {
    id: 'ece-iot',
    branch: 'ECE & IoT Systems',
    title: 'Connected Telemetry, Edge Sensors & Cloud Dashboards',
    projects: [
      'Industrial IoT Sensor Telemetry Mesh with Real-Time Cloud Alerting',
      'Smart Agricultural Micro-Climate Controller with Predictive Irrigation',
      'Low-Latency Wearable Health Telemetry & Emergency Dispatch Platform',
    ],
  },
  {
    id: 'eee-energy',
    branch: 'EEE & Smart Grid',
    title: 'Smart Energy Monitoring, EV Telemetry & Load Forecasting',
    projects: [
      'Smart Campus Energy Consumption & Solar Yield Analytics Platform',
      'EV Battery Health Telemetry & Charging Station Load Balancer',
      'Automated Industrial Power-Factor Monitoring & Fault Alert System',
    ],
  },
];

export default function FinalYearProjectsPage() {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState(BRANCH_ARCHETYPES[0].id);

  const eyebrow = useTextScramble(
    'PILLAR 04 // DEFENSE-READY B.TECH & M.TECH CAPSTONE PROJECTS',
    { duration: 600, trigger: true }
  );

  const activeBranch =
    BRANCH_ARCHETYPES.find((b) => b.id === selectedBranch) || BRANCH_ARCHETYPES[0];

  return (
    <>
      <Helmet>
        <title>Final-Year Engineering Projects · Cloud &amp; AI Capstones | THAKSA.AI</title>
        <meta
          name="description"
          content="Build genuine, version-controlled cloud and AI final-year engineering projects with THAKSA.AI—complete with Git history, live deployment, and mock viva defense."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        {/* Dark Spatial Hero */}
        <section className="relative w-full bg-[#080D1A] text-white iso-grid-dark border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/4 w-[480px] h-[480px] rounded-full bg-[#3659D9]/20 blur-[140px]"
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
                Stop buying black-box ZIP projects.{' '}
                <span className="text-[#C7F36B]">Engineer a system you can defend.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                When students buy pre-made project templates, they fail both their university viva
                and technical job interviews. THAKSA mentors student teams step-by-step to design,
                code, test, and deploy genuine cloud and AI applications they understand inside out.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <DepthButton to="/contact?track=projects" variant="electric" size="lg">
                  <span>Enroll Capstone Team / Department</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
          {/* 3 Core Skills Taught */}
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] block mb-2">
              HOW WE MENTOR CAPSTONE TEAMS // 01
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#101828]">
              Three Engineering Standards in Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            {CAPSTONE_PILLARS.map((item) => (
              <SpotlightCard
                key={item.badge}
                tone="light"
                tilt
                maxTilt={3}
                className="p-6 flex flex-col justify-between gap-5"
              >
                <SupabaseImageCard
                  imageKey={item.imageKey}
                  badgeText={item.badge}
                  subtitle={item.subtitle}
                  title={item.title}
                  description={item.desc}
                  aspectRatio="aspect-[16/10]"
                />
                <DepthButton
                  onClick={() =>
                    navigate(`/contact?track=projects&query=${encodeURIComponent(item.title)}`)
                  }
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  <span>Start With This Standard</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
              </SpotlightCard>
            ))}
          </div>

          {/* Interactive Branch Architecture Explorer */}
          <SpotlightCard tone="dark" className="p-7 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] block mb-2">
                  DEPARTMENTAL PROJECT ARCHITECTURES // 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Select your engineering branch to inspect sample project systems
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {BRANCH_ARCHETYPES.map((b) => {
                  const active = b.id === selectedBranch;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBranch(b.id)}
                      className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C7F36B] text-[#101828] border-[#C7F36B] font-bold'
                          : 'bg-white/[0.05] text-slate-300 border-white/10 hover:text-white'
                      }`}
                    >
                      {b.branch}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-display font-bold text-[#C7F36B] mb-5">
                {activeBranch.branch} — {activeBranch.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {activeBranch.projects.map((proj, i) => (
                  <div
                    key={proj}
                    className="p-5 rounded-2xl bg-[#070B14] border border-white/10 flex flex-col justify-between gap-3"
                  >
                    <span className="font-mono text-xs text-[#6D8DFF]">
                      ARCHETYPE // 0{i + 1}
                    </span>
                    <p className="text-sm font-medium text-white leading-relaxed">{proj}</p>
                    <span className="font-mono text-[10px] text-[#C7F36B] uppercase tracking-wider">
                      ✓ IEEE DOCS + GIT REPO + CLOUD DEMO
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <p className="text-xs sm:text-sm font-mono text-slate-300">
                  Have a custom problem statement? Our architects will help your team scope and build it.
                </p>
                <DepthButton
                  onClick={() =>
                    navigate(
                      `/contact?track=projects&query=${encodeURIComponent(activeBranch.branch + ' Capstone')}`
                    )
                  }
                  variant="electric"
                  size="md"
                >
                  <span>Request {activeBranch.branch} Project List</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
              </div>
            </div>
          </SpotlightCard>
        </section>
      </div>
    </>
  );
}
