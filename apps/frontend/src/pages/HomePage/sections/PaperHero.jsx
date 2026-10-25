import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import HeroBackgroundCanvas from '../../../components/ui/HeroBackgroundCanvas';

const HERO_PILLARS = [
  { label: 'On-Campus Workshops', desc: '3–5 Day Practical Bootcamps', href: '/workshops' },
  { label: 'Campus CRT Training', desc: 'Complete Placement Preparation', href: '/crt' },
  { label: 'Industry Internships', desc: 'Real Project Experience', href: '/internships' },
];

export default function PaperHero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 22,
    mass: 0.4,
  });

  const animatedHeadlineY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const animatedHeadlineOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0]);
  const headlineY = reduceMotion ? 0 : animatedHeadlineY;
  const headlineOpacity = reduceMotion ? 1 : animatedHeadlineOpacity;

  const scrollToStory = () => {
    const target =
      document.getElementById('course-storytelling') ||
      heroRef.current?.nextElementSibling;

    target?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      ref={heroRef}
      aria-label="THAKSA.AI home"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#050811] pt-20 pb-6 text-white sm:pt-24 sm:pb-10"
    >
      {/* This background is deliberately local to the hero, not the whole site. */}
      <HeroBackgroundCanvas />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#050811]/25 via-[#050811]/20 to-[#050811]/85"
      />

      {/* Center Stage */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 my-auto flex w-full flex-col items-center px-4 py-8 text-center sm:px-8 sm:py-10"
      >
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.05 }}
          className="mb-6 max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[6.6rem]"
        >
          Real Engineers.{' '}
          <span className="block bg-gradient-to-r from-[#C7F36B] via-white to-[#6D8DFF] bg-clip-text text-transparent">
            Real Code. Real Careers.
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1 }}
          className="mb-7 max-w-[52ch] px-2 text-base font-normal leading-[1.55] text-slate-300 sm:text-xl md:text-2xl"
        >
          Experienced industry professionals empowering engineering talent to build and ship
          production software through <strong className="text-white">Workshops</strong>,{' '}
          <strong className="text-white">CRT Training</strong>, and{' '}
          <strong className="text-white">Internships</strong>.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.18 }}
          className="flex w-full flex-col items-stretch justify-center gap-3.5 px-4 sm:w-auto sm:flex-row sm:items-center sm:px-0"
        >
          <button
            type="button"
            onClick={scrollToStory}
            className="flex min-h-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C7F36B] px-8 py-3.5 text-sm font-bold text-[#050811] shadow-[0_0_30px_-6px_rgba(199,243,107,0.5)] transition-colors hover:bg-[#d8fa88] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7F36B] sm:text-base"
          >
            <span>Explore Our Architecture</span>
            <span aria-hidden="true">↓</span>
          </button>

          <Link
            to="/contact"
            className="flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7F36B] sm:text-base"
          >
            <span>Talk to Our Team</span>
            <span aria-hidden="true" className="text-[#C7F36B]">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Three entry points retained from the current working-branch hero. */}
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-3 rounded-2xl border border-white/12 bg-[#090F1E]/80 p-2.5 backdrop-blur-md sm:grid-cols-3">
          {HERO_PILLARS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-transparent px-5 py-3.5 transition-colors hover:border-[#C7F36B]/40 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7F36B]"
            >
              <span>
                <span className="block font-display text-sm font-bold text-white transition-colors group-hover:text-[#C7F36B] sm:text-base">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs text-slate-400">{item.desc}</span>
              </span>
              <span
                aria-hidden="true"
                className="text-sm text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-[#C7F36B]"
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
