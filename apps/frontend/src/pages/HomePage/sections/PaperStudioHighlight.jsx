import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const STUDIO_CAPABILITIES = [
  {
    id: 'web',
    title: 'Full Stack Web Platforms',
    desc: 'High-concurrency web applications, enterprise dashboards, and APIs architected with React, Next.js, Node.js, and PostgreSQL.',
    tags: ['React & Next.js', 'Node.js', 'PostgreSQL'],
    accent: '#C7F36B',
  },
  {
    id: 'cloud',
    title: 'AWS, DevOps & MLOps',
    desc: 'Resilient cloud infrastructure, Docker/Kubernetes orchestration, and automated machine learning deployment pipelines.',
    tags: ['AWS Cloud', 'Docker & K8s', 'MLOps'],
    accent: '#38BDF8',
  },
  {
    id: 'ai',
    title: 'Agentic AI & Automation',
    desc: 'Autonomous AI agents, semantic document retrieval (RAG), and intelligent business workflow automation.',
    tags: ['AI Agents', 'RAG Systems', 'Python'],
    accent: '#6D8DFF',
  },
];

function StudioMiniEmblem({ id, accent }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#091226] border border-white/15 flex items-center justify-center shrink-0">
      {id === 'web' && (
        <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
          <polygon points="18,5 31,12 18,19 5,12" stroke={accent} strokeWidth="2" fill="rgba(199,243,107,0.18)" />
          <polyline points="5,18 18,25 31,18" stroke="#38BDF8" strokeWidth="2" />
          <polyline points="5,24 18,31 31,24" stroke="#6D8DFF" strokeWidth="2" />
        </svg>
      )}
      {id === 'cloud' && (
        <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
          <circle cx="18" cy="18" r="12" stroke={accent} strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="18,9 26,14 26,22 18,27 10,22 10,14" stroke="#C7F36B" strokeWidth="1.8" fill="rgba(56,189,248,0.15)" />
          <circle cx="18" cy="18" r="3" fill={accent} />
        </svg>
      )}
      {id === 'ai' && (
        <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
          <polygon points="18,5 30,12 30,24 18,31 6,24 6,12" stroke={accent} strokeWidth="2" fill="rgba(109,141,255,0.16)" />
          <circle cx="18" cy="18" r="4" fill="#C7F36B" />
          <line x1="18" y1="5" x2="18" y2="14" stroke="#C7F36B" strokeWidth="1.6" />
          <line x1="30" y1="24" x2="21.5" y2="19.5" stroke="#38BDF8" strokeWidth="1.6" />
          <line x1="6" y1="24" x2="14.5" y2="19.5" stroke="#38BDF8" strokeWidth="1.6" />
        </svg>
      )}
    </div>
  );
}

export default function PaperStudioHighlight() {
  return (
    <section
      id="software-studio"
      aria-label="THAKSA Software Studio"
      className="relative w-full bg-transparent text-white pt-16 sm:pt-24 pb-8 px-4 sm:px-8"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B152C]/90 via-[#0A1122]/90 to-[#060B18]/90 backdrop-blur-md border border-white/15 p-6 sm:p-10 lg:p-12 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#6D8DFF]/15 blur-3xl pointer-events-none"
          />

          {/* Executive Header + Direct Studio Redirect */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#C7F36B]/15 text-[#C7F36B] border border-[#C7F36B]/30 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7F36B]" />
                <span>THAKSA Software Studio · Gachibowli HQ</span>
              </div>
              <h2
                className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] mb-3"
                style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3.25rem)' }}
              >
                Built by an active{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#6D8DFF]">
                  software engineering studio.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Alongside institutional programs, our Gachibowli engineering division designs and
                ships production software for startups and enterprises—Directly infusing real
                industry standards into our mentorship.
              </p>
            </div>

            <Link
              to="/studio"
              className="min-h-[50px] px-7 py-3.5 rounded-full bg-[#C7F36B] hover:bg-[#d8fa88] text-[#050811] font-display font-bold text-sm sm:text-base transition-all inline-flex items-center justify-center gap-2 shrink-0 shadow-[0_0_30px_-5px_rgba(199,243,107,0.45)]"
            >
              <span>Explore THAKSA Studio</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* 3 Executive Cards That Redirect Directly to /studio */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {STUDIO_CAPABILITIES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <Link
                  to="/studio"
                  className="group h-full rounded-2xl p-6 bg-[#050811]/85 border border-white/12 hover:border-[#C7F36B]/60 flex flex-col justify-between transition-all block shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <StudioMiniEmblem id={item.id} accent={item.accent} />
                      <span className="text-xs font-bold text-slate-400 group-hover:text-[#C7F36B] transition-colors">
                        0{idx + 1} ↗
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#C7F36B] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#C7F36B] shrink-0 group-hover:translate-x-1 transition-transform">
                      Studio →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
