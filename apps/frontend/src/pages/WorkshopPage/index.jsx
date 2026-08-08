import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const workshops = [
  {
    track: "Track 01 / Artificial Intelligence",
    title: "Generative AI & LLM Systems Architecture",
    days: "4-Day On-Campus Immersion",
    stack: "LangChain, OpenAI API, Vector Databases (ChromaDB), Python",
    body: "Students engineer real-time Retrieval-Augmented Generation (RAG) knowledge pipelines, eliminating hallucination rates and deploying autonomous corporate reasoning agents."
  },
  {
    track: "Track 02 / Cloud DevOps",
    title: "Enterprise Containerization & Kubernetes Infrastructure",
    days: "5-Day Intensive Practitioner Bootcamp",
    stack: "Docker, Kubernetes (K8s), GitHub Actions CI/CD, AWS ECR",
    body: "Participants transition monolithic university student web applications into highly resilient, horizontal-scaling container orchestration deployments across production AWS clusters."
  },
  {
    track: "Track 03 / High-Throughput Engineering",
    title: "Event-Driven Microservices & Real-time Web APIs",
    days: "3-Day Applied Coding Lab",
    stack: "Node.js / Express, Apache Kafka, Redis Caching, PostgreSQL",
    body: "Architecting zero-latency transactional microservice systems equipped with tokenized rate limiting, asynchronous event publishing, and distributed session clustering."
  },
  {
    track: "Track 04 / Data Infrastructure",
    title: "Production Data Engineering & Analytical Pipelines",
    days: "4-Day Enterprise ETL Workshop",
    stack: "Apache Spark, Airflow Orchestration, Snowflake, Python Pandas",
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

          {/* Workshop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {workshops.map((w, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="neo-glass bg-white/70 p-8 sm:p-10 rounded-3xl border border-black/[0.08] flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans">
                      {w.track}
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#9fff00] text-xs font-bold font-mono uppercase tracking-wider rounded-full w-max">
                      {w.days}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight leading-snug mb-4">
                    {w.title}
                  </h3>
                  
                  <div className="bg-zinc-100/80 p-4 rounded-xl mb-6 border border-black/[0.04]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] block mb-1">Tech Stack</span>
                    <span className="font-mono text-sm text-zinc-600">{w.stack}</span>
                  </div>
                  
                  <p className="text-base font-sans text-zinc-600 leading-relaxed">
                    {w.body}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/contact?track=${encodeURIComponent(w.title)}`)}
                  className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border border-black/15 hover:border-black px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-sm focus:outline-none"
                >
                  Request Syllabus & Pricing →
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}
