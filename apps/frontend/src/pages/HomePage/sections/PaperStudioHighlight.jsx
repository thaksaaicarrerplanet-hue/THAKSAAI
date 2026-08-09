import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PaperStudioHighlight() {
  const navigate = useNavigate();

  return (
    <section aria-label="B2B Enterprise Studio Highlight" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="bg-[#111111] p-8 sm:p-14 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
        
        {/* Background Ambient FX */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#9fff00]/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:translate-x-20 group-hover:translate-y-10"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-sans text-[#9fff00] font-bold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#9fff00] animate-pulse"></span>
              For Startups & Enterprises
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
              Need custom software built? <br />
              <span className="text-zinc-500">Hire our venture studio.</span>
            </h2>
            
            <p className="text-lg font-sans text-zinc-400 leading-relaxed font-normal mb-8 max-w-xl">
              We leverage the top 1% of engineering talent directly from our academy to architect scalable SaaS platforms, custom AI workflows, and corporate systems—delivering Silicon Valley quality at regional budgets.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              <li className="flex items-center gap-3 text-sm font-bold text-zinc-300 font-sans tracking-wide">
                <svg className="w-5 h-5 text-[#9fff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                Custom Web & Mobile Platforms
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-zinc-300 font-sans tracking-wide">
                <svg className="w-5 h-5 text-[#9fff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                AI & Autonomous Workflow Integration
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-zinc-300 font-sans tracking-wide">
                <svg className="w-5 h-5 text-[#9fff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                Zero Recruitment Overhead
              </li>
            </ul>

            <button
              type="button"
              onClick={() => navigate("/studio")}
              className="inline-flex items-center justify-center gap-3 bg-[#9fff00] text-[#111111] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(159,255,0,0.3)] focus:outline-none focus:ring-2 focus:ring-white"
            >
              Enter The Studio →
            </button>
          </div>

          {/* Abstract Structural Element right side */}
          <div className="hidden lg:flex w-full max-w-sm shrink-0 flex-col gap-4">
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                 <span className="text-xs font-mono text-zinc-500 uppercase">Architecture</span>
                 <span className="text-xs font-bold text-[#9fff00] font-sans">99.9% SLI</span>
              </div>
              <div className="space-y-3">
                 <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-zinc-600 to-zinc-400"></div>
                 </div>
                 <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-gradient-to-r from-[#9fff00] to-emerald-400"></div>
                 </div>
                 <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                 </div>
              </div>
            </div>
            
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Squad Velocity</span>
                <span className="text-xl font-display font-bold text-white tracking-tight">4x Faster</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-[#9fff00]/30 flex items-center justify-center">
                 <div className="w-2 h-2 bg-[#9fff00] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
