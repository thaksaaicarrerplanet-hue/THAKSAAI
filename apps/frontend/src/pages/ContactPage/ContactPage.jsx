import React, { useEffect } from "react";
import { Box } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import QuickContactSection from "./sections/QuickContactSection";
import ContactFormSection from "./sections/ContactFormSection";
import PartnershipSection from "./sections/PartnershipSection";
import LocationSection from "./sections/LocationSection";
import TrustSection from "./sections/TrustSection";
import FaqSection from "./sections/FaqSection";
import TrustBarSection from "./sections/TrustBarSection";

export default function ContactPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ bgcolor: "#020B2D", minHeight: "100vh" }}>
      <HeroSection />
      <QuickContactSection />
      <ContactFormSection />
      <PartnershipSection />
      <LocationSection />
      <TrustSection />
      <FaqSection />
      <TrustBarSection />
    </Box>
  );
}
