import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

const internshipOfferings = [
  {
    badge: "AI & GenAI Intern",
    title: "Artificial Intelligence & Smart Tools",
    desc: "You'll learn how to build real AI-powered apps — chatbots, smart search tools, and automated assistants. We use the same tools that companies like Google and OpenAI use, and you'll build working products from day one."
  },
  {
    badge: "Full-Stack Web Intern",
    title: "Web Development & Full-Stack Apps",
    desc: "Learn how to build complete websites and web apps from scratch — the front-end that users see, and the back-end that makes it all work. You'll work on real client projects alongside our senior developers."
  },
  {
    badge: "DevOps Engineer Intern",
    title: "Cloud Hosting & App Deployment",
    desc: "Learn how to take a finished app and put it live on the internet, keep it running 24/7, and automatically update it when changes are made. These are skills every tech company needs and very few freshers have."
  },
  {
    badge: "Digital Marketing Intern",
    title: "Digital Marketing & Online Growth",
    desc: "Learn how businesses actually get customers online — through Google, Instagram, and content. You'll run real campaigns, track results, and understand what actually drives growth for a business."
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
                Learn by working on real projects, in person.
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                Forget online courses and YouTube tutorials. Our internships happen face-to-face inside our office at <strong className="text-[#1a1a1a]">{SITE_BRANDING.buildingName}, Gachibowli</strong>. You sit next to experienced developers and work on real projects together, every single day.
              </p>
            </motion.div>
          </header>

          {/* Official 6 Domain Showcase Grid */}
          <section aria-label="Official Internship Domain Offerings" className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                  Open Internships (2026)
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
                  Which area do you want to work in?
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
                    Apply for This →
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
                  { title: "Work with Real Clients", desc: "You'll sit in on actual client meetings and see how software is scoped, discussed, and delivered in a professional setting." },
                  { title: "Work at Our Office", desc: `You'll come to our ${SITE_BRANDING.buildingName} office every day and work directly alongside our senior developers.` },
                  { title: "Understand How Businesses Work", desc: "You'll see how a real tech company finds clients, closes deals, and builds products that people actually pay for." },
                  { title: "Get a Real Certificate", desc: "Once you complete the program, you get a certificate of professional experience that you can show employers and add to your resume." },
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
                Ready to stop watching tutorials and start working on real things?
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-600 mt-4 leading-relaxed">
                We care more about your attitude and curiosity than your grades. Share your details and come meet our team at <strong className="text-[#1a1a1a]">{SITE_BRANDING.buildingName}</strong>.
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
