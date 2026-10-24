import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  },
  "crt-group-c": {
    title: "Group C: Coding Fundamentals",
    badge: "15-Week Semester Campus Training",
    forWho: "Students building confidence with basic programming and logical problem solving.",
    desc: "A foundations-first training format that develops programming fluency through guided exercises, debugging, and progressively harder problems.",
    topics: [
      "Variables, Types, Conditions, Loops, and Functions",
      "Arrays, Strings, and Basic Data Transformations",
      "Reading Errors and Debugging Program Flow",
      "Introductory Object-Oriented Programming",
      "Git Fundamentals and Collaborative Code Practice",
      "Timed Practice Sets with Structured Feedback"
    ],
    schedule: "A semester-length format coordinated with the partner institution.",
    prereq: "No advanced programming experience required."
  },
  "workshop-cloud": {
    title: "Cloud Computing & Docker Workshop",
    badge: "5-Day Practical Workshop",
    forWho: "Engineering students learning deployment, Linux, and cloud-native foundations.",
    desc: "A guided workshop covering containerized applications and a deployment workflow, with practical exercises and a final demonstration.",
    topics: [
      "Linux and Command-Line Fundamentals",
      "Docker Images, Containers, and Build Contexts",
      "Environment Configuration and Container Networking",
      "CI Workflows for Linting and Production Builds",
      "Cloud Hosting Concepts and Deployment Readiness",
      "Operational Checks, Logs, and Troubleshooting"
    ],
    schedule: "A five-day format; timetable and hosting environment are confirmed with the institution.",
    prereq: "Basic command-line and programming familiarity is helpful."
  },
  "workshop-backend": {
    title: "Backend Systems & API Engineering Workshop",
    badge: "3-Day Practical Workshop",
    forWho: "Students ready to explore backend services and API design.",
    desc: "Build a small backend service while learning API contracts, data validation, security basics, testing, and operational considerations.",
    topics: [
      "REST API Design and Resource Modelling",
      "Request Validation and Consistent Error Responses",
      "Database Access and Data Integrity Basics",
      "Authentication, Authorization, and Input Safety",
      "API Testing and Observability Fundamentals",
      "Packaging and Demonstrating a Working Service"
    ],
    schedule: "A three-day format, tailored to the host institution's lab schedule.",
    prereq: "Basic programming and HTTP concepts."
  },
  "capstone-cloud-saas": {
    title: "Final-Year Project: Cloud Web Application",
    badge: "Guided Capstone Track",
    forWho: "Final-year teams interested in building a deployable web application.",
    desc: "A mentoring framework for turning a project brief into a tested web application with documented architecture, version-controlled delivery, and a demonstration-ready deployment.",
    topics: [
      "Problem Definition, Scope, and Acceptance Criteria",
      "Application Architecture and Data Modelling",
      "API Contracts, Authentication, and Validation",
      "Responsive Frontend Implementation",
      "Automated Tests, Review Cycles, and Deployment",
      "Documentation, Demonstration, and Technical Defense"
    ],
    schedule: "Milestones are agreed with the student team and academic calendar.",
    prereq: "A project brief and a team willing to participate in implementation and review."
  },
  "capstone-ai-rag": {
    title: "Final-Year Project: AI Document Assistant",
    badge: "Guided AI Capstone Track",
    forWho: "Final-year teams interested in applied AI, document retrieval, and grounded question answering.",
    desc: "A supervised project format for building a document question-answering application with source-grounded retrieval, evaluation, and clear limitations.",
    topics: [
      "Document Parsing, Cleaning, and Chunking",
      "Embedding Models and Vector Retrieval",
      "Retrieval-Augmented Generation and Source References",
      "Evaluation Sets, Hallucination Checks, and Guardrails",
      "Backend API and User Interface Integration",
      "Privacy, Deployment, Documentation, and Technical Defense"
    ],
    schedule: "Milestones are agreed with the team, available resources, and academic calendar.",
    prereq: "Basic programming experience; Python familiarity is recommended."
  },
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const data = courseDetailsDatabase[courseId];

  if (!data) {
    return (
      <>
        <Helmet>
          <title>Course Not Found | THAKSAAI</title>
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <main className="flex min-h-[65vh] items-center justify-center bg-[#F7F8F4] px-4 py-20 text-[#101828]">
          <div className="w-full max-w-xl rounded-3xl border border-[#E3E5DE] bg-white p-8 text-center shadow-xl sm:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#3659D9]">Course catalogue</p>
            <h1 className="mt-3 font-display text-3xl font-bold">We couldn't find that course.</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6475]">The link may be outdated or the course may no longer be listed. Return to the catalogue to choose an available program.</p>
            <Link to="/courses" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#101828] px-5 py-3 text-sm font-bold text-white hover:bg-[#1A2335]">Browse courses →</Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.title} | THAKSAAI Course Details</title>
        <meta name="description" content={data.desc} />
      </Helmet>

      <main className="w-full min-h-screen bg-[#F7F8F4] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#C7F36B] selection:text-black">
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
            
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#C7F36B] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
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
              <span className="text-xs font-mono text-[#C7F36B] font-bold uppercase tracking-widest block mb-1">
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
              className="bg-[#C7F36B] text-[#1a1a1a] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Our Team →
            </button>
          </div>

        </div>
      </main>
    </>
  );
}
