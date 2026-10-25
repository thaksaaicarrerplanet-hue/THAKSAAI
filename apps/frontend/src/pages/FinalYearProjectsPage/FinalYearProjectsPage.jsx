import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";

const capstoneArchitectures = [
  {
    imageKey: "capstone-git",
    badge: "Teamwork & Git",
    subtitle: "Modern Code Collaboration",
    title: "Coding in Teams Using Git",
    desc: "Instead of emailing code files back and forth, students learn how professional developers work together using Git branches and code reviews without overwriting each other's work."
  },
  {
    imageKey: "capstone-cicd",
    badge: "Automated Testing",
    subtitle: "Reliable Software Quality",
    title: "Automated Test Checking (CI/CD)",
    desc: "Students write tests that automatically verify their app still works whenever they add new code. Good code is then published online automatically for job recruiters to explore and test."
  },
  {
    imageKey: "capstone-defense",
    badge: "Live Presentations",
    subtitle: "Interview Confidence",
    title: "Practice Project Presentations",
    desc: "Students present their completed software app to experienced senior developers. They explain how they built it, how they stored data, and answer typical job interview technical questions."
  }
];

export default function FinalYearProjectsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Final-Year Engineering Projects | THAKSAAI</title>
        <meta
          name="description"
          content="Helping students build working final-year cloud software projects using real team Git tools and live project presentations."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black thaksa-interior-page">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
              Final-Year Engineering Projects
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-5">
              Build working cloud software instead of plain scripts.
            </h1>
            <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed">
              Many students struggle to build real software for their university final-year project requirement. We guide your students step-by-step to build working web apps that run on the cloud and impress job interviewers.
            </p>
          </header>

          {/* 3 Pillars of Thaksa Projects */}
          <section aria-label="3 Core Skills Taught" className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] mb-8">
              What Students Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capstoneArchitectures.map((item, idx) => (
                <SupabaseImageCard
                  key={idx}
                  imageKey={item.imageKey}
                  badgeText={item.badge}
                  subtitle={item.subtitle}
                  title={item.title}
                  description={item.desc}
                  actionText="Learn About Our Projects →"
                  onActionClick={() => navigate("/contact?capstone=Final+Year+Projects")}
                />
              ))}
            </div>
          </section>

          {/* Departmental Coverage Banner */}
          <section aria-label="Supported engineering departments" className="neo-glass p-8 sm:p-12 rounded-3xl border border-black/[0.08] shadow-sm mb-16">
            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-6">
              Project Ideas for All College Branches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm font-sans">
              <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.05]">
                <strong className="text-base block mb-1 text-[#1a1a1a]">Computer Science (CSE / IT)</strong>
                <span className="text-zinc-600 block">Cloud Web Applications, Smart Search Tools, AI Chat Assistants, and Fast Data Systems.</span>
              </div>
              <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.05]">
                <strong className="text-base block mb-1 text-[#1a1a1a]">AI & Data Science (AIML)</strong>
                <span className="text-zinc-600 block">Machine Learning Prediction Tools, Smart Image Recognition, and Automated Data Analyzers.</span>
              </div>
              <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.05]">
                <strong className="text-base block mb-1 text-[#1a1a1a]">Electronics (ECE)</strong>
                <span className="text-zinc-600 block">Connected Internet-of-Things (IoT) Device Apps, Sensor Data Dashboards, and Audio Tools.</span>
              </div>
              <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.05]">
                <strong className="text-base block mb-1 text-[#1a1a1a]">Electrical (EEE)</strong>
                <span className="text-zinc-600 block">Smart Energy Usage Dashboards, Solar System Data Monitors, and Power Safety Apps.</span>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section aria-label="Project support callout" className="bg-[#1a1a1a] text-white p-10 sm:p-14 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10">
            <div>
              <span className="text-xs font-mono text-[#9fff00] font-bold uppercase tracking-widest block mb-2">
                ● Simple Project Collaboration
              </span>
              <h3 className="text-3xl font-display font-bold text-white tracking-tight">
                Want us to guide student projects at your college?
              </h3>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-base font-bold tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Our Team →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
