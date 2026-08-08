import React from "react";
import { Helmet } from "react-helmet-async";
import PaperHero from "./sections/PaperHero";
import PaperProofStrip from "./sections/PaperProofStrip";
import PaperAudienceRouting from "./sections/PaperAudienceRouting";
import PaperMethodology from "./sections/PaperMethodology";
import PaperEvidenceTable from "./sections/PaperEvidenceTable";
import PaperGallery from "./sections/PaperGallery";
import PaperClosingCTA from "./sections/PaperClosingCTA";

// ============================================================================
// MASTER INSTITUTIONAL HOME PAGE: "NEO-GLASS INSTITUTIONAL SYSTEM"
// Mentality-Inspired Architectural Design System for THAKSAAI
// ============================================================================

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>THAKSAAI | Institutional Campus Recruitment Training & Capstone Engineering</title>
        <meta
          name="description"
          content="Admin-provisioned B2B engineering bootcamp and campus recruitment training platform. Producing verifiable placement milestones across partner universities."
        />
      </Helmet>
      
      <main className="w-full min-h-screen bg-[#EDEEF5] text-[#1a1a1a] selection:bg-[#9fff00] selection:text-black">
        {/* 1. Neo-Glass Atmospheric Video Hero */}
        <PaperHero />

        {/* 2. Auditable Institutional Proof Strip */}
        <PaperProofStrip />

        {/* 3. Strategic B2B & B2C Audience Routing */}
        <PaperAudienceRouting />

        {/* 4. 4-Step Methodology & Featured Lab Immersions */}
        <PaperMethodology />

        {/* 5. Comparative Evidence Ledger Table */}
        <PaperEvidenceTable />

        {/* 6. Honest Documentary-Style Studio Gallery */}
        <PaperGallery />

        {/* 7. High-Contrast TPO Advisory Conversion CTA */}
        <PaperClosingCTA />
      </main>
    </>
  );
}
