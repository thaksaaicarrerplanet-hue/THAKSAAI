import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_BRANDING } from '../theme/masterThemeConfig';
import { prefetchRoute } from '../routes/lazy';

export default function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#101828] text-[#F7F8F4] border-t border-white/10 overflow-hidden select-text">
      {/* Subtle Isometric Architectural Grid Backdrop */}
      <div className="absolute inset-0 iso-grid-dark opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 pb-12">
        {/* Top Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to="/"
              aria-label="THAKSA.AI Home"
              className="inline-flex items-center gap-3 shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7F36B]"
            >
              <img
                src="/images/logos/thaksa_banner_logo.jpg"
                alt="THAKSA.AI Logo"
                width="140"
                height="42"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain rounded border border-white/15"
              />
            </Link>
            <div className="sm:pl-4 sm:border-l sm:border-white/15">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C7F36B]">
                INDUSTRY–ACADEMIA CAPABILITY PARTNER
              </div>
              <p className="text-sm text-slate-300 mt-0.5">
                Hyderabad · Warangal · Telangana Engineering Corridors
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2.5 min-h-[44px] px-4 py-2 rounded-[10px] bg-[#1A2335] hover:bg-[#232F46] text-slate-200 border border-white/10 font-mono text-xs uppercase tracking-[0.12em] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span aria-hidden="true" className="text-[#C7F36B]">
              ↑
            </span>
          </button>
        </div>

        {/* 4-Column Architectural Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          {/* Column 1: Programs (3 spans) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
              01 / Programs
            </h2>
            <Link
              to="/workshops"
              onPointerEnter={() => prefetchRoute('/workshops')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Technical Workshops
            </Link>
            <Link
              to="/crt"
              onPointerEnter={() => prefetchRoute('/crt')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Campus Recruitment Training (CRT)
            </Link>
            <Link
              to="/internships"
              onPointerEnter={() => prefetchRoute('/internships')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Domain Internships
            </Link>
            <Link
              to="/final-year-projects"
              onPointerEnter={() => prefetchRoute('/final-year-projects')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Final-Year Projects
            </Link>
            <Link
              to="/courses"
              onPointerEnter={() => prefetchRoute('/courses')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Course Catalogue
            </Link>
            <Link
              to="/studio"
              onPointerEnter={() => prefetchRoute('/studio')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              THAKSA Software Studio
            </Link>
          </div>

          {/* Column 2: Company & Institutional Doors (3 spans) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
              02 / Institution & Company
            </h2>
            <Link
              to="/about"
              onPointerEnter={() => prefetchRoute('/about')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              About THAKSA.AI
            </Link>
            <Link
              to="/placements"
              onPointerEnter={() => prefetchRoute('/placements')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Placement Readiness & Methodology
            </Link>
            <Link
              to="/faculty-collaboration"
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Faculty Collaboration
            </Link>
            <Link
              to="/tpo-advisory-line"
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              TPO & Principal Advisory Line
            </Link>
            <Link
              to="/contact"
              onPointerEnter={() => prefetchRoute('/contact')}
              className="text-sm text-slate-200 hover:text-[#C7F36B] transition-colors py-1"
            >
              Schedule Campus Cohort
            </Link>
          </div>

          {/* Column 3: Official Contact & Gachibowli HQ (4 spans) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
              03 / Headquarters & Direct Lines
            </h2>
            <div className="p-5 rounded-2xl bg-[#1A2335]/90 border border-white/10 flex flex-col gap-3.5">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#C7F36B]">
                  {SITE_BRANDING.buildingName}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  {SITE_BRANDING.officeAddress}
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex flex-col gap-1.5 text-xs">
                <a
                  href={`mailto:${SITE_BRANDING.contactEmail}`}
                  className="text-slate-200 hover:text-[#C7F36B] transition-colors font-mono"
                >
                  {SITE_BRANDING.contactEmail}
                </a>
                <a
                  href={`mailto:${SITE_BRANDING.hrEmail}`}
                  className="text-slate-400 hover:text-[#C7F36B] transition-colors font-mono"
                >
                  {SITE_BRANDING.hrEmail}
                </a>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${SITE_BRANDING.supportPhone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#C7F36B] transition-colors"
                >
                  <span>Tel: {SITE_BRANDING.supportPhone}</span>
                </a>
                <a
                  href={SITE_BRANDING.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#C7F36B]/15 text-[#C7F36B] border border-[#C7F36B]/30 font-mono text-[11px]"
                >
                  <span>WhatsApp Direct →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Governance (2 spans) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
              04 / Governance
            </h2>
            <Link
              to="/terms-of-service"
              className="text-sm text-slate-300 hover:text-white transition-colors py-1"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm text-slate-300 hover:text-white transition-colors py-1"
            >
              Privacy Policy
            </Link>
            <Link
              to="/campus-security-guidelines"
              className="text-sm text-slate-300 hover:text-white transition-colors py-1"
            >
              Campus Guidelines
            </Link>
            <a
              href="https://www.linkedin.com/in/k-tharunkrishna-082491202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-300 hover:text-[#C7F36B] transition-colors py-1"
            >
              Leadership LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {SITE_BRANDING.name}. Workshops · CRT · Internships · Capstone projects.</p>
          <p className="text-slate-400">
            Designed for practical engineering learning · Built for accessible delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
