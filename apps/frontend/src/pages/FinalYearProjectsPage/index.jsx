import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Production Git Workflows",
    desc: "Eliminating static zip folder submissions. Students implement industry branch architecture, semantic commits, code review pull requests, and automated branch protection rules."
  },
  {
    num: "02",
    title: "Automated Test Suites & CI/CD",
    desc: "Every capstone must demonstrate exceeding 80% automated unit and integration test coverage executing inside continuous integration server pipelines prior to production merger."
  },
  {
    num: "03",
    title: "Architectural Peer Defense",
    desc: "Simulating enterprise RFC (Request for Comments) design reviews. Teams defend their database indexing, caching strategies, and security schemas before active tech leads."
  }
];

export default function FinalYearProjectsPage() {
  const navigate = useNavigate();

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
                Enterprise Capstone Architecture
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                Stop buying fake projects. <br className="hidden md:block" />
                Build real products.
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                THAKSAAI converts mandatory final-year engineering requirements from static, copied scripts into live production microservices deployed on AWS and GCP—providing unshakeable evidence during technical interview screening.
              </p>
              
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                Institutional Capstone Consultation →
              </button>
            </motion.div>
          </header>

          {/* Pillars of Verified Production */}
          <section aria-label="The 3 Pillars of Production Standards" className="mb-20">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                The Production Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight max-w-3xl leading-tight">
                Three mandatory pillars separating academic projects from software engineering.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pillars.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="neo-glass p-8 sm:p-10 rounded-3xl border border-black/[0.08] flex flex-col justify-start shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/70"
                >
                  <span className="text-5xl font-display font-bold text-[#1a1a1a] mb-6 opacity-80">
                    {p.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1a1a] tracking-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-zinc-600 leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Conversion Footer */}
          <section className="bg-[#1a1a1a] text-white p-8 sm:p-14 md:p-16 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Secure your career before graduation.
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-400 mt-4 leading-relaxed">
                A strong capstone project is your ultimate technical portfolio. Reach out to coordinate with our master architects and execute a project that guarantees interview selection.
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
