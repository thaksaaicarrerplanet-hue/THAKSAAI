import React from "react";
import { useNavigate } from "react-router-dom";
import SupabaseImageCard from "../../../components/common/SupabaseImageCard";

export default function PaperAudienceRouting() {
  const navigate = useNavigate();

  return (
    <section aria-label="The Career Accelerator Programs & Pillars" className="w-full bg-[#EDEEF5] py-16 sm:py-24 md:py-28 border-b border-black/[0.06] relative overflow-hidden">
      
      {/* Subtle ambient lighting effects for depth */}
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#9fff00]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-black/10 text-xs sm:text-xs font-extrabold uppercase tracking-widest text-zinc-700 shadow-2xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9fff00] animate-pulse"></span>
            <span>The Career Accelerator Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-black text-[#1a1a1a] tracking-tight leading-[1.12] mb-4">
            Everything grows from one focused mission.
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-sans font-medium text-zinc-600 leading-relaxed">
            We don't build disconnected departments. We focus purely on four core educational pillars designed specifically to transform engineering students into high-value industry professionals.
          </p>
        </div>

        {/* Fully Mobile-Responsive Glassmorphic Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          
          <SupabaseImageCard
            imageKey="workshop-genai"
            badgeText="Pillar 1"
            subtitle="Campus Bootcamps"
            title="Practical Workshops"
            description="Intensive 3-to-5 day coding algorithms and tech entrepreneurship bootcamps conducted directly on university campuses."
            actionText="View Workshops"
            onActionClick={() => navigate("/workshops")}
            aspectRatio="aspect-[16/10]"
          />

          <SupabaseImageCard
            imageKey="workshop-devops"
            badgeText="Pillar 2"
            subtitle="Face-to-Face Work"
            title="Direct Internships"
            description="Work directly inside our engineering studios alongside practicing senior developers to learn tech business execution and client interaction."
            actionText="Explore Internships"
            onActionClick={() => navigate("/internships")}
            aspectRatio="aspect-[16/10]"
          />

          <SupabaseImageCard
            imageKey="crt-tier-a"
            badgeText="Pillar 3"
            subtitle="Job Placement Prep"
            title="Campus Training (CRT)"
            description="An exhaustive on-campus placement preparation program producing verifiable technical pass milestones for technology firms."
            actionText="Learn About CRT"
            onActionClick={() => navigate("/crt")}
            aspectRatio="aspect-[16/10]"
          />

          <SupabaseImageCard
            imageKey="capstone-git"
            badgeText="Pillar 4"
            subtitle="Build Software"
            title="Final-Year Projects"
            description="Replace copied academic reports with authentic, working software products engineered directly under experienced industry mentorship."
            actionText="View Projects"
            onActionClick={() => navigate("/final-year-projects")}
            aspectRatio="aspect-[16/10]"
          />

        </div>

      </div>
    </section>
  );
}
