import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PaperFounderQuote() {
  const navigate = useNavigate();

  return (
    <section aria-label="Founder Vision" className="w-full bg-[#EDEEF5] py-20 sm:py-24 border-b border-black/[0.06] relative overflow-hidden select-text">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#9fff00]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Side: Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12 max-w-sm shrink-0"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/60 bg-white">
              <img
                src="/images/founders/tharunkrishna_home.jpg"
                alt="K. Tharunkrishna - Founder of THAKSAAI"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <h3 className="text-xl sm:text-2xl font-display font-bold">K. Tharunkrishna</h3>
                <p className="text-xs font-sans font-bold uppercase tracking-wider mt-1" style={{color: '#1a4b8c'}}>FOUNDER &amp; CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Vision, LinkedIn & About Link */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full md:w-7/12 flex flex-col justify-center text-left"
          >
            <span className="text-xs font-mono text-[#1a1a1a]/60 font-bold uppercase tracking-widest block mb-4">
              ● Our Vision
            </span>

            {/* Single line vision quote */}
            <h2 className="text-xl sm:text-2xl lg:text-[1.65rem] font-display italic font-medium text-[#1a1a1a] leading-relaxed mb-8 relative">
              <span className="text-[#9fff00] text-3xl font-serif inline-block mr-1">“</span>
              We don’t measure our success by the certificates our students receive, but by the real software they build and the life-changing careers they secure.
              <span className="text-[#9fff00] text-3xl font-serif inline-block ml-1">”</span>
            </h2>

            <div className="w-12 h-1 bg-[#9fff00] rounded-full mb-8"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/tharunkrishna-kaithoju-185140261/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0a66c2] text-white font-sans font-bold px-7 py-3.5 rounded-xl hover:bg-[#004182] transition-all hover:shadow-md hover:shadow-[#0a66c2]/20 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>

              {/* About Us Navigation Button */}
              <button
                type="button"
                onClick={() => navigate("/about")}
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white font-sans font-bold px-7 py-3.5 rounded-xl hover:bg-black transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <span>Learn About Us</span>
                <span className="text-[#9fff00] font-bold">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
