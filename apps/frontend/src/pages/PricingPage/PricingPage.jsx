import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    title: "3 to 5 Day Practical Workshops",
    subtitle: "Short Technical Bootcamps",
    desc: "Perfect for introducing students to exciting industry topics like AI Chat Applications, Cloud Computing, Docker, and Data Science during semester vacations or workshop weeks.",
    features: [
      "Led by experienced practicing software developers",
      "All required cloud accounts & AI keys provided by us",
      "Hands-on coding exercises in your campus computer rooms",
      "Team project presentation & certificate distribution on final day",
      "Available for all Computer Science & Engineering streams"
    ],
    tag: "POPULAR WORKSHOPS",
    recommended: false
  },
  {
    title: "Semester Campus Training (CRT)",
    subtitle: "Comprehensive Placement Bootcamp",
    desc: "Our complete 15-week campus recruitment program engineered to boost your college placement hiring numbers. We organize students into three learning groups based on skill level.",
    features: [
      "Friendly initial skill check to match learning groups",
      "Weekly practical coding practice and automated feedback",
      "Every Friday timed online practice exams mirroring corporate hiring tests",
      "Regular weekly progress reports delivered directly to TPOs & Deans",
      "Assessment-led progress checks, structured feedback, and institution-aligned reporting"
    ],
    tag: "MOST RECOMMENDED FOR TPOS",
    recommended: true
  },
  {
    title: "Full College Partnership",
    subtitle: "Institution-Wide Engineering Support",
    desc: "A year-round collaborative partnership for engineering colleges that want comprehensive support across campus training, specialized workshops, and final-year software projects.",
    features: [
      "Includes full 3-Tier Campus Recruitment Training (CRT)",
      "Guided mentorship for all student final-year software projects",
      "Multi-topic workshops across CSE, AIML, ECE, and EEE departments",
      "Direct phone and electronic support for college placement officers",
      "Priority scheduling during corporate recruitment seasons"
    ],
    tag: "FULL INSTITUTION SUPPORT",
    recommended: false
  }
];

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>College Partnership Options & Scoped Proposals | THAKSAAI</title>
        <meta
          name="description"
          content="Explore transparent, collaborative college training partnership options including short practical workshops and full semester campus recruitment bootcamps."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#F7F8F4] pt-28 sm:pt-36 pb-24 px-6 md:px-10 text-[#1a1a1a] selection:bg-[#C7F36B] selection:text-black">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 pb-8 border-b border-black/[0.08]">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B] block animate-pulse"></span>
              College Partnership Options
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight mb-4">
              Partnerships scoped to the outcomes your institution needs.
            </h1>
            <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed">
              We work with college leadership and departments to scope workshops, semester training, and project mentorship around the academic calendar. Because delivery varies by cohort size, schedule, venue, and scope, we provide a tailored proposal instead of publishing an unsupported one-size-fits-all rate.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
            {plans.map((p, idx) => (
              <motion.article
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className={`p-8 rounded-3xl flex flex-col justify-between transition-all relative ${
                  p.recommended
                    ? "bg-[#1a1a1a] text-white border-2 border-[#C7F36B] shadow-2xl scale-[1.02] z-10"
                    : "neo-glass text-[#1a1a1a] border border-black/[0.08] shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider ${
                      p.recommended ? "bg-[#C7F36B] text-[#1a1a1a]" : "bg-[#1a1a1a] text-white"
                    }`}>
                      ● {p.tag}
                    </span>
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${
                    p.recommended ? "text-[#C7F36B]" : "text-zinc-500"
                  }`}>
                    {p.subtitle}
                  </span>

                  <h2 className={`text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 ${
                    p.recommended ? "text-white" : "text-[#1a1a1a]"
                  }`}>
                    {p.title}
                  </h2>

                  <p className={`text-sm font-sans leading-relaxed mb-8 pb-6 border-b ${
                    p.recommended ? "text-zinc-300 border-white/10" : "text-zinc-600 border-black/[0.06]"
                  }`}>
                    {p.desc}
                  </p>

                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    p.recommended ? "text-zinc-400" : "text-zinc-500"
                  }`}>
                    What Is Included:
                  </h4>

                  <ul className="flex flex-col gap-3 font-sans mb-10">
                    {p.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-snug">
                        <span className={`font-bold text-base mt-0.5 ${
                          p.recommended ? "text-[#C7F36B]" : "text-[#0D9488]"
                        }`}>✓</span>
                        <span className={p.recommended ? "text-zinc-200 font-medium" : "text-zinc-700 font-medium"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/contact?track=${encodeURIComponent(p.title)}`)}
                  className={`w-full py-4 rounded-full text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 ${
                    p.recommended
                      ? "bg-[#C7F36B] text-[#1a1a1a] hover:bg-white focus:ring-white"
                      : "bg-[#1a1a1a] text-white hover:bg-black focus:ring-[#C7F36B]"
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                    p.recommended ? "bg-[#1a1a1a]" : "bg-[#C7F36B]"
                  }`}></span>
                  Discuss This Plan With Our Team →
                </button>
              </motion.article>
            ))}
          </div>

          {/* Our Cloud Assurance Promise Box */}
          <section aria-label="Our Assurance" className="neo-glass p-8 sm:p-12 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
                Our Assurance to Colleges
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight mb-3">
                No extra software fees or cloud billing worries.
              </h3>
              <p className="text-sm sm:text-base font-sans text-zinc-600 leading-relaxed">
                When you partner with us, we supply all necessary online developer tools, AWS/GCP server testing environments, and AI software accounts for your students during the workshops. Your college never has to worry about unexpected cloud billing.
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C7F36B]"
              >
                Schedule a Friendly Meeting →
              </button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
