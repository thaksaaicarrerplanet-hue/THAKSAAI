import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";

const courseDetailsDatabase = {
  "crt-group-a": {
    title: "Group A: Advanced Algorithms & Data Structures",
    badge: "15-Week Semester Campus Training",
    forWho: "Top student coders targeting high-salary software jobs ($30k+ / ₹25 LPA+).",
    desc: "A thorough practical training program designed for students who have mastered basic syntax and want to conquer advanced coding examinations conducted by tier-1 global software employers.",
    topics: [
      "Advanced Array Transformations & Sliding Window Patterns",
      "Tree Traversals, Binary Search Trees, and Heaps",
      "Graph Algorithms: Shortest Path, Spanning Trees, and Network Flows",
      "Dynamic Programming: Memoization and Tabulation Optimization",
      "Time & Memory Complexity Reduction under Strict Exam Limits",
      "Weekly Timed Online Practice Tests with Industry Expert Review"
    ],
    schedule: "15 Weeks (Every Friday Timed Practice + 4 Hours Lab Workshop)",
    prereq: "Strong foundation in basic programming loops and conditionals in Python, Java, or C++."
  },
  "crt-group-b": {
    title: "Group B: Core Software Development & DBMS",
    badge: "15-Week Semester Campus Training",
    forWho: "Students preparing for core enterprise product engineering roles (₹10-20 LPA).",
    desc: "Focuses on clean software logic, structured programming, database indexing, and system building to ensure students pass standard technical interview rounds with complete confidence.",
    topics: [
      "Object-Oriented Programming (OOP) Best Practices & Clean Code",
      "Relational Database Design, SQL Query Optimization, and Indexing",
      "Handling Concurrent Data and Transaction Safety in Web Apps",
      "Building Modern REST API Backend Services",
      "Debugging Code Quickly Under Timed Interview Conditions",
      "Weekly Mock Interview Coding Drills and Personalized Feedback"
    ],
    schedule: "15 Weeks (Every Friday Timed Practice + 4 Hours Lab Workshop)",
    prereq: "Familiarity with basic coding syntax and introductory database concepts."
  },
  "workshop-genai": {
    title: "AI & ChatGPT Applications Workshop",
    badge: "4-Day Intensive College Lab",
    forWho: "All engineering students interested in artificial intelligence and modern application development.",
    desc: "Move past conversational chat prompting and learn how to write real software applications that use OpenAI developer tools, embeddings, and vector search engines to analyze corporate documents.",
    topics: [
      "How Modern AI Large Language Models Work Under the Hood",
      "Connecting Python Software to OpenAI & Gemini Cloud APIs",
      "Building Document Smart Search Using Vector Databases (ChromaDB)",
      "Creating Automated Assistants capable of Answering Technical Questions",
      "Testing AI Accuracy and Managing Cloud Token Budgets",
      "Live Student Team Hackathon & Project Presentations on Day 4"
    ],
    schedule: "4 Intensive Days (8 Hours per day inside campus computer labs)",
    prereq: "Basic knowledge of Python scripting and internet fundamentals."
  }
};

const defaultCourse = {
  title: "Practical Campus Training Program",
  badge: "Guided Campus Course",
  forWho: "Engineering students preparing for software interviews and real developer work.",
  desc: "A hands-on coding course taught by experienced industry engineers directly inside your college computer labs. We focus on writing real, working code without repetitive theory lectures.",
  topics: [
    "Practical Problem Solving with Real Industry Examples",
    "Writing Clean, Understandable Programming Logic",
    "Working Collaboratively Using Modern Git Team Tools",
    "Automated Code Verification and Error Debugging",
    "Weekly Practice Exercises to Build Coding Confidence",
    "Live Technical Presentation & Mentoring Sessions"
  ],
  schedule: "Flexible campus timetable coordinated directly with college Deans and TPOs.",
  prereq: "Enrolled in a partner computer science or engineering college degree."
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const data = courseDetailsDatabase[courseId] || defaultCourse;

  return (
    <>
      <Helmet>
        <title>{data.title} | THAKSAAI Course Details</title>
        <meta name="description" content={data.desc} />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black thaksa-interior-page">
        <div className="max-w-5xl mx-auto">
          
          {/* Back Button */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#1a1a1a] transition-colors mb-8"
          >
            ← Back to All Courses
          </Link>

          {/* Main Content Box */}
          <article className="neo-glass p-8 sm:p-12 md:p-14 rounded-3xl border border-black/[0.08] shadow-lg">
            
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#9fff00] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
              ● {data.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight mb-4">
              {data.title}
            </h1>

            <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed mb-8 border-b border-black/[0.06] pb-8">
              {data.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm font-sans">
              <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.05]">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                  Who This Is For
                </span>
                <p className="text-base font-medium text-[#1a1a1a]">
                  {data.forWho}
                </p>
              </div>

              <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.05]">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                  Schedule & Duration
                </span>
                <p className="text-base font-medium text-[#1a1a1a]">
                  {data.schedule}
                </p>
              </div>
            </div>

            {/* What Students Will Learn */}
            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] tracking-tight mb-5">
              What Students Will Learn & Practice
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 font-sans">
              {data.topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-black/[0.04]">
                  <span className="text-[#0D9488] font-bold text-lg mt-0.5 shrink-0">✓</span>
                  <span className="text-sm sm:text-base font-medium text-zinc-700 leading-snug">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-black/[0.03] rounded-2xl border border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-sans text-zinc-600">
              <div>
                <strong className="text-[#1a1a1a] block mb-0.5">Recommended Experience:</strong>
                <span>{data.prereq}</span>
              </div>
              <span className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-xs font-bold uppercase whitespace-nowrap">
                Taught In College Labs
              </span>
            </div>
          </article>

          {/* Bottom Action Card */}
          <div className="mt-12 bg-[#1a1a1a] text-white p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <span className="text-xs font-mono text-[#9fff00] font-bold uppercase tracking-widest block mb-1">
                ● For College Leadership & Faculty
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Want to bring this course to your campus?
              </h3>
              <p className="text-sm font-sans text-zinc-400 mt-1">
                Contact our team to plan suitable dates and organize a simple discussion with your faculty.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate(`/contact?track=${encodeURIComponent(data.title)}`)}
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
