import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
export default function PaperAudienceRouting() {
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


      </div>
    </section>
  );
}
