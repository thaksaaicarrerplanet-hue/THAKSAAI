import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SupabaseImageCard from "../../components/common/SupabaseImageCard";

const workshops = [
  {
    imageKey: "workshop-genai",
    track: "Track 01 / Artificial Intelligence",
    title: "Generative AI & LLM Systems",
    days: "4-Day On-Campus Immersion",
    stack: "LangChain, OpenAI API, Vector DBs, Python",
    body: "Students engineer real-time Retrieval-Augmented Generation (RAG) knowledge pipelines, eliminating hallucination rates and deploying autonomous corporate reasoning agents."
  },
  {
    imageKey: "workshop-devops",
    track: "Track 02 / Cloud DevOps",
    title: "Enterprise Containerization",
    days: "5-Day Intensive Bootcamp",
    stack: "Docker, Kubernetes, GitHub Actions, AWS ECR",
    body: "Participants transition monolithic university student web applications into highly resilient, horizontal-scaling container orchestration deployments across production AWS clusters."
  },
  {
    imageKey: "crt-tier-a",
    track: "Track 03 / High-Throughput Engineering",
    title: "Event-Driven Microservices",
    days: "3-Day Applied Coding Lab",
    stack: "Node.js, Apache Kafka, Redis, PostgreSQL",
    body: "Architecting zero-latency transactional microservice systems equipped with tokenized rate limiting, asynchronous event publishing, and distributed session clustering."
  },
  {
    imageKey: "capstone-git",
    track: "Track 04 / Data Infrastructure",
    title: "Production Data Engineering",
    days: "4-Day Enterprise ETL Workshop",
    stack: "Apache Spark, Airflow, Snowflake, Pandas",
    body: "Building automated enterprise ingestion pipelines capable of extracting, transforming, and loading high-velocity real-time telemetry streaming data at multi-gigabit speeds."
  }
];

export default function WorkshopPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>On-Campus Engineering Workshops | THAKSAAI</title>
        <meta
          name="description"
          content="3 to 5 day intensive on-campus engineering laboratories. Zero textbook theory. Real practitioner deployments."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <header className="max-w-4xl mb-16 pb-12 border-b border-black/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#9fff00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#9fff00] block animate-pulse"></span>
                Practitioner Workshop Immersions
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12] mb-6">
                3 to 5 day on-campus engineering laboratories. <span className="text-zinc-500 line-through">Zero theory.</span>
              </h1>
              <p className="text-lg sm:text-xl font-sans text-zinc-600 leading-relaxed mb-8">
                Conducted directly inside your college computer labs by practicing senior software developers. Every student completes the immersion with a deployed live application and a rigorous GitHub portfolio commit.
              </p>
              
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
              >
                Book an On-Campus Workshop →
              </button>
            </motion.div>
          </header>

          {/* Workshop Tracks Section */}
          <section aria-label="Workshop Tracks" className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                  Active Engineering Tracks
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
                  Select Your Immersion Focus
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 bg-white/70 px-4 py-2.5 rounded-xl border border-black/10 shrink-0 shadow-sm neo-glass">
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a]"></span>
                Hands-on Labs
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {workshops.map((w, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <SupabaseImageCard
                  imageKey={w.imageKey}
                  badgeText={w.days}
                  subtitle={w.track}
                  title={w.title}
                  description={w.body}
                  actionText="Request Syllabus & Pricing →"
                  onActionClick={() => navigate(`/contact?track=${encodeURIComponent(w.title)}`)}
                  className="w-full"
                >
                  <div className="bg-zinc-100/80 p-3 rounded-xl border border-black/[0.04]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a1a1a] block mb-1">Tech Stack</span>
                    <span className="font-mono text-xs text-zinc-700">{w.stack}</span>
                  </div>
                </SupabaseImageCard>
              </motion.div>
            ))}
            </div>
          </section>

          {/* Bottom Conversion Capsule */}
          <section className="bg-[#1a1a1a] text-white p-8 sm:p-14 md:p-16 rounded-3xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-sans text-[#9fff00] font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#9fff00]"></span>
                Institutional Partnership
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Host a practitioner workshop on your campus.
              </h3>
              <p className="text-sm sm:text-base font-sans font-normal text-zinc-400 mt-4 leading-relaxed">
                We bring our senior engineers directly to your college computer labs. Reach out to coordinate with our directorate and plan a schedule that fits your academic calendar.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="relative z-10 bg-[#9fff00] text-[#1a1a1a] px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-white transition-all shadow-lg shrink-0 focus:outline-none focus:ring-2 focus:ring-white hover:-translate-y-1"
            >
              Request Campus Workshop →
            </button>
          </section>

        </div>
      </main>
    </>
  );
}
