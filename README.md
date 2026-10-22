# THAKSA E-Learning Platform — Full-Stack Educational & Workshop Management System

[![Framework](https://img.shields.io/badge/Frontend-React_%2B_GSAP-blue?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Backend](https://img.shields.io/badge/Backend-Node.js_%2B_Express-green?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Database](https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Testing](https://img.shields.io/badge/Testing-Playwright_E2E-orange?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)

**THAKSA E-Learning** is an enterprise-grade full-stack learning management system (LMS) designed for colleges, training academies, and workshop organizers. It streamlines student enrollments, project submission tracking, live instructor-led sessions, course approvals, and attendance logging.

---

## Core Modules

- **Course Catalog & Approval Pipelines:** Instructors can draft course syllabi and learning modules; administrators review and approve before publishing.
- **Live Session Tracking:** Tracks scheduled webinars, virtual classroom links, and real-time student attendance with automated index-optimized database queries.
- **Project & Workshop Deliverables:** Dedicated upload portals for final year student capstones and engineering projects.
- **Modern Smooth UI:** Built with React, GSAP animations, and Lenis smooth scrolling for a premium, engaging learning experience.
- **Automated Scalability Indexes:** PostgreSQL schema migrations with compound indexes ensuring fast querying even under high concurrent student load.

---

## Architecture

```
THAKSA_E-LEARNING/
 apps/
    backend/                     # Node.js Express API & Database migrations
       db/migrations/           # Scalability & index migrations
       index.js                 # API server entrypoint
       package.json
    frontend/                    # React UI with GSAP & Playwright tests
 SEO_Optimization_Report.md
 README.md
```

---

## Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/MuhammadMinhaj229/THAKSA_E-LEARNING.git
cd THAKSA_E-LEARNING

# 2. Setup Backend
cd apps/backend
npm install
# Configure your PostgreSQL connection string in .env
# DATABASE_URL=postgres://user:password@localhost:5432/thaksa_db
npm run db:migrate
npm start

# 3. Setup Frontend (in separate terminal)
cd ../frontend
npm install
npm run dev
```

---

## How to Deploy

### Backend Deployment (Render / Railway / DigitalOcean)
1. Link `apps/backend` to **Render** or **Railway**.
2. Environment variables: `DATABASE_URL`, `PORT=5000`, `JWT_SECRET`.
3. Start command: `node index.js`.

### Frontend Deployment (Vercel)
1. Link repository to **Vercel** with Root Directory set to `apps/frontend`.
2. Framework: **Vite** / **React**.
3. Set `VITE_API_URL` pointing to your deployed backend API.
4. Click **Deploy**.

---

## Author
Engineered by **Mohammed Minhaj Mahmood** ([@MuhammadMinhaj229](https://github.com/MuhammadMinhaj229)).
