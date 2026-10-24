import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_BRANDING, WHATSAPP_NUMBER } from '../../../theme/masterThemeConfig';

const TRAINING_OPTIONS = [
  'On-Campus Workshops',
  'Campus CRT Training',
  'Industry Internships',
  'Full Stack Web Dev',
  'AWS, DevOps & MLOps',
  'Agentic AI',
];

const STUDIO_OPTIONS = [
  'Full Stack Web Application',
  'AWS Cloud & MLOps Setup',
  'Custom Agentic AI Workflow',
];

export default function PaperClosingCTA() {
  const [selectedTraining, setSelectedTraining] = useState(TRAINING_OPTIONS[0]);
  const [selectedStudio, setSelectedStudio] = useState(STUDIO_OPTIONS[0]);

  const openWhatsApp = (topic) => {
    const text = `*THAKSA.AI Direct Inquiry*\n*Topic:* ${topic}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="deploy-launchpad"
      aria-label="Connect With THAKSA Training or Software Studio"
      className="relative w-full bg-transparent text-white py-14 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-[1280px] mx-auto space-y-6">
        {/* Dual Redirect Cards: Training Contact vs Studio Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Training, Workshops, CRT & Internships -> Redirects to /contact */}
          <div className="rounded-3xl p-6 sm:p-9 border border-[#C7F36B]/40 bg-[#0A1122]/90 backdrop-blur-md flex flex-col justify-between shadow-[0_28px_70px_-24px_rgba(0,0,0,0.85)]">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#C7F36B] text-[#050811] mb-4">
                For Colleges &amp; Students
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-[-0.025em] mb-2.5">
                Start a Workshop, CRT Batch, or Internship
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Select a program or course below to connect directly with our training team on the
                Contact page.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {TRAINING_OPTIONS.map((item) => {
                  const active = selectedTraining === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedTraining(item)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        active
                          ? 'bg-[#C7F36B] text-[#050811] border-[#C7F36B]'
                          : 'bg-white/[0.05] text-slate-200 border-white/12 hover:border-white/30'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
              <Link
                to={`/contact?query=${encodeURIComponent(selectedTraining)}`}
                className="flex-1 min-h-[48px] px-6 py-3 rounded-full bg-[#C7F36B] hover:bg-[#d8fa88] text-[#050811] font-display font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Continue to Contact Page</span>
                <span aria-hidden="true">→</span>
              </Link>

              <button
                type="button"
                onClick={() => openWhatsApp(selectedTraining)}
                className="min-h-[48px] px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-white cursor-pointer transition-all"
              >
                WhatsApp ↗
              </button>
            </div>
          </div>

          {/* Card 2: Software Studio -> Redirects to /studio */}
          <div className="rounded-3xl p-6 sm:p-9 border border-[#6D8DFF]/40 bg-[#0A1122]/90 backdrop-blur-md flex flex-col justify-between shadow-[0_28px_70px_-24px_rgba(0,0,0,0.85)]">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#6D8DFF] text-white mb-4">
                For Businesses &amp; Startups
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-[-0.025em] mb-2.5">
                Build Your Product With THAKSA Studio
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Need a custom web application, AWS cloud pipeline, or Agentic AI solution? Explore
                our Software Studio and project intake.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {STUDIO_OPTIONS.map((item) => {
                  const active = selectedStudio === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedStudio(item)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        active
                          ? 'bg-[#6D8DFF] text-white border-[#6D8DFF]'
                          : 'bg-white/[0.05] text-slate-200 border-white/12 hover:border-white/30'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
              <Link
                to="/studio"
                className="flex-1 min-h-[48px] px-6 py-3 rounded-full bg-[#6D8DFF] hover:bg-[#829dff] text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Go to THAKSA Studio Page</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to={`/contact?audience=studio&query=${encodeURIComponent(selectedStudio)}`}
                className="min-h-[48px] px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-semibold text-white flex items-center justify-center transition-all"
              >
                Studio Contact →
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Office Info Strip */}
        <div className="rounded-2xl px-6 py-4 border border-white/12 bg-[#0A1122]/75 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            <span className="font-display font-bold text-[#C7F36B] mr-2">
              {SITE_BRANDING.buildingName}:
            </span>
            <span className="text-slate-300">{SITE_BRANDING.officeAddress}</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <a
              href={`tel:${SITE_BRANDING.supportPhone.replace(/[^0-9+]/g, '')}`}
              className="text-white hover:text-[#C7F36B] font-semibold"
            >
              {SITE_BRANDING.supportPhone}
            </a>
            <a
              href={`mailto:${SITE_BRANDING.contactEmail}`}
              className="text-white hover:text-[#C7F36B] font-semibold"
            >
              {SITE_BRANDING.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
