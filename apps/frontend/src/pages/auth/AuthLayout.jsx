import React from "react";
import { Helmet } from "react-helmet-async";

export default function AuthLayout({ children, onBackHome }) {
  return (
    <div className="w-full min-h-screen bg-[#F7F8F4] text-[#1a1a1a] flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 selection:bg-[#C7F36B] selection:text-black relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/40 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C7F36B]/15 blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-xl mx-auto relative z-10">
        
        {/* Back to Home Navigation Pill */}
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 hover:bg-white text-xs font-bold text-zinc-700 uppercase tracking-wider mb-6 shadow-xs border border-black/[0.06] transition-all focus:outline-none focus:ring-2 focus:ring-[#C7F36B]"
        >
          â† Return to Home Page
        </button>

        {/* Neo-Glass Container */}
        <main className="neo-glass p-7 sm:p-10 md:p-12 rounded-3xl border border-black/[0.1] shadow-2xl bg-white/80 backdrop-blur-md">
          {children}
        </main>

        <p className="text-center text-xs font-sans text-zinc-500 mt-6">
          â— Secure Institutional Login Gateway for Partner Engineering Colleges.
        </p>
      </div>
    </div>
  );
}
