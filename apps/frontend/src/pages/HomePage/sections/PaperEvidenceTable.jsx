import React from 'react';
import { SectionShell } from '../../../components/ui/SectionShell';
import { SpotlightCard } from '../../../components/ui/SpotlightCard';

const COMPARISON_ROWS = [
  {
    code: 'DIM // 01',
    dimension: 'Classroom Teaching Method',
    typical: 'One-way slide decks and memorized syntax handouts with zero live coding.',
    thaksa: 'Practitioner-led workstation execution—every student codes inside Git & cloud sandboxes.',
  },
  {
    code: 'DIM // 02',
    dimension: 'Student Skill Grouping',
    typical: '400+ students crowded into a single hall regardless of coding background.',
    thaksa: 'Diagnostic baseline groups students into Tier A (Product), Tier B (Core), and Tier C (Foundations).',
  },
  {
    code: 'DIM // 03',
    dimension: 'Final-Year Project Quality',
    typical: 'Purchased black-box ZIP templates that students cannot explain during viva.',
    thaksa: 'Step-by-step mentored cloud & AI engineering with CI/CD tests and mock viva defense panels.',
  },
  {
    code: 'DIM // 04',
    dimension: 'Instructor Profile',
    typical: 'Full-time academic lecturers without recent production software delivery.',
    thaksa: 'Active software engineers and architects from THAKSA Software Studio in Gachibowli.',
  },
  {
    code: 'DIM // 05',
    dimension: 'TPO & Principal Accountability',
    typical: 'A generic attendance sheet handed over on the final day.',
    thaksa: 'Weekly Friday proctored test scorecards, GitHub repository links, and interview readiness rubrics.',
  },
];

export default function PaperEvidenceTable() {
  return (
    <SectionShell
      id="evidence-comparison"
      tone="porcelain"
      eyebrow="PEDAGOGICAL CONTRAST MATRIX // 005"
      title="Why generic training fails—and why THAKSA students actually build."
      subtitle="See the exact difference between passive lecture vendors and THAKSA.AI’s workstation-first teaching system."
    >
      {/* Desktop Semantic Accessible Matrix */}
      <div className="hidden md:block overflow-hidden rounded-3xl border border-[#DDE1DA] bg-white shadow-[0_24px_48px_-24px_rgba(16,24,40,0.14)]">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">
            Comparison between generic classroom training and THAKSA engineering pedagogy across five institutional dimensions
          </caption>
          <thead>
            <tr className="bg-[#0B1120] text-[#F7F8F4] font-mono text-xs uppercase tracking-[0.14em]">
              <th scope="col" className="py-5 px-6 w-[25%] border-r border-white/10">
                Teaching Dimension
              </th>
              <th scope="col" className="py-5 px-6 w-[35%] border-r border-white/10 text-slate-300">
                ✕ Generic Coaching Vendors
              </th>
              <th scope="col" className="py-5 px-6 w-[40%] text-[#C7F36B]">
                ✓ THAKSA Teaching Architecture
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E3E5DE] text-sm">
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.code} className="group hover:bg-[#F7F8F4] transition-colors">
                <th
                  scope="row"
                  className="py-5 px-6 align-top border-r border-[#E3E5DE]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#3659D9] block mb-1">
                    {row.code}
                  </span>
                  <span className="font-display font-bold text-base text-[#101828]">
                    {row.dimension}
                  </span>
                </th>
                <td className="py-5 px-6 text-[#5B6475] align-top border-r border-[#E3E5DE] leading-relaxed">
                  {row.typical}
                </td>
                <td className="py-5 px-6 text-[#101828] font-medium align-top leading-relaxed bg-[#C7F36B]/[0.07] group-hover:bg-[#C7F36B]/[0.14] transition-colors">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 w-5 h-5 rounded-md bg-[#101828] text-[#C7F36B] font-mono text-xs flex items-center justify-center shrink-0"
                    >
                      ✓
                    </span>
                    <span>{row.thaksa}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Spotlight Cards (< 768px) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {COMPARISON_ROWS.map((row) => (
          <SpotlightCard key={row.code} tone="light" className="p-5 flex flex-col gap-3">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#3659D9]">
                {row.code}
              </span>
              <h3 className="text-lg font-display font-bold text-[#101828]">{row.dimension}</h3>
            </div>
            <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-rose-600 mb-1">
                ✕ Generic Coaching
              </div>
              <p className="text-xs text-[#5B6475] leading-relaxed">{row.typical}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0B1120] text-white">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#C7F36B] mb-1">
                ✓ THAKSA Teaching Practice
              </div>
              <p className="text-xs text-slate-100 leading-relaxed">{row.thaksa}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </SectionShell>
  );
}
