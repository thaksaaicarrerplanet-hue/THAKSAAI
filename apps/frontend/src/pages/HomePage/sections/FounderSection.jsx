import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";

import img1 from "./cofounder.jpeg";
import img2 from "./IMG-20260619-WA0036.jpg";

const ceoImages = [img1, img2];

const PillarIcon = ({ icon, label }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "80px" }}>
    <Box sx={{
      width: 48,
      height: 48,
      borderRadius: "50%",
      border: "2px solid #1976d2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: 1.5,
      color: "#1976d2",
      transition: "all 0.3s ease",
      "&:hover": {
        bgcolor: "#1976d2",
        color: "#ffffff"
      }
    }}>
      {icon}
    </Box>
    <Typography sx={{ color: "#475569", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>
      {label}
    </Typography>
  </Box>
);

const AnimatedMetric = ({ end, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box ref={ref}>
      <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "1.75rem", mb: -0.5 }}>
        {inView ? <CountUp end={end} duration={2.5} /> : "0"}
        {suffix}
      </Typography>
      <Typography sx={{ color: "#1976d2", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default function FounderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ceoImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const headingContent = (
    <Box sx={{ mb: { xs: 4, md: 5 } }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#1976d2",
          mb: 1,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          fontSize: "0.85rem"
        }}
      >
        Meet the CEO
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: "#ffffff",
          mb: 1.5,

          lineHeight: 1.1,
          letterSpacing: "-0.02em"
        }}
      >
        K. Tharunkrishna
      </Typography>
      <Typography
        sx={{
          color: "#64748b",
          fontWeight: 500,
          fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
        }}
      >
        Founder • Career Transformation Mentor • Industry Educator
      </Typography>
    </Box>
  );

  const imageShowcase = (
    <Box sx={{ position: "relative", width: "100%", height: "100%", minHeight: { xs: "500px", md: "100%" } }}>
      <AnimatePresence mode="wait">
        <img loading="lazy"
          key={currentIndex}
          src={ceoImages[currentIndex]}
          alt="Founder & CEO K. Tharunkrishna"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </AnimatePresence>

      {/* Elegant Corporate Banner */}
      <Box sx={{
        position: "absolute",
        bottom: { xs: 20, md: 40 },
        left: 0,
        bgcolor: "#1976d2",
        py: 2,
        px: 4,
        borderRight: "4px solid #ffffff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
      }}>
        <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem", letterSpacing: 0.5 }}>
          CEO <span style={{ fontWeight: 400, opacity: 0.9 }}>| K. Tharunkrishna</span>
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "#0B1120", overflow: "hidden", position: "relative" }}>
      <Grid container sx={{ minHeight: { md: "85vh" } }}>

        {/* LEFT COLUMN */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8, lg: 12 }, display: "flex", flexDirection: "column", justifyContent: "center", order: { xs: 1, md: 1 } }}>
          <Box sx={{ maxWidth: 650, mx: "auto", width: "100%" }}>

            {/* On Mobile, show Heading, then Image, then the rest */}
            {isMobile && headingContent}

            {isMobile && (
              <Box sx={{ width: "100%", mb: 5, borderRadius: 2, overflow: "hidden" }}>
                {imageShowcase}
              </Box>
            )}

            {!isMobile && headingContent}

            {/* Content Box with Refined Blue Border */}
            <Box sx={{
              display: "flex",
              alignItems: "flex-start",
              bgcolor: "#f8fafc",
              borderLeft: "4px solid #1976d2",
              p: 4,
              mb: 6,
              borderRadius: "0 8px 8px 0"
            }}>
              <Box sx={{ mr: 3, color: "#1976d2", display: { xs: "none", sm: "block" }, mt: 0.5 }}>
                <MemoryRoundedIcon sx={{ fontSize: 40 }} />
              </Box>
              <Box>
                <Typography sx={{ color: "#334155", fontSize: "1.05rem", fontWeight: 600, fontStyle: "italic", lineHeight: 1.7, mb: 2 }}>
                  "Building industry-ready professionals through practical learning, mentorship, and career-focused training."
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Driven by a vision to bridge the gap between academic education and industry demands, K. Tharunkrishna has dedicated his career to empowering students. Through rigorous Campus Recruitment Training (CRT) and real-world technology education, he transforms learners into industry-ready professionals.
                </Typography>
              </Box>
            </Box>

            {/* Four Pillars */}
            <Stack direction="row" spacing={{ xs: 1, sm: 3 }} justifyContent="space-between" sx={{ maxWidth: 500, mb: 2 }}>
              <PillarIcon icon={<StarBorderRoundedIcon />} label="Leadership" />
              <PillarIcon icon={<PeopleOutlineRoundedIcon />} label="Impact" />
              <PillarIcon icon={<TrendingUpRoundedIcon />} label="Readiness" />
              <PillarIcon icon={<SchoolOutlinedIcon />} label="Expertise" />
            </Stack>

            {/* Refined Metrics */}
            <Stack direction="row" spacing={{ xs: 4, md: 6 }} sx={{ mt: 6, pt: 4, borderTop: "1px solid #e2e8f0" }}>
              <AnimatedMetric end={1000} suffix="+" label="Trained" />
              <AnimatedMetric end={50} suffix="+" label="Programs" />
              <AnimatedMetric end={40} suffix="+" label="Workshops" />
            </Stack>

          </Box>
        </Grid>

        {/* RIGHT COLUMN (IMAGE) - Hidden on Mobile since it's injected above */}
        {!isMobile && (
          <Grid size={{ xs: 12, md: 5 }} sx={{ position: "relative", minHeight: "auto", order: { xs: 2, md: 2 } }}>
            {imageShowcase}
          </Grid>
        )}

      </Grid>
    </Box>
  );
}
