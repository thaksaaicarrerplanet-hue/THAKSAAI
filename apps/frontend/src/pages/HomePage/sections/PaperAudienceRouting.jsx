import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CORE_PROGRAMS = [
  {
    id: 'workshops',
    title: 'On-Campus Workshops',
    subtitle: '3 to 5 Days · Hands-On Lab Bootcamps',
    description:
      'Industry practitioners lead intensive, hands-on engineering bootcamps directly inside campus computer labs—building and deploying live applications from scratch.',
    points: [
      '100% live coding execution inside departmental labs',
      'Focused tracks in Full Stack, Cloud/MLOps, and Agentic AI',
      'Every participant completes a version-controlled GitHub build',
    ],
    href: '/workshops',
    cta: 'Explore Workshops',
    accent: '#C7F36B',
  },
  {
    id: 'crt',
    title: 'Campus CRT Training',
    subtitle: 'Semester-Long Placement Readiness',
    description:
      'Structured campus recruitment engineering designed to build deep algorithmic problem-solving, quantitative speed, and technical interview confidence.',
    points: [
      'Diagnostic baseline and skill-matched cohort grouping',
      'Intensive Data Structures, Algorithms, and Quantitative drills',
      'One-on-one mock technical and HR interview panels',
    ],
    href: '/crt',
    cta: 'Explore CRT Training',
    accent: '#38BDF8',
  },
  {
    id: 'internships',
    title: 'Industry Internships',
    subtitle: '8 to 16 Weeks · Gachibowli Office',
    description:
      'Direct immersion alongside our Gachibowli engineering team—contributing to production codebases, sprint workflows, and architectural reviews.',
    points: [
      'Supervised sprint deliverables and senior code reviews',
      'Production tracks in Full Stack, AWS/MLOps, and Agentic AI',
      'Verified completion credential and deployed project portfolio',
    ],
    href: '/internships',
    cta: 'Explore Internships',
    accent: '#6D8DFF',
  },
];

const MASTERED_DOMAINS = [
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    shortLabel: 'Full Stack Web Dev',
    headline: 'End-to-end web application architecture from reactive UIs to distributed backends.',
    story:
      'Complete engineering mastery across modern user interfaces, high-concurrency REST and GraphQL APIs, relational data modeling, and cloud-hosted production deployments.',
    steps: [
      {
        title: 'Frontend Systems',
        detail: 'Component architecture, state management, and responsive design with React & Next.js.',
      },
      {
        title: 'API & Data Layer',
        detail: 'Secure authentication, REST services, and schema design with Node.js, PostgreSQL & MongoDB.',
      },
      {
        title: 'Production Release',
        detail: 'End-to-end testing, performance optimization, and live cloud deployment.',
      },
    ],
    skills: ['React & Next.js', 'Node.js & Express', 'PostgreSQL & MongoDB', 'REST APIs', 'Git & GitHub'],
    deliverable: 'Production-grade, cloud-deployed full-stack web platform with clean modular architecture.',
    accent: '#C7F36B',
  },
  {
    id: 'aws-devops-mlops',
    title: 'AWS, DevOps & MLOps',
    shortLabel: 'AWS, DevOps & MLOps',
    headline: 'Resilient cloud infrastructure, zero-downtime CI/CD, and automated ML model pipelines.',
    story:
      'Bridging software development and cloud operations—architecting secure AWS environments, containerized microservice clusters, and scalable machine learning deployment pipelines.',
    steps: [
      {
        title: 'Cloud Infrastructure',
        detail: 'Compute, networking, IAM security, and Infrastructure-as-Code on Amazon Web Services.',
      },
      {
        title: 'Container Orchestration',
        detail: 'Multi-stage Docker builds, Kubernetes clusters, and automated CI/CD release workflows.',
      },
      {
        title: 'MLOps Pipelines',
        detail: 'Automated model packaging, endpoint serving, and real-time production telemetry.',
      },
    ],
    skills: ['AWS Cloud', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Terraform', 'MLOps Workflows'],
    deliverable: 'Automated cloud and MLOps infrastructure pipeline with live monitoring on AWS.',
    accent: '#38BDF8',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    shortLabel: 'Agentic AI',
    headline: 'Autonomous AI systems that reason, retrieve enterprise knowledge, and execute tools.',
    story:
      'Moving beyond static prompts to engineer multi-agent architectures capable of semantic document retrieval (RAG), structured tool invocation, and autonomous task orchestration.',
    steps: [
      {
        title: 'LLM & Context Architecture',
        detail: 'Structured outputs, function calling, and deterministic prompt engineering in Python.',
      },
      {
        title: 'RAG & Vector Systems',
        detail: 'High-precision semantic retrieval across unstructured documents and enterprise databases.',
      },
      {
        title: 'Multi-Agent Orchestration',
        detail: 'Stateful agent graphs that plan, invoke external APIs, and verify complex workflows.',
      },
    ],
    skills: ['Python for AI', 'AI Agents & Workflows', 'RAG & Vector Databases', 'LangChain / LangGraph', 'API Tool Calling'],
    deliverable: 'Autonomous, tool-calling Agentic AI system grounded in real-time vector knowledge.',
    accent: '#6D8DFF',
  },
];

/**
 * Single, high-craft 3D-inspired Architectural Emblem Logo for each Program Card
 */
function ProgramArchitecturalLogo({ id, accent, subtitle }) {
  return (
    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gradient-to-b from-[#091226] via-[#060B17] to-[#0A1122] flex flex-col items-center justify-center border-b border-white/10">
      {/* Radial Spotlight & Subtle Architectural Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 pointer-events-none transition-opacity duration-500 group-hover:opacity-45"
        style={{ backgroundColor: accent }}
      />

      {/* Top Subtitle Pill */}
      <span
        className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold text-[#050811]"
        style={{ backgroundColor: accent }}
      >
        {subtitle}
      </span>

      {/* Center Single Architectural Crest Logo */}
      <div className="relative z-10 mt-4 flex items-center justify-center">
        {id === 'workshops' && (
          <svg
            viewBox="0 0 160 160"
            className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-[0_12px_28px_rgba(199,243,107,0.28)] group-hover:scale-105 transition-transform duration-500"
            fill="none"
          >
            <defs>
              <linearGradient id="ws-grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6FF9E" />
                <stop offset="100%" stopColor="#C7F36B" />
              </linearGradient>
              <linearGradient id="ws-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C7F36B" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1B3B2B" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="ws-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0B162C" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {/* Outer Orbital Ring */}
            <circle cx="80" cy="80" r="66" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="80" cy="80" r="54" stroke="#C7F36B" strokeOpacity="0.28" strokeWidth="1.2" />
            {/* Isometric Base Pedestal */}
            <polygon
              points="80,98 122,118 80,138 38,118"
              fill="rgba(199,243,107,0.08)"
              stroke="#C7F36B"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            {/* Isometric 3D Architectural Cube */}
            <polygon points="80,30 120,52 80,74 40,52" fill="url(#ws-grad-top)" />
            <polygon points="40,52 80,74 80,118 40,96" fill="url(#ws-grad-left)" />
            <polygon points="120,52 80,74 80,118 120,96" fill="url(#ws-grad-right)" />
            {/* Inner Machined Core Lines */}
            <polyline
              points="54,60 80,74 106,60"
              stroke="#050811"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line x1="80" y1="74" x2="80" y2="118" stroke="#E6FF9E" strokeWidth="1.8" />
            <circle cx="80" cy="52" r="5" fill="#050811" />
            <circle cx="80" cy="30" r="3.5" fill="#E6FF9E" />
          </svg>
        )}

        {id === 'crt' && (
          <svg
            viewBox="0 0 160 160"
            className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-[0_12px_28px_rgba(56,189,248,0.28)] group-hover:scale-105 transition-transform duration-500"
            fill="none"
          >
            <defs>
              <linearGradient id="crt-grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7DD3FC" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="crt-grad-core" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C7F36B" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
            {/* Outer Precision Gyroscope Rings */}
            <circle cx="80" cy="80" r="66" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            <ellipse
              cx="80"
              cy="80"
              rx="60"
              ry="26"
              transform="rotate(-28 80 80)"
              stroke="#38BDF8"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            <ellipse
              cx="80"
              cy="80"
              rx="60"
              ry="26"
              transform="rotate(28 80 80)"
              stroke="#C7F36B"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
            {/* Central Octagonal Diamond Prism */}
            <polygon
              points="80,26 118,80 80,134 42,80"
              fill="url(#crt-grad-main)"
              fillOpacity="0.88"
              stroke="#BAE6FD"
              strokeWidth="1.6"
            />
            <polygon
              points="80,44 102,80 80,116 58,80"
              fill="#050811"
              fillOpacity="0.7"
              stroke="url(#crt-grad-core)"
              strokeWidth="1.8"
            />
            {/* Core Precision Node */}
            <circle cx="80" cy="80" r="9" fill="url(#crt-grad-core)" />
            <circle cx="80" cy="26" r="3.5" fill="#7DD3FC" />
            <circle cx="80" cy="134" r="3.5" fill="#7DD3FC" />
          </svg>
        )}

        {id === 'internships' && (
          <svg
            viewBox="0 0 160 160"
            className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-[0_12px_28px_rgba(109,141,255,0.32)] group-hover:scale-105 transition-transform duration-500"
            fill="none"
          >
            <defs>
              <linearGradient id="int-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="100%" stopColor="#6D8DFF" />
              </linearGradient>
              <linearGradient id="int-grad-b" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#C7F36B" />
              </linearGradient>
            </defs>
            {/* Outer Hexagonal Shield Frame */}
            <polygon
              points="80,18 134,49 134,111 80,142 26,111 26,49"
              fill="rgba(109,141,255,0.07)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.3"
            />
            {/* Interlocking Isometric Torus / Architecture Rings */}
            <polygon
              points="80,32 122,56 122,104 80,128 38,104 38,56"
              stroke="url(#int-grad-a)"
              strokeWidth="2.5"
              fill="rgba(5,8,17,0.65)"
            />
            <polygon
              points="80,48 108,64 108,96 80,112 52,96 52,64"
              fill="url(#int-grad-a)"
              fillOpacity="0.22"
              stroke="url(#int-grad-b)"
              strokeWidth="2"
            />
            {/* Architectural Hub Connections */}
            <line x1="80" y1="32" x2="80" y2="62" stroke="#A5B4FC" strokeWidth="2" />
            <line x1="122" y1="104" x2="95" y2="88" stroke="#C7F36B" strokeWidth="2" />
            <line x1="38" y1="104" x2="65" y2="88" stroke="#38BDF8" strokeWidth="2" />
            {/* Central Glowing Core */}
            <circle cx="80" cy="80" r="16" fill="#050811" stroke="url(#int-grad-b)" strokeWidth="2.5" />
            <circle cx="80" cy="80" r="6.5" fill="#C7F36B" />
          </svg>
        )}
      </div>
    </div>
  );
}

/**
 * Single, high-craft Domain Emblem for Full Stack, AWS/MLOps, and Agentic AI
 */
function DomainCrestLogo({ courseId, accent }) {
  return (
    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#070E20] via-[#0B1630] to-[#050811] flex flex-col items-center justify-center p-6 shadow-inner">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute w-48 h-48 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      {courseId === 'fullstack' && (
        <svg viewBox="0 0 180 180" className="relative z-10 w-36 h-36 sm:w-40 sm:h-40" fill="none">
          <defs>
            <linearGradient id="fs-layer-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6FF9E" />
              <stop offset="100%" stopColor="#C7F36B" />
            </linearGradient>
            <linearGradient id="fs-layer-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="fs-layer-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A5B4FC" />
              <stop offset="100%" stopColor="#6D8DFF" />
            </linearGradient>
          </defs>
          {/* 3 Isometric Stacked Architectural Planes (UI / API / Database) */}
          <polygon
            points="90,98 152,126 90,154 28,126"
            fill="url(#fs-layer-3)"
            fillOpacity="0.85"
            stroke="#E0E7FF"
            strokeWidth="1.5"
          />
          <polygon
            points="90,66 152,94 90,122 28,94"
            fill="url(#fs-layer-2)"
            fillOpacity="0.88"
            stroke="#BAE6FD"
            strokeWidth="1.5"
          />
          <polygon
            points="90,34 152,62 90,90 28,62"
            fill="url(#fs-layer-1)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Vertical Spine Pillar */}
          <line x1="90" y1="20" x2="90" y2="165" stroke="#FFFFFF" strokeOpacity="0.4" strokeDasharray="3 3" />
          <circle cx="90" cy="62" r="5" fill="#050811" />
        </svg>
      )}

      {courseId === 'aws-devops-mlops' && (
        <svg viewBox="0 0 180 180" className="relative z-10 w-36 h-36 sm:w-40 sm:h-40" fill="none">
          <defs>
            <linearGradient id="cloud-ring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#C7F36B" />
              <stop offset="100%" stopColor="#6D8DFF" />
            </linearGradient>
          </defs>
          <circle cx="90" cy="90" r="68" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="90" cy="90" r="52" stroke="url(#cloud-ring)" strokeWidth="2.5" />
          {/* Infinity Pipeline Loop + Isometric Container Core */}
          <path
            d="M52,90 C52,68 74,68 90,90 C106,112 128,112 128,90 C128,68 106,68 90,90 C74,112 52,112 52,90 Z"
            stroke="url(#cloud-ring)"
            strokeWidth="4"
            fill="rgba(56,189,248,0.1)"
          />
          <polygon
            points="90,64 114,77 114,103 90,116 66,103 66,77"
            fill="#050811"
            stroke="#38BDF8"
            strokeWidth="2"
          />
          <circle cx="90" cy="90" r="7" fill="#C7F36B" />
          <circle cx="90" cy="38" r="4.5" fill="#38BDF8" />
          <circle cx="90" cy="142" r="4.5" fill="#6D8DFF" />
        </svg>
      )}

      {courseId === 'agentic-ai' && (
        <svg viewBox="0 0 180 180" className="relative z-10 w-36 h-36 sm:w-40 sm:h-40" fill="none">
          <defs>
            <linearGradient id="ai-prism" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C7F36B" />
              <stop offset="50%" stopColor="#6D8DFF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          {/* Neural Constellation Outer Ring */}
          <circle cx="90" cy="90" r="66" stroke="rgba(109,141,255,0.28)" strokeWidth="1.5" />
          {/* Multi-Agent Geometric Star & Connections */}
          <line x1="90" y1="24" x2="90" y2="156" stroke="url(#ai-prism)" strokeOpacity="0.45" strokeWidth="1.5" />
          <line x1="33" y1="57" x2="147" y2="123" stroke="url(#ai-prism)" strokeOpacity="0.45" strokeWidth="1.5" />
          <line x1="147" y1="57" x2="33" y2="123" stroke="url(#ai-prism)" strokeOpacity="0.45" strokeWidth="1.5" />
          {/* Central Autonomous Agent Core */}
          <polygon
            points="90,42 132,66 132,114 90,138 48,114 48,66"
            fill="rgba(109,141,255,0.16)"
            stroke="url(#ai-prism)"
            strokeWidth="2.5"
          />
          <circle cx="90" cy="90" r="22" fill="#050811" stroke="#C7F36B" strokeWidth="2.2" />
          <circle cx="90" cy="90" r="8" fill="#C7F36B" />
          {/* Satellite Agent Nodes */}
          <circle cx="90" cy="24" r="5" fill="#C7F36B" />
          <circle cx="147" cy="57" r="5" fill="#38BDF8" />
          <circle cx="147" cy="123" r="5" fill="#6D8DFF" />
          <circle cx="90" cy="156" r="5" fill="#C7F36B" />
          <circle cx="33" cy="123" r="5" fill="#38BDF8" />
          <circle cx="33" cy="57" r="5" fill="#6D8DFF" />
        </svg>
      )}
    </div>
  );
}

export default function PaperAudienceRouting() {
  const [selectedCourseId, setSelectedCourseId] = useState(MASTERED_DOMAINS[0].id);
  const activeCourse =
    MASTERED_DOMAINS.find((c) => c.id === selectedCourseId) || MASTERED_DOMAINS[0];

  return (
    <section
      id="course-storytelling"
      aria-label="Core Programs and Technology Specializations"
      className="relative w-full bg-transparent text-white py-16 sm:py-24 px-4 sm:px-8"
    >
      <div className="max-w-[1280px] mx-auto space-y-24 sm:space-y-32">
        {/* PART 1: Highlighting Workshops, CRT Training, and Internships */}
        <div>
          <div className="max-w-3xl mb-12 sm:mb-14">
            <h2
              className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}
            >
              Three structured pathways to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#38BDF8]">
                real engineering careers.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Practical, execution-first programs engineered for universities and aspiring
              technologists—focused entirely on hands-on capability and career readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
            {CORE_PROGRAMS.map((prog, idx) => (
              <motion.article
                key={prog.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl bg-[#0A1122]/85 backdrop-blur-md border border-white/15 hover:border-[#C7F36B]/60 overflow-hidden flex flex-col justify-between transition-all shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Single Professional Architectural Crest Logo Header */}
                  <ProgramArchitecturalLogo
                    id={prog.id}
                    accent={prog.accent}
                    subtitle={prog.subtitle}
                  />

                  {/* Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl font-display font-bold text-white mb-2.5">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {prog.description}
                    </p>

                    <ul className="space-y-2.5">
                      {prog.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: prog.accent }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-white/10">
                  <Link
                    to={prog.href}
                    className="w-full min-h-[46px] px-5 py-2.5 rounded-xl bg-white/[0.07] group-hover:bg-[#C7F36B] text-white group-hover:text-[#050811] font-display font-semibold text-sm flex items-center justify-between transition-all"
                  >
                    <span>{prog.cta}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* PART 2: Flagship Technology Domains (Reframed without "courses we offer students") */}
        <div>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2
              className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}
            >
              Three core technology domains{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#6D8DFF]">
                defining modern software.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Deep architectural specialization across full-stack platforms, cloud-native
              infrastructure, and autonomous AI systems—engineered and led by seasoned industry
              practitioners.
            </p>
          </div>

          {/* Domain Selector Tabs */}
          <div
            role="tablist"
            aria-label="Select a technology domain"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
          >
            {MASTERED_DOMAINS.map((course) => {
              const isSelected = course.id === selectedCourseId;
              return (
                <button
                  key={course.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCourseId(course.id)}
                  className={`min-h-[54px] px-5 py-3.5 rounded-2xl font-display font-bold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#C7F36B] text-[#050811] border-[#C7F36B] shadow-[0_0_30px_-6px_rgba(199,243,107,0.55)]'
                      : 'bg-[#0A1122]/80 text-white border-white/15 hover:border-white/35'
                  }`}
                >
                  <span>{course.title}</span>
                  <span aria-hidden="true" className="text-xs">
                    {isSelected ? '●' : '→'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Domain Architecture Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourse.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-[#0A1122]/85 backdrop-blur-md border border-white/15 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)]"
            >
              {/* Left 7 Cols: Domain Overview & 3 Architectural Pillars */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-[-0.025em] mb-2.5">
                    {activeCourse.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg font-medium mb-4"
                    style={{ color: activeCourse.accent }}
                  >
                    {activeCourse.headline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {activeCourse.story}
                  </p>
                </div>

                {/* 3 Architectural Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {activeCourse.steps.map((st, i) => (
                    <div
                      key={st.title}
                      className="p-4 rounded-2xl bg-[#050811]/80 border border-white/10"
                    >
                      <span
                        className="text-xs font-bold block mb-1"
                        style={{ color: activeCourse.accent }}
                      >
                        Pillar 0{i + 1}
                      </span>
                      <h4 className="text-sm font-display font-bold text-white mb-1">
                        {st.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{st.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Core Stack */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Core Technologies &amp; Frameworks
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCourse.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-xs font-medium text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Single Domain Emblem & Architectural Deliverable */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <DomainCrestLogo courseId={activeCourse.id} accent={activeCourse.accent} />

                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/12">
                  <span
                    className="text-xs font-bold uppercase tracking-wider block mb-1"
                    style={{ color: activeCourse.accent }}
                  >
                    Architectural Benchmark
                  </span>
                  <p className="text-sm text-white leading-relaxed mb-4">
                    {activeCourse.deliverable}
                  </p>
                  <Link
                    to={`/contact?query=${encodeURIComponent(activeCourse.title)}`}
                    className="w-full min-h-[46px] px-5 py-2.5 rounded-xl bg-[#C7F36B] hover:bg-[#d8fa88] text-[#050811] font-display font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Enquire About {activeCourse.shortLabel}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
