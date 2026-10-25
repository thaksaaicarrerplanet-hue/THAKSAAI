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
    imageSrc: '/images/journey/IMG-20260301-WA0008.jpg',
    imageAlt: 'An instructor guiding an engineering student during a hands-on computer lab workshop',
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
    imageSrc: '/images/journey/IMG-20260301-WA0018.jpg',
    imageAlt: 'Engineering students working through a whiteboard problem-solving session',
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
    imageSrc: '/images/journey/IMG-20260619-WA0024.jpg',
    imageAlt: 'Students collaborating on a guided engineering project sprint',
  },
];

/**
 * Real, locally stored photos from THAKSA.AI campus sessions.
 * The photo, caption, and course route are paired in CORE_PROGRAMS.
 */
function ProgramPhoto({ imageSrc, imageAlt, accent, subtitle }) {
  return (
    <div className="relative h-56 sm:h-60 w-full overflow-hidden border-b border-white/10 bg-[#091226]">
      <img
        src={imageSrc}
        alt={imageAlt}
        width="960"
        height="600"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#050811]/85 via-[#050811]/25 to-[#050811]/10"
      />
      <span
        className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[11px] font-bold text-[#050811] shadow-sm"
        style={{ backgroundColor: accent }}
      >
        {subtitle}
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

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
                  <ProgramPhoto
                    imageSrc={prog.imageSrc}
                    imageAlt={prog.imageAlt}
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
