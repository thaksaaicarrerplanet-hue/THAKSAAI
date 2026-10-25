import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";
import CodeRounded from "@mui/icons-material/CodeRounded";
import CloudSyncRounded from "@mui/icons-material/CloudSyncRounded";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";

const courseCatalogue = [
  { id: "crt-group-a", title: "Group A: Advanced Algorithms", category: "TRAINING", imageKey: "crt-tier-a", duration: "15 Weeks (Semester Course)", level: "For Top Coders", desc: "Intensive algorithmic practice in trees, graph theory, and advanced problem-solving for students targeting top technology salaries." },
  { id: "crt-group-b", title: "Group B: Software Development & DBMS", category: "TRAINING", imageKey: "crt-tier-b", duration: "15 Weeks (Semester Course)", level: "Intermediate", desc: "Hands-on software building, database SQL modeling, and practical coding routines engineered for product developer job roles." },
  { id: "crt-group-c", title: "Group C: Coding Fundamentals", category: "TRAINING", imageKey: "crt-tier-c", duration: "15 Weeks (Semester Course)", level: "Beginner Friendly", desc: "Step-by-step guidance covering loops, arrays, function debugging, and core logic to build strong programming foundations for good IT jobs." },
  { id: "workshop-genai", title: "AI & ChatGPT Applications", category: "WORKSHOPS", imageKey: "workshop-genai", duration: "4 Days (32 Total Hours)", level: "All Coding Levels", desc: "Learn how to build intelligent AI chatbots and smart search tools using OpenAI developer APIs and modern vector databases." },
  { id: "workshop-cloud", title: "Cloud Computing & Docker Containers", category: "WORKSHOPS", imageKey: "workshop-devops", duration: "5 Days (40 Total Hours)", level: "All Branches", desc: "Package and deploy modern web applications inside cloud servers using Docker containers and Kubernetes just like industry software teams." },
  { id: "workshop-backend", title: "High-Speed Backend Systems", category: "WORKSHOPS", imageKey: "workshop-microservices", duration: "3 Days (24 Total Hours)", level: "Advanced", desc: "Build fast online server apps capable of handling thousands of actions at once using reliable messaging tools like Apache Kafka." },
  { id: "capstone-cloud-saas", title: "Final-Year Project: Cloud Web App", category: "PROJECTS", imageKey: "capstone-git", duration: "8 Weeks Guided Project", level: "Final-Year Students", desc: "Build a working cloud software application with automated testing and professional Git teamwork tools for your college project submission." },
  { id: "capstone-ai-rag", title: "Final-Year Project: AI Document Assistant", category: "PROJECTS", imageKey: "capstone-cicd", duration: "8 Weeks Guided Project", level: "Final-Year Students", desc: "Build a custom artificial intelligence web tool that reads company documents and answers questions accurately in real time." },
];

const FEATURED_TRACKS = [
  {
    number: "01",
    icon: CodeRounded,
    kicker: "BUILD WEBSITES",
    title: "Full Stack Web Development",
    description: "Build a website or web app from start to finish. Plan the pages, add useful features, save information, test your work, and put it online.",
    skills: ["Web pages", "Forms and features", "Save information", "Test and publish"],
    accent: "blue",
  },
  {
    number: "02",
    icon: CloudSyncRounded,
    kicker: "PUT PROJECTS ONLINE",
    title: "AWS / DevOps / MLOps",
    description: "Learn how to put projects online, keep them running, and make updates safely. This course also introduces how teams manage machine-learning projects.",
    skills: ["AWS cloud basics", "Prepare a project", "Manage updates", "Machine-learning projects"],
    accent: "lime",
  },
  {
    number: "03",
    icon: AutoAwesomeRounded,
    kicker: "BUILD AI HELPERS",
    title: "Agentic AI",
    description: "Build an AI helper that follows clear instructions, uses selected tools, and completes a useful task. Learn how to check its results and set clear limits.",
    skills: ["Clear instructions", "Selected tools", "Useful information", "Check results"],
    accent: "violet",
  },
];

export default function CoursesPage() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const navigate = useNavigate();

  const filteredCourses = selectedFilter === "ALL" 
    ? courseCatalogue 
    : courseCatalogue.filter(c => c.category === selectedFilter);

  return (
    <>
      <Helmet>
        <title>Explore Our Practical Courses & Workshops | THAKSAAI</title>
        <meta
          name="description"
          content="Browse our complete directory of practical campus recruitment training courses, short coding workshops, and final-year software projects."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#F7F8F4] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#C7F36B] selection:text-black thaksa-interior-page thaksa-course-catalogue">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C7F36B] block animate-pulse"></span>
                Practical Course Directory
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Three practical courses. Skills you can show.
              </h1>
              <p className="text-base sm:text-lg font-sans text-zinc-600 mt-3 leading-relaxed">
                Explore the three main learning paths first, then browse our workshops, campus training, and final-year project options below.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0 text-xs font-sans font-bold">
              {[
                { key: "ALL", label: "● All Programs" },
                { key: "TRAINING", label: "Campus Training" },
                { key: "WORKSHOPS", label: "3-5 Day Workshops" },
                { key: "PROJECTS", label: "Final-Year Projects" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`px-4 py-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-[#C7F36B] ${
                    selectedFilter === tab.key ? "bg-[#1a1a1a] text-[#C7F36B] border-[#1a1a1a]" : "bg-white/80 text-zinc-700 border-black/10 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Three flagship learning paths, surfaced ahead of the general catalogue. */}
          <section className="thaksa-featured-tracks-section" aria-labelledby="featured-tracks-heading">
            <div className="thaksa-featured-tracks-heading">
              <div className="min-w-0">
                <span className="thaksa-track-eyebrow">SIGNATURE LEARNING PATHS / 03</span>
                <h2 id="featured-tracks-heading">Three practical courses. Skills you can show.</h2>
                <p>Choose a course, build a project, and practise explaining what you made.</p>
              </div>
              <span className="thaksa-track-heading-note">Build with guidance · learn by doing</span>
            </div>

            <div className="thaksa-featured-tracks">
              {FEATURED_TRACKS.map((track) => {
                const TrackIcon = track.icon;
                const inquiry = `I'm interested in the ${track.title} course. Please share the curriculum, delivery format, and upcoming availability.`;
                const contactHref = `/contact?track=${encodeURIComponent(track.title)}&query=${encodeURIComponent(inquiry)}`;

                return (
                  <article className={`thaksa-track-card thaksa-track-card--${track.accent}`} key={track.number}>
                    <div className="thaksa-track-card-top">
                      <div className="thaksa-track-icon" aria-hidden="true">
                        <TrackIcon />
                      </div>
                      <span className="thaksa-track-number">TRACK {track.number}</span>
                    </div>

                    <div className="thaksa-track-card-copy">
                      <span className="thaksa-track-kicker">{track.kicker}</span>
                      <h3>{track.title}</h3>
                      <p>{track.description}</p>
                    </div>

                    <ul className="thaksa-track-skills" aria-label={`${track.title} topics`}>
                      {track.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>

                    <Link className="thaksa-track-cta" to={contactHref}>
                      Discuss this course <span aria-hidden="true">↗</span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Courses Grid */}
          <section aria-label="Course Listings" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((c) => (
              <div key={c.id} className="flex flex-col gap-4">
                <SupabaseImageCard
                  imageKey={c.imageKey}
                  badgeText={c.category === "TRAINING" ? "Semester Training" : c.category === "WORKSHOPS" ? "Practical Workshop" : "Student Project"}
                  subtitle={c.level}
                  title={c.title}
                  description={c.desc}
                  actionText="View Course Details →"
                  onActionClick={() => navigate(`/courses/${c.id}`)}
                  aspectRatio="aspect-[16/10]"
                />
                <div className="flex items-center justify-between px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-black/[0.05] text-xs font-sans font-semibold text-zinc-700">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                    {c.duration}
                  </span>
                  <span className="text-[#1a1a1a] font-bold bg-black/5 px-3 py-1 rounded-full uppercase">
                    {c.level}
                  </span>
                </div>
              </div>
            ))}
          </section>

          {/* Institutional Note Callout */}
          <div className="neo-glass p-8 sm:p-12 rounded-3xl border border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                How Enrollment Works
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight mb-3">
                All courses are organized directly with college leadership.
              </h3>
              <p className="text-sm sm:text-base font-sans text-zinc-600 leading-relaxed">
                To keep learning quality high and ensure proper supervision in computer labs, we do not sell individual ticket registrations online. We partner directly with college placement officers and Deans to train entire student batches on campus.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 focus:outline-none focus:ring-2 focus:ring-[#C7F36B]"
            >
              Contact Our Team →
            </button>
          </div>

        </div>
      </main>
    </>
  );
}
