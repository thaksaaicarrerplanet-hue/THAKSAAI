import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SupabaseImageCard from '../../components/common/SupabaseImageCard';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const WORKSHOP_TRACKS = [
  {
    id: 'ai-genai',
    category: 'AI & LLM',
    imageKey: 'workshop-genai',
    badge: '4-Day Lab Bootcamp',
    subtitle: 'Artificial Intelligence & RAG',
    title: 'Applied Generative AI & Smart Assistants',
    desc: 'Students move beyond basic prompting to engineer real AI applications—document-reading RAG assistants, vector search pipelines, and structured API microservices.',
    duration: '4 Days (32 Hands-On Lab Hours)',
    level: 'All Engineering Branches',
    track: 'AI & GenAI Applications',
    dayByDay: [
      {
        day: 'Day 01',
        focus: 'Python APIs, Prompt Engineering & LLM Fundamentals',
        output: 'Working CLI & REST assistant connected to live LLM endpoints.',
      },
      {
        day: 'Day 02',
        focus: 'Embeddings, Vector Databases & Document Chunking',
        output: 'Custom knowledge base indexing college PDFs & technical docs.',
      },
      {
        day: 'Day 03–04',
        focus: 'Full-Stack RAG Web App, Guardrails & Cloud Deployment',
        output: 'Live deployed AI web app + individual GitHub repository.',
      },
    ],
  },
  {
    id: 'cloud-docker',
    category: 'Cloud & DevOps',
    imageKey: 'workshop-devops',
    badge: '5-Day Lab Bootcamp',
    subtitle: 'Cloud Native & Containers',
    title: 'Cloud Computing, Docker & CI/CD Pipelines',
    desc: 'Students learn how modern engineering teams package software inside Docker containers, automate testing with GitHub Actions, and deploy resilient cloud servers.',
    duration: '5 Days (40 Hands-On Lab Hours)',
    level: 'All Engineering Branches',
    track: 'Cloud & Docker Containers',
    dayByDay: [
      {
        day: 'Day 01',
        focus: 'Linux Command Line, Git Branching & Server Basics',
        output: 'Configured Linux environment & multi-branch team repository.',
      },
      {
        day: 'Day 02–03',
        focus: 'Dockerfiles, Multi-Container Compose & Microservices',
        output: 'Containerized full-stack app + database running in isolation.',
      },
      {
        day: 'Day 04–05',
        focus: 'Automated CI/CD Workflows & Live Cloud Hosting',
        output: 'Zero-downtime automated deployment pipeline on cloud infrastructure.',
      },
    ],
  },
  {
    id: 'high-traffic',
    category: 'Backend Systems',
    imageKey: 'workshop-microservices',
    badge: '3-Day Lab Bootcamp',
    subtitle: 'Scalable Web Architecture',
    title: 'High-Traffic Backend Systems & Event Messaging',
    desc: 'An intensive systems workshop where student teams build high-concurrency backend APIs capable of handling thousands of requests using caching and event queues.',
    duration: '3 Days (24 Hands-On Lab Hours)',
    level: 'CSE / IT / AIML Cohorts',
    track: 'High-Traffic Backend Systems',
    dayByDay: [
      {
        day: 'Day 01',
        focus: 'REST API Design, PostgreSQL Indexing & Bottleneck Analysis',
        output: 'Benchmarked API server with structured relational schema.',
      },
      {
        day: 'Day 02',
        focus: 'In-Memory Caching (Redis) & Rate Limiting',
        output: 'Sub-20ms cached API responses under simulated load.',
      },
      {
        day: 'Day 03',
        focus: 'Asynchronous Event Queues & System Defense Viva',
        output: 'Complete distributed backend architecture + load-test report.',
      },
    ],
  },
  {
    id: 'big-data',
    category: 'Data Engineering',
    imageKey: 'workshop-data',
    badge: '4-Day Lab Bootcamp',
    subtitle: 'Data Pipelines & Analytics',
    title: 'Big Data Processing with Python, SQL & Apache Spark',
    desc: 'Students engineer end-to-end data pipelines that ingest raw messy datasets, clean and transform millions of rows with Spark, and publish executive analytics.',
    duration: '4 Days (32 Hands-On Lab Hours)',
    level: 'CSE / IT / Data Science',
    track: 'Big Data & Apache Spark',
    dayByDay: [
      {
        day: 'Day 01',
        focus: 'Advanced Analytical SQL, Window Functions & Data Modeling',
        output: 'Normalized analytical warehouse schema.',
      },
      {
        day: 'Day 02–03',
        focus: 'PySpark Distributed Transformations & ETL Pipelines',
        output: 'Automated batch data-cleaning and aggregation pipeline.',
      },
      {
        day: 'Day 04',
        focus: 'Predictive Modeling & Interactive Stakeholder Dashboard',
        output: 'Live analytics dashboard + documented data engineering repo.',
      },
    ],
  },
];

const CATEGORIES = ['All Tracks', 'AI & LLM', 'Cloud & DevOps', 'Backend Systems', 'Data Engineering'];

export default function WorkshopPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Tracks');
  const [expandedId, setExpandedId] = useState('ai-genai');

  const eyebrow = useTextScramble('PILLAR 01 // 3 TO 5 DAY ON-CAMPUS LAB WORKSHOPS', {
    duration: 600,
    trigger: true,
  });

  const filteredWorkshops =
    selectedCategory === 'All Tracks'
      ? WORKSHOP_TRACKS
      : WORKSHOP_TRACKS.filter((w) => w.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>3 to 5 Day Practical Engineering Workshops | THAKSA.AI</title>
        <meta
          name="description"
          content="Practitioner-led 3 to 5 day college coding bootcamps covering Applied GenAI, Cloud & Docker, High-Traffic Backends, and Data Engineering across Telangana."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828]">
        {/* Dark Spatial Hero Header */}
        <section className="relative w-full bg-[#080D1A] text-white iso-grid-dark border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-1/4 w-[480px] h-[480px] rounded-full bg-[#3659D9]/20 blur-[140px]"
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
                Zero slide decks.{' '}
                <span className="text-[#C7F36B]">3 to 5 days of pure lab building.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Practicing software engineers from our Gachibowli studio conduct hands-on bootcamps
                directly inside your college computer labs. Every student builds, tests, and deploys
                a working software project on their own GitHub account.
              </p>

              {/* Interactive Track Filter Pills */}
              <div
                role="tablist"
                aria-label="Filter workshop tracks by engineering domain"
                className="flex flex-wrap items-center gap-2"
              >
                {CATEGORIES.map((cat) => {
                  const active = cat === selectedCategory;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedCategory(cat)}
                      className={`min-h-[42px] px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                        active
                          ? 'bg-[#C7F36B] text-[#101828] border-[#C7F36B] font-bold shadow-[0_0_20px_rgba(199,243,107,0.3)]'
                          : 'bg-white/[0.05] text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Tracks + Interactive Day-by-Day Teaching Syllabus */}
        <section
          aria-label="Available workshop tracks and day-by-day syllabus"
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {filteredWorkshops.map((lab) => {
              const isExpanded = expandedId === lab.id;
              return (
                <SpotlightCard
                  key={lab.id}
                  tone="light"
                  className="p-6 sm:p-8 flex flex-col justify-between gap-6"
                >
                  <div>
                    <SupabaseImageCard
                      imageKey={lab.imageKey}
                      badgeText={lab.badge}
                      subtitle={lab.subtitle}
                      title={lab.title}
                      description={lab.desc}
                      aspectRatio="aspect-[16/9]"
                    />

                    {/* Metadata Bar */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2 px-4 py-3 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] font-mono text-xs">
                      <span className="text-[#101828] font-semibold">⏱ {lab.duration}</span>
                      <span className="px-2.5 py-0.5 rounded bg-[#101828] text-[#C7F36B]">
                        {lab.level}
                      </span>
                    </div>

                    {/* Interactive Day-by-Day Teaching Breakdown */}
                    <div className="mt-5 pt-5 border-t border-[#E3E5DE]">
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : lab.id)}
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between text-left font-mono text-xs uppercase tracking-[0.14em] text-[#3659D9] font-bold py-1 cursor-pointer"
                      >
                        <span>HOW WE TEACH THIS TRACK (DAY-BY-DAY SYLLABUS)</span>
                        <span>{isExpanded ? '− HIDE' : '+ EXPAND'}</span>
                      </button>

                      {isExpanded && (
                        <div className="mt-4 space-y-2.5">
                          {lab.dayByDay.map((d) => (
                            <div
                              key={d.day}
                              className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE]"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="font-mono text-xs font-bold text-[#3659D9]">
                                  {d.day}
                                </span>
                                <span className="font-display font-bold text-xs text-[#101828]">
                                  {d.focus}
                                </span>
                              </div>
                              <p className="text-xs text-[#5B6475] font-mono">
                                <strong className="text-[#101828]">Lab Output:</strong> {d.output}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E3E5DE] flex flex-wrap items-center justify-between gap-3">
                    <DepthButton
                      onClick={() =>
                        navigate(`/contact?track=workshops&query=${encodeURIComponent(lab.track)}`)
                      }
                      variant="precision"
                      size="md"
                      className="w-full sm:w-auto"
                    >
                      <span>Schedule This Workshop for Campus</span>
                      <span aria-hidden="true">→</span>
                    </DepthButton>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Zero Cloud License Cost Institutional Guarantee */}
          <SpotlightCard tone="dark" className="p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] block mb-2">
                  ZERO INFRASTRUCTURE BURDEN FOR COLLEGES
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-[-0.02em] mb-3">
                  We provide all cloud sandboxes, AI API keys, and lab repositories.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Your institution does not need to purchase paid cloud subscriptions or LLM API
                  credits. THAKSA provisions ready-to-code cloud environments for every student—we
                  only require your standard campus computer lab and internet access.
                </p>
              </div>

              <div className="shrink-0">
                <DepthButton to="/contact?track=workshops" variant="electric" size="lg">
                  <span>Request Department Syllabus PDF</span>
                  <span aria-hidden="true">→</span>
                </DepthButton>
              </div>
            </div>
          </SpotlightCard>
        </section>
      </div>
    </>
  );
}
