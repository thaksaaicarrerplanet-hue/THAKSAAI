import React from 'react';
import { motion } from 'framer-motion';
import { VERIFIED_DOCUMENTARY_GALLERY } from '../../../data/proof';

export default function PaperGallery() {
  const half = Math.ceil(VERIFIED_DOCUMENTARY_GALLERY.length / 2);
  const firstRow = VERIFIED_DOCUMENTARY_GALLERY.slice(0, half);
  const secondRow = VERIFIED_DOCUMENTARY_GALLERY.slice(half);

  return (
    <section
      id="campus-gallery"
      aria-label="Portfolio and Campus Sessions"
      className="relative w-full bg-transparent text-white py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2
            className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08]"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}
          >
            Real labs. Real cohorts. Real builds.
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-300 max-w-md">
          Snapshots from our college workshops, CRT sessions, and Gachibowli training office.
        </p>
      </div>

      {/* Row 1 — Automatically Scrolls Left continuously */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
          className="flex w-max items-stretch gap-4 sm:gap-6 will-change-transform"
        >
          {[...firstRow, ...firstRow].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="group relative w-[260px] sm:w-[370px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-[#0A1122] shadow-[0_18px_40px_-15px_rgba(0,0,0,0.8)]"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/25 to-transparent opacity-90" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#050811]/80 border border-white/15 text-[10px] font-bold text-[#C7F36B]">
                {item.tag}
              </span>
              <div className="absolute bottom-3.5 left-4 right-4">
                <h3 className="text-sm sm:text-base font-display font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — Automatically Scrolls Right continuously */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 42, ease: 'linear', repeat: Infinity }}
          className="flex w-max items-stretch gap-4 sm:gap-6 will-change-transform"
        >
          {[...secondRow, ...secondRow].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="group relative w-[260px] sm:w-[370px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-[#0A1122] shadow-[0_18px_40px_-15px_rgba(0,0,0,0.8)]"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/25 to-transparent opacity-90" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#050811]/80 border border-white/15 text-[10px] font-bold text-[#38BDF8]">
                {item.tag}
              </span>
              <div className="absolute bottom-3.5 left-4 right-4">
                <h3 className="text-sm sm:text-base font-display font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
