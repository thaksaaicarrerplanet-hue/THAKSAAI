/**
 * ============================================================================
 * THAKSA.AI — Programs, Workshops, CRT & Studio Data Registry
 * ============================================================================
 */

export const WORKSHOPS_CATALOG = [
  {
    id: 'ws-genai',
    track: 'AI & LLM Systems',
    category: 'AI',
    days: '3–5 Days Lab',
    title: 'Applied Generative AI & Agent Workflows',
    stack: 'Python · OpenAI / Gemini APIs · RAG · Vector DBs · FastAPI',
    body: 'Students move from prompt basics to engineering complete Retrieval-Augmented Generation (RAG) pipelines and tool-calling agents deployed as web services.',
    outcomes: [
      'Build a document-grounded RAG assistant with citations',
      'Implement structured JSON outputs and API guardrails',
      'Deploy a working AI microservice with a React frontend',
    ],
    imageKey: 'workshop-genai',
  },
  {
    id: 'ws-fullstack',
    track: 'Modern Web Engineering',
    category: 'Full-Stack',
    days: '5 Days Lab',
    title: 'Production Full-Stack Architecture',
    stack: 'React 19 · Node.js · Express · PostgreSQL · REST APIs',
    body: 'An end-to-end engineering bootcamp covering relational schema design, JWT authentication, role-based access control, and responsive frontend architecture.',
    outcomes: [
      'Design normalized PostgreSQL schemas with migrations',
      'Build secure JWT-authenticated Express REST endpoints',
      'Ship a responsive React frontend to cloud hosting',
    ],
    imageKey: 'workshop-microservices',
  },
  {
    id: 'ws-devops',
    track: 'Cloud & Infrastructure',
    category: 'Cloud',
    days: '3 Days Lab',
    title: 'Cloud Native, Docker & CI/CD Pipelines',
    stack: 'Linux · Git · Docker · GitHub Actions · Cloud Deployment',
    body: 'Hands-on infrastructure training where students containerize applications, configure automated test workflows, and manage zero-downtime cloud deployments.',
    outcomes: [
      'Write multi-stage Dockerfiles for frontend & backend apps',
      'Automate linting, testing, and builds with GitHub Actions',
      'Configure environment secrets and production monitoring',
    ],
    imageKey: 'workshop-devops',
  },
  {
    id: 'ws-data',
    track: 'Data & Analytics',
    category: 'Data',
    days: '3–4 Days Lab',
    title: 'Data Engineering & Predictive Analytics',
    stack: 'Python · SQL · Pandas · Scikit-Learn · Interactive Dashboards',
    body: 'Practical data pipelines from raw dataset cleaning and exploratory SQL querying to feature engineering, model evaluation, and executive visualization.',
    outcomes: [
      'Write complex analytical SQL queries with window functions',
      'Clean, validate, and transform real-world tabular datasets',
      'Train, evaluate, and serve a predictive machine learning model',
    ],
    imageKey: 'workshop-data',
  },
];

export const CRT_MODULES = [
  {
    id: 'crt-dsa',
    code: 'CRT / 01',
    name: 'Data Structures & Algorithmic Problem Solving',
    title: 'Data Structures & Algorithmic Problem Solving',
    weight: 95,
    focus: 'Arrays, Strings, Trees, Graphs, Dynamic Programming, and Complexity Analysis',
    format: 'Live Lab Coding + Proctored Contests',
    benchmark: 'Proctored Coding Contests + Complexity Audit',
    topics: [
      'Arrays, Strings, Sliding Window & Two Pointers',
      'Trees, Graphs, BFS/DFS & Shortest Path Algorithms',
      'Dynamic Programming & Greedy Problem Solving',
    ],
  },
  {
    id: 'crt-aptitude',
    code: 'CRT / 02',
    name: 'Quantitative Aptitude & Logical Reasoning',
    title: 'Quantitative Aptitude & Logical Reasoning',
    weight: 85,
    focus: 'Number Systems, Permutations, Probability, Data Interpretation, and Analytical Puzzles',
    format: 'Timed Diagnostic Drills + Shortcut Frameworks',
    benchmark: 'Timed Diagnostic Drills & Percentile Tracking',
    topics: [
      'Number Systems, Ratios, Time-Speed-Distance & Work',
      'Permutations, Combinations, Probability & Cryptarithmetic',
      'Data Interpretation, Syllogisms & Seating Arrangements',
    ],
  },
  {
    id: 'crt-core',
    code: 'CRT / 03',
    name: 'Core CS, Verbal & Mock Interview Panels',
    title: 'Core CS, Verbal & Mock Interview Panels',
    weight: 90,
    focus: 'DBMS, SQL Queries, OS, Computer Networks, OOPs, GD Panels & Mock Interviews',
    format: 'Whiteboard Walkthroughs + Practitioner Panels',
    benchmark: '1-on-1 Technical & HR Rubric Sign-Off',
    topics: [
      'DBMS Normalization, SQL Queries, OS & Computer Networks',
      'Group Discussion Moderation & Professional Articulation',
      'Live Code Pair-Programming & Project Viva Defense',
    ],
  },
];

export const INTERNSHIP_DOMAINS = [
  {
    id: 'int-fullstack',
    code: 'DOM / 01',
    title: 'Full-Stack Web Engineering',
    duration: '8–16 Weeks',
    mode: 'In-Office (Gachibowli) / Hybrid',
    stack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Git'],
    steps: ['Environment & Git Mastery', 'API & Database Sprints', 'Frontend Architecture', 'Production Release'],
    imageKey: 'internship-fullstack',
  },
  {
    id: 'int-ai',
    code: 'DOM / 02',
    title: 'Applied AI & Automation Engineering',
    duration: '8–16 Weeks',
    mode: 'In-Office (Gachibowli) / Hybrid',
    stack: ['Python', 'FastAPI', 'LLM APIs', 'RAG Pipelines', 'Evaluation'],
    steps: ['Python & API Foundations', 'Prompt & Context Engineering', 'Agentic Tool Workflows', 'Deployment & Testing'],
    imageKey: 'internship-ai',
  },
  {
    id: 'int-devops',
    code: 'DOM / 03',
    title: 'Cloud & DevOps Engineering',
    duration: '8–12 Weeks',
    mode: 'In-Office / Hybrid',
    stack: ['Linux', 'Docker', 'CI/CD', 'Nginx', 'Cloud Hosting'],
    steps: ['Linux & Shell Scripting', 'Containerization', 'Automated CI/CD Pipelines', 'Observability & Security'],
    imageKey: 'internship-devops',
  },
  {
    id: 'int-data',
    code: 'DOM / 04',
    title: 'Data Science & Business Analytics',
    duration: '8–12 Weeks',
    mode: 'In-Office / Hybrid',
    stack: ['SQL', 'Python', 'Pandas', 'BI Dashboards', 'Statistical Modeling'],
    steps: ['SQL & Data Modeling', 'Exploratory Analysis', 'Predictive Pipelines', 'Stakeholder Reporting'],
    imageKey: 'internship-data',
  },
];

export const STUDIO_PILLARS = [
  {
    id: 'studio-web',
    num: '01',
    code: 'STD / WEB',
    title: 'Custom Web & Application Platforms',
    desc: 'Fast, accessible, and maintainable web applications engineered with React, Node.js, and PostgreSQL—architected for real business workflows.',
    summary: 'Fast, accessible, and maintainable web applications engineered with React, Node.js, and PostgreSQL—architected for real business workflows.',
    deliverables: ['Responsive Web Portals', 'Admin & CRM Dashboards', 'REST APIs & Database Design'],
    stack: ['React 19 · TypeScript', 'Node.js · PostgreSQL'],
  },
  {
    id: 'studio-ai',
    num: '02',
    code: 'STD / AI',
    title: 'AI Workflows & Internal Automation',
    desc: 'Practical AI integrations that save team hours—document processing, intelligent customer routing, and automated reporting pipelines.',
    summary: 'Practical AI integrations that save team hours—document processing, intelligent customer routing, and automated reporting pipelines.',
    deliverables: ['Custom Knowledge Assistants', 'Workflow Automation', 'API & Webhook Integrations'],
    stack: ['Python · FastAPI', 'RAG & Agent Pipelines'],
  },
  {
    id: 'studio-mvp',
    num: '03',
    code: 'STD / MVP',
    title: 'Rapid Product Prototyping & MVPs',
    desc: 'Turn founder specifications into working, deployable software products with clean version-controlled source code and zero agency lock-in.',
    summary: 'Turn founder specifications into working, deployable software products with clean version-controlled source code and zero agency lock-in.',
    deliverables: ['Architecture Blueprint', 'Production Deployment', 'Full Source Code Handover'],
    stack: ['Cloud CI/CD', '100% Source Handover'],
  },
];
