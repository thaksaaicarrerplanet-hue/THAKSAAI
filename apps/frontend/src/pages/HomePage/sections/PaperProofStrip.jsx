import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const MANIFESTO_WORDS = [
  { text: 'Most', highlight: false },
  { text: 'training', highlight: false },
  { text: 'stops', highlight: false },
  { text: 'at', highlight: false },
  { text: 'theory.', highlight: false },
  { text: 'Our', highlight: false },
  { text: 'industry', highlight: true },
  { text: 'professionals', highlight: true },
  { text: 'step', highlight: false },
  { text: 'into', highlight: false },
  { text: 'your', highlight: false },
  { text: 'labs', highlight: true },
  { text: 'and', highlight: false },
  { text: 'build', highlight: true },
  { text: 'real', highlight: true },
  { text: 'projects', highlight: true },
  { text: 'with', highlight: false },
  { text: 'your', highlight: false },
  { text: 'students.', highlight: true },
];

const HIGHLIGHTS = [
  {
    value: '3',
    unit: 'Core Courses',
    label: 'Full Stack · AWS DevOps & MLOps · Agentic AI',
    detail: 'Focused on the highest-demand skills that modern tech companies actually hire for.',
  },
  {
    value: '3',
    unit: 'Training Formats',
    label: 'Workshops · CRT Training · Internships',
    detail: 'Structured for both engineering colleges and individual students seeking career growth.',
  },
  {
    value: '4',
    unit: 'Step Learning Flow',
    label: 'Assess → Learn → Build → Crack Interviews',
    detail: 'Every student moves from strong fundamentals to a live project they can confidently explain.',
  },
  {
    value: '100%',
    unit: 'Hands-On',
    label: 'Taught by Industry Professionals',
    detail: 'Every session is led by experienced professionals who build real software in the industry.',
  },
];

function ScrubWord({ word, highlight, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.28em] ${
        highlight ? 'text-[#C7F36B]' : 'text-white'
      }`}
    >
      {word}
    </motion.span>
  );
}

export default function PaperProofStrip() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 22,
    mass: 0.4,
  });

  const marqueeX = useTransform(smoothProgress, [0, 1], ['0%', '-25%']);

  return (
    <section
      ref={containerRef}
      aria-label="Our Teaching Philosophy"
      className="relative w-full bg-transparent text-white py-16 sm:py-24 overflow-hidden"
    >
      {/* Smooth Marquee Ribbon */}
      <div className="w-full overflow-hidden py-4 mb-14 border-y border-white/10 bg-[#050811]/60 backdrop-blur-sm">
        <motion.div
          style={{ x: marqueeX }}
          className="flex items-center gap-8 sm:gap-10 whitespace-nowrap font-display font-bold text-xl sm:text-3xl tracking-[-0.02em] uppercase text-white/25"
        >
          {[0, 1, 2].map((loopIdx) => (
            <React.Fragment key={loopIdx}>
              <span className="text-[#C7F36B]">FULL STACK WEB DEVELOPMENT</span>
              <span>•</span>
              <span className="text-white">AWS, DEVOPS &amp; MLOPS</span>
              <span>•</span>
              <span className="text-[#6D8DFF]">AGENTIC AI</span>
              <span>•</span>
              <span>WORKSHOPS · CRT TRAINING · INTERNSHIPS</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Scroll-Scrubbed Statement */}
        <div className="max-w-5xl mb-14 sm:mb-20">
          <h2
            className="font-display font-bold tracking-[-0.03em] leading-[1.15]"
            style={{ fontSize: 'clamp(1.85rem, 4.4vw, 4.1rem)' }}
          >
            {MANIFESTO_WORDS.map((item, i) => {
              const start = (i / MANIFESTO_WORDS.length) * 0.75;
              const end = start + 0.25;
              return (
                <ScrubWord
                  key={i}
                  word={item.text}
                  highlight={item.highlight}
                  progress={smoothProgress}
                  range={[start, end]}
                />
              );
            })}
          </h2>
        </div>

        {/* 4 Floating Glass Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-[#0A1122]/80 backdrop-blur-md border border-white/12 hover:border-[#C7F36B]/45 p-6 sm:p-7 transition-all"
            >
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="font-display font-bold text-4xl sm:text-5xl tracking-[-0.03em] text-white">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#C7F36B] font-semibold">
                  {item.unit}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
