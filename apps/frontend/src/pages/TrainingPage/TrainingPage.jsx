import SEO from "../../components/SEO";
import { Box } from "@mui/material";
import { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import WhyCrtSection from "./sections/WhyCrtSection";
import RoadmapSection from "./sections/RoadmapSection";
import BentoCurriculumSection from "./sections/BentoCurriculumSection";
import AiAdvantageSection from "./sections/AiAdvantageSection";
import OutcomesSection from "./sections/OutcomesSection";
import SuccessSnapshotSection from "./sections/SuccessSnapshotSection";
import CollegeCrtSection from "./sections/CollegeCrtSection";
import VisualProofSection from "./sections/VisualProofSection";
import FinalTrustSection from "./sections/FinalTrustSection";

export default function TrainingPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Campus Recruitment Training (CRT)",
    "description": "Equip your students with industry-demanded skills. Our CRT programs cover AWS, DevOps, and Full-Stack development.",
    "provider": {
      "@type": "Organization",
      "name": "THAKSA.AI",
      "sameAs": "https://www.thaksa.ai"
    }
  };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
    <>

      <SEO
        title="Campus Recruitment Training (CRT) for Engineering Colleges"
        description="Equip your students with industry-demanded skills. Our CRT programs cover AWS, DevOps, and Full-Stack development. Partner with THAKSA.AI today."
        url="/training"
        schema={courseSchema}
      />

        <Box sx={{ minHeight: "100vh", bgcolor: "#020617" }}>
            <HeroSection />
            <WhyCrtSection />
            <RoadmapSection />
            <BentoCurriculumSection />
            <AiAdvantageSection />
            <OutcomesSection />
            <SuccessSnapshotSection />
            <CollegeCrtSection />
            <VisualProofSection />
            <FinalTrustSection />
        </Box>
      </>
  );
}
