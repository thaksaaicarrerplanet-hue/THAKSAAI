import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";

const workshops = [
  {
    imageKey: "workshop-genai",
    track: "Workshop 01 / Artificial Intelligence",
    title: "Build with AI — ChatBots & Smart Tools",
    days: "4 Days · On Campus",
    stack: "Python, OpenAI, LangChain",
    body: "Students learn how to build real AI-powered tools — from intelligent chatbots to automated Q&A systems. No prior AI experience needed. You leave with a working product you built yourself."
  },
  {
    imageKey: "workshop-devops",
    track: "Workshop 02 / Cloud & Deployment",
    title: "Deploy Your App to the Internet",
    days: "5 Days · On Campus",
    stack: "Docker, GitHub Actions, AWS",
    body: "Most students build projects that only run on their own laptop. In this workshop, you learn how to package your app and make it live on the internet — the exact way companies do it professionally."
  },
  {
    imageKey: "crt-tier-a",
    track: "Workshop 03 / Backend Development",
    title: "Build Fast & Reliable Backend Systems",
    days: "3 Days · On Campus",
    stack: "Node.js, Redis, PostgreSQL",
    body: "Learn how to build the server-side of real applications — the part users don't see but that makes everything work. You'll build a live backend that can handle thousands of users without breaking."
  },
  {
    imageKey: "capstone-git",
    track: "Workshop 04 / Data & Analytics",
    title: "Work with Real Data Like a Professional",
    days: "4 Days · On Campus",
    stack: "Python, Pandas, Airflow",
    body: "Learn how to collect, clean, and make sense of large amounts of data — a skill that every company needs. You'll build an automated data pipeline that runs on its own and generates reports."
  }
];

export default function WorkshopPage() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>On-Campus Engineering Workshops | THAKSAAI</title>
        <meta
          name="description"
          content="3 to 5 day intensive on-campus engineering laboratories. Zero textbook theory. Real practitioner deployments."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-12 border-b border-black/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#9fff00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
                On-Campus Workshops
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                3 to 5 days of real coding, <span className="text-zinc-500 line-through">not theory.</span>
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                Our senior software developers come directly to your college computer labs and teach students how to build real, working applications from scratch — the same way it's done in the industry.
              </p>
              
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                Book an On-Campus Workshop →
              </button>
            </motion.div>
          </header>

          {/* Workshop Tracks Section */}
          <section aria-label="Workshop Tracks" className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                  Choose a Workshop
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
                  What do your students want to build?
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 bg-white/70 px-4 py-2.5 rounded-xl border border-black/10 shrink-0 shadow-sm neo-glass">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                Build by Doing
              </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
            {workshops.map((w, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="flex h-full"
              >
                <SupabaseImageCard
                  imageKey={w.imageKey}
                  badgeText={w.days}
                  subtitle={w.track}
                  title={w.title}
                  description={w.body}
                  actionText="Request Syllabus & Pricing →"
                  onActionClick={() => navigate(`/contact?track=${encodeURIComponent(w.title)}`)}
                  className="w-full"
                >
                  <div className="bg-zinc-100/80 p-3 rounded-xl border border-black/[0.04]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a] block mb-1">Tech Stack</span>
                    <span className="font-mono text-xs text-zinc-700">{w.stack}</span>
                  </div>
                </SupabaseImageCard>
              </motion.div>
            ))}
            </motion.div>
          </section>

          {/* Bottom Conversion Capsule */}
          <section className="bg-[#1a1a1a] text-white p-8 sm:p-14 md:p-16 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-sans text-[#9fff00] font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#9fff00]"></span>
                For Colleges & Institutions
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Want to bring a workshop to your campus?
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-400 mt-4 leading-relaxed">
                We come to your college, set up inside your computer lab, and run the entire workshop for your students. You just tell us the date and batch size — we handle everything else.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="relative z-10 bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-white transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white hover:-translate-y-1"
            >
              Request Campus Workshop →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
