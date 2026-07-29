import SEO from "../../components/SEO";
import { Box, Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import VisualProofSection from "./sections/VisualProofSection";
import FounderSection from "./sections/FounderSection";
import LeadershipTeamSection from "./sections/LeadershipTeamSection";
import LearnerOutcomesSection from "./sections/LearnerOutcomesSection";
import LearningHubSection from "./sections/LearningHubSection";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "THAKSA.AI",
    "url": "https://www.thaksa.ai",
    "logo": "https://www.thaksa.ai/transparent-brand-logo.png",
    "description": "THAKSA.AI collaborates with engineering colleges and placement cells to conduct structured CRT programs, workshops, and final year projects to improve student employability.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94948-08669",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "telugu"]
    }
  };

  return (
    <>

      <SEO
        title="Campus Recruitment Training & Industry Collaboration Platform"
        description="Transform your engineering students into industry-ready professionals with our comprehensive Campus Recruitment Training (CRT) and hands-on technical workshops."
        url="/"
        schema={organizationSchema}
      />
      <Box
      sx={{
        background: "#ffffff",
      }}
    >
      <HeroSection />
      <VisualProofSection />
      <FounderSection />
      <LeadershipTeamSection />
      <LearnerOutcomesSection />
      <LearningHubSection />
    </Box>
    </>
  );
}
