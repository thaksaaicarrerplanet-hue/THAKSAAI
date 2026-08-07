import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { 
    value: "1000+", 
    label: "Students Trained", 
    detail: "Prepared for technical coding exams and real engineering execution before campus placement week starts." 
  },
  { 
    value: "40+", 
    label: "Workshops Conducted", 
    detail: "Intensive on-campus coding bootcamps and entrepreneurship camps across university computer labs." 
  },
  { 
    value: "50+", 
    label: "CRT Programs", 
    detail: "Comprehensive placement preparation programs producing verifiable hiring milestones into technology firms." 
  },
  { 
    value: "500+", 
    label: "Mentorship Sessions", 
    detail: "Direct face-to-face guidance and architectural reviews conducted by practicing senior software engineers." 
  }
];

export default function PaperProofStrip() {
  return (
    <section aria-label="Proven campus results metrics" className="w-full bg-[#EDEEF5] py-14 sm:py-18 md:py-24 border-b border-black/[0.06] relative overflow-hidden">
      
      {/* Decorative ambient background light blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#9fff00]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-14 pb-6 border-b border-black/[0.08]">
          <div className="max-w-xl">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-zinc-500 font-sans mb-2 sm:mb-2.5">
              Proven Results Across Campuses
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#1a1a1a] tracking-tight leading-snug sm:leading-tight">
              Real results you can trust and verify.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-black/[0.08] text-xs sm:text-sm font-bold text-zinc-800 shadow-sm shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9fff00] block animate-pulse"></span>
            <span>Active Training Across Engineering Colleges</span>
          </div>
        </div>

        {/* Responsive Glassmorphism Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgb(0,0,0,0.12)] transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                <span className="text-4xl sm:text-5xl lg:text-5xl font-display font-black text-[#1a1a1a] tracking-tight group-hover:text-black transition-colors block mb-2 sm:mb-3 drop-shadow-2xs">
                  {item.value}
                </span>
                <h3 className="text-sm sm:text-base font-sans font-extrabold text-[#1a1a1a] uppercase tracking-wide mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium text-zinc-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
              
              {/* Interactive bottom accent beam that expands on hover */}
              <div className="w-12 h-1 bg-black/[0.1] rounded-full group-hover:w-full group-hover:bg-[#9fff00] transition-all duration-300 mt-7"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
