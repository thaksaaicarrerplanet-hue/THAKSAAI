import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_BRANDING, WHATSAPP_NUMBER } from '../../theme/masterThemeConfig';
import { SpotlightCard } from '../../components/ui/SpotlightCard';
import { DepthButton } from '../../components/ui/DepthButton';
import { STUDIO_PILLARS } from '../../data/programs';
import { useTextScramble } from '../../hooks/useTextScramble';

const CONFIGURATOR_MODULES = [
  'Custom Web & SaaS Platform',
  'Applied AI & RAG Assistant',
  'Workflow & CRM Automation',
  'Cloud API & Database Architecture',
  'Rapid Founder MVP',
];

export default function StudioPage() {
  const [submitted, setSubmitted] = useState(false);
  const [draftUrl, setDraftUrl] = useState('');
  const [selectedModules, setSelectedModules] = useState(['Custom Web & SaaS Platform']);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    timeline: '1–3 Months',
    scope: '',
  });

  const eyebrow = useTextScramble('THAKSA SOFTWARE STUDIO // B2B ENGINEERING & AI DELIVERY', {
    duration: 600,
    trigger: true,
  });

  const toggleModule = (mod) => {
    setSelectedModules((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Studio Engineering Inquiry — THAKSA.AI*

*Company:* ${formData.company}
*Contact:* ${formData.name}
*Email:* ${formData.email}
*Selected Modules:* ${selectedModules.join(', ')}
*Timeline:* ${formData.timeline}
*Project Scope:* ${formData.scope}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    setDraftUrl(url);
    // Opening WhatsApp prepares a draft; the visitor still needs to send it.
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>THAKSA Software Studio · Web, AI &amp; Cloud Engineering | THAKSA.AI</title>
        <meta
          name="description"
          content="Partner with THAKSA Software Studio in Gachibowli, Hyderabad for custom web platforms, AI workflow automation, and rapid product MVPs with 100% source code handover."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#070B14] text-white thaksa-studio-page py-16 sm:py-24 px-4 sm:px-6 md:px-10 relative overflow-hidden thaksa-interior-page">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 right-0 w-[640px] h-[640px] bg-[#3659D9]/15 rounded-full blur-[150px] z-0"
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          {/* Studio Hero */}
          <header className="max-w-4xl mb-20 pb-14 border-b border-white/10">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C7F36B]">
                {eyebrow}
              </span>
            </div>

            <h1
              className="font-display font-bold text-white tracking-[-0.03em] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)' }}
            >
              Production software engineered for your business.{' '}
              <span className="text-[#C7F36B]">Zero agency bloat.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Led by our senior architects in Gachibowli, Hyderabad, THAKSA Software Studio builds
              custom web platforms, AI automation pipelines, and cloud architectures—delivering
              100% version-controlled source code on schedule.
            </p>

            <DepthButton
              onClick={() =>
                document.getElementById('studio-intake-docket')?.scrollIntoView({ behavior: 'smooth' })
              }
              variant="electric"
              size="lg"
            >
              <span>Configure Your Project Scope</span>
              <span aria-hidden="true">↓</span>
            </DepthButton>
          </header>

          {/* 3 Studio Pillars */}
          <section aria-label="Core Studio Capabilities" className="mb-24">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B] block mb-2">
                ENGINEERING CAPABILITIES // 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                What Our Studio Ships
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {STUDIO_PILLARS.map((p) => (
                <SpotlightCard
                  key={p.id}
                  tone="dark"
                  tilt
                  maxTilt={3.5}
                  className="p-7 sm:p-8 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#C7F36B]">{p.code}</span>
                      <span className="font-mono text-xs text-slate-400">//{p.num}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">{p.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {p.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 font-mono text-xs text-slate-200">
                        <span className="text-[#C7F36B]">✓</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* Interactive Project Scope Configurator + Intake Form */}
          <section id="studio-intake-docket" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B]">
                DIRECT ARCHITECT INTAKE // 02
              </span>
              <h2 className="text-3xl font-display font-bold text-white">
                Scope your build with our Gachibowli team.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Select the capability modules you need and share your target timeline. You will
                speak directly with an engineering lead—never a commission salesperson.
              </p>

              <SpotlightCard tone="dark" className="p-6 flex flex-col gap-3">
                <div className="font-mono text-xs text-[#C7F36B] uppercase tracking-wider">
                  STUDIO HEADQUARTERS
                </div>
                <div className="text-sm font-semibold text-white">{SITE_BRANDING.buildingName}</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {SITE_BRANDING.officeAddress}
                </p>
                <div className="pt-3 border-t border-white/10 font-mono text-xs text-slate-300">
                  Direct Line: {SITE_BRANDING.supportPhone}
                </div>
              </SpotlightCard>
            </div>

            <div className="lg:col-span-7">
              <SpotlightCard tone="dark" className="p-7 sm:p-10">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#C7F36B] text-[#101828] font-mono text-2xl font-bold flex items-center justify-center">
                      ✓
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Studio WhatsApp Draft Prepared
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md">
                      Your project details are ready in a WhatsApp draft. Review the message in WhatsApp and tap Send to submit it to our team.
                    </p>
                    <a
                      href={draftUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#C7F36B]"
                    >
                      Reopen WhatsApp draft ↗
                    </a>
                    <DepthButton onClick={() => setSubmitted(false)} variant="ghostDark" size="md">
                      <span>Configure Another Scope</span>
                    </DepthButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#C7F36B] block mb-2.5">
                        1. Select Required Capability Modules
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {CONFIGURATOR_MODULES.map((mod) => {
                          const active = selectedModules.includes(mod);
                          return (
                            <button
                              key={mod}
                              type="button"
                              onClick={() => toggleModule(mod)}
                              className={`px-3.5 py-2 rounded-xl font-mono text-xs border transition-all cursor-pointer ${
                                active
                                  ? 'bg-[#C7F36B] text-[#101828] border-[#C7F36B] font-bold'
                                  : 'bg-white/[0.04] text-slate-300 border-white/15 hover:text-white'
                              }`}
                            >
                              {active ? `✓ ${mod}` : `+ ${mod}`}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="studio-company" className="font-mono text-xs uppercase text-slate-300">
                          Company / Startup Name *
                        </label>
                        <input
                          id="studio-company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Technologies"
                          className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-[16px] text-white focus:outline-2 focus:outline-[#C7F36B]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="studio-name" className="font-mono text-xs uppercase text-slate-300">
                          Your Name &amp; Role *
                        </label>
                        <input
                          id="studio-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Founder / CTO / Product Lead"
                          className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-[16px] text-white focus:outline-2 focus:outline-[#C7F36B]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="studio-email" className="font-mono text-xs uppercase text-slate-300">
                          Work Email *
                        </label>
                        <input
                          id="studio-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-[16px] text-white focus:outline-2 focus:outline-[#C7F36B]"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="studio-timeline" className="font-mono text-xs uppercase text-slate-300">
                          Target Delivery Window
                        </label>
                        <select
                          id="studio-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#070B14] border border-white/15 text-[16px] text-white focus:outline-2 focus:outline-[#C7F36B]"
                        >
                          <option value="Immediate (Under 4 Weeks)">Immediate (Under 4 Weeks)</option>
                          <option value="1–3 Months">1–3 Months</option>
                          <option value="3–6 Months">3–6 Months</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="studio-scope" className="font-mono text-xs uppercase text-slate-300">
                        Project Summary &amp; Core Goals *
                      </label>
                      <textarea
                        id="studio-scope"
                        name="scope"
                        rows={4}
                        required
                        value={formData.scope}
                        onChange={handleChange}
                        placeholder="Describe what you want to build, key integrations, or target users..."
                        className="p-4 rounded-xl bg-[#070B14] border border-white/15 text-[16px] text-white focus:outline-2 focus:outline-[#C7F36B]"
                      />
                    </div>

                    <DepthButton type="submit" variant="electric" size="lg" className="w-full sm:w-auto">
                      <span>Transmit Scope to Studio Lead</span>
                      <span aria-hidden="true">→</span>
                    </DepthButton>
                  </form>
                )}
              </SpotlightCard>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
