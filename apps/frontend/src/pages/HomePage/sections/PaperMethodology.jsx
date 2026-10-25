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
    imageSrc: '/images/journey/IMG-20260619-WA0025.jpg',
    imageAlt: 'A mentor working directly with students at their workstations to understand their current level and guide next steps',
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
    imageSrc: '/images/journey/IMG-20260301-WA0022.jpg',
    imageAlt: 'Students following a live coding session in a college computer lab',
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
    imageSrc: '/images/journey/IMG-20260619-WA0021.jpg',
    imageAlt: 'Students collaborating on a practical full-stack application build',
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
    imageSrc: '/images/journey/IMG-20260717-WA0025.jpg',
    imageAlt: 'Students preparing to explain their work during a technical review',
  },
];

function StagePhoto({ imageSrc, imageAlt, step, accent }) {
  return (
    <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b border-white/10 bg-[#091226]">
      <img
        src={imageSrc}
        alt={imageAlt}
        width="960"
        height="520"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#050811]/85 via-[#050811]/20 to-[#050811]/10"
      />
      <span
        className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full text-xs font-bold text-[#050811] shadow-sm"
        style={{ backgroundColor: accent }}
      >
        {step}
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1"
        style={{ backgroundColor: accent }}
      />
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
                      <StagePhoto imageSrc={item.imageSrc} imageAlt={item.imageAlt} step={item.step} accent={item.accent} />

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
