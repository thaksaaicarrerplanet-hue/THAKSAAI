import React from "react";

const immutablePrinciples = [
  {
    number: "01",
    title: "Learning exists to create capability.",
    desc: "Not just certificates. We measure success by what a student can actually build and solve independently."
  },
  {
    number: "02",
    title: "Knowledge without execution is incomplete.",
    desc: "Theory is only the beginning. Every concept we teach must be applied immediately to a real-world scenario."
  },
  {
    number: "03",
    title: "Students become professionals by solving real problems.",
    desc: "Not mock problems forever. We bring actual industry challenges into the classroom and the office."
  },
  {
    number: "04",
    title: "Teachers are mentors.",
    desc: "Not lecturers. Our instructors guide, review, and collaborate with students just like senior developers in a tech company."
  },
  {
    number: "05",
    title: "Industry is part of education.",
    desc: "Not the destination after education. We integrate corporate requirements into every week of the curriculum."
  },
  {
    number: "06",
    title: "Every batch leaves stronger than it entered.",
    desc: "Not just technically, but professionally and ethically. We build complete, reliable professionals."
  }
];

export default function PaperMethodology() {
  return (
    <section aria-label="Our Core Principles" className="w-full bg-[#EDEEF5] py-20 sm:py-28 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans block mb-2">
            The Roots
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight leading-tight mb-4">
            Immutable principles that dictate our culture.
          </h2>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed">
            Technologies will change. Programming languages will evolve. But the way we build independent engineers remains anchored in these six core principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {immutablePrinciples.map((principle, idx) => (
            <div 
              key={idx} 
              className="neo-glass p-8 sm:p-10 rounded-3xl border border-black/[0.08] flex flex-col justify-start shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-display font-bold text-[#1a1a1a] mb-4 opacity-80">
                {principle.number}
              </span>
              <h3 className="text-xl font-display font-bold text-[#1a1a1a] tracking-tight mb-3">
                {principle.title}
              </h3>
              <p className="text-sm font-sans text-zinc-600 leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
