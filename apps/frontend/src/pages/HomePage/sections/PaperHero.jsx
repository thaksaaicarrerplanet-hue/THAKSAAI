import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaperHero() {
  const [inquiry, setInquiry] = useState("");
  const navigate = useNavigate();

  const handleConsultation = (e) => {
    e.preventDefault();
    navigate(inquiry.trim() ? `/contact?query=${encodeURIComponent(inquiry)}` : "/contact");
  };

  return (
    <section className="relative min-h-[96vh] w-full flex flex-col items-center justify-center bg-[#1a1a1a] pt-28 sm:pt-36 md:pt-42 pb-24 px-4 sm:px-6 md:px-10 select-none overflow-hidden">
      
      {/* 
        =======================================================================
        REAL WORKSHOP BACKGROUND
        Using a real, high-quality image from the THAKSAAI journey to 
        reinforce "Zero Hyped Content and Real Face-to-Face Skills".
        =======================================================================
      */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        style={{ transform: "translateZ(0)", contain: "paint" }}
      >
        <img
          src="/images/journey/media__1785944946454.jpg"
          alt="THAKSAAI Real Workshop"
          className="w-full h-full object-cover block opacity-40 scale-105"
        />
        {/* Deep, rich gradients to ensure text legibility and brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-[#1a1a1a]/90 mix-blend-multiply"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent"></div>
      </div>

      {/* Perfectly Centered Hero Content with High-Contrast Typography */}
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center select-text">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 bg-black/85 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-6 sm:mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9fff00] block animate-pulse"></span>
          <span className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider text-white">
            The Career Accelerator
          </span>
        </div>

        {/* 
          =====================================================================
          ULTRA-VISIBLE WHITE TYPOGRAPHY WITH DEEP SHADOWS
          =====================================================================
        */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.7rem] leading-[1.12] sm:leading-[1.16] tracking-tight text-white max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] px-2">
          <span className="block mb-1 sm:mb-2">Develop engineers who can</span>
          <span className="inline-flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5">
            
            {/* Highlighted core principle */}
            <span className="text-[#9fff00] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] font-extrabold underline decoration-white/20 decoration-4 sm:decoration-6 underline-offset-4 sm:underline-offset-8">
              create value
            </span>
            
            {/* Pulsing Green Indicator Pill */}
            <span
              title="Active Practical Training"
              aria-label="Active training indicator"
              className="inline-flex items-center justify-center align-middle w-[36px] sm:w-[50px] lg:w-[58px] h-[28px] sm:h-[38px] lg:h-[46px] border border-white/20 rounded-full bg-black/90 shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-transform hover:scale-110 shrink-0"
            >
              <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-[#9fff00] block animate-ping"></span>
            </span>
          </span>{" "}
          <span>independently.</span>
        </h1>

        {/* Highly Visible Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-[1.35rem] font-sans text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] px-3 sm:px-6">
          Learning exists to create real capability, not just paper certificates. We conduct hands-on, in-person engineering bootcamps for launching startups, mastering freelancing, and securing top careers.
        </p>

        {/* Center-Aligned Interactive Input Capsule */}
        <form
          onSubmit={handleConsultation}
          className="mt-9 sm:mt-12 w-full max-w-xl mx-auto px-2 sm:px-0"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-full border border-white/20 p-1.5 pl-6 flex items-center shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:border-[#9fff00]/50 hover:bg-white/10 transition-all">
            <input
              type="text"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              placeholder="How can we empower your college or career?"
              aria-label="Enter inquiry"
              className="w-full bg-transparent text-white placeholder:text-zinc-400 text-sm sm:text-base font-sans font-medium focus:outline-none border-none pr-3"
            />
            <button
              type="submit"
              aria-label="Send inquiry"
              className="bg-[#9fff00] text-[#1a1a1a] px-7 h-12 rounded-full font-extrabold text-xs sm:text-sm tracking-wide shrink-0 hover:bg-[#b3ff33] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(159,255,0,0.3)] flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Explore</span>
              <span className="text-[#1a1a1a] font-extrabold text-lg">→</span>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
