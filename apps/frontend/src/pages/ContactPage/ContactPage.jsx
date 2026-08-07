import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SITE_BRANDING } from "../../theme/masterThemeConfig";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Mode tab: "college" vs "student"
  const [applicantType, setApplicantType] = useState("college");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeOrOrganization: "",
    roleOrBranch: "College Director / TPO / Professor",
    programOfInterest: "Campus Recruitment Training (CRT)",
    studentCohortSize: "100 - 250 Students",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const collegeParam = searchParams.get("college");
    const internshipParam = searchParams.get("internship");
    const trackParam = searchParams.get("track") || searchParams.get("workshop") || searchParams.get("query");
    
    if (internshipParam) {
      setApplicantType("student");
      setFormData((p) => ({ 
        ...p, 
        programOfInterest: `Office Practical Internship (${internshipParam})`,
        roleOrBranch: "B.Tech / Engineering Student" 
      }));
    } else if (trackParam) {
      setFormData((p) => ({ ...p, programOfInterest: trackParam }));
    }
    if (collegeParam) setFormData((p) => ({ ...p, collegeOrOrganization: collegeParam }));
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModeSwitch = (type) => {
    setApplicantType(type);
    if (type === "student") {
      setFormData((prev) => ({
        ...prev,
        roleOrBranch: "B.Tech / Engineering Student",
        programOfInterest: "Office Practical Internship"
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        roleOrBranch: "College Director / TPO / Professor",
        programOfInterest: "Campus Recruitment Training (CRT)"
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Connect With THAKSAAI | College Programs & Solo Internships</title>
        <meta
          name="description"
          content="Contact THAKSAAI to discuss academic recruitment training bootcamps or enroll as a student in our face-to-face professional engineering internships."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-[#EDEEF5] pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#1a1a1a] w-max shadow-2xs border border-black/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9fff00] block animate-pulse border border-black/20"></span>
              Connect With Our Team
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tight leading-[1.12]">
              Let's build your career or campus ecosystem.
            </h1>

            <p className="text-base font-sans text-zinc-700 font-medium leading-relaxed">
              Whether you are an engineering Dean looking to improve interview pass rates, or an individual student eager to join our office internships and start building real software, our doors are open.
            </p>

            {/* Quick Contact Box */}
            <div className="neo-glass p-6 rounded-3xl border border-black/[0.08] flex flex-col gap-3 mt-2 shadow-sm bg-white/60">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-sans">
                ● Fast Team Response
              </span>
              <div className="flex items-center justify-between text-sm font-bold text-[#1a1a1a]">
                <span>Direct Human Reply</span>
                <span className="px-3 py-1 bg-[#1a1a1a] text-[#9fff00] rounded-full text-xs font-bold">
                  Within 24 Hours
                </span>
              </div>
              <div className="w-full h-px bg-black/[0.06] my-1"></div>
              <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                Direct Phone / WhatsApp: <strong className="text-[#1a1a1a]">{SITE_BRANDING.supportPhone}</strong> ({SITE_BRANDING.officeAddress}).
              </p>
            </div>

            <div className="p-5 bg-white/70 rounded-2xl border border-black/[0.06] text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans shadow-2xs">
              <strong className="text-[#1a1a1a]">In-Person Focus:</strong> All our internships, workshops, and campus programs are conducted strictly face-to-face inside college computer labs or directly at our software office.
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="neo-glass p-6 sm:p-10 md:p-12 rounded-3xl border border-black/[0.1] shadow-xl bg-white/85 backdrop-blur-xl"
            >
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#9fff00] text-[#1a1a1a] flex items-center justify-center text-3xl font-extrabold mb-2 shadow-lg">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1a1a] tracking-tight">
                    We've Received Your Message!
                  </h3>
                  <p className="text-base text-zinc-600 max-w-md font-sans leading-relaxed">
                    Thank you, <strong className="text-[#1a1a1a]">{formData.name}</strong>. Our mentors have received your inquiry for <strong className="text-[#1a1a1a]">{formData.programOfInterest}</strong> and will reach out via phone and WhatsApp directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="mt-6 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
                  >
                    Return to Home Page →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-sans">
                  
                  {/* Mode Selector Toggle */}
                  <div className="flex flex-col gap-2 border-b border-black/[0.08] pb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Who is submitting this application?
                    </span>
                    <div className="grid grid-cols-2 gap-2 p-1.5 bg-black/[0.04] rounded-2xl border border-black/5">
                      <button
                        type="button"
                        onClick={() => handleModeSwitch("college")}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-display font-bold tracking-wide transition-all ${
                          applicantType === "college"
                            ? "bg-[#1a1a1a] text-white shadow-md"
                            : "text-zinc-600 hover:text-black hover:bg-white/50"
                        }`}
                      >
                        College / Institution
                      </button>
                      <button
                        type="button"
                        onClick={() => handleModeSwitch("student")}
                        className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-display font-bold tracking-wide transition-all ${
                          applicantType === "student"
                            ? "bg-[#9fff00] text-[#1a1a1a] shadow-md border border-black/10"
                            : "text-zinc-600 hover:text-black hover:bg-white/50"
                        }`}
                      >
                        Solo Student / Intern
                      </button>
                    </div>
                  </div>

                  {/* Form Title */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[#1a1a1a]">
                      {applicantType === "college" ? "Institutional Campus Inquiry" : "Solo Internship & Mentorship Application"}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-sans">
                      {applicantType === "college"
                        ? "For college Deans, TPOs, and Department Chairs requesting campus bootcamps."
                        : "For enthusiastic engineering students applying to work face-to-face in our office."}
                    </p>
                  </div>

                  {/* Name and College / Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={applicantType === "college" ? "Dr. / Prof. / Mr. Name" : "Enter your full name"}
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm text-[#1a1a1a] shadow-2xs font-medium transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="collegeOrOrganization" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        {applicantType === "college" ? "College / University Name *" : "Your College & Branch Name *"}
                      </label>
                      <input
                        id="collegeOrOrganization"
                        name="collegeOrOrganization"
                        type="text"
                        required
                        placeholder={applicantType === "college" ? "e.g. Kakatiya University College" : "e.g. SR College - CSE 3rd Year"}
                        value={formData.collegeOrOrganization}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm text-[#1a1a1a] shadow-2xs font-medium transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={applicantType === "college" ? "tpo@college.ac.in" : "student@gmail.com"}
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm text-[#1a1a1a] shadow-2xs font-medium transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 94948 XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm text-[#1a1a1a] shadow-2xs font-medium transition-colors"
                      />
                    </div>
                  </div>

                  {/* Conditional Fields based on Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="programOfInterest" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        {applicantType === "college" ? "Target Program *" : "Interested Opportunity *"}
                      </label>
                      <select
                        id="programOfInterest"
                        name="programOfInterest"
                        value={formData.programOfInterest}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm font-medium text-[#1a1a1a] shadow-2xs transition-colors"
                      >
                        {applicantType === "college" ? (
                          <>
                            <option value="Campus Recruitment Training (CRT)">Campus Recruitment Training (CRT)</option>
                            <option value="3 to 5 Day Practical Workshops">3 to 5 Day Practical Workshops</option>
                            <option value="Final-Year Engineering Projects">Final-Year Engineering Projects</option>
                            <option value="Faculty Development Program (FDP)">Faculty Development Program (FDP)</option>
                          </>
                        ) : (
                          <>
                            <option value="Office Practical Internship">Office Practical Internship (In-Person)</option>
                            <option value="Final-Year Guided Project">Final-Year Guided Project</option>
                            <option value="Startup & Tech Mentorship">Startup & Tech Business Mentorship</option>
                            <option value="Freelancing Client Network Access">Freelancing Client Network Access</option>
                          </>
                        )}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="roleOrBranch" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                        {applicantType === "college" ? "Estimated Cohort Size *" : "Your Current Year / Status *"}
                      </label>
                      {applicantType === "college" ? (
                        <select
                          id="studentCohortSize"
                          name="studentCohortSize"
                          value={formData.studentCohortSize}
                          onChange={handleChange}
                          className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm font-medium text-[#1a1a1a] shadow-2xs transition-colors"
                        >
                          <option value="Under 100 Students">Under 100 Students</option>
                          <option value="100 - 250 Students">100 - 250 Students</option>
                          <option value="250 - 500 Students">250 - 500 Students</option>
                          <option value="500+ Students (Full College)">500+ Students (Full College)</option>
                        </select>
                      ) : (
                        <input
                          id="roleOrBranch"
                          name="roleOrBranch"
                          type="text"
                          required
                          placeholder="e.g. 3rd Year B.Tech CSE"
                          value={formData.roleOrBranch}
                          onChange={handleChange}
                          className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm text-[#1a1a1a] shadow-2xs font-medium transition-colors"
                        />
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      {applicantType === "college" ? "Semester Schedule & Questions" : "Tell Us About Your Goals & Enthusiasm"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder={
                        applicantType === "college"
                          ? "Share target seminar dates, branch requirements, or customized curriculum requests..."
                          : "Tell us why you want to join our face-to-face team, what skills you are practicing, or any startups/projects you want to build..."
                      }
                      value={formData.message}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white rounded-xl border border-black/15 focus:border-[#1a1a1a] focus:outline-none text-sm text-[#1a1a1a] shadow-2xs font-medium transition-colors resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#1a1a1a] text-white py-4 rounded-full text-sm sm:text-base font-bold tracking-wide hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#9fff00]"
                  >
                    <span className="w-3 h-3 rounded-full bg-[#9fff00] block animate-pulse"></span>
                    <span>{applicantType === "college" ? "Send Institutional Inquiry →" : "Submit Student Application →"}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </main>
    </>
  );
}
