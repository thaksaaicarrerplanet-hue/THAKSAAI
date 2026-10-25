import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { SITE_BRANDING, WHATSAPP_NUMBER } from "../../theme/masterThemeConfig";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    track: "crt",
    scope: ""
  });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
`*New Institutional Inquiry — THAKSAAI*

*Institution:* ${formData.company}
*Contact:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Programme:* ${formData.track}
*Cohort & Timeline:* ${formData.scope}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
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

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black thaksa-interior-page">
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
                  Institutional Partnerships
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                  Bring our placement programs to your campus.
                </h1>
                <p className="text-lg font-sans text-zinc-600 leading-relaxed mb-10">
                  Tell us about your college and student cohort. Our team will review your requirements and get back to you with a customized training structure within 24 hours.
                </p>

                <div className="p-8 bg-[#1a1a1a] rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#9fff00]/10 rounded-full blur-2xl pointer-events-none"></div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#9fff00] mb-6 font-sans">
                    Direct Contact Details
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
                <div className="mt-8 p-8 bg-white neo-glass rounded-3xl border border-black/[0.08] shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a] mb-2 font-sans">
                    Are you a student?
                  </h3>
                  <p className="text-sm font-sans text-zinc-600 mb-5 leading-relaxed">
                    Want to join a bootcamp, internship, or get placement help? Don't fill out the institutional form—just message our student success team directly!
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi THAKSAAI! I'm a student interested in your programs. Can you help me out?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#9fff00] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-[#b3ff33] hover:-translate-y-0.5 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Message Us Directly
                  </a>
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
                      Inquiry Received
                    </h2>
                    <p className="text-zinc-600 font-sans leading-relaxed max-w-md">
                      Thank you for reaching out. Your institutional details have been successfully submitted. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                    <div className="pb-6 border-b border-black/[0.06] mb-2">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight">
                        Partnership Inquiry Form
                      </h2>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Institution / College Name *</label>
                        <input name="company" value={formData.company} onChange={handleChange} required type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="Enter institution name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Dean or TPO Name & Title *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="e.g. Dr. Smith, Head TPO" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Institutional Email *</label>
                        <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="dean@college.edu" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Direct Phone / WhatsApp *</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Programme Focus Track *</label>
                      <select name="track" value={formData.track} onChange={handleChange} required className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm appearance-none cursor-pointer">
                        <option value="crt">Semester-Length Campus Recruitment Training (CRT)</option>
                        <option value="workshop">3 to 5 Day Practitioner Technical Workshops</option>
                        <option value="capstone">Production Enterprise Capstone Project Integration</option>
                        <option value="audit">Comprehensive TPO Placement Readiness Audit</option>
                        <option value="internship">In-Person Internship Placements</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-sans">Cohort Size & Timeline *</label>
                      <textarea name="scope" value={formData.scope} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] transition-all font-sans text-sm resize-none" placeholder="Provide estimated student counts and desired start dates..."></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:-translate-y-1 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
                    >
                      Send via WhatsApp →
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
