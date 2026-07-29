import { Box, Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import VisualProofSection from "./sections/VisualProofSection";
import FounderSection from "./sections/FounderSection";
import LeadershipTeamSection from "./sections/LeadershipTeamSection";
import LearnerOutcomesSection from "./sections/LearnerOutcomesSection";
import LearningHubSection from "./sections/LearningHubSection";

export default function HomePage() {
  return (
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
  );
}
