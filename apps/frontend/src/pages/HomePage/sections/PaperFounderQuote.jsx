import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const STUDENT_COMMITMENTS = [
  {
    id: '01',
    title: 'Production-Grade Builds',
    metric: '100% Live Code',
    desc: 'Every cohort engineers and deploys live systems across Full Stack, AWS/MLOps, and Agentic AI.',
    accent: '#C7F36B',
  },
  {
    id: '02',
    title: 'Industry Practitioners',
    metric: 'Studio Mentors',
    desc: 'Direct mentorship from engineers actively architecting software for real business clients.',
    accent: '#38BDF8',
  },
  {
    id: '03',
    title: 'Technical Defense Readiness',
    metric: '1-on-1 Viva',
    desc: 'Graduates articulate system design and defend their code with clarity in technical interviews.',
    accent: '#6D8DFF',
  },
];

const QUOTE_WORDS = [
  { text: 'We', highlight: false },
  { text: 'don’t', highlight: false },
  { text: 'measure', highlight: false },
  { text: 'our', highlight: false },
  { text: 'success', highlight: false },
  { text: 'by', highlight: false },
  { text: 'certificates', highlight: false },
  { text: 'printed—', highlight: false },
  { text: 'but', highlight: false },
  { text: 'by', highlight: false },
  { text: 'the', highlight: false },
  { text: 'real', highlight: true },
  { text: 'software', highlight: true },
  { text: 'shipped', highlight: true },
  { text: 'and', highlight: false },
  { text: 'the', highlight: false },
  { text: 'engineering', highlight: true },
  { text: 'careers', highlight: true },
  { text: 'launched.', highlight: true },
];

function QuoteWord({ word, highlight, index, total, progress }) {
  const start = (index / total) * 0.7;
  const end = start + 0.28;
  const opacity = useTransform(progress, [start, end], [0.28, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.28em] ${
        highlight
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#38BDF8]'
          : 'text-white'
      }`}
    >
      {word}
    </motion.span>
  );
}

export default function PaperFounderQuote() {
  const sectionRef = useRef(null);
  const [activePillar, setActivePillar] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.4,
  });

  const kineticTextX = useTransform(smoothProgress, [0, 1], ['6%', '-18%']);
  const portraitY = useTransform(smoothProgress, [0, 1], [18, -18]);

  return (
    <section
      ref={sectionRef}
      aria-label="Leadership and Institutional Vision"
      className="relative w-full bg-transparent text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden select-text"
    >
      {/* Scroll-Driven Kinetic Background Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden mb-6 sm:mb-8"
      >
        <motion.div
          style={{ x: kineticTextX }}
          className="whitespace-nowrap font-display font-bold tracking-[-0.04em] leading-none text-white/[0.045]"
        >
          <span style={{ fontSize: 'clamp(3.2rem, 9vw, 8.5rem)' }}>
            LEADERSHIP VISION · ARCHITECTURAL EXCELLENCE · PRACTITIONER LED ·
          </span>
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="relative rounded-3xl bg-[#0A1122]/85 backdrop-blur-md border border-white/15 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C7F36B]/10 blur-3xl pointer-events-none"
          />

          {/* Left Side (5 Cols): Parallax Animated Founder Portrait Stage */}
          <motion.div
            style={{ y: portraitY }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start relative"
          >
            <div className="relative w-full max-w-sm">
              {/* Animated Precision Corner Brackets */}
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
                className="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#C7F36B] rounded-tl-lg pointer-events-none z-20"
              />
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#38BDF8] rounded-br-lg pointer-events-none z-20"
              />

              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)] border border-white/20 bg-[#050811] group">
                <img
                  src="/images/founders/founder_homepage.jpg"
                  alt="K. Tharunkrishna - Founder & CEO of THAKSA.AI"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Reduced-opacity bottom shade confined to lower 32% so the portrait stays clear */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#F7F8F4]/80 via-[#F7F8F4]/25 to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#101828] drop-shadow-sm">
                    K. Tharunkrishna
                  </h3>
                  <span
                    className="inline-block mt-1 text-xs font-sans font-extrabold uppercase tracking-[0.14em]"
                    style={{ color: '#0a2540' }}
                  >
                    FOUNDER &amp; CEO
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side (7 Cols): Scroll-Illuminated Quote & Interactive Outcome Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/12 w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                Executive Leadership &amp; Pedagogy
              </span>
            </div>

            <blockquote
              className="font-display font-bold tracking-[-0.03em] leading-[1.16] mb-8"
              style={{ fontSize: 'clamp(1.65rem, 3.1vw, 2.75rem)' }}
            >
              <span className="text-[#C7F36B] mr-2">“</span>
              {QUOTE_WORDS.map((item, idx) => (
                <QuoteWord
                  key={`${item.text}-${idx}`}
                  word={item.text}
                  highlight={item.highlight}
                  index={idx}
                  total={QUOTE_WORDS.length}
                  progress={smoothProgress}
                />
              ))}
              <span className="text-[#C7F36B]">”</span>
            </blockquote>

            {/* Interactive Animated Commitment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              {STUDENT_COMMITMENTS.map((item, idx) => {
                const isActive = activePillar === idx;
                return (
                  <motion.div
                    key={item.title}
                    onMouseEnter={() => setActivePillar(idx)}
                    onClick={() => setActivePillar(idx)}
                    whileHover={{ y: -4 }}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                      isActive
                        ? 'bg-[#0E172E]/95 border-[#C7F36B]/50 shadow-[0_12px_30px_-10px_rgba(199,243,107,0.25)]'
                        : 'bg-[#050811]/80 border-white/12 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-[#050811]"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.metric}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{item.id}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-display font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://www.linkedin.com/in/tharunkrishna-kaithoju-185140261/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white font-display font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-sm"
              >
                <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>

              <Link
                to="/about"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-display font-semibold text-sm px-6 py-3 rounded-full transition-all"
              >
                <span>Explore Institutional Story</span>
                <span aria-hidden="true" className="text-[#C7F36B]">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
