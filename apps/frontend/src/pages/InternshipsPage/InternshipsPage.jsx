import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

const internshipOfferings = [
  {
    badge: "AI & GenAI Intern",
    title: "Artificial Intelligence & Generative AI",
    desc: "Build modern LLM applications, retrieval-augmented generation (RAG) architectural tools, and autonomous AI agents using OpenAI and Anthropic SDKs. Transform AI concepts into production software."
  },
  {
    badge: "Full-Stack Web Intern",
    title: "Full-Stack Web & Enterprise Systems",
    desc: "Develop scalable cloud applications utilizing React, Next.js, Node.js, TypeScript, and Supabase. Implement real production systems design and robust distributed API architecture."
  },
  {
    badge: "DevOps Engineer Intern",
    title: "DevOps & Cloud Infrastructure",
    desc: "Master automated cloud infrastructure, Docker containerization, AWS/Azure deployment pipelines, Linux server governance, and enterprise CI/CD workflows."
  },
  {
    badge: "Digital Marketing Intern",
    title: "Digital Marketing & Growth Systems",
    desc: "Drive brand visibility and institutional student acquisition through technical SEO, performance marketing analytics, conversion rate optimization, and systematic content engineering."
  }
];

export default function InternshipsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Professional Domain Internships | THAKSAAI</title>
        <meta
          name="description"
          content="Apply for in-person THAKSAAI office internships in AI & GenAI, Full-Stack Web, DevOps, Digital Marketing, and Business Development at Jyothi Imperial, Gachibowli."
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
                In-Person Office Internships
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                Build production software face-to-face.
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                We reject passive online video classes and synthetic theory. Our internships are executed strictly in-person directly inside our engineering studios at <strong className="text-[#1a1a1a]">{SITE_BRANDING.buildingName}, Gachibowli</strong>. Collaborate alongside experienced software architects to master technology execution.
              </p>
            </motion.div>
          </header>

          {/* Official 6 Domain Showcase Grid */}
          <section aria-label="Official Internship Domain Offerings" className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                  Active Hiring Domains (2026 Cohorts)
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
                  Select Your Specialized Track
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 bg-white/70 px-4 py-2.5 rounded-xl border border-black/10 shrink-0 shadow-sm neo-glass">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                Direct Mentorship at HQ
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {internshipOfferings.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="neo-glass bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-auto">
                    <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-[#9fff00] text-xs font-bold font-mono uppercase tracking-wider rounded-full mb-6">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-[#1a1a1a] tracking-tight leading-snug mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base font-sans text-zinc-600 leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => navigate(`/contact?internship=${encodeURIComponent(item.badge)}`)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border border-black/15 hover:border-black px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-sm focus:outline-none"
                  >
                    Apply for Track →
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Value Adds Section */}
          <section aria-label="What Interns Gain" className="mb-24 bg-[#1a1a1a] p-8 sm:p-14 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9fff00]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                The Office Environment
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-12">
                What THAKSAAI Interns Gain
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
                {[
                  { title: "Real Client Interaction", desc: "Interact directly with actual enterprise clients to understand professional software & business scoping." },
                  { title: "HQ Studio Access", desc: `Collaborate directly at our ${SITE_BRANDING.buildingName} office alongside practicing senior engineers.` },
                  { title: "Commercial Execution", desc: "Understand how technology startups, B2B sales operations, and marketing systems acquire and retain real revenue." },
                  { title: "Verified Credentials", desc: "Earn an authentic, provable Professional Industry Experience Certificate upon program milestone achievement." },
                ].map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <h4 className="text-lg font-bold font-display text-white mb-3">
                      {m.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                    <div className="w-12 h-1 bg-[#9fff00]/30 mt-6 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Conversion Capsule */}
          <section aria-label="Student Enrollment Banner" className="bg-white p-8 sm:p-12 md:p-14 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl border border-black/[0.08] neo-glass">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-sans text-zinc-500 font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                For Passionate Engineering Candidates
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight">
                Ready to transition from online tutorials to executing in an enterprise tech office?
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-600 mt-4 leading-relaxed">
                We evaluate enthusiasm, technical curiosity, and willingness to execute over simple academic grades. Submit your details to meet our directors at <strong className="text-[#1a1a1a]">{SITE_BRANDING.buildingName}</strong>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact?internship=General Application")}
              className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-black transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-[#9fff00] hover:-translate-y-1"
            >
              Apply for Internship →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
