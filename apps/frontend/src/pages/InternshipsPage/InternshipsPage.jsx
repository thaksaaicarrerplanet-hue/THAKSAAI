import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SITE_BRANDING } from '../../theme/masterThemeConfig';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const INTERNSHIP_TRACKS = [
  {
    id: 'full-stack',
    number: '01',
    title: 'Full Stack Web Development',
    duration: '8–16 weeks',
    description: 'Work through the steps of creating a website or web app with guidance from the team.',
    tasks: [
      'Plan and create the pages',
      'Make forms and features work',
      'Save and show information',
      'Test the app and prepare a short demo',
    ],
    result: 'A complete web project and a clear explanation of how it works.',
  },
  {
    id: 'cloud-devops-mlops',
    number: '02',
    title: 'AWS / DevOps / MLOps',
    duration: '8–12 weeks',
    description: 'Learn how to put projects online and update them safely. You will also learn how teams manage machine-learning projects (MLOps).',
    tasks: [
      'Learn the basics of cloud hosting with AWS',
      'Prepare a project to run online',
      'Make routine steps easier to repeat',
      'Keep project notes and check that the result works',
    ],
    result: 'A shared online project and practical experience preparing it for use.',
  },
  {
    id: 'agentic-ai',
    number: '03',
    title: 'Agentic AI',
    duration: '8–16 weeks',
    description: 'Create an AI helper for a real task and learn how to check that its work is useful and stays within clear limits.',
    tasks: [
      'Choose a useful task for the AI helper',
      'Give it clear instructions and information',
      'Allow it to use a small set of approved tools',
      'Test the results and explain the limits',
    ],
    result: 'A working AI example with a short explanation of how it was tested.',
  },
];

const INTERNSHIP_STEPS = [
  { number: '01', title: 'Choose your path', description: 'Tell us which of the three courses you want to focus on and what you would like to learn.' },
  { number: '02', title: 'Work through guided tasks', description: 'Build in small steps, ask questions, and improve your work with feedback.' },
  { number: '03', title: 'Finish and present', description: 'Prepare a project demo and talk through what you built and learned.' },
];

export default function InternshipsPage() {
  const navigate = useNavigate();
  const focusedCoursesLabel = useTextScramble('THREE FOCUSED COURSES', { duration: 720, trigger: true });

  const enquire = (courseTitle = '') => {
    const query = courseTitle
      ? `I would like to ask about an internship in ${courseTitle}.`
      : 'I would like to ask about the current internship opportunities.';
    navigate(`/contact?track=internships&query=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <Helmet>
        <title>Practical Internships | THAKSA.AI</title>
        <meta
          name="description"
          content="Explore three practical internship paths at THAKSA.AI: Full Stack Web Development, AWS / DevOps / MLOps, and Agentic AI."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        <section className="relative w-full text-white thaksa-hero-scene thaksa-hero--internships border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-28 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C7F36B]/10 blur-[140px]" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-5 thaksa-coded-label"><>GUIDED INTERNSHIPS / {focusedCoursesLabel}</></p>
              <h1 className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6 text-4xl sm:text-5xl lg:text-6xl">
                Build skills by doing the work.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Choose one course, work through real examples with guidance, and finish with a project you can show and explain. We will share current availability, dates, and format when you enquire.
              </p>
              <div className="flex flex-wrap gap-3">
                <DepthButton onClick={() => enquire()} variant="electric" size="lg">
                  Ask about internships <span aria-hidden="true">→</span>
                </DepthButton>
                <DepthButton href={SITE_BRANDING.whatsappLink || `https://wa.me/${SITE_BRANDING.contactPhone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" variant="ghostDark" size="lg">
                  Contact us on WhatsApp
                </DepthButton>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20">
          <section id="internship-courses" aria-labelledby="internship-courses-heading" className="scroll-mt-28">
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">THE THREE INTERNSHIP PATHS</p>
              <h2 id="internship-courses-heading" className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]">
                Pick one area and learn through a project.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#5B6475]">
                Each path has a clear focus. The exact tasks and duration depend on the current opening and are confirmed before you begin.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {INTERNSHIP_TRACKS.map((track) => (
                <SpotlightCard key={track.id} tone="light" className="h-full p-6 sm:p-7 flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#101828] text-sm font-mono font-bold text-[#C7F36B]">{track.number}</span>
                    <span className="text-xs font-semibold text-[#5B6475]">{track.duration}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight tracking-[-0.02em] text-[#101828]">{track.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B6475]">{track.description}</p>
                  </div>
                  <div className="border-t border-[#E3E5DE] pt-4">
                    <h4 className="mb-3 text-sm font-bold text-[#101828]">What you may work on</h4>
                    <ul className="space-y-2.5">
                      {track.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B6475]">
                          <span aria-hidden="true" className="mt-0.5 font-bold text-[#3659D9]">✓</span><span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto rounded-xl border border-[#E3E5DE] bg-[#F7F8F4] p-4">
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-[#3659D9]">Your end result</p>
                    <p className="text-sm leading-relaxed text-[#101828]">{track.result}</p>
                  </div>
                  <DepthButton onClick={() => enquire(track.title)} variant="precision" size="md" className="w-full">
                    Ask about this path <span aria-hidden="true">→</span>
                  </DepthButton>
                </SpotlightCard>
              ))}
            </div>
          </section>

          <section aria-labelledby="internship-steps-heading" className="mt-16 sm:mt-24">
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">WHAT TO EXPECT</p>
              <h2 id="internship-steps-heading" className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">Clear steps, with support along the way.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {INTERNSHIP_STEPS.map((step) => (
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
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-2">NEXT STEP</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Ask us which path has an opening.</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Tell us which course interests you. We will confirm the current availability, schedule, and next steps before you make a decision.
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
