import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { prefetchRoute } from '../routes/lazy';
import { SITE_BRANDING } from '../theme/masterThemeConfig';

const NAV_ITEMS = [
  { label: 'Workshops', path: '/workshops' },
  { label: 'CRT Training', path: '/crt' },
  { label: 'Internships', path: '/internships' },
  { label: 'Studio', path: '/studio' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[76px] transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#050811]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.85)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between gap-4">
        {/* Left: Clean Brand Logo */}
        <Link
          to="/"
          onPointerEnter={() => prefetchRoute('/')}
          onFocus={() => prefetchRoute('/')}
          aria-label="THAKSA.AI Home"
          className="inline-flex items-center shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7F36B]"
        >
          <img
            src="/images/logos/thaksa_banner_logo.jpg"
            alt="THAKSA.AI"
            width="138"
            height="40"
            className="h-9 sm:h-10 w-auto object-contain rounded-lg border border-white/15 bg-white p-0.5 shadow-sm"
          />
        </Link>

        {/* Center: Architectural Pill Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/[0.04] border border-white/10'
              : 'bg-[#080F20]/45 backdrop-blur-md border border-white/10'
          }`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onPointerEnter={() => prefetchRoute(item.path)}
              onFocus={() => prefetchRoute(item.path)}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all min-h-[36px] inline-flex items-center ${
                  isActive
                    ? 'text-[#050811] bg-[#C7F36B] font-semibold shadow-[0_0_20px_-4px_rgba(199,243,107,0.5)]'
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.08]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            to="/contact"
            onPointerEnter={() => prefetchRoute('/contact')}
            onFocus={() => prefetchRoute('/contact')}
            className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[42px] px-5 py-2 rounded-full bg-[#C7F36B] text-[#050811] text-sm font-display font-bold hover:bg-[#d5f884] transition-all shadow-[0_0_24px_-6px_rgba(199,243,107,0.45)]"
          >
            <span>Partner With Us</span>
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-sheet"
            className="lg:hidden inline-flex flex-col items-center justify-center w-11 h-11 rounded-xl border border-white/15 bg-white/[0.06] text-white"
          >
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 ${
                mobileOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 ${
                mobileOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-sheet"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#050811]/95 backdrop-blur-xl border-b border-white/15 max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[48px] px-4 py-3 rounded-xl flex items-center justify-between text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#C7F36B] text-[#050811] font-semibold'
                        : 'text-white hover:bg-white/[0.06]'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">→</span>
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[48px] px-5 py-3 rounded-xl bg-[#C7F36B] text-[#050811] font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <span>Partner With Us</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={SITE_BRANDING.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-5 py-3 rounded-xl bg-white/[0.06] text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/15"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
