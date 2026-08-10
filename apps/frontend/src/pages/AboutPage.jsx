import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
export default function AboutPage() {

  return (
    <div className="w-full bg-[#EDEEF5] min-h-screen pt-28 sm:pt-36 pb-20 overflow-x-hidden">
      <Helmet>
        <title>About Us | THAKSAAI</title>
        <meta
          name="description"
          content="Learn about the THAKSAAI journey, our founders, and our mission to develop engineers who create value independently."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 mb-20 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#9fff00] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#9fff00] animate-pulse"></span>
            About Our Mission
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
            Developing engineers who can <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 px-2">create value independently.</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[30%] bg-[#9fff00]/40 -z-0 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-base sm:text-xl font-sans text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            At THAKSAAI, we believe in Zero Hyped Content and Real Face-to-Face Skills. We bring industry-standard coding environments, structured mentorship, and verifiable execution pipelines directly to college campuses.
          </p>
        </motion.div>
      </section>

      {/* Chapter 2: The Crisis (Education Reformation Research) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-black/10 text-[#0a66c2] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            The Industry Crisis
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight max-w-3xl mx-auto leading-tight">
            Why Engineering Education <br className="hidden sm:block" /> Must Be Reformed
          </h2>
          <div className="w-16 h-1.5 bg-[#9fff00] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Research Blog 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
          >
            <div className="mb-auto">
              <div className="text-[#0a66c2] mb-4 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] font-display mb-4 leading-snug">
                The Gap Between Degrees & Reality
              </h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed mb-6">
                Most graduates have strong textbook knowledge but struggle when placed in a real tech job. They simply haven't been taught how to build actual, working software for real businesses.
              </p>
            </div>
            <div className="pt-6 border-t border-black/5 mt-auto">
              <p className="text-xs font-bold tracking-wide uppercase text-zinc-400 mb-1">Academic Reference</p>
              <a href="https://jwel.mit.edu/assets/document/global-state-art-engineering-education" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0a66c2] hover:underline font-semibold block">
                The Global State of the Art in Engineering Education (MIT Study) & CDIO Framework ↗
              </a>
            </div>
          </motion.div>

          {/* Research Blog 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
          >
            <div className="mb-auto">
              <div className="text-[#0a66c2] mb-4 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] font-display mb-4 leading-snug">
                Missing Communication & Teamwork
              </h3>
              <p className="text-zinc-600 font-sans text-sm leading-relaxed mb-6">
                Just being a good coder isn't enough anymore. Real companies are looking for engineers who can communicate clearly with clients, work in fast-paced teams, and understand the business side of tech.
              </p>
            </div>
            <div className="pt-6 border-t border-black/5 mt-auto">
              <p className="text-xs font-bold tracking-wide uppercase text-zinc-400 mb-1">Academic Reference</p>
              <a href="https://wheebox.com/india-skills-report" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0a66c2] hover:underline font-semibold block">
                India Skills Report & Royal Academy of Engineering: Engineers 2030 ↗
              </a>
            </div>
          </motion.div>

          {/* Research Blog 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1a1a1a] rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9fff00]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="mb-auto relative z-10">
              <div className="text-[#1a1a1a] mb-4 bg-[#9fff00] w-14 h-14 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-4 leading-snug">
                Learning by Actually Building
              </h3>
              <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-6">
                The traditional way of memorizing theory is outdated. Today, the only proven way to master engineering is by building hands-on, real-world projects alongside experienced tech industry mentors.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-auto relative z-10">
              <p className="text-xs font-bold tracking-wide uppercase text-zinc-500 mb-1">Academic Reference</p>
              <a href="https://onlinelibrary.wiley.com/journal/21689830" target="_blank" rel="noopener noreferrer" className="text-xs text-[#9fff00] hover:underline font-semibold block">
                Journal of Engineering Education (Experiential & Integrated Learning) ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Meet the Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight">
            Meet the Founder
          </h2>
          <div className="w-16 h-1.5 bg-[#9fff00] mx-auto mt-6 rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl overflow-hidden border border-black/[0.05] shadow-2xl flex flex-col md:flex-row items-stretch max-w-5xl mx-auto"
        >
          {/* Image Side */}
          <div className="w-full md:w-5/12 min-h-[400px] md:min-h-[500px] relative">
            <img 
              src="/images/founders/cofounder.jpg" 
              alt="K. Tharunkrishna" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-3xl font-display font-bold">K. Tharunkrishna</p>
              <p className="font-semibold text-sm tracking-wide mt-2" style={{color: '#1a4b8c'}}>Founder • Career Transformation Mentor • Industry Educator</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-7/12 p-8 sm:p-12 md:p-14 flex flex-col justify-center">
            <div className="mb-8 relative">
              <svg className="w-12 h-12 text-[#9fff00]/40 absolute -top-4 -left-4 -z-10" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-xl sm:text-2xl font-display italic text-[#1a1a1a] leading-relaxed relative z-10 font-medium">
                "Building industry-ready professionals through practical learning, mentorship, and career-focused training."
              </p>
            </div>
            
            <p className="text-zinc-600 font-sans text-base sm:text-lg leading-relaxed mb-10">
              Driven by a vision to bridge the gap between academic education and industry demands, K. Tharunkrishna has dedicated his career to empowering students. Through rigorous Campus Recruitment Training (CRT) and real-world technology education, he transforms learners into industry-ready professionals.
            </p>

            <a 
              href="https://www.linkedin.com/in/tharunkrishna-kaithoju-185140261/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0a66c2] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#004182] transition-all hover:shadow-lg hover:shadow-[#0a66c2]/30 hover:-translate-y-0.5 self-start"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Strategy & Operations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#1a1a1a] tracking-tight">
            Strategy & Operations
          </h3>
          <div className="w-12 h-1 bg-[#9fff00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Dr. Murthy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#333333] border-2 border-[#9fff00] flex items-center justify-center mb-6 shadow-lg shadow-black/10">
              <span className="text-3xl font-bold text-white font-display">M</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] font-display mb-1">
              Dr. Murthy
            </h3>
            <p className="text-[#0a66c2] font-semibold text-xs tracking-wide uppercase mb-4">
              Senior Business Lead
            </p>
            <p className="text-zinc-600 font-sans text-sm leading-relaxed">
              Spearheading THAKSAAI’s corporate strategy and university partnerships. With extensive leadership experience, Dr. Murthy bridges the gap between academic institutions and enterprise hiring demands to scale our impact.
            </p>
          </motion.div>

          {/* R. Sudheer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#333333] border-2 border-[#9fff00] flex items-center justify-center mb-6 shadow-lg shadow-black/10">
              <span className="text-3xl font-bold text-white font-display">S</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] font-display mb-1">
              R. Sudheer
            </h3>
            <p className="text-[#0a66c2] font-semibold text-xs tracking-wide uppercase mb-4">
              Business Operations
            </p>
            <p className="text-zinc-600 font-sans text-sm leading-relaxed">
              Driving the operational execution of our campus bootcamps and CRT programs. Sudheer ensures our training pipelines scale efficiently while maintaining rigorous, uncompromising industry standards.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
