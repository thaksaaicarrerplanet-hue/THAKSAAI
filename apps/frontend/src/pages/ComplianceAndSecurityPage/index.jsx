import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

export default function ComplianceAndSecurityPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const initialTab = path.includes("privacy") 
    ? "privacy" 
    : path.includes("security") 
      ? "security" 
      : "terms";

  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: "terms", label: "Terms of Service", route: "/terms-of-service" },
    { id: "privacy", label: "Privacy Policy", route: "/privacy-policy" },
    { id: "security", label: "Campus Security Guidelines", route: "/campus-security-guidelines" }
  ];

  const handleTabChange = (t) => {
    setActiveTab(t.id);
    navigate(t.route, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Legal Compliance, Privacy & Security Guidelines | THAKSAAI</title>
        <meta 
          name="description" 
          content="Review THAKSAAI Terms of Service, academic Privacy Policy, and physical/network Campus Security Guidelines for our Gachibowli engineering HQ." 
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#F7F8F4] pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-10 text-[#1a1a1a] selection:bg-[#C7F36B] selection:text-black">
        <div className="max-w-5xl mx-auto">
          
          {/* Header & Tab Bar */}
          <header className="mb-12 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2.5 bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-4 shadow-2xs border border-black/5">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] block"></span>
              <span>Corporate Governance & Institutional Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight mb-6">
              Institutional Governance Framework
            </h1>

            {/* Interactive Tab Switcher */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 bg-white/60 p-1.5 rounded-xl border border-black/[0.07] w-full lg:w-max">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={`px-5 py-3 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all focus:outline-none text-center w-full sm:w-auto ${
                      isActive 
                        ? "bg-[#1a1a1a] text-white shadow-xs" 
                        : "text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:bg-white/80"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </header>

          {/* Document Content Box */}
          <article className="bg-white/95 p-8 sm:p-12 md:p-14 rounded-2xl border border-black/[0.07] shadow-sm font-sans text-zinc-700 leading-relaxed">
            
            {/* TERMS OF SERVICE SECTION */}
            {activeTab === "terms" && (
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a]">
                  THAKSAAI Terms of Service (Academic & Enterprise Sprints)
                </h2>
                <p className="text-sm text-zinc-500 font-mono">Effective Date: August 2026 â€¢ Governing Office: {SITE_BRANDING.buildingName}, Hyderabad</p>
                
                <section className="flex flex-col gap-3 mt-2">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">1. Institutional Mandate & Agreement Scoping</h3>
                  <p>
                    By enrolling in any THAKSAAI operational track (including Campus Recruitment Training, on-campus technical workshops, professional domain office internships, or final-year engineering capstones), student candidates and university partners enter into a binding agreement with THAKSAAI Directorate. Our programs are engineered specifically for verifiable capability development and software deployment.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">2. Code of Conduct & Academic Honesty</h3>
                  <p>
                    THAKSAAI maintains a strict zero-tolerance policy for fraudulent academic submissions or artificial code plagiarism during final capstone evaluations. All code committed to repositories during internships must represent authentic student authorship supervised by our engineering instructors.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">3. Intellectual Property (IP) Allocation</h3>
                  <p>
                    Open-source capstone projects developed during basic academic training remain the collaborative intellectual property of the candidate and university partner. For commercial enterprise client sprints conducted at our **{SITE_BRANDING.buildingName}, Gachibowli** studio, non-disclosure agreement (NDA) terms apply, and proprietary software architecture remains entirely vested in THAKSAAI and its corporate clients.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">4. Certification Policy</h3>
                  <p>
                    Industry Experience & Capstone Completion Certificates are issued solely upon achieving verified milestone criteria within the Learning Management System (LMS) Portal and passing an in-person or live defense before senior architects. Attendance milestones under 85% without documented exception void certificate authorization.
                  </p>
                </section>
              </div>
            )}

            {/* PRIVACY POLICY SECTION */}
            {activeTab === "privacy" && (
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a]">
                  Candidate & University Partner Privacy Policy
                </h2>
                <p className="text-sm text-zinc-500 font-mono">Compliance Audit: Standard ISO/IEC Data Security Architecture</p>
                
                <section className="flex flex-col gap-3 mt-2">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">1. Information Collection & Telemetry</h3>
                  <p>
                    When accessing the THAKSAAI LMS Portal or submitting applications for in-person office internships, we securely collect academic profiles, university enrollment records, GitHub user accounts, technical competency assessment scores, and attendance telemetry.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">2. Enterprise Data Utilization</h3>
                  <p>
                    Your data is utilized exclusively for curriculum tailoring, lab grading verification, and generating Placement Competency Transcripts requested by authorized university Training & Placement Officers (TPOs) and vetted technology recruiting partners.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">3. Data Protection Standards</h3>
                  <p>
                    All database records are encrypted at rest via high-security Supabase cloud infrastructures and transmitted over mandatory HTTPS/TLS protocols. We never monetize, sell, or disclose candidate telephone numbers or personal contact details to external data aggregators or unauthorized third parties.
                  </p>
                </section>
              </div>
            )}

            {/* CAMPUS SECURITY GUIDELINES SECTION */}
            {activeTab === "security" && (
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a]">
                  Gachibowli HQ & University Campus Security Guidelines
                </h2>
                <p className="text-sm text-zinc-500 font-mono">Applicable Facility: {SITE_BRANDING.officeAddress}</p>
                
                <section className="flex flex-col gap-3 mt-2">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">1. Office Access & Biometric Verification</h3>
                  <p>
                    All internship candidates and visiting academic personnel must present verified institutional identification upon entering the **{SITE_BRANDING.buildingName}** technology campus. Unauthorized visitors or unassigned individuals are strictly prohibited from entering internal development laboratories and server bays.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">2. Network Cybersecurity & Workstation Integrity</h3>
                  <p>
                    While executing code inside THAKSAAI testing clusters or university campus laboratories, candidates must adhere to enterprise cybersecurity standards:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                    <li>Do not execute unverified binary executables or peer-to-peer torrent daemons on facility network nodes.</li>
                    <li>Secure all API keys, database credentials, and GitHub personal access tokens; never hardcode secrets in public repositories.</li>
                    <li>Report any workstation anomaly or suspected security compromise immediately to the supervising lab instructor.</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold font-display text-[#1a1a1a]">3. Professional Workplace Conduct</h3>
                  <p>
                    THAKSAAI fosters a strictly professional, inclusive, and psychologically safe engineering culture. Harassment, disruption of ongoing engineering sprints, or willful abuse of facility hardware will result in immediate termination of internship credentials and formal notification to the individual's university TPO and legal representatives.
                  </p>
                </section>
              </div>
            )}

            {/* Bottom Contact Box */}
            <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F7F8F4]/60 p-6 rounded-xl">
              <div>
                <strong className="text-base font-display font-bold text-[#1a1a1a] block">Have Legal or Compliance Queries?</strong>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">Directly contact our General Counsel & Admin Directorate at HQ.</p>
              </div>
              <button
                type="button"
                onClick={() => navigate("/contact?college=Legal Compliance Inquiry")}
                className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide hover:bg-black transition-all shrink-0 shadow-sm"
              >
                Contact Directorate â†’
              </button>
            </div>

          </article>

        </div>
      </main>
    </>
  );
}
