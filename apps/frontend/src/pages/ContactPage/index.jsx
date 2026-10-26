import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { SITE_BRANDING, WHATSAPP_NUMBER } from "../../theme/masterThemeConfig";
import { sendContactMessage } from "../../services/contactService";

const tracks = [
  { value: "crt", label: "Campus Recruitment Training (CRT)" },
  { value: "workshops", label: "Technical workshops" },
  { value: "internships", label: "Student internships" },
  { value: "projects", label: "Final-year projects" },
  { value: "studio", label: "Software studio / business enquiry" },
  { value: "general", label: "General enquiry" },
];

const roles = [
  { value: "student", label: "Student" },
  { value: "college", label: "College / faculty / placement team" },
  { value: "business", label: "Company / project partner" },
  { value: "other", label: "Other" },
];

const resolveTrack = (candidate) => {
  const normalized = String(candidate || "").trim().toLowerCase();
  const exact = tracks.find((track) => track.value === normalized);
  if (exact) return exact.value;
  const labelMatch = tracks.find((track) => track.label.toLowerCase() === normalized);
  if (labelMatch) return labelMatch.value;
  if (normalized.includes("internship")) return "internships";
  if (normalized.includes("workshop")) return "workshops";
  if (normalized.includes("project") || normalized.includes("capstone")) return "projects";
  if (normalized.includes("studio") || normalized.includes("software")) return "studio";
  if (normalized.includes("crt") || normalized.includes("training")) return "crt";
  return "general";
};

const fieldClass =
  "w-full min-h-[50px] rounded-xl border border-[#E3E5DE] bg-[#F7F8F4] px-4 py-3 text-[16px] text-[#101828] placeholder:text-[#7B8492] transition focus:border-[#3659D9] focus:outline-none focus:ring-4 focus:ring-[#3659D9]/10";
const labelClass =
  "mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#344054]";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const initialCompany = searchParams.get("college") || searchParams.get("organization") || "";
  const initialTrack = resolveTrack(
    searchParams.get("track") ||
      searchParams.get("interest") ||
      (searchParams.get("audience") === "studio" ? "studio" : "crt")
  );
  const initialRole =
    searchParams.get("audience") === "studio"
      ? "business"
      : searchParams.get("audience") === "institution"
        ? "college"
        : "student";

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    company: initialCompany,
    name: "",
    email: "",
    phone: "",
    role: initialRole,
    track: initialTrack,
    scope: initialQuery,
    botcheck: "",
  });

  useEffect(() => {
    const nextCompany = searchParams.get("college") || searchParams.get("organization");
    const rawTrack =
      searchParams.get("track") ||
      searchParams.get("interest") ||
      (searchParams.get("audience") === "studio" ? "studio" : null);
    const nextTrack = rawTrack ? resolveTrack(rawTrack) : null;
    const nextScope = searchParams.get("query");
    const audience = searchParams.get("audience");
    const nextRole =
      audience === "studio" ? "business" : audience === "institution" ? "college" : audience === "student" ? "student" : null;

    if (!nextCompany && !nextTrack && !nextScope && !nextRole) return;
    setFormData((current) => ({
      ...current,
      ...(nextCompany ? { company: nextCompany } : {}),
      ...(nextTrack ? { track: nextTrack } : {}),
      ...(nextScope ? { scope: nextScope } : {}),
      ...(nextRole ? { role: nextRole } : {}),
    }));
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    const trackLabel = tracks.find((track) => track.value === formData.track)?.label || formData.track;
    const roleLabel = roles.find((role) => role.value === formData.role)?.label || formData.role;
    const message = [
      "Enquiry type: " + roleLabel,
      "Requested service: " + trackLabel,
      "Organization / college: " + (formData.company.trim() || "Not provided"),
      "",
      "Message / requirements:",
      formData.scope.trim(),
    ].join("\n");

    try {
      await sendContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.company,
        subject: "Website enquiry — " + trackLabel,
        message,
        botcheck: formData.botcheck,
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error?.message ||
          "We could not submit your enquiry right now. Please try again or contact us directly."
      );
    }
  };

  const openWhatsAppFallback = () => {
    const message = [
      "*THAKSAAI Website Enquiry*",
      "*I am:* " + (roles.find((role) => role.value === formData.role)?.label || formData.role),
      "*Name:* " + (formData.name || "Not provided"),
      "*Email:* " + (formData.email || "Not provided"),
      "*Phone:* " + (formData.phone || "Not provided"),
      "*College / organization:* " + (formData.company || "Not provided"),
      "*Enquiry:* " + (tracks.find((track) => track.value === formData.track)?.label || formData.track),
      "*Details:* " + (formData.scope || "Not provided"),
    ].join("\n");
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Contact THAKSAAI | Student, College &amp; Project Enquiries</title>
        <meta
          name="description"
          content="Contact THAKSAAI about student training, technical workshops, internships, final-year projects, college partnerships, and software studio work."
        />
      </Helmet>

      <main className="min-h-screen bg-[#101828] px-4 py-10 text-white sm:px-6 sm:py-16 lg:px-8 thaksa-interior-page">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <a href="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C7F36B]" aria-label="THAKSAAI home">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#C7F36B] font-mono text-sm font-black text-[#101828]">T.</span>
              <span className="font-display text-lg font-bold tracking-[-0.04em]">THAKSAAI</span>
            </a>
            <span className="rounded-full border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
              Contact / Enquiry desk
            </span>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <section className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#171F30] p-6 sm:p-9 lg:p-10">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C7F36B]/25 bg-[#C7F36B]/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C7F36B]">
                  <span className="h-2 w-2 rounded-full bg-[#C7F36B]" aria-hidden="true" />
                  Tell us what you need
                </div>
                <h1 className="max-w-xl font-display text-[clamp(2.5rem,5vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.055em] text-white">
                  Let’s build something that <span className="text-[#C7F36B]">moves you forward.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-7 text-[#C6CCD6] sm:text-lg">
                  Tell us whether you are a student, a college team, or a potential project partner. We’ll route your enquiry to the right THAKSAAI team.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#C7F36B]">Direct contact</p>
                  <a href={"mailto:" + SITE_BRANDING.contactEmail} className="block break-all text-base font-semibold text-white transition hover:text-[#C7F36B]">
                    {SITE_BRANDING.contactEmail}
                  </a>
                  <a href={"tel:" + SITE_BRANDING.supportPhone.replace(/[^0-9+]/g, "")} className="mt-2 inline-block text-sm text-[#C6CCD6] transition hover:text-white">
                    {SITE_BRANDING.supportPhone}
                  </a>
                  <p className="mt-4 text-sm leading-6 text-[#AAB3C2]">
                    {SITE_BRANDING.buildingName}, {SITE_BRANDING.shortAddress}
                  </p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">Need a quicker response?</p>
                    <p className="mt-1 text-sm leading-5 text-[#AAB3C2]">Start a direct conversation on WhatsApp.</p>
                  </div>
                  <a href={"https://wa.me/" + WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C7F36B] px-4 py-3 text-sm font-bold text-[#101828] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C7F36B]">
                    WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="rounded-[28px] bg-[#FFFFFF] p-5 text-[#101828] shadow-[0_28px_80px_-40px_rgba(0,0,0,0.65)] sm:p-8 lg:p-10">
              {status === "success" ? (
                <div role="status" aria-live="polite" className="flex min-h-[520px] flex-col items-start justify-center">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#101828] font-mono text-2xl font-bold text-[#C7F36B]" aria-hidden="true">✓</div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3659D9]">Message submitted</p>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">Thanks for reaching out.</h2>
                  <p className="mt-4 max-w-md leading-7 text-[#5B6475]">Your enquiry has been submitted to THAKSAAI. If your request is time-sensitive, you can also send the details through WhatsApp.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button type="button" onClick={openWhatsAppFallback} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#101828] px-5 py-3 font-semibold text-white transition hover:bg-[#26344A]">Also send via WhatsApp ↗</button>
                    <button type="button" onClick={() => { setStatus("idle"); setFormData((current) => ({ ...current, name: "", email: "", phone: "", scope: "", botcheck: "" })); }} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#E3E5DE] px-5 py-3 font-semibold text-[#101828] transition hover:bg-[#F7F8F4]">Send another enquiry</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="border-b border-[#E3E5DE] pb-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3659D9]">Contact form / 01</p>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Send us a message.</h2>
                    <p className="mt-2 text-sm leading-6 text-[#5B6475]">Fields marked * are required. Share enough detail so we can direct you to the right team.</p>
                  </div>

                  <input type="text" name="botcheck" value={formData.botcheck} onChange={handleChange} tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>Full name *</label>
                      <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} value={formData.name} onChange={handleChange} placeholder="Your name" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>Email address *</label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={handleChange} placeholder="you@example.com" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>Phone / WhatsApp</label>
                      <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-role" className={labelClass}>I am a... *</label>
                      <select id="contact-role" name="role" required value={formData.role} onChange={handleChange} className={fieldClass}>
                        {roles.map((role) => <option key={role.value} value={role.value}>{role.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className={labelClass}>{formData.role === "student" ? "College / institution (if applicable)" : formData.role === "college" ? "College / institution name *" : formData.role === "business" ? "Company / organization" : "College / organization (optional)"}</label>
                    <input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={180} required={formData.role === "college"} value={formData.company} onChange={handleChange} placeholder={formData.role === "student" ? "Your college or university" : formData.role === "college" ? "College / institution name" : "Organization name (if applicable)"} className={fieldClass} />
                  </div>

                  <div>
                    <label htmlFor="contact-track" className={labelClass}>What can we help you with? *</label>
                    <select id="contact-track" name="track" required value={formData.track} onChange={handleChange} className={fieldClass}>
                      {tracks.map((track) => <option key={track.value} value={track.value}>{track.label}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-scope" className={labelClass}>Your message / requirements *</label>
                    <textarea id="contact-scope" name="scope" rows={5} required maxLength={7000} value={formData.scope} onChange={handleChange} placeholder={formData.role === "student" ? "Tell us your year, branch, interests, or the program you’re asking about..." : formData.role === "college" ? "Share your department, batch size, tentative dates, or campus requirements..." : "Tell us a little about your enquiry, goals, or project requirements..."} className={fieldClass + " min-h-[140px] resize-y"} />
                    <p className="mt-2 text-right text-xs text-[#7B8492]">{formData.scope.length}/7000</p>
                  </div>

                  {status === "error" && (
                    <div role="alert" aria-live="polite" className="rounded-xl border border-[#D14343]/25 bg-[#D14343]/[0.06] p-4 text-sm text-[#A52D2D]">
                      <p>{errorMsg}</p>
                      <button type="button" onClick={openWhatsAppFallback} className="mt-3 font-semibold underline underline-offset-4">Send via WhatsApp instead ↗</button>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 border-t border-[#E3E5DE] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-5 text-[#7B8492]">Your details are used to respond to this enquiry. Please don’t include passwords or sensitive personal information.</p>
                    <button type="submit" disabled={status === "submitting"} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#101828] px-6 py-3 font-semibold text-white transition hover:bg-[#26344A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3659D9] disabled:cursor-not-allowed disabled:opacity-60">
                      {status === "submitting" ? "Sending enquiry..." : "Send enquiry"}
                      <span aria-hidden="true">{status === "submitting" ? "…" : "→"}</span>
                    </button>
                  </div>
                </form>
              )}
            </section>
          </div>
          <p className="mt-7 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">THAKSAAI · Student success / Academic partnerships / Engineering studio</p>
        </div>
      </main>
    </>
  );
}
