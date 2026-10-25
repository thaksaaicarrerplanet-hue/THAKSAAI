import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const activeBatches = [
  { code: "KU-2026", college: "Kakatiya University College of Engineering", track: "Group A: Advanced Algorithms", size: "94 Students", runtime: "Topic: Trees and Graphs", status: "IN COMPUTER LAB", location: "Warangal Campus Lab #01" },
  { code: "SR-2026", college: "SR Engineering Institute of Technology", track: "Group B: Software Development", size: "160 Students", runtime: "Topic: Database Design & SQL", status: "IN COMPUTER LAB", location: "Warangal Campus Lab #03" },
  { code: "VNR-2026", college: "VNR Vignana Jyothi Institute of Engg", track: "AI & ChatGPT Apps Workshop", size: "120 Students", runtime: "Day 3 of 4: Building Smart Search", status: "WORKSHOP ACTIVE", location: "Hyderabad College Lab" },
  { code: "CBIT-2026", college: "CBIT Engineering Campus", track: "Final-Year Project Mentorship", size: "45 Student Teams", runtime: "Stage 2: Adding Automated Tests", status: "PROJECT REVIEWS", location: "Online Monitored Sessions" },
];

export default function BatchesPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL" ? activeBatches : activeBatches.filter(b => b.track.toUpperCase().includes(filter));

  return (
    <>
      <Helmet>
        <title>Live College Training Batches | THAKSAAI</title>
        <meta
          name="description"
          content="See active student training bootcamps and workshops currently running across partner engineering colleges."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black thaksa-interior-page">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-ping"></span>
                Live College Bootcamps
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Active College Batches.
              </h1>
              <p className="text-base sm:text-lg font-sans text-zinc-600 mt-3 leading-relaxed">
                Check out practical training programs happening right now inside college computer labs across Telangana and Hyderabad. Our instructors teach hands-on coding directly to students on campus.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0 text-xs font-sans font-bold">
              {[
                { key: "ALL", label: "● Show All Batches" },
                { key: "GROUP", label: "Campus Training" },
                { key: "AI", label: "AI Workshops" },
                { key: "PROJECT", label: "Final-Year Projects" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setFilter(item.key)}
                  className={`px-4 py-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-[#9fff00] ${
                    filter === item.key ? "bg-[#1a1a1a] text-[#9fff00] border-[#1a1a1a]" : "bg-white/80 text-zinc-700 border-black/10 hover:bg-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Batches Grid */}
          <section aria-label="Active Cohorts Directory" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filtered.map((b, idx) => (
              <motion.article
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="neo-glass p-7 rounded-3xl border border-black/[0.08] flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-black/[0.05]">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#1a1a1a] text-white">
                      Batch #{b.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-[#9fff00] text-[#1a1a1a] shadow-xs">
                      ● {b.status}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    {b.college}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#1a1a1a] tracking-tight mb-4">
                    {b.track}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 p-4 bg-white/60 rounded-xl border border-black/[0.04] text-xs font-sans mb-6">
                    <div>
                      <span className="text-zinc-500 font-semibold block">Students Enrolled</span>
                      <strong className="text-sm text-[#1a1a1a] font-bold">{b.size}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-500 font-semibold block">Current Topic</span>
                      <strong className="text-sm text-[#1a1a1a] font-bold">{b.runtime}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs font-sans">
                  <span className="text-zinc-600 font-medium">
                    📍 {b.location}
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate(`/contact?college=${encodeURIComponent(b.college)}`)}
                    className="text-xs font-bold text-[#1a1a1a] hover:text-black underline decoration-[#9fff00] decoration-2 underline-offset-4 focus:outline-none"
                  >
                    Ask a Question About This Batch →
                  </button>
                </div>
              </motion.article>
            ))}
          </section>

          {/* Note Banner */}
          <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-sans text-zinc-600 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#9fff00] shrink-0"></span>
              <span>All student training is conducted practically inside college computer labs with practicing software developers.</span>
            </div>
            <Link
              to="/placements"
              className="text-sm font-bold text-[#1a1a1a] whitespace-nowrap hover:underline decoration-[#9fff00] decoration-2 underline-offset-4"
            >
              Check Student Results →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
