import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JourneyDeck({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Configuration for the stack
  const visibleCards = 4;

  const handleDragEnd = (event, info) => {
    // If swiped far enough left or right, advance the deck
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  if (!images || images.length === 0) {
    return <div className="text-zinc-500 text-center py-20">Loading journey...</div>;
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[350px] sm:h-[450px] md:h-[500px] flex justify-center items-center perspective-[1000px] overflow-visible">
      <AnimatePresence>
        {images.map((imgSrc, i) => {
          // Calculate logical index relative to current top card
          let offsetIndex = (i - currentIndex + images.length) % images.length;
          
          // Only render a few cards to keep it highly performant
          if (offsetIndex >= visibleCards) return null;

          // The very top card
          const isTop = offsetIndex === 0;

          return (
            <motion.div
              key={i} // Using index is fine since the array never changes order, we just change which is 'top'
              className="absolute w-[280px] h-[210px] sm:w-[480px] sm:h-[360px] md:w-[600px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f0f0f] cursor-grab active:cursor-grabbing origin-bottom"
              style={{
                zIndex: images.length - offsetIndex,
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                y: 50 
              }}
              animate={{
                opacity: 1 - offsetIndex * 0.15, // Cards fade out slightly as they go back
                scale: 1 - offsetIndex * 0.05,   // Cards shrink slightly
                y: offsetIndex * 20,             // Cards move down slightly
                rotateZ: offsetIndex === 0 ? 0 : offsetIndex % 2 === 0 ? 2 : -2, // Subtle tilt
              }}
              exit={{
                x: -300,
                opacity: 0,
                rotateZ: -10,
                transition: { duration: 0.2 }
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 1
              }}
              // Only the top card is draggable
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={isTop ? handleDragEnd : undefined}
              whileDrag={{ scale: 1.02, rotateZ: 3, cursor: "grabbing" }}
              whileHover={isTop ? { y: -5 } : {}}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              
              <img
                src={imgSrc}
                alt="THAKSAAI Campus Execution"
                className="w-full h-full object-cover object-center pointer-events-none"
                draggable="false" // Prevent default browser image drag
                loading="lazy"
              />
              
              {isTop && (
                <div className="absolute bottom-4 left-0 w-full text-center z-20 pointer-events-none">
                  <div className="inline-block bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg border border-white/10">
                    Swipe to explore
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
