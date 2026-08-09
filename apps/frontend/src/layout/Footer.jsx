import React from "react";
import { Link } from "react-router-dom";
import { SITE_BRANDING } from "../theme/masterThemeConfig";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      label: "Follow THAKSAAI on LinkedIn (Coming Soon)",
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.67a1.64 1.64 0 0 0-1.66 1.63 1.63 1.63 0 0 0 1.66 1.63 1.64 1.64 0 0 0 1.66-1.63 1.63 1.63 0 0 0-1.66-1.63Z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "#",
      label: "Follow THAKSAAI on X / Twitter",
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      label: "View THAKSAAI campus bootcamps on Instagram",
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      label: "Watch THAKSAAI algorithmic programming tutorials on YouTube",
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      label: "Explore THAKSAAI open engineering capstone repositories on GitHub",
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "WhatsApp / Discord",
      href: `https://wa.me/919494808669`,
      label: "Chat with THAKSAAI team on WhatsApp (+91 94948 08669)",
      icon: (
        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.128 1.526 5.869L0 24l6.326-1.488C8.012 23.473 9.957 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.893 17.114c-.286.804-1.671 1.543-2.316 1.604-.572.054-1.286.223-4.107-.946-3.608-1.493-5.94-5.184-6.118-5.424-.178-.24-1.455-1.942-1.455-3.705 0-1.763.921-2.634 1.246-2.991.325-.357.712-.446.951-.446.239 0 .478.001.687.011.22.011.515-.084.807.618.304.727 1.037 2.529 1.127 2.713.09.184.15.401.03.641-.12.24-.18.389-.359.598-.179.209-.374.469-.536.634-.179.178-.363.371-.155.728.208.357.925 1.526 1.981 2.467 1.36 1.213 2.503 1.589 2.861 1.768.357.179.567.15.777-.09.21-.24.896-1.044 1.135-1.402.239-.357.478-.297.807-.179.328.119 2.089.986 2.447 1.164.358.179.597.268.687.417.09.149.09.865-.196 1.669z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#EDEEF5] to-[#DFE2EE] border-t border-black/[0.08] pt-16 sm:pt-20 pb-12 text-[#1a1a1a] relative overflow-hidden mt-16 sm:mt-24 select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-black/[0.08]">
          
          {/* Column 1: Institutional Brand (4 Spans on desktop) */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <div className="flex items-center gap-2">
              <Link to="/" aria-label="Navigate to THAKSAAI homepage" className="shrink-0 focus:outline-none focus:ring-2 focus:ring-[#9fff00] rounded-sm inline-block">
                <img 
                  src="/images/logos/thaksa_banner_logo.jpg" 
                  alt="THAKSA.AI Logo" 
                  className="h-10 sm:h-12 w-auto object-contain rounded shadow-2xs hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            
            <p className="text-sm font-sans font-normal text-zinc-600 leading-relaxed max-w-sm">
              An engineering capstone & campus recruitment training platform. Producing verifiable placement milestones across partner universities.
            </p>

            {/* Headquarters Badge Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/90 px-4 py-2 rounded-full border border-black/10 shadow-xs w-max">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9fff00] block animate-pulse border border-black/20"></span>
              <span className="text-xs font-sans font-semibold uppercase tracking-wide text-[#1a1a1a]">
                HQ: {SITE_BRANDING.shortAddress}
              </span>
            </div>

            {/* Social Media Dock */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans">
                Connect With Our Community
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    aria-label={social.label}
                    className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white/90 border border-black/10 flex items-center justify-center text-[#1a1a1a] shadow-2xs hover:bg-[#1a1a1a] hover:text-[#9fff00] hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Educational Programs (2 Spans on desktop) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans mb-1">
              Company & Programs
            </h4>
            <Link to="/about" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              About THAKSAAI
            </Link>
            <Link to="/workshops" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              Practical Workshops
            </Link>
            <Link to="/internships" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              Office Internships
            </Link>
            <Link to="/crt" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              Campus Training (CRT)
            </Link>
            <Link to="/final-year-projects" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              Final-Year Projects
            </Link>
          </div>

          {/* Column 3: Institutional Collaborations (2 Spans on desktop) */}
          <div className="flex flex-col gap-3.5 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans mb-1">
              For Colleges & TPOs
            </h4>
            <Link to="/contact?college=Partnership" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              Schedule Bootcamp
            </Link>
            <Link to="/faculty-collaboration" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              Faculty Collab
            </Link>
            <Link to="/tpo-advisory-line" className="text-sm font-medium text-[#1a1a1a]/85 hover:text-[#1a1a1a] hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all py-1">
              TPO Advisory Line
            </Link>
            <span className="text-xs font-normal text-zinc-500 leading-relaxed pt-1">
              On-campus technical coding cohorts executed directly inside university labs.
            </span>
          </div>

          {/* Column 4: Official Headquarters & Contact Directorate (4 Spans on desktop) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans">
              Official Headquarters & Contact
            </h4>
            
            {/* Headquarters Card with SVG vector icon styling */}
            <div className="neo-glass bg-white/95 p-6 rounded-2xl border border-black/[0.08] shadow-xs flex flex-col gap-4">
              
              {/* Building & Landmark */}
              <div className="flex items-start gap-3.5">
                <svg aria-hidden="true" className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 16H6v-2h6v2zm0-4H6v-2h6v2zm0-4H6V9h6v2zm0-4H6V5h6v2zm6 12h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V9h4v2zm0-4h-4V5h4v2z"/>
                </svg>
                <div>
                  <strong className="text-sm font-display font-bold text-[#1a1a1a] block">
                    {SITE_BRANDING.buildingName}
                  </strong>
                  <p className="text-xs font-sans font-normal text-zinc-600 leading-relaxed mt-1">
                    Diamond Hills, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-black/[0.06]"></div>

              {/* Emails */}
              <div className="flex items-start gap-3.5">
                <svg aria-hidden="true" className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div className="flex flex-col gap-1.5 text-xs sm:text-sm font-sans font-medium text-[#1a1a1a]">
                  <a 
                    href={`mailto:${SITE_BRANDING.contactEmail}`} 
                    className="hover:text-black hover:underline decoration-[#9fff00] decoration-2 underline-offset-3 transition-all block"
                  >
                    General Inquiries: {SITE_BRANDING.contactEmail}
                  </a>
                  <a 
                    href={`mailto:${SITE_BRANDING.hrEmail}`} 
                    className="hover:text-black hover:underline decoration-[#9fff00] decoration-2 underline-offset-3 transition-all text-zinc-700 block"
                  >
                    HR & Careers: {SITE_BRANDING.hrEmail}
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-black/[0.06]"></div>

              {/* Direct Phone */}
              <div className="flex items-center gap-3.5">
                <svg aria-hidden="true" className="w-5 h-5 text-zinc-700 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a 
                  href={`tel:${SITE_BRANDING.supportPhone.replace(/[^0-9+]/g, '')}`} 
                  className="text-sm font-sans font-semibold text-[#1a1a1a] hover:text-black hover:underline decoration-[#9fff00] decoration-2 underline-offset-4 transition-all"
                >
                  Call / WhatsApp: {SITE_BRANDING.supportPhone}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Interactive Governance Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans font-medium text-zinc-600">
          <p>© {new Date().getFullYear()} {SITE_BRANDING.name} Directorate. Verified Placement Readiness.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms-of-service" className="hover:underline hover:text-[#1a1a1a] transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="hover:underline hover:text-[#1a1a1a] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/campus-security-guidelines" className="hover:underline hover:text-[#1a1a1a] transition-colors">
              Campus Security Guidelines
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
