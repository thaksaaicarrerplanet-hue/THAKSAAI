import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

const internshipOfferings = [
  {
    imageKey: "internship-ai",
    badge: "AI & GenAI Intern",
    title: "Artificial Intelligence & Generative AI",
    desc: "Build modern LLM applications, retrieval-augmented generation (RAG) architectural tools, and autonomous AI agents using OpenAI and Anthropic SDKs. Transform AI concepts into production software."
  },
  {
    imageKey: "internship-fullstack",
    badge: "Full-Stack Web Intern",
    title: "Full-Stack Web & Enterprise Systems",
    desc: "Develop scalable cloud applications utilizing React, Next.js, Node.js, TypeScript, and Supabase. Implement real production systems design and robust distributed API architecture."
  },
  {
    imageKey: "internship-devops",
    badge: "DevOps Engineer Intern",
    title: "DevOps & Cloud Infrastructure",
    desc: "Master automated cloud infrastructure, Docker containerization, AWS/Azure deployment pipelines, Linux server governance, and enterprise CI/CD workflows."
  },
  {
    imageKey: "internship-marketing",
    badge: "Digital Marketing Intern",
    title: "Digital Marketing & Growth Systems",
    desc: "Drive brand visibility and institutional student acquisition through technical SEO, performance marketing analytics, conversion rate optimization, and systematic content engineering."
  },
  {
    imageKey: "internship-bda",
    badge: "BDA & Sales Intern",
    title: "Business Development Associate (BDA)",
    desc: "Spearhead corporate and academic collaborations. Gain direct execution experience in B2B technology sales, college TPO partnership negotiations, and technical account management."
  },
  {
    imageKey: "internship-data",
    badge: "Data & BI Intern",
    title: "Data Engineering & BI Systems",
    desc: "Engineer end-to-end data analytics pipelines, perform predictive telemetry modeling with Python and SQL, and deploy automated Business Intelligence dashboards (PowerBI/Tableau)."
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
      
      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-34 pb-24 px-4 sm:px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2.5 bg-white/95 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-4 shadow-2xs border border-black/5">
              <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse border border-black/20"></span>
              <span>In-Person Office Internships • {SITE_BRANDING.shortAddress}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.15] mb-5">
              Work at HQ. Build production skills face-to-face.
            </h1>
            <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
              We reject passive online video classes and synthetic theory. Our internships are executed strictly in-person directly inside our engineering studios at <strong className="text-[#1a1a1a] font-semibold">{SITE_BRANDING.buildingName}, Gachibowli</strong>. Collaborate alongside experienced software architects to master technology execution and real client delivery.
            </p>
          </header>

          {/* Official 6 Domain Showcase Grid */}
          <section aria-label="Official Internship Domain Offerings" className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans block mb-1.5">
                  Active Hiring Domains (2026 Cohorts)
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
                  Select Your Specialized Track
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 bg-white/90 px-3.5 py-2 rounded-lg border border-black/5 shrink-0 shadow-2xs">
                <span>Direct Mentorship at HQ</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {internshipOfferings.map((item, idx) => (
                <SupabaseImageCard
                  key={idx}
                  imageKey={item.imageKey}
                  badgeText={item.badge}
                  title={item.title}
                  description={item.desc}
                  actionText="Apply for Track"
                  onActionClick={() => navigate(`/contact?internship=${encodeURIComponent(item.badge)}`)}
                  aspectRatio="aspect-[16/10]"
                />
              ))}
            </div>
          </section>

          {/* Value Adds Section */}
          <section aria-label="What Interns Gain" className="mb-20 bg-white/90 p-8 sm:p-12 md:p-14 rounded-3xl border border-black/[0.06] shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight mb-8">
              What THAKSAAI Interns Gain
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              {[
                { title: "Real Client Interaction", desc: "Interact directly with actual enterprise clients to understand professional software & business scoping." },
                { title: "Gachibowli Studio Access", desc: `Collaborate directly at our ${SITE_BRANDING.buildingName} office alongside practicing senior engineers.` },
                { title: "Commercial Execution", desc: "Understand how technology startups, B2B sales operations, and marketing systems acquire and retain real revenue." },
                { title: "Verified Credentials", desc: "Earn an authentic, provable Professional Industry Experience Certificate upon program milestone achievement." },
              ].map((m, i) => (
                <div key={i} className="p-6 bg-[#EDEEF5]/50 rounded-2xl border border-black/[0.06] flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
                  <div>
                    <h4 className="text-base font-bold font-display text-[#1a1a1a] mb-2">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>
                  <div className="w-8 h-1 bg-black/[0.08] rounded-full mt-6"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Capsule */}
          <section aria-label="Student Enrollment Banner" className="bg-[#1a1a1a] text-white p-8 sm:p-12 md:p-14 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xl border border-white/10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-sans text-[#9fff00] font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#9fff00]"></span>
                For Passionate Engineering Candidates
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Ready to transition from online tutorials to executing in an enterprise tech office?
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-300 mt-3 leading-relaxed">
                We evaluate enthusiasm, technical curiosity, and willingness to execute over simple academic grades. Submit your details to meet our directors at <strong className="text-white font-semibold">{SITE_BRANDING.buildingName}</strong>.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact?internship=General Application")}
              className="bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-white transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white flex items-center gap-2"
            >
              <span>Apply for Internship</span>
              <span>→</span>
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
