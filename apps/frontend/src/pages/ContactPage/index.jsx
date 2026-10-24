import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { SITE_BRANDING, WHATSAPP_NUMBER } from '../../theme/masterThemeConfig';
import { sendContactMessage } from '../../services/contactService';
import { SpatialCard } from '../../components/ui/SpatialCard';
import { DepthButton } from '../../components/ui/DepthButton';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  const initialCompany = searchParams.get('college') || searchParams.get('organization') || '';
  const initialTrack = searchParams.get('track') || searchParams.get('interest') || 'crt';

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    company: initialCompany,
    name: '',
    email: '',
    phone: '',
    track: initialTrack,
    scope: initialQuery,
    botcheck: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      await sendContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.company,
        subject: `THAKSA Inquiry (${formData.track.toUpperCase()})`,
        message: formData.scope || `Program inquiry for ${formData.track}`,
        botcheck: formData.botcheck,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err?.message || 'Unable to submit online right now. You can also reach us immediately via WhatsApp.'
      );
    }
  };

  const openWhatsAppFallback = () => {
    const msg = `*THAKSA.AI Direct Inquiry*\n*Institution/Organization:* ${formData.company || 'N/A'}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Track:* ${formData.track}\n*Scope:* ${formData.scope}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Academic Directorate &amp; Studio | THAKSA.AI</title>
        <meta
          name="description"
          content="Schedule a Campus Recruitment Training (CRT) cohort, technical workshop, student internship, or software studio consultation with THAKSA.AI in Gachibowli, Hyderabad."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-[#F7F8F4] py-14 sm:py-20 px-4 sm:px-6 md:px-10 text-[#101828]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Institutional & Student Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101828]/[0.06] border border-[#E3E5DE] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3659D9]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#101828]">
                  DIRECT ROUTING / GACHIBOWLI HQ
                </span>
              </div>

              <h1
                className="font-display font-bold text-[#101828] tracking-[-0.025em] leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(2rem, 3.4vw + 1rem, 3.25rem)' }}
              >
                Partner with our Directorate or apply for a cohort.
              </h1>

              <p className="text-base text-[#5B6475] leading-relaxed">
                Share your institution’s academic calendar, student batch details, or software
                studio scope. Our Gachibowli directorate responds within one business day.
              </p>
            </div>

            <SpatialCard tone="midnight" elevation="e3" className="p-7 flex flex-col gap-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B]">
                OFFICIAL HEADQUARTERS
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">
                  {SITE_BRANDING.buildingName}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {SITE_BRANDING.officeAddress}
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block uppercase text-[10px] mb-0.5">Direct Phone</span>
                  <a href={`tel:${SITE_BRANDING.supportPhone.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-[#C7F36B]">
                    {SITE_BRANDING.supportPhone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase text-[10px] mb-0.5">Electronic Mail</span>
                  <a href={`mailto:${SITE_BRANDING.contactEmail}`} className="text-white hover:text-[#C7F36B] break-all">
                    {SITE_BRANDING.contactEmail}
                  </a>
                </div>
              </div>
            </SpatialCard>

            <SpatialCard tone="paper" elevation="e1" className="p-6 flex flex-col gap-3">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#3659D9]">
                FAST-TRACK STUDENT WHATSAPP LINE
              </div>
              <p className="text-sm text-[#5B6475] leading-relaxed">
                Engineering students enquiring about Internships, Workshops, or Final-Year Projects
                can message our mentor coordinator directly on WhatsApp.
              </p>
              <div className="pt-1">
                <DepthButton
                  href={SITE_BRANDING.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  <span>Chat on WhatsApp ({SITE_BRANDING.supportPhone})</span>
                  <span aria-hidden="true">↗</span>
                </DepthButton>
              </div>
            </SpatialCard>
          </div>

          {/* Right Column: Accessible Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpatialCard tone="paper" elevation="e2" className="p-7 sm:p-10">
              {status === 'success' ? (
                <div role="status" aria-live="polite" className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#101828] text-[#C7F36B] flex items-center justify-center font-mono text-2xl font-bold">
                    ✓
                  </div>
                  <h2 className="text-2xl font-display font-bold text-[#101828]">
                    Enquiry Logged with THAKSA Directorate
                  </h2>
                  <p className="text-sm text-[#5B6475] max-w-md leading-relaxed">
                    Your details have been routed to our academic &amp; engineering coordinator in
                    Gachibowli. You can also open a direct WhatsApp thread below for immediate
                    scheduling.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <DepthButton onClick={openWhatsAppFallback} variant="precision" size="md">
                      <span>Also Send via WhatsApp</span>
                      <span aria-hidden="true">↗</span>
                    </DepthButton>
                    <DepthButton onClick={() => setStatus('idle')} variant="secondary" size="md">
                      <span>Submit Another Enquiry</span>
                    </DepthButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="pb-4 border-b border-[#E3E5DE]">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#3659D9]">
                      INTAKE SPECIFICATION
                    </span>
                    <h2 className="text-2xl font-display font-bold text-[#101828] mt-1">
                      Institutional &amp; Cohort Enquiry Form
                    </h2>
                  </div>

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-company"
                        className="font-mono text-xs uppercase tracking-wider text-[#101828] font-semibold"
                      >
                        College / Organization Name *
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. JNTU / Vaagdevi / Studio Client"
                        className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] text-[16px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="font-mono text-xs uppercase tracking-wider text-[#101828] font-semibold"
                      >
                        Your Name &amp; Role *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Ramesh, Head TPO"
                        className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] text-[16px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className="font-mono text-xs uppercase tracking-wider text-[#101828] font-semibold"
                      >
                        Official Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@institution.edu.in"
                        className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] text-[16px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="font-mono text-xs uppercase tracking-wider text-[#101828] font-semibold"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] text-[16px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-track"
                      className="font-mono text-xs uppercase tracking-wider text-[#101828] font-semibold"
                    >
                      Pathway / Engagement Track *
                    </label>
                    <select
                      id="contact-track"
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] text-[16px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                    >
                      <option value="crt">Campus Recruitment Training (CRT Cohort)</option>
                      <option value="workshops">On-Campus Technical Workshop (3–6 Days)</option>
                      <option value="internships">Domain Internship Application</option>
                      <option value="projects">Final-Year IEEE / System Capstone Project</option>
                      <option value="studio">THAKSA Software Studio (B2B Engineering)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-scope"
                      className="font-mono text-xs uppercase tracking-wider text-[#101828] font-semibold"
                    >
                      Cohort Size, Semester Dates, or Requirement *
                    </label>
                    <textarea
                      id="contact-scope"
                      name="scope"
                      rows={4}
                      required
                      value={formData.scope}
                      onChange={handleChange}
                      placeholder="Share department, batch size, preferred schedule, or project requirements..."
                      className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E3E5DE] text-[16px] text-[#101828] focus:outline-2 focus:outline-[#3659D9]"
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="p-4 rounded-xl bg-[#D14343]/10 border border-[#D14343]/30 text-xs text-[#D14343] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <span>{errorMsg}</span>
                      <button
                        type="button"
                        onClick={openWhatsAppFallback}
                        className="px-3 py-1.5 rounded-lg bg-[#101828] text-white font-mono text-xs shrink-0 cursor-pointer"
                      >
                        Send via WhatsApp →
                      </button>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <DepthButton
                      type="submit"
                      disabled={status === 'submitting'}
                      variant="precision"
                      size="lg"
                    >
                      <span>
                        {status === 'submitting' ? 'Routing to Directorate...' : 'Submit Enquiry'}
                      </span>
                      <span aria-hidden="true">→</span>
                    </DepthButton>

                    <button
                      type="button"
                      onClick={openWhatsAppFallback}
                      className="min-h-[44px] px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider text-[#5B6475] hover:text-[#101828] transition-colors cursor-pointer"
                    >
                      Or open directly in WhatsApp ↗
                    </button>
                  </div>
                </form>
              )}
            </SpatialCard>
          </div>
        </div>
      </div>
    </>
  );
}
