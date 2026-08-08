import React from "react";
import { motion } from "framer-motion";

const allImages = [
  "IMG-20260301-WA0008.jpg", "IMG-20260301-WA0018.jpg", "IMG-20260301-WA0021.jpg", "IMG-20260301-WA0022.jpg",
  "IMG-20260619-WA0003.jpg", "IMG-20260619-WA0004.jpg", "IMG-20260619-WA0005.jpg", "IMG-20260619-WA0006.jpg",
  "IMG-20260619-WA0007.jpg", "IMG-20260619-WA0008.jpg", "IMG-20260619-WA0009.jpg", "IMG-20260619-WA0011.jpg",
  "IMG-20260619-WA0012.jpg", "IMG-20260619-WA0021.jpg", "IMG-20260619-WA0022.jpg", "IMG-20260619-WA0023.jpg",
  "IMG-20260619-WA0024.jpg", "IMG-20260619-WA0025.jpg", "IMG-20260619-WA0026.jpg", "IMG-20260619-WA0037.jpg",
  "IMG-20260619-WA0038.jpg", "IMG-20260619-WA0039.jpg", "IMG-20260717-WA0023.jpg", "IMG-20260717-WA0024.jpg",
  "IMG-20260717-WA0025.jpg", "IMG-20260717-WA0026.jpg", "IMG-20260717-WA0027.jpg", "IMG-20260717-WA0028.jpg"
].map(name => `/images/journey/${name}`);

// Split exactly as requested: 8, 10, 10
const row1 = allImages.slice(0, 8);
const row2 = allImages.slice(8, 18);
const row3 = allImages.slice(18, 28);

const MarqueeRow = ({ images, speed, direction = "right" }) => {
  return (
    <div className="relative flex overflow-hidden w-full group py-3">
      <div 
        className={`flex whitespace-nowrap w-max gap-4 sm:gap-6 ${direction === "right" ? "animate-marquee-right" : "animate-marquee-left"} hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Render the images twice to create the seamless infinite loop */}
        {[...images, ...images].map((src, idx) => (
          <div 
            key={idx} 
            className="relative w-64 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-2xl overflow-hidden shrink-0 border border-white/5 bg-[#2a2a2a] shadow-lg transition-all duration-300 group-hover:opacity-60 hover:!opacity-100 cursor-pointer"
          >
            <img 
              src={src} 
              alt="THAKSAAI Campus Execution" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
            {/* Subtle inner shadow for premium depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PaperGallery() {
  return (
    <section aria-label="Life at THAKSAAI Studio" className="w-full bg-[#1a1a1a] py-20 sm:py-28 overflow-hidden relative border-b border-black/[0.06]">
      {/* Dynamic Marquee Keyframes injected via internal style */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight linear infinite;
        }
      `}</style>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9fff00]/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.12]">
            A glimpse of our work.
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative z-10 w-full flex flex-col gap-2 -rotate-1 scale-105">
        {/* Left and Right Gradient Masks to fade the edges */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-20 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 1 }}
        >
          {/* Row 1: 8 Images sliding right */}
          <MarqueeRow images={row1} speed={65} direction="right" />
          
          {/* Row 2: 10 Images sliding right (Desynchronized speed) */}
          <MarqueeRow images={row2} speed={85} direction="right" />
          
          {/* Row 3: 10 Images sliding right (Desynchronized speed) */}
          <MarqueeRow images={row3} speed={75} direction="right" />
        </motion.div>
      </div>
      
    </section>
  );
}
