import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";

export default function TrainingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Campus Recruitment Training (CRT) | THAKSAAI</title>
        <meta
          name="description"
          content="Our practical Campus Recruitment Training (CRT) groups students by skill level so everyone learns comfortably and succeeds in job technical interviews."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
              Campus Recruitment Training (CRT)
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-5">
              Practical campus training for every skill level.
            </h1>
            <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed">
              We do not place all students into one repetitive lecture hall. Instead, we organize students into three learning groups based on a friendly beginning skill check. This ensures both advanced programmers and beginning coders learn comfortably and get hired.
            </p>
          </header>

          {/* 3-Tier Competency Architecture Grid */}
          <section aria-label="3 Skill Tracks" className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] mb-8 flex items-center gap-3">
              <span>Our 3 Student Learning Groups</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#1a1a1a] text-[#9fff00] uppercase tracking-wider font-bold">
                ● Personalized Learning
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SupabaseImageCard
                imageKey="crt-tier-a"
                badgeText="Group A Track"
                subtitle="For Top Coders"
                title="Group A: Advanced Algorithms"
                description="Designed for students who already have strong coding basics and are aiming for top software jobs ($30k+ / ₹25 LPA+). We practice advanced graph challenges, optimization, and hard problem-solving tests."
                actionText="Request Group A Details →"
                onActionClick={() => navigate("/contact?track=Group+A+CRT")}
              />

              <SupabaseImageCard
                imageKey="crt-tier-b"
                badgeText="Group B Track"
                subtitle="Core Software Development"
                title="Group B: Software Development & DBMS"
                description="Built for the majority of students preparing for core product development roles ($12k-$25k / ₹10-20 LPA). We focus on clean programming logic, database design, and real software coding practice."
                actionText="Request Group B Details →"
                onActionClick={() => navigate("/contact?track=Group+B+CRT")}
              />

              <SupabaseImageCard
                imageKey="crt-tier-c"
                badgeText="Group C Track"
                subtitle="Coding Basics & Rigor"
                title="Group C: Coding Fundamentals"
                description="Created for students who need clear, step-by-step guidance to build strong programming foundations for good IT jobs ($6k-$10k / ₹5-8 LPA). We practice array logic, loops, function debugging, and accuracy."
                actionText="Request Group C Details →"
                onActionClick={() => navigate("/contact?track=Group+C+CRT")}
              />
            </div>
          </section>

          {/* Weekly Execution Protocol */}
          <section aria-label="Weekly Training Schedule" className="mb-20 neo-glass p-8 sm:p-12 rounded-3xl border border-black/[0.08] shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                Semester Schedule
              </span>
              <h3 className="text-3xl font-display font-bold text-[#1a1a1a] tracking-tight mb-4">
                Weekly Practical Coding Practice
              </h3>
              <p className="text-base font-sans text-zinc-600 leading-relaxed">
                Every Friday during the training course, students take a timed online practice test. This helps them get used to the exact type of coding tests used by corporate job hiring teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "Week 01-03", title: "Skill Check & Basics", tag: "Foundation" },
                { step: "Week 04-07", title: "Data Structures & Trees", tag: "Problem Solving" },
                { step: "Week 08-11", title: "Advanced Problem Logic", tag: "High Speed" },
                { step: "Week 12-15", title: "Job Interview Practice Tests", tag: "Final Preparation" },
              ].map((m, i) => (
                <div key={i} className="p-5 bg-white/70 rounded-xl border border-black/[0.06] flex flex-col justify-between">
                  <span className="text-xs font-mono font-bold text-[#1a1a1a] opacity-60 uppercase mb-2">
                    {m.step}
                  </span>
                  <h4 className="text-lg font-display font-bold text-[#1a1a1a] mb-4">
                    {m.title}
                  </h4>
                  <span className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[#9fff00] text-xs font-bold w-max uppercase tracking-wide">
                    ● {m.tag}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Capsule */}
          <section aria-label="College Engagement Banner" className="bg-[#1a1a1a] text-white p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10">
            <div>
              <span className="text-xs font-mono text-[#9fff00] font-bold uppercase tracking-widest block mb-2">
                ● For College Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Want to run this practical training at your college?
              </h3>
              <p className="text-sm font-sans text-zinc-400 mt-2 max-w-xl leading-relaxed">
                Reach out to our team today. We will organize a simple discussion with your college placement directors and faculty to plan the best dates.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Our Team →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
