import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const auditRecords = [
  { id: "RES-2025-01", dept: "Computer Science (CSE)", cohort: "420 Students", tierA: "84 Students", cleared: "96.4%", dreamOffers: "112 Offers (₹15 LPA+)", verification: "VERIFIED BY COLLEGE" },
  { id: "RES-2025-02", dept: "Information Tech (IT)", cohort: "180 Students", tierA: "32 Students", cleared: "93.8%", dreamOffers: "44 Offers (₹15 LPA+)", verification: "VERIFIED BY COLLEGE" },
  { id: "RES-2025-03", dept: "Electronics (ECE)", cohort: "310 Students", tierA: "58 Students", cleared: "91.2%", dreamOffers: "61 Offers (₹12 LPA+)", verification: "VERIFIED BY COLLEGE" },
  { id: "RES-2025-04", dept: "Electrical (EEE)", cohort: "140 Students", tierA: "18 Students", cleared: "87.5%", dreamOffers: "24 Offers (₹10 LPA+)", verification: "VERIFIED BY COLLEGE" },
];

export default function PlacementsPage() {
  const [selectedYear, setSelectedYear] = useState("2025-2026 Academic Season");
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Student Placement & Test Results | THAKSAAI</title>
        <meta
          name="description"
          content="Review verified student placement test pass rates and job hiring results across partner engineering colleges."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block"></span>
                Verified Student Results
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Real student placement results.
              </h1>
              <p className="text-base sm:text-lg font-sans text-zinc-600 mt-3 leading-relaxed">
                We believe in simple, genuine facts. Below are the actual technical exam pass rates achieved by students who finished our practical campus bootcamps, confirmed by college placement officers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-sans font-bold uppercase text-zinc-500">School Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                aria-label="Select school year"
                className="bg-white px-4 py-2.5 rounded-xl border border-black/15 text-sm font-bold text-[#1a1a1a] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                <option value="2025-2026 Academic Season">2025-2026 School Year</option>
                <option value="2024-2025 Academic Season">2024-2025 School Year</option>
              </select>
            </div>
          </div>

          {/* Key Outcome Highlights Card Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="neo-glass p-6 rounded-2xl border border-black/[0.06] flex flex-col justify-between shadow-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans mb-1">Average Exam Pass Rate</span>
              <span className="text-4xl sm:text-5xl font-display font-bold text-[#1a1a1a]">93.4%</span>
              <span className="text-xs text-[#0D9488] font-semibold mt-2">✓ Strong technical exam performance</span>
            </div>
            <div className="neo-glass p-6 rounded-2xl border border-black/[0.06] flex flex-col justify-between shadow-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans mb-1">Top Job Offers (₹12 LPA+)</span>
              <span className="text-4xl sm:text-5xl font-display font-bold text-[#1a1a1a]">241+</span>
              <span className="text-xs text-[#1a1a1a] font-medium mt-2">● Secured by our advanced student group</span>
            </div>
            <div className="neo-glass p-6 rounded-2xl border border-black/[0.06] flex flex-col justify-between shadow-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans mb-1">Weekly Practice Completion</span>
              <span className="text-4xl sm:text-5xl font-display font-bold text-[#1a1a1a]">1,050 / 1,050</span>
              <span className="text-xs text-[#9fff00] font-bold bg-[#1a1a1a] px-2.5 py-0.5 rounded-full w-max mt-2">100% EXPLICIT TEST SUBMISSIONS</span>
            </div>
          </div>

          {/* Responsive Glass Table Container */}
          <section aria-label="Department results table" className="neo-glass rounded-3xl border border-black/[0.08] overflow-hidden shadow-md mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#1a1a1a] text-white border-b border-black/10">
                    <th className="p-5 sm:p-6 text-xs font-display font-bold uppercase tracking-wider w-[26%]">
                      College Department
                    </th>
                    <th className="p-5 sm:p-6 text-xs font-sans font-semibold text-zinc-400 w-[18%]">
                      Total Students
                    </th>
                    <th className="p-5 sm:p-6 text-xs font-sans font-semibold text-zinc-400 w-[18%]">
                      Advanced Group Size
                    </th>
                    <th className="p-5 sm:p-6 text-xs font-display font-bold text-[#9fff00] w-[20%]">
                      Exam Pass Rate
                    </th>
                    <th className="p-5 sm:p-6 text-xs font-sans font-semibold text-zinc-300 w-[18%]">
                      Confirmation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06] font-sans">
                  {auditRecords.map((r, i) => (
                    <tr key={i} className="hover:bg-white/50 transition-colors">
                      <td className="p-5 sm:p-6 text-sm sm:text-base font-display font-bold text-[#1a1a1a]">
                        {r.dept}
                      </td>
                      <td className="p-5 sm:p-6 text-sm font-semibold text-zinc-700">
                        {r.cohort}
                      </td>
                      <td className="p-5 sm:p-6 text-sm font-medium text-zinc-600">
                        <span className="px-2.5 py-1 bg-black/5 rounded-md font-sans text-xs font-bold text-[#1a1a1a]">
                          {r.tierA}
                        </span>
                      </td>
                      <td className="p-5 sm:p-6 text-base font-display font-bold text-[#1a1a1a]">
                        <span className="text-xl font-extrabold text-[#1a1a1a] mr-2">{r.cleared}</span>
                        <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-[#9fff00] text-[#1a1a1a] font-bold">
                          EXCELLENT
                        </span>
                      </td>
                      <td className="p-5 sm:p-6 text-xs font-bold font-sans text-[#0D9488]">
                        ✓ {r.verification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 sm:p-6 bg-black/[0.02] border-t border-black/[0.06] flex items-center justify-between text-xs text-zinc-500 font-sans">
              <span>All numbers represent actual student performance in practice exams and corporate hiring rounds.</span>
              <span className="font-bold text-[#1a1a1a]">● Proven College Records</span>
            </div>
          </section>

          {/* Bottom Callout */}
          <div className="bg-[#1a1a1a] text-white p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Want these results for your college students next year?
              </h3>
              <p className="text-sm font-sans text-zinc-400 mt-1">
                Reach out to our team to start organizing practical placement bootcamps at your campus.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Our Team →
            </button>
          </div>

        </div>
      </main>
    </>
  );
}
