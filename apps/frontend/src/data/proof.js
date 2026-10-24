/**
 * ============================================================================
 * THAKSAAI — Institutional Proof & Verification Registry
 * Hard Rule: Only claims supported by visible, published program structure are rendered
 * by <MetricLedger />. Operational outcomes and placement metrics require documented evidence.
 * UNVERIFIED_CLAIM_LEDGER for owner sign-off.
 * ============================================================================
 */

export const VERIFIED_PROOF = [
  {
    id: "proof-domains",
    code: "CAP-01",
    value: "04",
    unit: "Core Pillars",
    label: "Integrated Capability Pathways",
    detail: "On-campus Workshops, structured CRT, supervised Internships, and defense-ready Final-Year Projects.",
    source: "Published pathway catalogue and corresponding program routes",
    verified: true,
  },
  {
    id: "proof-regions",
    code: "LOC-02",
    value: "03",
    unit: "Regional Hubs",
    label: "Active Telangana Corridors",
    detail: "Direct in-person lab execution across Hyderabad (Gachibowli HQ), Warangal, and regional engineering colleges.",
    source: "Operational evidence required before publication",
    verified: false,
  },
  {
    id: "proof-methodology",
    code: "MTH-03",
    value: "04",
    unit: "Execution Stages",
    label: "Assess → Train → Build → Demonstrate",
    detail: "Every cohort moves from baseline diagnostic evaluation to a version-controlled, deployable engineering artifact.",
    source: "Published four-stage methodology on this website",
    verified: true,
  },
  {
    id: "proof-delivery",
    code: "MOD-04",
    value: "100%",
    unit: "Practitioner-Led",
    label: "Hands-On Lab Delivery",
    detail: "All sessions are conducted around live repositories, automated code reviews, and technical defense rubrics.",
    source: "Cohort-level delivery records required before publication",
    verified: false,
  },
];

/**
 * Institutional Verification Register (Quarantined until signed audit documents are attached).
 * These items are intentionally marked `verified: false` so they are NEVER rendered as facts.
 */
export const UNVERIFIED_CLAIM_LEDGER = [
  {
    id: "unverified-students-trained",
    claim: "1000+ Students Trained",
    previousLocation: "PaperProofStrip.jsx",
    requiredEvidence: "Signed college attendance rosters across partner institutions",
    verified: false,
  },
  {
    id: "unverified-workshops-count",
    claim: "40+ Workshops Conducted",
    previousLocation: "PaperProofStrip.jsx",
    requiredEvidence: "MoU & workshop completion certificates from host departments",
    verified: false,
  },
  {
    id: "unverified-crt-count",
    claim: "50+ CRT Programs",
    previousLocation: "PaperProofStrip.jsx",
    requiredEvidence: "TPO completion sign-offs",
    verified: false,
  },
  {
    id: "unverified-placement-rates",
    claim: "93.4% / 96.4% Exam Pass Rate & ₹15 LPA+ Dream Offers",
    previousLocation: "PlacementsPage.jsx",
    requiredEvidence: "Audited college TPO placement ledger for 2025–2026",
    verified: false,
  },
];

export const VERIFIED_DOCUMENTARY_GALLERY = [
  {
    src: "/images/journey/IMG-20260301-WA0008.jpg",
    title: "On-Campus Technical Immersion",
    caption: "Practitioner-led lab session with undergraduate engineering students.",
    tag: "WORKSHOP LAB",
  },
  {
    src: "/images/journey/IMG-20260301-WA0018.jpg",
    title: "Interactive Systems Architecture",
    caption: "Whiteboard problem decomposition and algorithmic walkthrough.",
    tag: "CRT COHORT",
  },
  {
    src: "/images/journey/IMG-20260619-WA0004.jpg",
    title: "Supervised Code Reviews",
    caption: "One-on-one debugging and architectural mentorship inside campus labs.",
    tag: "MENTORSHIP",
  },
  {
    src: "/images/journey/IMG-20260301-WA0022.jpg",
    title: "Live Lab Coding Session",
    caption: "Students building full-stack and cloud applications inside college computer labs.",
    tag: "HANDS-ON LAB",
  },
  {
    src: "/images/journey/IMG-20260619-WA0024.jpg",
    title: "Team Project Sprint",
    caption: "Collaborative project execution using Git workflows and modular milestones.",
    tag: "PROJECT SPRINT",
  },
  {
    src: "/images/journey/IMG-20260717-WA0027.jpg",
    title: "Institutional Faculty Alignment",
    caption: "Coordinating semester training schedules with department leadership.",
    tag: "PARTNERSHIP",
  },
  {
    src: "/images/journey/IMG-20260619-WA0021.jpg",
    title: "Hands-On Full-Stack Build",
    caption: "Students building and deploying production web services in real time.",
    tag: "BUILD PHASE",
  },
  {
    src: "/images/journey/IMG-20260717-WA0025.jpg",
    title: "Technical Defense Preparation",
    caption: "Reviewing system architecture diagrams prior to final evaluation.",
    tag: "INTERVIEW PREP",
  },
  {
    src: "/images/journey/IMG-20260619-WA0005.jpg",
    title: "Campus Coding Bootcamp",
    caption: "Guided coding exercises and real-time mentor troubleshooting.",
    tag: "BOOTCAMP",
  },
  {
    src: "/images/journey/IMG-20260619-WA0011.jpg",
    title: "Cloud & DevOps Lab",
    caption: "Deploying containerized services and automated workflows in the lab.",
    tag: "CLOUD LAB",
  },
  {
    src: "/images/journey/IMG-20260619-WA0025.jpg",
    title: "Interactive Doubt Solving",
    caption: "Instructors working directly with student teams at their workstations.",
    tag: "LAB MENTORSHIP",
  },
  {
    src: "/images/journey/IMG-20260619-WA0037.jpg",
    title: "Engineering Career Orientation",
    caption: "Preparing students for technical interviews and modern software roles.",
    tag: "CAREER PREP",
  },
  {
    src: "/images/journey/IMG-20260717-WA0023.jpg",
    title: "Practical System Design",
    caption: "Breaking down real-world software architecture for undergraduate cohorts.",
    tag: "ARCHITECTURE",
  },
  {
    src: "/images/journey/IMG-20260717-WA0028.jpg",
    title: "Cohort Milestone Review",
    caption: "Evaluating completed student applications and GitHub repositories.",
    tag: "PROJECT REVIEW",
  },
];
