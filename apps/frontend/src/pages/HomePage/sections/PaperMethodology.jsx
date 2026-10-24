import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const PIPELINE_STEPS = [
  {
    id: 'step-assess',
    step: 'Step 1',
    title: 'Assess Every Student’s Starting Point',
    summary:
      'Before instruction begins, we evaluate each participant’s baseline coding and problem-solving level so beginners build strong foundations while advanced learners tackle complex systems.',
    highlights: [
      'Diagnostic coding & logic evaluation',
      'Skill-matched cohort grouping',
      'Clear progression roadmap',
    ],
    accent: '#C7F36B',
  },
  {
    id: 'step-live-code',
    step: 'Step 2',
    title: 'Live Coding Inside the Computer Lab',
    summary:
      'Zero static slide decks. Experienced industry practitioners write and debug production code live on the projector while every student builds alongside on their workstation.',
    highlights: [
      'First-principles live coding execution',
      'Real-time troubleshooting inside the lab',
      'Deep focus on core engineering fundamentals',
    ],
    accent: '#38BDF8',
  },
  {
    id: 'step-build',
    step: 'Step 3',
    title: 'Build & Launch Real Applications',
    summary:
      'Teams engineer complete applications across Full Stack Web Development, AWS DevOps & MLOps, or Agentic AI—pushing version-controlled releases live to the cloud.',
    highlights: [
      'End-to-end applications built from scratch',
      'Hosted live on cloud & GitHub repositories',
      'Structured practitioner code reviews',
    ],
    accent: '#6D8DFF',
  },
  {
    id: 'step-interview',
    step: 'Step 4',
    title: 'Mock Interviews & Career Readiness',
    summary:
      'Participants defend their system architecture in 1-on-1 mock technical panels—building the clarity and confidence required to excel in placement interviews.',
    highlights: [
      'One-on-one mock technical & HR panels',
      'Verified GitHub & resume portfolio audit',
      'Confidence to articulate every line of code',
    ],
    accent: '#C7F36B',
  },
];

function StageArchitecturalEmblem({ id, step, accent }) {
  return (
    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-b from-[#091226] via-[#060B17] to-[#0A1122] flex items-center justify-center border-b border-white/10">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute w-36 h-36 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      <span
        className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full text-xs font-bold text-[#050811]"
        style={{ backgroundColor: accent }}
      >
        {step}
      </span>

      {/* Single Professional Emblem Per Stage */}
      <div className="relative z-10 mt-2">
        {id === 'step-assess' && (
          <svg viewBox="0 0 140 140" className="w-28 h-28 sm:w-32 sm:h-32" fill="none">
            <circle cx="70" cy="70" r="54" stroke="rgba(199,243,107,0.25)" strokeWidth="1.4" strokeDasharray="4 4" />
            <circle cx="70" cy="70" r="38" stroke="#C7F36B" strokeOpacity="0.45" strokeWidth="1.5" />
            <polygon
              points="70,22 112,70 70,118 28,70"
              fill="rgba(199,243,107,0.12)"
              stroke="#C7F36B"
              strokeWidth="2"
            />
            <line x1="70" y1="16" x2="70" y2="124" stroke="#C7F36B" strokeOpacity="0.4" />
            <line x1="16" y1="70" x2="124" y2="70" stroke="#C7F36B" strokeOpacity="0.4" />
            <circle cx="70" cy="70" r="10" fill="#050811" stroke="#C7F36B" strokeWidth="2.5" />
            <circle cx="70" cy="70" r="4" fill="#C7F36B" />
          </svg>
        )}

        {id === 'step-live-code' && (
          <svg viewBox="0 0 140 140" className="w-28 h-28 sm:w-32 sm:h-32" fill="none">
            <circle cx="70" cy="70" r="54" stroke="rgba(56,189,248,0.22)" strokeWidth="1.4" />
            <rect
              x="28"
              y="36"
              width="84"
              height="68"
              rx="12"
              fill="rgba(56,189,248,0.1)"
              stroke="#38BDF8"
              strokeWidth="2"
            />
            <polyline
              points="54,58 42,70 54,82"
              stroke="#C7F36B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="86,58 98,70 86,82"
              stroke="#C7F36B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="75" y1="54" x2="65" y2="86" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}

        {id === 'step-build' && (
          <svg viewBox="0 0 140 140" className="w-28 h-28 sm:w-32 sm:h-32" fill="none">
            <circle cx="70" cy="70" r="54" stroke="rgba(109,141,255,0.25)" strokeWidth="1.4" strokeDasharray="5 4" />
            <polygon
              points="70,26 110,49 110,91 70,114 30,91 30,49"
              fill="rgba(109,141,255,0.14)"
              stroke="#6D8DFF"
              strokeWidth="2.2"
            />
            <polygon
              points="70,44 94,58 94,82 70,96 46,82 46,58"
              fill="#050811"
              stroke="#C7F36B"
              strokeWidth="1.8"
            />
            <path
              d="M70,84 L70,56 M70,56 L60,66 M70,56 L80,66"
              stroke="#C7F36B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {id === 'step-interview' && (
          <svg viewBox="0 0 140 140" className="w-28 h-28 sm:w-32 sm:h-32" fill="none">
            <circle cx="70" cy="70" r="54" stroke="rgba(199,243,107,0.28)" strokeWidth="1.5" />
            <polygon
              points="70,22 112,44 112,82 70,118 28,82 28,44"
              fill="rgba(199,243,107,0.12)"
              stroke="#C7F36B"
              strokeWidth="2.2"
            />
            <circle cx="70" cy="68" r="22" fill="#050811" stroke="#38BDF8" strokeWidth="2" />
            <polyline
              points="60,68 67,75 82,60"
              stroke="#C7F36B"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default function PaperMethodology() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.25'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.4,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      aria-label="How We Turn Classrooms Into Engineering Labs"
      className="relative w-full bg-transparent text-white py-16 sm:py-24 px-4 sm:px-8"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Clean Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <h2
            className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}
          >
            How we turn classrooms into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#38BDF8]">
              real engineering labs.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured 4-stage execution pipeline that moves cohorts from foundational diagnostics
            to deploying production applications and clearing technical interviews.
          </p>
        </div>

        {/* Connected Liquid Timeline */}
        <div className="relative pl-6 sm:pl-10 lg:pl-0">
          {/* Vertical Spine Track (Left on Mobile, Center on Desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-2 sm:left-4 lg:left-1/2 top-4 bottom-4 lg:-translate-x-1/2 w-[2px] bg-white/10"
          />

          {/* Scroll-Animated Glowing Beam */}
          <motion.div
            aria-hidden="true"
            style={{ height: lineHeight }}
            className="absolute left-2 sm:left-4 lg:left-1/2 top-4 lg:-translate-x-1/2 w-[3px] bg-gradient-to-b from-[#C7F36B] via-[#38BDF8] to-[#6D8DFF] rounded-full origin-top"
          />

          <div className="space-y-10 sm:space-y-14">
            {PIPELINE_STEPS.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
                >
                  {/* Glowing Spine Indicator */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[22px] sm:-left-[30px] lg:left-1/2 top-8 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#050811] border-4"
                    style={{ borderColor: item.accent }}
                  />

                  {/* Floating Glass Step Card */}
                  <div
                    className={
                      isEven
                        ? 'lg:col-span-5 lg:col-start-1'
                        : 'lg:col-span-5 lg:col-start-8 lg:order-2'
                    }
                  >
                    <div className="rounded-3xl bg-[#0A1122]/85 backdrop-blur-md border border-white/15 hover:border-[#C7F36B]/50 overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)] transition-all">
                      <StageArchitecturalEmblem id={item.id} step={item.step} accent={item.accent} />

                      <div className="p-6 sm:p-7">
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed mb-5">
                          {item.summary}
                        </p>

                        <ul className="space-y-2">
                          {item.highlights.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: item.accent }}
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Large Step Number Callout on Opposite Side (Desktop) */}
                  <div
                    className={`hidden lg:flex flex-col ${
                      isEven
                        ? 'lg:col-span-5 lg:col-start-8 items-start text-left pl-6'
                        : 'lg:col-span-5 lg:col-start-1 lg:order-1 items-end text-right pr-6'
                    }`}
                  >
                    <span
                      className="font-display font-bold text-6xl xl:text-7xl leading-none opacity-25 mb-2"
                      style={{ color: item.accent }}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-lg font-display font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
