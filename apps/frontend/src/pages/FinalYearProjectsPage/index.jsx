import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";

const pillars = [
  {
    imageKey: "capstone-git",
    num: "01",
    title: "Learn to Use Git Like a Real Developer",
    desc: "Stop submitting ZIP files. We teach students to use Git — the tool every software company uses to manage and share code. You'll learn how to save your work, review changes, and collaborate with a team."
  },
  {
    imageKey: "workshop-devops",
    num: "02",
    title: "Test Your Code Before It Breaks",
    desc: "Real companies don't just build software — they test it automatically before releasing it. We teach students how to write tests so their project doesn't crash when someone uses it."
  },
  {
    imageKey: "crt-tier-a",
    num: "03",
    title: "Present & Defend Your Project",
    desc: "Every student must explain their design choices to a panel of senior developers — just like in a real company review. This builds confidence and teaches you to think about your code like a professional."
  }
];

export default function FinalYearProjectsPage() {
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
        <title>Enterprise Capstone Projects | THAKSAAI</title>
        <meta
          name="description"
          content="Stop buying fake academic projects. Build and deploy real production microservices to secure top engineering jobs."
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
                Final Year Projects
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                Stop buying fake projects. <br className="hidden md:block" />
                Build something real.
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                We help final-year engineering students build actual, working software applications — not copied scripts. Your project will be live on the internet and something you can confidently show in any job interview.
              </p>
              
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                Talk to Our Team →
              </button>
            </motion.div>
          </header>

          {/* Pillars of Verified Production */}
          <section aria-label="The 3 Pillars of Production Standards" className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                  What We Check
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight max-w-3xl leading-tight">
                  Three things every good final-year project must have.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 bg-white/70 px-4 py-2.5 rounded-xl border border-black/10 shrink-0 shadow-sm neo-glass">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                Strict Evaluation
              </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {pillars.map((p, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex h-full"
                >
                  <SupabaseImageCard
                    imageKey={p.imageKey}
                    badgeText={`Pillar ${p.num}`}
                    title={p.title}
                    description={p.desc}
                    actionText="Ask Us About This →"
                    onActionClick={() => navigate("/contact")}
                    className="w-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Conversion Footer */}
          <section className="bg-[#1a1a1a] text-white p-8 sm:p-14 md:p-16 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Get your career started before you graduate.
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-400 mt-4 leading-relaxed">
                A strong final-year project is one of the most powerful things you can show a company. Our team works with you directly to build and launch a project you are genuinely proud of.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="relative z-10 bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-white transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white hover:-translate-y-1"
            >
              Start Your Project →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
