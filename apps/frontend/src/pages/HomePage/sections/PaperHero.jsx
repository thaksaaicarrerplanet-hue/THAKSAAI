import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import HeroBackgroundCanvas from '../../../components/ui/HeroBackgroundCanvas';

const SPECIALIZATIONS = [
  { number: '01', name: 'Full Stack', color: '#C7F36B' },
  { number: '02', name: 'Cloud & MLOps', color: '#38BDF8' },
  { number: '03', name: 'Agentic AI', color: '#9AABFF' },
];

const HERO_PILLARS = [
  { number: '01', label: 'On-Campus Workshops', desc: 'Intensive, practical builds', href: '/workshops' },
  { number: '02', label: 'Campus CRT Training', desc: 'Preparation with purpose', href: '/crt' },
  { number: '03', label: 'Industry Internships', desc: 'Experience beyond theory', href: '/internships' },
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

  const headlineY = useTransform(smoothProgress, [0, 1], [0, -54]);
  const headlineOpacity = useTransform(smoothProgress, [0, 0.9], [1, 0.15]);

  const scrollToTarget = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  const scrollToStory = () => scrollToTarget('course-storytelling');
  const scrollToArchitecture = () => scrollToTarget('capability-reactor');

  return (
    <section
      ref={heroRef}
      aria-label="THAKSA.AI Hero"
      className="relative isolate flex min-h-[min(940px,calc(100svh-72px))] w-full flex-col justify-between overflow-hidden bg-[#050811] py-7 text-white sm:py-9"
    >
      <HeroBackgroundCanvas />

      {/* Keep the sculpture atmospheric: typography stays legible above it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,8,17,0.92)_0%,rgba(5,8,17,0.72)_38%,rgba(5,8,17,0.13)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(5,8,17,0.30),rgba(5,8,17,0.62)_55%,rgba(5,8,17,0.84))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 items-center gap-7 px-5 sm:px-8 lg:grid-cols-[1.07fr_0.93fr] lg:gap-10 xl:px-12">
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="relative z-10 max-w-[760px] py-8 sm:py-12 lg:py-16"
        >
          <motion.p
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:mb-7 sm:text-xs"
          >
            <span className="inline-block h-px w-8 bg-[#C7F36B]" aria-hidden="true" />
            Learning, in motion
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.04 }}
            className="font-display text-[clamp(3.35rem,8.1vw,7.75rem)] font-bold leading-[0.88] tracking-[-0.075em] text-white"
          >
            <span className="block">Real Engineers.</span>
            <span className="mt-2 block text-white/85">Real Code.</span>
            <span className="mt-2 block font-serif font-normal italic tracking-[-0.065em] text-transparent [background-image:linear-gradient(105deg,#C7F36B_3%,#F7F8F4_46%,#8FA7FF_92%)] bg-clip-text">
              Real Careers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.12 }}
            className="mt-7 max-w-[52ch] text-sm leading-[1.75] text-slate-300 sm:mt-9 sm:text-base md:text-lg"
          >
            Learn by making. Build with intention. Ship work you can stand behind.
            Practical workshops, placement training, and internships shaped around real software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.17 }}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <button
              type="button"
              onClick={scrollToArchitecture}
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-bold text-[#050811] shadow-[0_0_42px_-16px_rgba(199,243,107,0.68)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#D9FA8B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore the world we build
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </button>
            <Link
              to="/contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.045] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7F36B]"
            >
              Talk to our team <span aria-hidden="true" className="text-[#C7F36B]">↗</span>
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/12 pt-5 sm:mt-10 sm:pt-6">
            {SPECIALIZATIONS.map((item) => (
              <button
                key={item.number}
                type="button"
                onClick={scrollToStory}
                className="group inline-flex items-center gap-2.5 py-1 text-left transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7F36B]"
              >
                <span className="font-mono text-[9px] tracking-[0.14em] text-white/35">{item.number}</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                <span className="text-xs font-medium text-white/75 group-hover:text-white sm:text-sm">{item.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* The Three.js artwork occupies this visual field; instructions never block touch input. */}
        <div className="pointer-events-none relative hidden h-full min-h-[420px] items-end justify-end lg:flex">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="absolute bottom-12 right-2 z-10 max-w-[220px] text-right"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">THK / ARTIFACT 001</p>
            <p className="mt-2 text-xs leading-relaxed text-white/65">
              Move your cursor to shift the light.
            </p>
          </motion.div>
          <div className="absolute right-[-8%] top-[18%] h-[64%] w-[88%] rounded-full border border-white/[0.07]" />
          <div className="absolute right-[1%] top-[26%] h-[48%] w-[68%] rounded-full border border-[#C7F36B]/[0.12]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-4 sm:px-8 sm:pt-6 xl:px-12">
        <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-3">
          {HERO_PILLARS.map((item, index) => (
            <Link
              key={item.number}
              to={item.href}
              className={`group flex min-h-[76px] items-center justify-between gap-4 py-4 transition-colors hover:text-[#C7F36B] sm:py-5 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0 sm:pl-5 lg:pl-8' : 'sm:pr-5 lg:pr-8'} `}
            >
              <span className="flex min-w-0 items-start gap-3.5">
                <span className="pt-0.5 font-mono text-[10px] tracking-[0.12em] text-[#C7F36B]/75">{item.number}</span>
                <span className="block">
                  <span className="block font-display text-sm font-semibold text-white group-hover:text-[#C7F36B] sm:text-base">{item.label}</span>
                  <span className="mt-1 block text-xs text-white/50">{item.desc}</span>
                </span>
              </span>
              <span aria-hidden="true" className="text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-[#C7F36B]">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
