import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionShell } from '../../components/ui/SectionShell';
import { SpatialCard } from '../../components/ui/SpatialCard';
import { MetricLedger } from '../../components/ui/MetricLedger';
import { DepthButton } from '../../components/ui/DepthButton';
import { VERIFIED_PROOF } from '../../data/proof';
import { CRT_MODULES } from '../../data/programs';
import { METHODOLOGY_STEPS } from '../../data/pathways';

const EVALUATION_RUBRIC = [
  {
    stage: 'STAGE 01',
    domain: 'Diagnostic Baseline & Aptitude',
    instrument: 'Timed quantitative, logical, and verbal reasoning benchmark',
    reporting: 'Individual percentile & topic gap matrix shared with college TPO',
  },
  {
    stage: 'STAGE 02',
    domain: 'Data Structures & Algorithmic Coding',
    instrument: 'Proctored coding rounds (Arrays, Trees, Graphs, Dynamic Programming)',
    reporting: 'Test-case pass log and complexity evaluation in student Git repository',
  },
  {
    stage: 'STAGE 03',
    domain: 'System Architecture & Project Defense',
    instrument: 'Live code walkthrough + database schema and API contract defense',
    reporting: 'Structured technical panel scorecard',
  },
  {
    stage: 'STAGE 04',
    domain: 'Behavioral & HR Readiness',
    instrument: 'Group discussion moderation + 1-on-1 mock interview simulation',
    reporting: 'Actionable feedback dossier and ATS-verified resume sign-off',
  },
];

export default function PlacementsPage() {
  return (
    <>
      <Helmet>
        <title>Placement Readiness &amp; Assessment Methodology | THAKSA.AI</title>
        <meta
          name="description"
          content="Explore THAKSA.AI's verified placement readiness framework, 4-stage assessment rubric, and CRT curriculum architecture for partner engineering colleges."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        {/* Section 1: Verified Institutional Proof Header */}
        <SectionShell
          tone="porcelain"
          eyebrow="PLACEMENT READINESS ARCHITECTURE / 01"
          title="Auditable preparation. Transparent evaluation rubrics."
          subtitle="We do not publish inflated or unverified placement percentages. Instead, we provide partner colleges and students with a rigorous, four-stage technical assessment pipeline."
        >
          <MetricLedger items={VERIFIED_PROOF} tone="porcelain" />
        </SectionShell>

        {/* Section 2: 4-Stage Assessment Rubric Table */}
        <SectionShell
          tone="porcelain"
          eyebrow="ASSESSMENT LEDGER / 02"
          title="How every student cohort is evaluated and reported to the TPO."
          subtitle="Every Campus Recruitment Training (CRT) and Capstone cohort is tracked through four verifiable evaluation checkpoints."
        >
          <div className="hidden md:block overflow-hidden rounded-2xl border border-[#E3E5DE] bg-white shadow-[0_8px_24px_-12px_rgba(16,24,40,0.12)]">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                THAKSA four-stage placement readiness evaluation rubric and TPO reporting format
              </caption>
              <thead>
                <tr className="bg-[#101828] text-white font-mono text-xs uppercase tracking-[0.14em]">
                  <th scope="col" className="py-4 px-6 w-[14%] border-r border-white/10 text-[#C7F36B]">
                    Stage
                  </th>
                  <th scope="col" className="py-4 px-6 w-[26%] border-r border-white/10">
                    Evaluation Domain
                  </th>
                  <th scope="col" className="py-4 px-6 w-[32%] border-r border-white/10">
                    Assessment Instrument
                  </th>
                  <th scope="col" className="py-4 px-6 w-[28%]">
                    TPO &amp; Student Artifact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E5DE] text-sm">
                {EVALUATION_RUBRIC.map((row) => (
                  <tr key={row.stage} className="hover:bg-[#F7F8F4]/70 transition-colors">
                    <td className="py-5 px-6 font-mono text-xs font-bold text-[#3659D9] border-r border-[#E3E5DE]">
                      {row.stage}
                    </td>
                    <th
                      scope="row"
                      className="py-5 px-6 font-display font-bold text-[#101828] border-r border-[#E3E5DE]"
                    >
                      {row.domain}
                    </th>
                    <td className="py-5 px-6 text-[#5B6475] border-r border-[#E3E5DE] leading-relaxed">
                      {row.instrument}
                    </td>
                    <td className="py-5 px-6 text-[#101828] font-medium leading-relaxed">
                      {row.reporting}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-4 md:hidden">
            {EVALUATION_RUBRIC.map((row) => (
              <SpatialCard key={row.stage} tone="paper" elevation="e1" className="p-5 flex flex-col gap-2.5">
                <span className="font-mono text-xs font-bold text-[#3659D9]">{row.stage}</span>
                <h3 className="text-lg font-display font-bold text-[#101828]">{row.domain}</h3>
                <p className="text-xs text-[#5B6475] leading-relaxed">{row.instrument}</p>
                <div className="pt-2 border-t border-[#E3E5DE] font-mono text-[11px] text-[#101828]">
                  <strong>Artifact:</strong> {row.reporting}
                </div>
              </SpatialCard>
            ))}
          </div>
        </SectionShell>

        {/* Section 3: CRT Syllabus Modules */}
        <SectionShell
          tone="midnight"
          eyebrow="CRT CURRICULUM MODULES / 03"
          title="Three core pillars of Campus Recruitment Training."
          subtitle="Structured for 3rd and 4th year B.Tech / Degree cohorts preparing for service and product engineering evaluations."
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {CRT_MODULES.map((mod) => (
              <SpatialCard key={mod.id} tone="midnight" elevation="e2" className="p-7 flex flex-col justify-between gap-5">
                <div>
                  <span className="font-mono text-xs text-[#C7F36B] block mb-2">{mod.code}</span>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{mod.title}</h3>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {mod.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5">
                        <span className="text-[#C7F36B] font-mono text-xs mt-0.5">→</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
                  <strong className="text-[#C7F36B] uppercase">Benchmark:</strong> {mod.benchmark}
                </div>
              </SpatialCard>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <DepthButton to="/contact?track=crt" variant="electric" size="lg">
              <span>Request Campus CRT Proposal</span>
              <span aria-hidden="true">→</span>
            </DepthButton>
            <DepthButton to="/crt" variant="ghostDark" size="lg">
              <span>View Full CRT Page</span>
            </DepthButton>
          </div>
        </SectionShell>

        {/* Section 4: 4-Step Execution Methodology */}
        <SectionShell
          tone="porcelain"
          eyebrow="EXECUTION LOOP / 04"
          title="From baseline diagnostic to mock interview sign-off."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METHODOLOGY_STEPS.map((step) => (
              <SpatialCard key={step.step} tone="paper" elevation="e1" className="p-6 flex flex-col justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#3659D9]">
                    STEP {step.step} · {step.label}
                  </span>
                  <h3 className="text-lg font-display font-bold text-[#101828] mt-2 mb-2">
                    {step.headline}
                  </h3>
                  <p className="text-sm text-[#5B6475] leading-relaxed">{step.detail}</p>
                </div>
                <div className="pt-3 border-t border-[#E3E5DE] font-mono text-[11px] text-[#101828]">
                  Output: {step.artifact}
                </div>
              </SpatialCard>
            ))}
          </div>
        </SectionShell>
      </div>
    </>
  );
}
