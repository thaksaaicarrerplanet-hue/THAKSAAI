import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Directorate | THAKSAAI</title>
        <meta
          name="description"
          content="Bring a measurable placement programme to your campus. Contact our directorate for institutional consultation."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Institutional Advisory Copy */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-4">
                  Executive Advisory Briefing
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                  Bring a measurable placement programme to your campus.
                </h1>
                <p className="text-lg font-sans text-zinc-600 leading-relaxed mb-10">
                  Tell us your engineering cohort size and academic timeline. Our directorate will analyze your requirement and furnish a comprehensive baseline diagnostic plan within one working day.
                </p>

                <div className="p-8 bg-[#1a1a1a] rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9fff00]/10 rounded-full blur-2xl pointer-events-none"></div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#9fff00] mb-6 font-sans">
                    Direct Directorate Liaison
                  </h3>
                  
                  <div className="space-y-4 font-sans text-sm sm:text-base text-zinc-300">
                    <p className="flex flex-col">
                      <span className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-1">Telephone</span>
                      <strong className="text-white">{SITE_BRANDING.supportPhone}</strong>
                    </p>
                    <p className="flex flex-col">
                      <span className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-1">Electronic Mail</span>
                      <strong className="text-white">{SITE_BRANDING.contactEmail}</strong>
                    </p>
                    <p className="flex flex-col pt-2">
                      <span className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-1">Regional Office</span>
                      <span className="text-white leading-relaxed">{SITE_BRANDING.officeAddress}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: TPO Intake Form */}
            <div className="w-full lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="neo-glass bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.08] shadow-lg"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 bg-[#9fff00]/20 text-[#9fff00] rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-[#1a1a1a] mb-4">
                      Briefing Registered
                    </h2>
                    <p className="text-zinc-600 font-sans leading-relaxed max-w-md">
                      Your institutional consultation details have been transmitted. Expect a customized baseline structure from our senior deployment directorate within 24 working hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                    <div className="pb-6 border-b border-black/[0.06] mb-2">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight">
                        Institutional Consultation Docket
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Institution / College Name *</label>
                        <input required type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="Enter institution name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Dean or TPO Name & Title *</label>
                        <input required type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="e.g. Dr. Smith, Head TPO" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Institutional Email *</label>
                        <input required type="email" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="dean@college.edu" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Direct Phone / WhatsApp *</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Programme Focus Track *</label>
                      <select required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm appearance-none cursor-pointer">
                        <option value="crt">Semester-Length Campus Recruitment Training (CRT)</option>
                        <option value="workshop">3 to 5 Day Practitioner Technical Workshops</option>
                        <option value="capstone">Production Enterprise Capstone Project Integration</option>
                        <option value="audit">Comprehensive TPO Placement Readiness Audit</option>
                        <option value="internship">In-Person Internship Placements</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Cohort Size & Timeline *</label>
                      <textarea required rows="4" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm resize-none" placeholder="Provide estimated student counts and desired start dates..."></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:-translate-y-1 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
                    >
                      Transmit Briefing to Directorate →
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
