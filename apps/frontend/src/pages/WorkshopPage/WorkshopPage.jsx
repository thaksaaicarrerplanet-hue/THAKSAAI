import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const WORKSHOP_COURSES = [
  {
    id: 'full-stack',
    number: '01',
    title: 'Full Stack Web Development',
    duration: '3–5 days',
    description: 'Plan and build a working website or web app, from the pages people see to the information the app stores.',
    practice: [
      'Create clear pages that work on phones and laptops',
      'Build forms and useful features',
      'Store and display information',
      'Test the project and show how it works',
    ],
    outcome: 'A small web project students can open, explain, and improve.',
    imageKey: 'workshop-microservices',
  },
  {
    id: 'cloud-devops-mlops',
    number: '02',
    title: 'AWS / DevOps / MLOps',
    duration: '3–5 days',
    description: 'Learn how to put projects online, keep them running, and make updates safely. We also explain MLOps: how teams manage machine-learning projects.',
    practice: [
      'Understand the basics of hosting a project with AWS',
      'Prepare a project to run online',
      'Make common checks and updates easier to repeat',
      'See how teams organise machine-learning work',
    ],
    outcome: 'A project shared online and a clear view of how it gets there.',
    imageKey: 'workshop-devops',
  },
  {
    id: 'agentic-ai',
    number: '03',
    title: 'Agentic AI',
    duration: '3–5 days',
    description: 'Build an AI helper that can follow instructions, use selected tools, and work through a useful task instead of only answering a question.',
    practice: [
      'Give an AI helper clear goals and instructions',
      'Let it work with selected documents or information',
      'Connect it to a small set of approved tools',
      'Check its results and decide what it should not do',
    ],
    outcome: 'A simple AI helper that completes a task and shows its work.',
    imageKey: 'workshop-genai',
  },
];

const WORKSHOP_STEPS = [
  { number: '01', title: 'Choose one course', description: 'Select the learning path that matches your students and goals.' },
  { number: '02', title: 'Build with guidance', description: 'Spend the workshop working through small tasks and a guided project.' },
  { number: '03', title: 'Show what you made', description: 'Finish with a working example that students can explain in their own words.' },
];

export default function WorkshopPage() {
  const navigate = useNavigate();
  const focusedCoursesLabel = useTextScramble('THREE FOCUSED COURSES', { duration: 720, trigger: true });

  const enquire = (courseTitle = '') => {
    const query = courseTitle
      ? `I would like to discuss the ${courseTitle} workshop for our college.`
      : 'I would like to discuss a practical workshop for our college.';
    navigate(`/contact?track=workshops&query=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <Helmet>
        <title>Practical Workshops | THAKSA.AI</title>
        <meta
          name="description"
          content="Explore three practical THAKSA.AI workshop courses: Full Stack Web Development, AWS / DevOps / MLOps, and Agentic AI. Each focuses on learning by building."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        <section className="relative w-full text-white thaksa-hero-scene thaksa-hero--workshops border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-28 right-1/4 w-[480px] h-[480px] rounded-full bg-[#3659D9]/20 blur-[140px]" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-5 thaksa-coded-label">
                <>PRACTICAL WORKSHOPS / {focusedCoursesLabel}</>
              </p>
              <h1 className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6 text-4xl sm:text-5xl lg:text-6xl">
                Learn by building something real.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                Choose one of three focused courses. Students spend their time making, testing, and presenting a project—not just watching slides.
              </p>
              <div className="flex flex-wrap gap-3">
                <DepthButton to="/contact?track=workshops" variant="electric" size="lg">
                  Plan a campus workshop <span aria-hidden="true">→</span>
                </DepthButton>
                <a href="#workshop-courses" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                  Explore the three courses
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20">
          <section id="workshop-courses" aria-labelledby="workshop-courses-heading" className="scroll-mt-28">
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">THE THREE COURSES</p>
              <h2 id="workshop-courses-heading" className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]">
                Pick the skill you want to build.
              </h2>
              <p className="mt-3 text-base text-[#5B6475] leading-relaxed">
                Workshops usually run for 3–5 days. We agree on the final schedule and project with your college before the workshop starts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {WORKSHOP_COURSES.map((course) => (
                <SpotlightCard key={course.id} tone="light" className="h-full p-6 sm:p-7 flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex min-h-8 items-center rounded-full bg-[#101828] px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#C7F36B]">
                      COURSE {course.number}
                    </span>
                    <span className="text-xs font-semibold text-[#5B6475]">{course.duration}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight tracking-[-0.02em] text-[#101828]">{course.title}</h3>
                    <p className="mt-3 text-sm text-[#5B6475] leading-relaxed">{course.description}</p>
                  </div>
                  <div className="border-t border-[#E3E5DE] pt-4">
                    <h4 className="text-sm font-bold text-[#101828] mb-3">What students will practice</h4>
                    <ul className="space-y-2.5">
                      {course.practice.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B6475]">
                          <span aria-hidden="true" className="mt-0.5 text-[#3659D9] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto rounded-xl border border-[#E3E5DE] bg-[#F7F8F4] p-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#3659D9] mb-1">Take-home result</p>
                    <p className="text-sm leading-relaxed text-[#101828]">{course.outcome}</p>
                  </div>
                  <DepthButton onClick={() => enquire(course.title)} variant="precision" size="md" className="w-full">
                    Discuss this workshop <span aria-hidden="true">→</span>
                  </DepthButton>
                </SpotlightCard>
              ))}
            </div>
          </section>

          <section aria-labelledby="workshop-steps-heading" className="mt-16 sm:mt-24">
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">A CLEAR PLAN</p>
              <h2 id="workshop-steps-heading" className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">Simple, practical, and guided.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WORKSHOP_STEPS.map((step) => (
                <div key={step.number} className="rounded-2xl border border-[#E3E5DE] bg-white p-6 sm:p-7">
                  <span className="font-mono text-sm font-bold text-[#3659D9]">{step.number}</span>
                  <h3 className="mt-3 text-lg font-display font-bold text-[#101828]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B6475]">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <SpotlightCard tone="dark" className="mt-16 p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-2">FOR COLLEGES</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Let's plan the right workshop for your students.</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Tell us the course, student level, and dates you have in mind. We will discuss a suitable plan with your college.
                </p>
              </div>
              <DepthButton onClick={() => enquire()} variant="electric" size="lg">
                Contact the team <span aria-hidden="true">→</span>
              </DepthButton>
            </div>
          </SpotlightCard>
        </main>
      </div>
    </>
  );
}
