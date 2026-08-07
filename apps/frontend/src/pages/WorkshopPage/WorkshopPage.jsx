import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";

const labSpecializations = [
  {
    imageKey: "workshop-genai",
    badge: "4-Day Workshop",
    subtitle: "Artificial Intelligence",
    title: "AI & ChatGPT Applications",
    desc: "Students build working artificial intelligence assistants that can read documents, search stored answers, and help solve problems using tools like OpenAI and vector databases.",
    duration: "4 Days (32 Total Hours)",
    level: "All Coding Levels",
    track: "AI & ChatGPT Apps"
  },
  {
    imageKey: "workshop-devops",
    badge: "5-Day Workshop",
    subtitle: "Cloud & Docker Basics",
    title: "Cloud Computing & Docker Containers",
    desc: "Students learn how to package software inside Docker containers and host web applications on cloud servers using Kubernetes, exactly like real software teams do.",
    duration: "5 Days (40 Total Hours)",
    level: "All Engineering Branches",
    track: "Cloud & Docker Basics"
  },
  {
    imageKey: "workshop-microservices",
    badge: "3-Day Workshop",
    subtitle: "High-Speed Websites",
    title: "Handling High Traffic & Backend Messaging",
    desc: "A hands-on workshop where student teams build modern web servers that handle thousands of online actions per minute using fast messaging tools like Apache Kafka and caching.",
    duration: "3 Days (24 Total Hours)",
    level: "Advanced Students",
    track: "High Traffic Backend"
  },
  {
    imageKey: "workshop-data",
    badge: "4-Day Workshop",
    subtitle: "Big Data Systems",
    title: "Processing Large Data Sets with Apache Spark",
    desc: "Students write Python and Spark scripts that take large sets of online data, organize the numbers accurately, and save them cleanly into cloud data tables.",
    duration: "4 Days (32 Total Hours)",
    level: "CSE & IT Students",
    track: "Big Data & Apache Spark"
  }
];

export default function WorkshopPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>3 to 5 Day Practical Engineering Workshops | THAKSAAI</title>
        <meta
          name="description"
          content="Practical 3 to 5 day college coding bootcamps covering AI applications, cloud servers with Docker, high-speed backend systems, and data engineering."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
              3 to 5 Day Practical Workshops
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-5">
              Intensive coding workshops led by industry experts.
            </h1>
            <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed">
              Taught by experienced software developers from leading tech firms, our short bootcamps help students learn practical cloud and AI skills directly inside your college computer labs.
            </p>
          </header>

          {/* Workshop Cards Grid */}
          <section aria-label="Available workshop tracks" className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {labSpecializations.map((lab, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <SupabaseImageCard
                  imageKey={lab.imageKey}
                  badgeText={lab.badge}
                  subtitle={lab.subtitle}
                  title={lab.title}
                  description={lab.desc}
                  actionText="Learn About This Workshop →"
                  onActionClick={() => navigate(`/contact?workshop=${encodeURIComponent(lab.track)}`)}
                  aspectRatio="aspect-[16/9]"
                  className="h-full"
                />
                <div className="flex items-center justify-between px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-black/[0.05] text-xs font-sans font-semibold text-zinc-700">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                    {lab.duration}
                  </span>
                  <span className="text-[#1a1a1a] font-bold bg-black/5 px-3 py-1 rounded-full uppercase">
                    {lab.level}
                  </span>
                </div>
              </div>
            ))}
          </section>

          {/* Institutional Note Box */}
          <section aria-label="We Provide All Required Cloud Tools" className="neo-glass p-8 sm:p-12 rounded-3xl border border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                Simple Setup for Colleges
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight mb-3">
                We provide all required cloud tools and student logins.
              </h3>
              <p className="text-sm sm:text-base font-sans text-zinc-600 leading-relaxed">
                Your college does not need to pay extra for cloud accounts or AI software licenses. We bring all required online developer tools and setups directly for your students. We only need your standard campus computer rooms and internet connection.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-lg inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#9fff00] animate-pulse"></span>
                Schedule Workshop Dates →
              </button>
              <span className="text-xs text-center font-mono text-zinc-500">
                ● Simple 14-Day Advance Notice
              </span>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
