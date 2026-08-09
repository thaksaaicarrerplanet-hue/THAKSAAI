import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SupabaseImageCard from "../../../components/common/SupabaseImageCard";

export default function PaperAudienceRouting() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section aria-label="The Career Accelerator Programs & Pillars" className="w-full bg-[#EDEEF5] py-16 sm:py-24 md:py-28 border-b border-black/[0.06] relative overflow-hidden">
      
      {/* Subtle ambient lighting effects for depth */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#9fff00]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-zinc-700 shadow-2xs mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#9fff00] animate-pulse"></span>
            <span>The Career Accelerator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#1a1a1a] tracking-tight leading-[1.12] mb-5 sm:mb-6">
            Everything we do serves one focused mission.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-sans font-medium text-zinc-600 leading-relaxed max-w-2xl">
            We focus purely on four core areas designed to transform students into highly skilled, job-ready professionals.
          </p>
        </motion.div>

        {/* Fully Mobile-Responsive Glassmorphic Pillar Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8"
        >
          <motion.div variants={itemVariants} className="group h-full">
            <SupabaseImageCard
              imageKey="workshop-genai"
              badgeText="Pillar 1"
              subtitle="Campus Bootcamps"
              title="Practical Workshops"
              description="Intense 3-to-5 day coding and tech bootcamps held right on your university campus."
              actionText="View Workshops"
              onActionClick={() => navigate("/workshops")}
              aspectRatio="aspect-[16/10]"
              className="neo-glass bg-white h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="group h-full">
            <SupabaseImageCard
              imageKey="workshop-devops"
              badgeText="Pillar 2"
              subtitle="Real Experience"
              title="Direct Internships"
              description="Work side-by-side with senior developers in our studios to learn how real tech businesses operate."
              actionText="Explore Internships"
              onActionClick={() => navigate("/internships")}
              aspectRatio="aspect-[16/10]"
              className="neo-glass bg-white h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="group h-full">
            <SupabaseImageCard
              imageKey="crt-tier-a"
              badgeText="Pillar 3"
              subtitle="Job Placement Prep"
              title="Campus Training (CRT)"
              description="Comprehensive on-campus training that guarantees students are ready to pass real tech company interviews."
              actionText="Learn About CRT"
              onActionClick={() => navigate("/crt")}
              aspectRatio="aspect-[16/10]"
              className="neo-glass bg-white h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="group h-full">
            <SupabaseImageCard
              imageKey="capstone-git"
              badgeText="Pillar 4"
              subtitle="Build Software"
              title="Final-Year Projects"
              description="Build real, working software under the guidance of industry experts, instead of just writing academic reports."
              actionText="View Projects"
              onActionClick={() => navigate("/final-year-projects")}
              aspectRatio="aspect-[16/10]"
              className="neo-glass bg-white h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
