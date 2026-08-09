import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "WORKSHOPS", path: "/workshops" },
    { label: "INTERNSHIPS", path: "/internships" },
    { label: "CRT", path: "/crt" },
    { label: "PROJECTS", path: "/final-year-projects" },
    { label: "ABOUT US", path: "/about" },
    { label: "STUDIO", path: "/studio" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 sm:py-4 md:py-5 bg-[#EDEEF5]/96 border-b border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.03)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        
        {/* Left: Brand Logo Image */}
        <Link to="/" aria-label="Navigate to THAKSAAI homepage" className="shrink-0 focus:outline-none focus:ring-2 focus:ring-[#9fff00] rounded-sm inline-block">
          <img 
            src="/images/logos/thaksa_banner_logo.jpg" 
            alt="THAKSA.AI Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain rounded shadow-2xs hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Center: Core Programs Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-sm lg:text-base font-bold uppercase tracking-wide text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9fff00] px-1 rounded-sm whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
          
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide hover:bg-black hover:scale-102 active:scale-98 transition-all shadow-xs shrink-0 focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
          >
            <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
            <span>contact us →</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white/95 text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#9fff00] shadow-2xs ml-1"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#1a1a1a] transform transition duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#1a1a1a] transform transition duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-y-auto bg-[#EDEEF5] border-b border-black/10 shadow-lg mt-2 max-h-[calc(100vh-70px)]"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-sans">
                Core Programs
              </span>
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-display font-bold text-[#1a1a1a] tracking-tight hover:text-zinc-600 transition-colors uppercase flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-400 text-sm">→</span>
                </Link>
              ))}
              
              <div className="w-full h-px bg-black/[0.08] my-1"></div>
              
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/contact");
                  }}
                  className="w-full py-3.5 bg-[#1a1a1a] text-white font-bold rounded-xl text-base flex items-center justify-center gap-2.5 shadow-sm hover:scale-105 transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9fff00] block animate-pulse"></span>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
