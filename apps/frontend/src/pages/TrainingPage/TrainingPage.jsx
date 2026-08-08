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
          <header className="max-w-4xl mb-20 pb-12 border-b border-black/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#9fff00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
                Campus Recruitment Training (CRT)
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                Practical campus training for every skill level.
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                We do not place all students into one repetitive lecture hall. Instead, we organize students into three learning groups based on a friendly skill check. This ensures both advanced programmers and beginning coders learn comfortably and get hired.
              </p>
            </motion.div>
          </header>

          {/* 3-Tier Competency Architecture Grid */}
          <section aria-label="3 Skill Tracks" className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
                  Our 3 Student Learning Groups
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 bg-white/70 px-4 py-2.5 rounded-xl border border-black/10 shrink-0 shadow-sm neo-glass uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                Personalized Learning
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <SupabaseImageCard
                  imageKey="crt-tier-a"
                  badgeText="Group A Track"
                  subtitle="For Top Coders"
                  title="Group A: Advanced Algorithms"
                  description="Designed for students aiming for top software jobs ($30k+ / ₹25 LPA+). We practice advanced graph challenges, optimization, and hard problem-solving tests."
                  actionText="Request Group A Details →"
                  onActionClick={() => navigate("/contact?track=Group+A+CRT")}
                  className="neo-glass bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <SupabaseImageCard
                  imageKey="crt-tier-b"
                  badgeText="Group B Track"
                  subtitle="Core Software Development"
                  title="Group B: Software Development & DBMS"
                  description="Built for the majority of students preparing for core product development roles ($12k-$25k / ₹10-20 LPA). We focus on clean programming logic, database design, and real software coding practice."
                  actionText="Request Group B Details →"
                  onActionClick={() => navigate("/contact?track=Group+B+CRT")}
                  className="neo-glass bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <SupabaseImageCard
                  imageKey="crt-tier-c"
                  badgeText="Group C Track"
                  subtitle="Coding Basics & Rigor"
                  title="Group C: Coding Fundamentals"
                  description="Created for students who need clear, step-by-step guidance to build strong programming foundations for good IT jobs. We practice array logic, loops, function debugging, and accuracy."
                  actionText="Request Group C Details →"
                  onActionClick={() => navigate("/contact?track=Group+C+CRT")}
                  className="neo-glass bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>
            </div>
          </section>

          {/* Weekly Execution Protocol */}
          <section aria-label="Weekly Training Schedule" className="mb-24 neo-glass bg-white/70 p-8 sm:p-14 rounded-3xl border border-black/[0.08] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-3xl mb-12 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                Semester Schedule
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight mb-4">
                Weekly Practical Coding Practice
              </h3>
              <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed">
                Every Friday during the training course, students take a timed online practice test. This helps them get used to the exact type of coding tests used by corporate job hiring teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "Week 01-03", title: "Skill Check & Basics", tag: "Foundation" },
                { step: "Week 04-07", title: "Data Structures & Trees", tag: "Problem Solving" },
                { step: "Week 08-11", title: "Advanced Problem Logic", tag: "High Speed" },
                { step: "Week 12-15", title: "Job Interview Practice Tests", tag: "Final Preparation" },
              ].map((m, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-black/[0.06] flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase mb-3">
                    {m.step}
                  </span>
                  <h4 className="text-xl font-display font-bold text-[#1a1a1a] mb-6">
                    {m.title}
                  </h4>
                  <span className="px-3 py-1.5 rounded-full bg-[#1a1a1a] text-[#9fff00] text-xs font-bold w-max uppercase tracking-wide">
                    ● {m.tag}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Capsule */}
          <section aria-label="College Engagement Banner" className="bg-[#1a1a1a] text-white p-8 sm:p-14 md:p-16 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-sans text-[#9fff00] font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#9fff00]"></span>
                For College Leadership
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Want to run this practical training at your college?
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-400 mt-4 leading-relaxed">
                Reach out to our team today. We will organize a simple discussion with your college placement directors and faculty to plan the best dates.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="relative z-10 bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-white transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white hover:-translate-y-1"
            >
              Contact Our Team →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
