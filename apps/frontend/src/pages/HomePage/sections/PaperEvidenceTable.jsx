import React from "react";
import { motion } from "framer-motion";

const benchmarkRows = [
  {
    domain: "Study Material",
    traditional: "Static textbooks that are years behind current tech industry trends.",
    thaksa: "Practical programming exercises derived directly from recent job technical interview tests.",
    tag: "Up to Date"
  },
  {
    domain: "Classroom Learning",
    traditional: "One huge class where advanced students get bored and beginners get lost.",
    thaksa: "Students learn in skill-matched groups so everyone progresses comfortably at their best pace.",
    tag: "Personalized"
  },
  {
    domain: "Final-Year Projects",
    traditional: "Simple project code folders without automated testing or collaborative tools.",
    thaksa: "Real team coding workflows (Git), automated test scripts, and live practice presentations.",
    tag: "Real Projects"
  },
  {
    domain: "Instructors",
    traditional: "Lecturers who may not have recent hands-on cloud software development experience.",
    thaksa: "Experienced software developers actively working in leading tech corporations.",
    tag: "Industry Experts"
  }
];

export default function PaperEvidenceTable() {
  return (
    <section aria-label="Why Practical Training Matters" className="w-full bg-[#EDEEF5] py-14 sm:py-24 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
            Why Our Training Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight mb-3 sm:mb-4">
            Traditional theory vs. practical training.
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-sans text-zinc-600 leading-relaxed">
            Here is a clear side-by-side comparison showing why our practical bootcamps help students perform much better in job interviews compared to traditional classroom study.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo-glass rounded-2xl border border-black/[0.08] overflow-hidden shadow-sm"
        >
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[650px] sm:min-w-[700px]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white border-b border-black/10">
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-display font-bold uppercase tracking-wider w-[22%]">
                    Topic
                  </th>
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-sans font-medium text-zinc-400 w-[38%] bg-white/[0.03]">
                    Traditional University Teaching
                  </th>
                  <th className="p-4 sm:p-6 text-xs sm:text-sm font-display font-bold text-[#9fff00] w-[40%]">
                    THAKSAAI Practical Training
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {benchmarkRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/50 transition-colors">
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-display font-bold text-[#1a1a1a]">
                      {row.domain}
                    </td>
                    <td className="p-4 sm:p-6 text-xs sm:text-base font-sans text-zinc-600 leading-relaxed bg-black/[0.015]">
                      <div className="flex items-start gap-2 sm:gap-2.5">
                        <span className="text-red-500 font-bold font-mono mt-0.5 shrink-0">✕</span>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-xs sm:text-base font-sans font-medium text-[#1a1a1a] leading-relaxed bg-white/60">
                      <div className="flex flex-col gap-2.5 sm:gap-3">
                        <div className="flex items-start gap-2 sm:gap-2.5">
                          <span className="text-[#0D9488] font-bold font-mono text-sm sm:text-base mt-0.5 shrink-0">✓</span>
                          <span>{row.thaksa}</span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1a1a1a] text-[#9fff00] w-max shadow-xs">
                          ● {row.tag}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 sm:p-5 bg-black/[0.02] border-t border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-500 font-sans">
            <span>Proven across partner engineering colleges in Computer Science and Engineering.</span>
            <span className="font-semibold text-[#1a1a1a] shrink-0">● Proven Results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
