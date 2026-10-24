import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


const HERO_PILLARS = [
  { label: 'On-Campus Workshops', desc: '3–5 Day Practical Bootcamps', href: '/workshops' },
  { label: 'Campus CRT Training', desc: 'Complete Placement Preparation', href: '/crt' },
  { label: 'Industry Internships', desc: 'Real Project Experience', href: '/internships' },
];

export default function PaperHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 22,
    mass: 0.4,
  });

  const headlineY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const headlineOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0]);

  const scrollToStory = () => {
    const el = document.getElementById('course-storytelling');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      aria-label="THAKSA.AI Hero"
      className="relative w-full min-h-[calc(100vh-76px)] bg-transparent text-white flex flex-col justify-between py-6 sm:py-10"
    >
      {/* Center Stage: Executive Typography */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 max-w-[1140px] w-full mx-auto px-4 sm:px-8 my-auto py-6 sm:py-10 flex flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="font-display font-bold tracking-[-0.04em] leading-[1.02] text-white mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7.4vw, 6.6rem)' }}
        >
          Real Engineers.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#6D8DFF]">
            Real Code. Real Careers.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-slate-300 font-normal max-w-[52ch] leading-[1.55] mb-7 px-2"
        >
          Experienced industry professionals empowering engineering talent to build and ship
          production software through <strong className="text-white">Workshops</strong>,{' '}
          <strong className="text-white">CRT Training</strong>, and{' '}
          <strong className="text-white">Internships</strong>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto px-4 sm:px-0"
        >
          <button
            type="button"
            onClick={scrollToStory}
            className="min-h-[50px] px-8 py-3.5 rounded-full bg-[#C7F36B] hover:bg-[#d8fa88] text-[#050811] font-display font-bold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_30px_-6px_rgba(199,243,107,0.5)]"
          >
            <span>Explore Our Architecture</span>
            <span aria-hidden="true">↓</span>
          </button>

          <Link
            to="/contact"
            className="min-h-[50px] px-8 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/20 font-display font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
          >
            <span>Talk to Our Team</span>
            <span aria-hidden="true" className="text-[#C7F36B]">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Floating Dock: 3 Core Institutional Pillars */}
      <div className="relative z-10 max-w-[1120px] w-full mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2.5 rounded-2xl bg-[#090F1E]/80 backdrop-blur-md border border-white/12">
          {HERO_PILLARS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group px-5 py-3.5 rounded-xl hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 border border-transparent hover:border-[#C7F36B]/40"
            >
              <div>
                <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#C7F36B] transition-colors block">
                  {item.label}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">{item.desc}</span>
              </div>
              <span
                aria-hidden="true"
                className="text-sm text-slate-400 group-hover:text-[#C7F36B] group-hover:translate-x-1 transition-all"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
