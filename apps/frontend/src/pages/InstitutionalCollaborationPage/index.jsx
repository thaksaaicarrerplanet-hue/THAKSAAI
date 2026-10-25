import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

export default function InstitutionalCollaborationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isTPO = location.pathname.includes("tpo-advisory") || location.pathname.includes("tpo");
  
  const pageTitle = isTPO 
    ? "TPO Executive Advisory Line & Placement Strategy" 
    : "Faculty Collaboration & Research Co-Dev Suite";

  const subDescription = isTPO
    ? "Strategic engineering bootcamp integration, capstone evaluation verification, and enterprise placement milestones for Training & Placement Officers."
    : "Collaborate directly with THAKSAAI systems architects to modernize departmental lab syllabus, initiate real corporate R&D capstones, and access Gachibowli studio instrumentation.";

  return (
    <>
      <Helmet>
        <title>{pageTitle} | THAKSAAI</title>
        <meta name="description" content={subDescription} />
      </Helmet>

      <main className="w-full min-h-screen bg-[#F7F8F4] pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-10 text-[#1a1a1a] selection:bg-[#C7F36B] selection:text-black thaksa-interior-page">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Banner */}
          <header className="mb-14 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2.5 bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-4 shadow-2xs border border-black/5">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] block animate-pulse"></span>
              <span>Institutional Academic Partnerships â€¢ {SITE_BRANDING.buildingName}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-4">
              {pageTitle}
            </h1>
            <p className="text-base sm:text-xl font-sans text-zinc-600 font-medium max-w-4xl leading-relaxed">
              {subDescription}
            </p>
          </header>

          {/* Content Architecture Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            
            {/* Main Principles Pillar */}
            <div className="lg:col-span-8 flex flex-col gap-8 font-sans">
              <section className="bg-white/95 p-8 sm:p-10 rounded-2xl border border-black/[0.07] shadow-xs">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight mb-4">
                  {isTPO ? "The Placement Readiness Engine" : "Bridging Academic Theory with Corporate Execution"}
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal mb-6">
                  {isTPO
                    ? "Traditional recruitment training often fails because students memorize textbook algorithmic answers rather than building actual working systems. THAKSAAI deploys practicing software engineering architects directly to university campus labs to plan practical, scoped execution sprints across full-stack development, cloud, AI, and data systems."
                    : "University engineering professors represent the intellectual foundation of technology education. THAKSAAI invites engineering faculty to bridge the gap between academic curricula and live industry standards by co-supervising production capstones at our Gachibowli AI engineering center."
                  }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-black/[0.06]">
                  {[
                    {
                      title: isTPO ? "Structured Capstone Defenses" : "Faculty Collaboration",
                      desc: isTPO ? "Capstone expectations and technical review criteria are agreed with the institution before the engagement begins." : "Faculty can collaborate with the team on curriculum alignment, practical labs, and project review planning."
                    },
                    {
                      title: isTPO ? "Institution-Aligned Progress Reporting" : "Co-Supervised Capstone Projects",
                      desc: isTPO ? "Agree on useful progress snapshots from attendance, assessments, and project deliverables; the exact reporting scope is documented with the institution." : "Work with the team to scope final-year projects, review milestones, and prepare students to demonstrate their own implementation."
                    }
                  ].map((block, idx) => (
                    <div key={idx} className="p-6 bg-[#F7F8F4]/50 rounded-xl border border-black/[0.05]">
                      <h3 className="text-lg font-bold text-[#1a1a1a] font-display mb-2">{block.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{block.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Engagement Timeline */}
              <section className="bg-white/95 p-8 sm:p-10 rounded-2xl border border-black/[0.07] shadow-xs">
                <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-6">Operational Execution Framework</h3>
                <div className="flex flex-col gap-6">
                  {[
                    { step: "01", name: "Institutional Scoping Consultation", detail: "Meet with THAKSAAI directors at Jyothi Imperial HQ or coordinate virtually to audit current student placement competencies." },
                    { step: "02", name: "Curriculum Customization & Scheduling", detail: "Select specialized bootcamps (AI & GenAI, Cloud DevOps, Full-Stack Enterprise) tailored to your upcoming placement recruitment cycles." },
                    { step: "03", name: "In-Person Lab Deployment", detail: "Our engineering leads conduct intensive, face-to-face coding sprints directly inside your university laboratory workstations." },
                    { step: "04", name: "LMS Telemetry & Placement Certification", detail: "Generate verifiable competency transcripts and connect high-performing candidates directly with hiring technology recruiters." }
                  ].map((st, idx) => (
                    <div key={idx} className="flex items-start gap-4 sm:gap-6">
                      <span className="w-10 h-10 rounded-full bg-[#1a1a1a] text-[#C7F36B] font-bold font-display text-base flex items-center justify-center shrink-0">
                        {st.step}
                      </span>
                      <div>
                        <strong className="text-base sm:text-lg font-bold text-[#1a1a1a] font-display block">{st.name}</strong>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-1">{st.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Direct Advisory Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <aside className="bg-[#1a1a1a] text-white p-8 rounded-2xl shadow-xl border border-white/10 sticky top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C7F36B] block mb-2 font-sans">
                  Direct Executive Communication
                </span>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Initialize Academic Partnership
                </h3>
                <p className="text-sm font-sans text-zinc-300 leading-relaxed mb-6">
                  Our directorate works directly with college leadership, department deans, and placement officers to establish long-term engineering excellence.
                </p>

                <div className="flex flex-col gap-4 pt-4 border-t border-white/10 text-sm font-sans mb-8">
                  <div>
                    <span className="text-xs text-zinc-400 block uppercase font-bold">Primary Telephone Advisory</span>
                    <a href={`tel:${SITE_BRANDING.supportPhone.replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-white hover:text-[#C7F36B] transition-colors mt-0.5 block">
                      {SITE_BRANDING.supportPhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block uppercase font-bold">Directorate Email</span>
                    <a href={`mailto:${SITE_BRANDING.contactEmail}`} className="text-sm font-bold text-white hover:text-[#C7F36B] transition-colors mt-0.5 block">
                      {SITE_BRANDING.contactEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block uppercase font-bold">Headquarters Conference Room</span>
                    <p className="text-xs text-zinc-300 mt-0.5">
                      {SITE_BRANDING.buildingName}, Diamond Hills, Gachibowli, Hyderabad
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/contact?college=${encodeURIComponent(isTPO ? "TPO Advisory Inquiry" : "Faculty Collaboration Inquiry")}`)}
                  className="w-full py-4 bg-[#C7F36B] text-[#1a1a1a] rounded-full font-bold text-sm tracking-wide hover:bg-white transition-all shadow-md block text-center"
                >
                  Schedule Advisory Conference â†’
                </button>
              </aside>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
