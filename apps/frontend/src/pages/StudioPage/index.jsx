import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SITE_BRANDING, WHATSAPP_NUMBER } from "../../theme/masterThemeConfig";

const studioPillars = [
  {
    num: "01",
    title: "Custom SaaS & Web Platforms",
    desc: "We architect scalable, high-performance web applications and internal operational tools. Built on modern stacks (React, Node.js, Postgres) optimized for speed, security, and zero downtime."
  },
  {
    num: "02",
    title: "AI & Workflow Automation",
    desc: "Cut operational bloat by integrating custom Large Language Models (LLMs), RAG pipelines, and automated CRM workflows directly into your daily business processes."
  },
  {
    num: "03",
    title: "Scalable Digital Presence",
    desc: "High-conversion corporate websites, technical SEO infrastructure, and programmatic social media automation systems designed to autonomously generate B2B leads."
  }
];

export default function StudioPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    timeline: "",
    scope: ""
  });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
`*New Studio Inquiry — THAKSAAI*

*Company:* ${formData.company}
*Contact:* ${formData.name}
*Email:* ${formData.email}
*Timeline:* ${formData.timeline}
*Project Scope:* ${formData.scope}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Enterprise Studio | THAKSAAI</title>
        <meta
          name="description"
          content="Premium Enterprise Engineering at Startup Budgets. Custom software, AI automation, and web platforms built by vetted top-tier engineers."
        />
      </Helmet>

      {/* Extreme Dark Mode Theme for the B2B Studio to separate from the Academy */}
      <main className="w-full min-h-screen bg-[#111111] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-white selection:bg-[#9fff00] selection:text-black font-sans">
        
        {/* Background Ambient Glow */}
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#9fff00]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Executive Hero */}
          <header className="max-w-4xl mb-24 pb-16 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-[#9fff00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg mb-8">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
                THAKSAAI Venture Studio
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-display font-bold text-white tracking-tighter leading-[1.05] mb-8">
                Premium enterprise engineering. <br className="hidden md:block" />
                <span className="text-zinc-500">Startup budgets.</span>
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-400 leading-relaxed mb-10 max-w-2xl">
                We deploy elite, vetted engineering talent directly from our advanced academy to architect scalable web platforms, internal tools, and AI pipelines. No buzzwords. Just rigorous, measurable execution.
              </p>
              
              <button
                type="button"
                onClick={() => document.getElementById('intake-docket').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 bg-[#9fff00] text-[#111111] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
              >
                Scope Your Project 
                <span className="text-lg leading-none">↓</span>
              </button>
            </motion.div>
          </header>

          {/* Core Solutions Grid */}
          <section aria-label="Core Engineering Solutions" className="mb-32">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9fff00] font-sans block mb-3">
                  Technical Architecture
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  Our Execution Pillars
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {studioPillars.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl border border-white/[0.05] flex flex-col justify-start shadow-xl hover:-translate-y-2 transition-transform duration-300 group"
                >
                  <span className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 to-zinc-800 mb-8 group-hover:from-[#9fff00] group-hover:to-emerald-600 transition-colors duration-500">
                    {p.num}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-4 group-hover:text-[#9fff00] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-zinc-400 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                  <div className="mt-8 w-12 h-1 bg-white/10 rounded-full group-hover:bg-[#9fff00]/50 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* The Structural Advantage */}
          <section className="mb-32">
             <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 p-8 sm:p-16 rounded-[2rem] shadow-2xl">
               <div className="max-w-3xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9fff00] font-sans block mb-4">
                    The Business Model Advantage
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-8">
                    Why we can build Silicon Valley architecture at regional prices.
                  </h3>
                  <p className="text-lg font-sans text-zinc-300 leading-relaxed font-normal mb-6">
                    Traditional agencies artificially inflate software costs because they suffer from massive recruitment overhead and idle bench times. 
                  </p>
                  <p className="text-lg font-sans text-zinc-300 leading-relaxed font-normal">
                    Because THAKSAAI operates an elite engineering academy as our core engine, we possess exclusive, first-hand access to the top 1% of technical talent before they ever hit the open market. This allows our senior architects to deploy highly-motivated, hyper-skilled engineering squads to your project instantly, completely eliminating traditional agency markup.
                  </p>
               </div>
             </div>
          </section>

          {/* B2B Intake Docket */}
          <section id="intake-docket" className="max-w-4xl mx-auto">
             <div className="bg-[#1a1a1a] p-8 sm:p-12 lg:p-16 rounded-[2rem] border border-white/[0.08] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9fff00]/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 mb-12">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
                    Initiate Project Scoping
                  </h3>
                  <p className="text-zinc-400 font-sans text-base">
                    Submit your project parameters. One of our lead architects will contact you within 24 hours to schedule a deep-dive technical consultation.
                  </p>
                </div>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 bg-[#111111] p-10 rounded-2xl border border-[#9fff00]/30 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#9fff00]/20 text-[#9fff00] rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-display font-bold text-white mb-3">Scope Submitted Successfully</h4>
                    <p className="text-zinc-400 max-w-sm font-sans">
                      Our architecture team is reviewing your requirements and will reach out to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                    {errorMsg && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm font-sans text-center font-bold">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">Company / Startup Name *</label>
                        <input name="company" value={formData.company} onChange={handleChange} required type="text" className="w-full px-4 py-3.5 bg-[#111111] text-white border border-white/10 rounded-xl focus:outline-none focus:border-[#9fff00] focus:ring-1 focus:ring-[#9fff00] transition-all font-sans" placeholder="e.g. Acme Corp" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">Founder / Contact Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full px-4 py-3.5 bg-[#111111] text-white border border-white/10 rounded-xl focus:outline-none focus:border-[#9fff00] focus:ring-1 focus:ring-[#9fff00] transition-all font-sans" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">Corporate Email *</label>
                        <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full px-4 py-3.5 bg-[#111111] text-white border border-white/10 rounded-xl focus:outline-none focus:border-[#9fff00] focus:ring-1 focus:ring-[#9fff00] transition-all font-sans" placeholder="founder@startup.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">Target Deployment Timeline *</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange} required className="w-full px-4 py-3.5 bg-[#111111] text-white border border-white/10 rounded-xl focus:outline-none focus:border-[#9fff00] focus:ring-1 focus:ring-[#9fff00] transition-all font-sans appearance-none cursor-pointer">
                          <option value="" disabled>Select timeline</option>
                          <option value="urgent">Immediate (1-2 weeks)</option>
                          <option value="1month">Within 1 Month</option>
                          <option value="3months">Within 3 Months</option>
                          <option value="discovery">Just exploring options</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">Project Architecture & Scope *</label>
                      <textarea name="scope" value={formData.scope} onChange={handleChange} required rows="5" className="w-full px-4 py-3.5 bg-[#111111] text-white border border-white/10 rounded-xl focus:outline-none focus:border-[#9fff00] focus:ring-1 focus:ring-[#9fff00] transition-all font-sans resize-none" placeholder="Briefly describe the software, app, or automation system you need built..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-6 w-full sm:w-auto self-end inline-flex items-center justify-center gap-3 bg-[#9fff00] text-[#111111] px-10 py-4 rounded-xl text-sm font-bold tracking-wide hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(159,255,0,0.15)] focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-[#1a1a1a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          Routing to Architecture Team...
                        </>
                      ) : (
                        "Submit Scope for Review →"
                      )}
                    </button>
                  </form>
                )}
             </div>
          </section>

        </div>
      </main>
    </>
  );
}
