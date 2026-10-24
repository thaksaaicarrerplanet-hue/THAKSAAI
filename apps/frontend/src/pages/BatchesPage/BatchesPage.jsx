import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const activeBatches = [
  {
    code: "FORMAT-01",
    category: "GROUP",
    college: "Campus recruitment training",
    track: "Structured Campus Recruitment Training",
    size: "Cohort size agreed with the institution",
    runtime: "Diagnostic baseline, coding drills, and mock interviews",
    status: "EXAMPLE FORMAT",
    location: "Host college lab or agreed training space",
  },
  {
    code: "FORMAT-02",
    category: "AI",
    college: "Applied AI workshop",
    track: "AI & ChatGPT Applications Workshop",
    size: "Participant capacity agreed with host faculty",
    runtime: "Guided build, API integration, and practical demonstration",
    status: "EXAMPLE FORMAT",
    location: "Host college lab or agreed venue",
  },
  {
    code: "FORMAT-03",
    category: "PROJECT",
    college: "Final-year project mentorship",
    track: "Final-Year Capstone Project Mentorship",
    size: "Support model agreed with the student team",
    runtime: "System design, implementation, testing, and technical defense",
    status: "EXAMPLE FORMAT",
    location: "Scheduled mentoring sessions",
  },
  {
    code: "FORMAT-04",
    category: "GROUP",
    college: "Technical skills bootcamp",
    track: "Full-Stack & Cloud Engineering Bootcamp",
    size: "Duration and cohort defined per engagement",
    runtime: "Git workflow, deployment, and code review",
    status: "EXAMPLE FORMAT",
    location: "College lab or approved training space",
  },
];

export default function BatchesPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL" ? activeBatches : activeBatches.filter((b) => b.category === filter);

  return (
    <>
      <Helmet>
        <title>Program Delivery Formats | THAKSAAI</title>
        <meta
          name="description"
          content="Explore illustrative THAKSAAI workshop, campus training, and project mentorship formats. Engagement details are confirmed directly with each institution."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#F7F8F4] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#C7F36B] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C7F36B] block "></span>
                Illustrative Program Formats
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Practical Program Formats.
              </h1>
              <p className="text-base sm:text-lg font-sans text-zinc-600 mt-3 leading-relaxed">
                These are illustrative delivery formats, not a live batch roster. Partner institutions, schedules, enrolment, venues, and current activity are confirmed directly with our team.
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
                  type="button"
                  aria-pressed={filter === item.key}
                  onClick={() => setFilter(item.key)}
                  className={`px-4 py-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-[#C7F36B] ${
                    filter === item.key ? "bg-[#1a1a1a] text-[#C7F36B] border-[#1a1a1a]" : "bg-white/80 text-zinc-700 border-black/10 hover:bg-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Batches Grid */}
          <section aria-label="Active Cohorts Directory" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filtered.map((b) => (
              <motion.article
                key={b.code}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="neo-glass p-7 rounded-3xl border border-black/[0.08] flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-black/[0.05]">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#1a1a1a] text-white">
                      Program {b.code}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-[#C7F36B] text-[#1a1a1a] shadow-xs">
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
                      <span className="text-zinc-500 font-semibold block">Planning basis</span>
                      <strong className="text-sm text-[#1a1a1a] font-bold">{b.size}</strong>
                    </div>
                    <div>
                      <span className="text-zinc-500 font-semibold block">Typical focus</span>
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
                    className="text-xs font-bold text-[#1a1a1a] hover:text-black underline decoration-[#C7F36B] decoration-2 underline-offset-4 focus:outline-none"
                  >
                    Ask About This Format →
                  </button>
                </div>
              </motion.article>
            ))}
          </section>

          {/* Note Banner */}
          <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-sm font-sans text-zinc-600 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C7F36B] shrink-0"></span>
              <span>Final cohort size, dates, venue, and delivery format are agreed directly with the institution or student team.</span>
            </div>
            <Link
              to="/placements"
              className="text-sm font-bold text-[#1a1a1a] whitespace-nowrap hover:underline decoration-[#C7F36B] decoration-2 underline-offset-4"
            >
              Explore Assessment Framework →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
