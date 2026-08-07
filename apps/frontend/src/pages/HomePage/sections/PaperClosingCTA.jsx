import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaperClosingCTA() {
  const navigate = useNavigate();

  return (
    <section aria-label="Join the Ecosystem" className="w-full bg-[#1a1a1a] text-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        
        <span className="text-xs font-mono text-[#9fff00] font-bold uppercase tracking-widest block mb-4">
          ● Join Our Community
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-6">
          Ready to build the future of engineering together?
        </h2>
        
        <p className="text-base sm:text-lg font-sans text-zinc-400 leading-relaxed max-w-2xl mb-10">
          Whether you are a college leader looking to transform your campus placements, or an enthusiastic student ready to start building your career, we invite you to connect with us.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
          >
            Connect With Our Team →
          </button>
          <button
            type="button"
            onClick={() => navigate("/internships")}
            className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            Apply for an Internship
          </button>
        </div>
        
      </div>
    </section>
  );
}
