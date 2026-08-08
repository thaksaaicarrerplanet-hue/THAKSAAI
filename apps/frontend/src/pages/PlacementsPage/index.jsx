import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const auditRecords = [
  { dept: "Computer Science & Engineering (CSE)", size: "480 Candidates", clearRate: "89.4%", tierA: "142 Engineers", primaryRecruiter: "Tier-1 Product & Systems IT" },
  { dept: "Information Technology (IT)", size: "220 Candidates", clearRate: "88.1%", tierA: "74 Engineers", primaryRecruiter: "Global Enterprise IT" },
  { dept: "Electronics & Communication (ECE)", size: "340 Candidates", clearRate: "81.5%", tierA: "68 Engineers", primaryRecruiter: "Embedded systems & IT Services" },
  { dept: "Electrical & Electronics (EEE)", size: "180 Candidates", clearRate: "76.2%", tierA: "32 Engineers", primaryRecruiter: "Core & Analytics IT" }
];

export default function PlacementsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Placement Audit Ledger | THAKSAAI</title>
        <meta
          name="description"
          content="Verifiable institutional placement outcomes and screening clearance rates across engineering departments."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-12 border-b border-black/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#9fff00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
                Verifiable Institutional Outcomes
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                Evidence, not adjectives. <br className="hidden md:block" /> Verified placement milestones.
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                Our partner institutions receive unshakeable, auditable placement ledgers across all core engineering departments. Below is an aggregated representation of screening clearance rates following completion of our tiered diagnostic program.
              </p>
              
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                Request Official Institutional Audit →
              </button>
            </motion.div>
          </header>

          {/* Mobile-Responsive Ledger Cards (Replaces Unresponsive Table) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {auditRecords.map((r, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="neo-glass bg-white/70 p-6 sm:p-10 rounded-3xl border border-black/[0.08] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1a1a] tracking-tight leading-snug mb-2">
                    {r.dept}
                  </h3>
                  <p className="text-sm font-sans font-bold text-zinc-500 uppercase tracking-widest">
                    {r.size}
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 text-white mb-6 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9fff00]/10 rounded-full blur-2xl pointer-events-none"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9fff00] block mb-2">
                    Technical Screening Pass %
                  </span>
                  <span className="text-5xl sm:text-6xl font-display font-black tracking-tighter">
                    {r.clearRate}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-100/80 p-4 rounded-xl border border-black/[0.04]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">Apex Achievers</span>
                    <span className="font-sans font-bold text-sm text-[#1a1a1a]">✓ {r.tierA}</span>
                  </div>
                  <div className="bg-zinc-100/80 p-4 rounded-xl border border-black/[0.04]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">Recruiter Track</span>
                    <span className="font-sans font-semibold text-sm text-[#1a1a1a]">{r.primaryRecruiter}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
