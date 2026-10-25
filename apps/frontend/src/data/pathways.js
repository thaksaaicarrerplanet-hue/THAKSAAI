/**
 * ============================================================================
 * THAKSA.AI — Architectural Pathways & Methodology Registry
 * ============================================================================
 */

export const PATHWAY_MODULES = [
  {
    id: 'workshops',
    code: 'MOD / 01',
    shortLabel: 'Workshops',
    shortTitle: 'Workshops',
    title: 'Practical Campus Workshops',
    subtitle: '3–5 Day Intensive Lab Bootcamps',
    cadence: '3–5 Days Lab',
    description:
      'Practitioner-led immersion inside college computer labs covering GenAI, Full-Stack systems, Cloud DevOps, and Data Engineering.',
    summary:
      'Practitioner-led immersion inside college computer labs covering GenAI, Full-Stack systems, Cloud DevOps, and Data Engineering.',
    path: '/workshops',
    href: '/workshops',
    cta: 'Explore Workshops',
    position: [-1.15, 0.25, -0.85],
    height: 0.72,
    accent: '#C7F36B',
    imageKey: 'workshop-genai',
    deliverable: 'Live GitHub repository + Lab Rubric',
    deliverables: [
      'Live GitHub repository built from scratch',
      'Post-workshop assessment & rubric',
      'Faculty-aligned lab manual',
    ],
  },
  {
    id: 'crt',
    code: 'MOD / 02',
    shortLabel: 'CRT',
    shortTitle: 'CRT',
    title: 'Campus Recruitment Training',
    subtitle: 'Semester-Long Placement Readiness',
    cadence: 'Semester Cohort',
    description:
      'Structured preparation across Algorithmic Problem Solving, Quantitative Aptitude, Core CS Systems, and Mock Technical Interviews.',
    summary:
      'Structured preparation across Algorithmic Problem Solving, Quantitative Aptitude, Core CS Systems, and Mock Technical Interviews.',
    path: '/crt',
    href: '/crt',
    cta: 'View CRT Structure',
    position: [1.15, 0.35, -0.85],
    height: 0.92,
    accent: '#3659D9',
    imageKey: 'crt-tier-a',
    deliverable: 'Diagnostic Baseline + Proctored Drills',
    deliverables: [
      'Diagnostic baseline & tiered cohort mapping',
      'Weekly proctored coding & aptitude drills',
      '1-on-1 mock technical & HR evaluations',
    ],
  },
  {
    id: 'internships',
    code: 'MOD / 03',
    shortLabel: 'Internships',
    shortTitle: 'Internships',
    title: 'Supervised Studio Internships',
    subtitle: 'In-Office & Hybrid Engineering Tracks',
    cadence: '8–16 Weeks',
    description:
      'Work alongside senior engineers at our Gachibowli studio on real software architectures, sprint cycles, and code reviews.',
    summary:
      'Work alongside senior engineers at our Gachibowli studio on real software architectures, sprint cycles, and code reviews.',
    path: '/internships',
    href: '/internships',
    cta: 'Apply to Internship',
    position: [-1.15, 0.3, 0.85],
    height: 0.82,
    accent: '#C7F36B',
    imageKey: 'internship-fullstack',
    deliverable: 'Supervised Sprint PRs + Release',
    deliverables: [
      'Supervised sprint tickets & PR reviews',
      'Production deployment experience',
      'Verified project completion credential',
    ],
  },
  {
    id: 'projects',
    code: 'MOD / 04',
    shortLabel: 'Projects',
    shortTitle: 'Projects',
    title: 'Final-Year Capstone Projects',
    subtitle: 'Defense-Ready Engineering Systems',
    cadence: 'B.Tech / M.Tech',
    description:
      'Replace downloaded templates with genuine, tested, version-controlled software systems engineered by student teams.',
    summary:
      'Replace downloaded templates with genuine, tested, version-controlled software systems engineered by student teams.',
    path: '/final-year-projects',
    href: '/final-year-projects',
    cta: 'View Capstone Tracks',
    position: [1.15, 0.42, 0.85],
    height: 1.04,
    accent: '#3659D9',
    imageKey: 'capstone-git',
    deliverable: 'System Architecture + Viva Defense',
    deliverables: [
      'Complete system architecture & documentation',
      'Automated testing & live cloud deployment',
      'Viva & technical defense preparation',
    ],
  },
];

export const AUDIENCE_DOORS = [
  {
    id: 'institutions',
    eyebrow: 'FOR INSTITUTIONS · TPOS & PRINCIPALS',
    title: 'Structured, accountable campus capability partner.',
    description:
      'We integrate directly with your academic calendar to run diagnostic assessments, hands-on departmental workshops, and semester-long CRT cohorts with transparent progress reporting.',
    outcomes: [
      'Batch-level diagnostic baselining and skill-tier mapping for every student',
      'In-person practitioner delivery inside your existing college computer labs',
      'Auditable attendance, assessment rubrics, and departmental progress ledgers',
    ],
    ctaLabel: 'Initialize Institutional Enquiry',
    ctaPath: '/contact?audience=institution',
    secondaryLabel: 'Explore CRT Curriculum',
    secondaryPath: '/crt',
    primaryCta: { label: 'Initialize Institutional Enquiry', href: '/contact?audience=institution' },
    secondaryCta: { label: 'Explore CRT Curriculum', href: '/crt' },
    badge: 'B2B Academic Partnership',
  },
  {
    id: 'students',
    eyebrow: 'FOR STUDENTS & GRADUATES',
    title: 'Practical engineering that gets you hired.',
    description:
      'Move beyond memorizing syntax. Build real software systems, master technical interview problem-solving, and defend your own architecture with confidence.',
    outcomes: [
      'Build and deploy real full-stack, AI, and cloud projects on your own GitHub',
      'Practice live coding, aptitude, and system design with working engineers',
      'Direct access to studio internships and final-year capstone mentorship',
    ],
    ctaLabel: 'Connect on WhatsApp',
    ctaPath: '/contact?audience=student',
    secondaryLabel: 'Browse Internship Domains',
    secondaryPath: '/internships',
    primaryCta: { label: 'Apply / Enquire Now', href: '/contact?audience=student' },
    secondaryCta: { label: 'Browse Internship Domains', href: '/internships' },
    badge: 'Career Accelerator',
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    phase: 'ASSESS',
    label: 'ASSESS',
    code: 'STN-01 / DIAGNOSTIC',
    title: 'Baseline capability & cohort mapping',
    headline: 'Baseline capability & cohort mapping',
    summary:
      'Every engagement begins by measuring where students actually stand—identifying strengths, syntax gaps, and problem-solving speed before instruction starts.',
    detail:
      'Every engagement begins by measuring where students actually stand—identifying strengths, syntax gaps, and problem-solving speed before instruction starts.',
    artifact: 'Diagnostic Evaluation & Cohort Map',
    artifacts: [
      'Diagnostic coding & aptitude evaluation',
      'Skill-matched batch grouping',
      'Custom departmental syllabus alignment',
    ],
    blocks: 1,
  },
  {
    step: '02',
    phase: 'TRAIN',
    label: 'TRAIN',
    code: 'STN-02 / FOUNDATION',
    title: 'First-principles lab instruction',
    headline: 'First-principles lab instruction',
    summary:
      'Practicing engineers lead interactive lab sessions. Every theoretical concept is immediately paired with live code execution and debugging.',
    detail:
      'Practicing engineers lead interactive lab sessions. Every theoretical concept is immediately paired with live code execution and debugging.',
    artifact: 'Guided Lab Repositories & Drills',
    artifacts: [
      'Guided lab repositories',
      'Daily algorithmic & systems drills',
      'Concept-to-code checkpoints',
    ],
    blocks: 2,
  },
  {
    step: '03',
    phase: 'BUILD',
    label: 'BUILD',
    code: 'STN-03 / EXECUTION',
    title: 'Production-grade project sprints',
    headline: 'Production-grade project sprints',
    summary:
      'Students work in structured teams using Git branches, pull requests, and modular architecture to build working applications from scratch.',
    detail:
      'Students work in structured teams using Git branches, pull requests, and modular architecture to build working applications from scratch.',
    artifact: 'Version-Controlled GitHub Release',
    artifacts: [
      'Version-controlled GitHub history',
      'Code review & refactoring cycles',
      'Cloud deployment & testing',
    ],
    blocks: 3,
  },
  {
    step: '04',
    phase: 'DEMONSTRATE',
    label: 'DEMONSTRATE',
    code: 'STN-04 / VERIFICATION',
    title: 'Technical defense & interview readiness',
    headline: 'Technical defense & interview readiness',
    summary:
      'Students defend their code architecture in mock technical panels and viva simulations—proving they understand every line they shipped.',
    detail:
      'Students defend their code architecture in mock technical panels and viva simulations—proving they understand every line they shipped.',
    artifact: 'Mock Interview Scorecard & Portfolio',
    artifacts: [
      'Live architecture defense',
      'Mock technical & HR interview rounds',
      'Verified capability portfolio',
    ],
    blocks: 4,
  },
];
