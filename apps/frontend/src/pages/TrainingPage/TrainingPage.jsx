import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { useTextScramble } from '../../hooks/useTextScramble';

const CRT_COURSES = [
  {
    id: 'full-stack',
    number: '01',
    title: 'Full Stack Web Development',
    summary: 'Learn to build a complete website or web app, from the pages people use to the information saved behind them.',
    topics: ['Page design and forms', 'Useful features and user accounts', 'Saving and showing information', 'Testing and presenting a working project'],
    goal: 'Students finish with a web project they can explain clearly in an interview.',
  },
  {
    id: 'cloud-devops-mlops',
    number: '02',
    title: 'AWS / DevOps / MLOps',
    summary: 'Learn how software is put online, how updates are managed, and how teams keep their work organised.',
    topics: ['Cloud basics using AWS', 'Getting a project ready to run online', 'Making common checks and updates repeatable', 'Understanding how machine-learning projects are managed'],
    goal: 'Students understand how a project goes from a computer to a place where people can use it.',
  },
  {
    id: 'agentic-ai',
    number: '03',
    title: 'Agentic AI',
    summary: 'Learn to create an AI helper that follows clear instructions and uses selected tools to complete a task.',
    topics: ['Writing clear instructions', 'Working with supplied information', 'Connecting approved tools', 'Checking answers and setting limits'],
    goal: 'Students finish with a small AI helper and can explain how they checked its work.',
  },
];

const SEMESTER_STEPS = [
  { number: '01', title: 'Learn the basics', description: 'Start with short lessons and guided examples, with time to ask questions.' },
  { number: '02', title: 'Practice each week', description: 'Build in small steps, review mistakes, and improve with help from the trainer.' },
  { number: '03', title: 'Show your work', description: 'Complete a project, explain the choices you made, and practise talking about it clearly.' },
];

export default function TrainingPage() {
  const navigate = useNavigate();
  const focusedCoursesLabel = useTextScramble('THREE FOCUSED COURSES', { duration: 720, trigger: true });

  const enquire = (courseTitle = '') => {
    const query = courseTitle
      ? `I would like to discuss Campus Recruitment Training in ${courseTitle}.`
      : 'I would like to discuss Campus Recruitment Training for our college.';
    navigate(`/contact?track=crt&query=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <Helmet>
        <title>Campus Recruitment Training | THAKSA.AI</title>
        <meta
          name="description"
          content="Explore THAKSA.AI Campus Recruitment Training in three practical areas: Full Stack Web Development, AWS / DevOps / MLOps, and Agentic AI."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] text-[#101828] thaksa-interior-page">
        <section className="relative w-full text-white thaksa-hero-scene thaksa-hero--crt border-b border-white/10 py-16 sm:py-24 overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-28 left-1/3 w-[500px] h-[500px] rounded-full bg-[#3659D9]/20 blur-[140px]" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-5 thaksa-coded-label"><>CAMPUS RECRUITMENT TRAINING / {focusedCoursesLabel}</></p>
              <h1 className="font-display font-bold text-white tracking-[-0.03em] leading-[1.06] mb-6 text-4xl sm:text-5xl lg:text-6xl">
                Help students build skills they can show.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Our campus training focuses on three practical courses. Students learn step by step, practise regularly, and finish work they can explain in their own words.
              </p>
              <div className="flex flex-wrap gap-3">
                <DepthButton onClick={() => enquire()} variant="electric" size="lg">
                  Discuss training for your college <span aria-hidden="true">→</span>
                </DepthButton>
                <a href="#crt-courses" className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                  Explore the three courses
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20">
          <section id="crt-courses" aria-labelledby="crt-courses-heading" className="scroll-mt-28">
            <div className="max-w-3xl mb-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">THE THREE COURSE OPTIONS</p>
              <h2 id="crt-courses-heading" className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em] text-[#101828]">
                A clear path from practice to a finished project.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#5B6475]">
                We plan the course with your college and adjust the level to suit the students. The usual semester format runs over 15 weeks; final dates and weekly hours are agreed before training begins.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {CRT_COURSES.map((course) => (
                <SpotlightCard key={course.id} tone="light" className="h-full p-6 sm:p-7 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#101828] text-sm font-mono font-bold text-[#C7F36B]">{course.number}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#3659D9]">PRACTICAL COURSE</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight tracking-[-0.02em] text-[#101828]">{course.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B6475]">{course.summary}</p>
                  </div>
                  <div className="border-t border-[#E3E5DE] pt-4">
                    <h4 className="mb-3 text-sm font-bold text-[#101828]">Students will practise</h4>
                    <ul className="space-y-2.5">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B6475]">
                          <span aria-hidden="true" className="mt-0.5 font-bold text-[#3659D9]">✓</span><span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto rounded-xl border border-[#E3E5DE] bg-[#F7F8F4] p-4">
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-[#3659D9]">Course goal</p>
                    <p className="text-sm leading-relaxed text-[#101828]">{course.goal}</p>
                  </div>
                  <DepthButton onClick={() => enquire(course.title)} variant="precision" size="md" className="w-full">
                    Ask about this course <span aria-hidden="true">→</span>
                  </DepthButton>
                </SpotlightCard>
              ))}
            </div>
          </section>

          <section aria-labelledby="crt-steps-heading" className="mt-16 sm:mt-24">
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#3659D9] mb-2">HOW THE TRAINING WORKS</p>
              <h2 id="crt-steps-heading" className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">Learn, practise, and present.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SEMESTER_STEPS.map((step) => (
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
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] mb-2">FOR COLLEGES AND PLACEMENT TEAMS</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Let's agree on the right plan for your students.</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Share the student group, preferred course, and academic dates. We will discuss the schedule and practical work with your team.
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
