import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SupabaseImageCard from '../../components/common/SupabaseImageCard';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { CRT_MODULES } from '../../data/programs';
import { useTextScramble } from '../../hooks/useTextScramble';

const SKILL_TIERS = [
  {
    id: 'tier-a',
    imageKey: 'crt-tier-a',
    badge: 'GROUP A // PRODUCT & ADVANCED DSA',
    subtitle: 'For High-Velocity Coders',
    title: 'Group A: Advanced Algorithms & System Design',
    desc: 'Engineered for students targeting product companies and top engineering roles. Intensive practice on Graphs, Dynamic Programming, Low-Level Design, and timed competitive coding.',
    weeklyDrill: 'Hard LeetCode/Codeforces-style proctored contests + architecture whiteboard defense.',
    trackParam: 'Group A CRT (Advanced Product)',
  },
  {
    id: 'tier-b',
    imageKey: 'crt-tier-b',
    badge: 'GROUP B // CORE SOFTWARE & DBMS',
    subtitle: 'For Core Development Cohorts',
    title: 'Group B: Data Structures, SQL & Full-Stack Logic',
    desc: 'Designed for the core majority of engineering cohorts preparing for software developer evaluations. Focuses on clean problem-solving, relational database queries, OOPs, and APIs.',
    weeklyDrill: 'Medium-level algorithmic coding + SQL schema writing + technical interview simulations.',
    trackParam: 'Group B CRT (Core Software)',
  },
  {
    id: 'tier-c',
    imageKey: 'crt-tier-c',
    badge: 'GROUP C // FOUNDATIONS & CONFIDENCE',
    subtitle: 'For Beginners & Non-CS Branches',
    title: 'Group C: Step-by-Step Coding Foundations & Aptitude',
    desc: 'Built for students who need patient, first-principles instruction to overcome coding fear. Masters arrays, strings, loops, debugging, quantitative aptitude, and clear communication.',
    weeklyDrill: 'Guided syntax-to-logic labs + quantitative aptitude shortcuts + mock GD & HR rounds.',
    trackParam: 'Group C CRT (Coding Foundations)',
  },
];

const SEMESTER_WEEKS = [
  {
    phase: 'WEEKS 01–03',
    title: 'Diagnostic Baseline & Skill-Tier Mapping',
    tag: 'STATION 01 // ASSESS',
    detail: 'Every student takes our baseline coding and aptitude diagnostic so we group the batch into Tier A, Tier B, and Tier C without stigma.',
  },
  {
    phase: 'WEEKS 04–07',
    title: 'Data Structures, Core CS & Quantitative Drills',
    tag: 'STATION 02 // TRAIN',
    detail: 'Hands-on problem solving in Arrays, Strings, Trees, DBMS, SQL, and high-speed quantitative reasoning led by practitioners.',
  },
  {
    phase: 'WEEKS 08–11',
    title: 'Every-Friday Proctored Assessment Loop',
    tag: 'STATION 03 // BENCHMARK',
    detail: 'Timed Friday tests replicate exact corporate hiring platforms. Department-wise progress matrices are shared directly with the TPO.',
  },
  {
    phase: 'WEEKS 12–15',
    title: '1-on-1 Mock Technical, GD & HR Sign-Off',
    tag: 'STATION 04 // DEMONSTRATE',
    detail: 'Individual resume engineering, group discussion moderation, and live code-defense panels before campus drives begin.',
  },
];

export default function TrainingPage() {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState('tier-a');
  const eyebrow = useTextScramble('PILLAR 02 // 3-TIER CAMPUS RECRUITMENT TRAINING (CRT)', {
    duration: 600,
    trigger: true,
  });

  return (
    <>
      <Helmet>
        <title>Campus Recruitment Training (CRT) · 3-Tier Pedagogy | THAKSA.AI</title>
        <meta
          name="description"
          content="THAKSA.AI's 3-Tier Campus Recruitment Training (CRT) groups students by diagnostic baseline into Group A, Group B, and Group C with weekly Friday proctored coding tests."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828]">
        {/* Dark Spatial Hero */}
        <section className="relative w-full bg-[#080D1A] text-white iso-grid-dark border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/3 w-[500px] h-[500px] rounded-full bg-[#3659D9]/20 blur-[140px]"
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C7F36B]">
                  {eyebrow}
                </span>
              </div>

              <h1
                className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4.5vw + 1rem, 4.25rem)' }}
              >
                Why put 400 students in one hall?{' '}
                <span className="text-[#C7F36B]">We teach in 3 skill-matched tiers.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Traditional CRT programs fail because advanced coders get bored while beginners feel
                intimidated. THAKSA begins every semester with a friendly diagnostic check and
                splits the cohort into <strong className="text-white">Group A, Group B, and Group C</strong>—so
                every student learns at the right pace and clears technical interviews.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <DepthButton to="/contact?track=crt" variant="electric" size="lg">
                  <span>Schedule Campus CRT Diagnostic</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
                <DepthButton to="/placements" variant="ghostDark" size="lg">
                  <span>Inspect 4-Stage Assessment Rubric</span>
                </DepthButton>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: 3-Tier Competency Architecture */}
        <section
          aria-label="Three Student Learning Groups"
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] block mb-2">
                DIAGNOSTIC COHORT ARCHITECTURE // 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#101828] tracking-[-0.02em]">
                Our 3 Student Learning Groups
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {SKILL_TIERS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTier(t.id)}
                  className={`px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                    selectedTier === t.id
                      ? 'bg-[#101828] text-[#C7F36B] border-[#101828] font-bold'
                      : 'bg-white text-[#5B6475] border-[#E3E5DE] hover:text-[#101828]'
                  }`}
                >
                  {t.id.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {SKILL_TIERS.map((tier) => {
              const isHighlighted = selectedTier === tier.id;
              return (
                <SpotlightCard
                  key={tier.id}
                  tone="light"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-6 flex flex-col justify-between gap-5 cursor-pointer transition-all ${
                    isHighlighted ? 'ring-2 ring-[#3659D9]' : ''
                  }`}
                >
                  <div>
                    <SupabaseImageCard
                      imageKey={tier.imageKey}
                      badgeText={tier.badge}
                      subtitle={tier.subtitle}
                      title={tier.title}
                      description={tier.desc}
                      aspectRatio="aspect-[16/10]"
                    />
                    <div className="mt-4 p-4 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#3659D9] block mb-1">
                        FRIDAY PROCTORED DRILL:
                      </span>
                      <p className="text-xs text-[#101828] font-medium leading-relaxed">
                        {tier.weeklyDrill}
                      </p>
                    </div>
                  </div>

                  <DepthButton
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/contact?track=crt&query=${encodeURIComponent(tier.trackParam)}`);
                    }}
                    variant={isHighlighted ? 'precision' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    <span>Request {tier.id.toUpperCase()} Syllabus</span>
                    <span aria-hidden="true">→</span>
                  </DepthButton>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Section 2: 15-Week Semester Execution Loop */}
          <SpotlightCard tone="dark" className="p-7 sm:p-12 mb-20">
            <div className="max-w-3xl mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] block mb-2">
                15-WEEK SEMESTER RHYTHM // 02
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-[-0.02em] mb-3">
                Every Friday is a simulated corporate hiring round.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Students don’t wait until final exams to test their readiness. Every Friday, cohorts
                take timed proctored coding and aptitude assessments—building speed, accuracy, and
                interview composure week after week.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SEMESTER_WEEKS.map((w) => (
                <div
                  key={w.phase}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-[#C7F36B]">{w.phase}</span>
                    </div>
                    <h4 className="text-lg font-display font-bold text-white mb-2">{w.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{w.detail}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 font-mono text-[10px] text-[#6D8DFF] uppercase tracking-wider">
                    {w.tag}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Section 3: Core Curriculum Pillars */}
          <div>
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] block mb-2">
                COMPLETE CRT SYLLABUS COVERAGE // 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">
                What We Teach Inside Every Cohort
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CRT_MODULES.map((mod) => (
                <SpotlightCard key={mod.id} tone="light" className="p-6 sm:p-7 flex flex-col justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#3659D9]">{mod.code}</span>
                    <h4 className="text-xl font-display font-bold text-[#101828] mt-1 mb-3">
                      {mod.title}
                    </h4>
                    <ul className="space-y-2 text-sm text-[#5B6475]">
                      {mod.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2">
                          <span className="text-[#3659D9] font-mono font-bold">✓</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[#E3E5DE] font-mono text-[11px] text-[#101828]">
                    <strong>Evaluation:</strong> {mod.benchmark}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
