import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";

import imgMain from "./cofounder.jpg";
import imgSecondary1 from "./3.png";
import imgSecondary2 from "./IMG-20260619-WA0036.jpg";
import imgSecondary3 from "./3.png";

const images = [imgMain, imgSecondary1, imgSecondary2, imgSecondary3];

const PillarIcon = ({ icon, label }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "80px" }}>
    <Box sx={{
      width: 48,
      height: 48,
      borderRadius: "50%",
      border: "1px solid rgba(99, 102, 241, 0.3)",
      background: "rgba(99, 102, 241, 0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: 1.5,
      color: "#6366F1",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "rgba(99, 102, 241, 0.15)",
        transform: "translateY(-2px)"
      }
    }}>
      {icon}
    </Box>
    <Typography sx={{ color: "#94A3B8", fontSize: "0.8rem", fontWeight: 600, textAlign: "center" }}>
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
      <Typography sx={{ color: "#F8FAFC", fontWeight: 800, fontSize: "1.75rem", mb: -0.5 }}>
        {inView ? <CountUp end={end} duration={2.5} /> : "0"}
        {suffix}
      </Typography>
      <Typography sx={{ color: "#6366F1", fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default function FounderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const headingContent = (
    <Box sx={{ mb: { xs: 4, md: 5 } }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#6366F1",
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
          color: "#F8FAFC",
          mb: 1.5,
          lineHeight: 1.1,
          letterSpacing: "-0.02em"
        }}
      >
        K. Tharunkrishna
      </Typography>
      <Typography
        sx={{
          color: "#94A3B8",
          fontWeight: 500,
          fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
        }}
      >
        Founder • Career Transformation Mentor • Industry Educator
      </Typography>
    </Box>
  );

  const imageShowcase = (
    <Box sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Founder K. Tharunkrishna ${currentIndex === 0 ? "speaking at an event" : currentIndex === 1 ? "mentoring students" : currentIndex === 2 ? "addressing an industry workshop" : "leading a training session"}`}
          variants={{
            enter: { x: "100%", opacity: 1 },
            center: { x: 0, opacity: 1 },
            exit: { x: "-100%", opacity: 1 }
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top"
          }}
        />
      </AnimatePresence>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "#0B1120", overflow: "hidden", position: "relative" }}>
      <Grid container sx={{ minHeight: { md: "85vh" } }}>

        {/* LEFT COLUMN */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8, lg: 12 }, display: "flex", flexDirection: "column", justifyContent: "center", order: { xs: 2, md: 1 } }}>
          <Box sx={{ maxWidth: 650, mx: "auto", width: "100%", zIndex: 5, position: 'relative' }}>

            {headingContent}

            {/* Content Box with Premium SaaS Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{
                display: "flex",
                alignItems: "flex-start",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: "4px solid #6366F1",
                p: 4,
                mb: 6,
                borderRadius: "16px"
              }}>
                <Box sx={{ mr: 3, color: "#6366F1", display: { xs: "none", sm: "block" }, mt: 0.5 }}>
                  <MemoryRoundedIcon sx={{ fontSize: 40 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: "#E2E8F0", fontSize: "1.05rem", fontWeight: 600, fontStyle: "italic", lineHeight: 1.7, mb: 2 }}>
                    "Building industry-ready professionals through practical learning, mentorship, and career-focused training."
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                    Driven by a vision to bridge the gap between academic education and industry demands, K. Tharunkrishna has dedicated his career to empowering students. Through rigorous Campus Recruitment Training (CRT) and real-world technology education, he transforms learners into industry-ready professionals.
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Four Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Stack direction="row" spacing={{ xs: 1, sm: 3 }} justifyContent="space-between" sx={{ maxWidth: 500, mb: 2 }}>
                <PillarIcon icon={<StarBorderRoundedIcon />} label="Leadership" />
                <PillarIcon icon={<PeopleOutlineRoundedIcon />} label="Impact" />
                <PillarIcon icon={<TrendingUpRoundedIcon />} label="Readiness" />
                <PillarIcon icon={<SchoolOutlinedIcon />} label="Expertise" />
              </Stack>
            </motion.div>

            {/* Refined Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Stack direction="row" spacing={{ xs: 4, md: 6 }} sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <AnimatedMetric end={1000} suffix="+" label="Trained" />
                <AnimatedMetric end={50} suffix="+" label="Programs" />
                <AnimatedMetric end={40} suffix="+" label="Workshops" />
              </Stack>
            </motion.div>

          </Box>
        </Grid>

        {/* RIGHT COLUMN (IMAGE COMPOSITION) */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ position: "relative", minHeight: { xs: "400px", md: "auto" }, order: { xs: 1, md: 2 } }}>
          {imageShowcase}
        </Grid>

      </Grid>
    </Box>
  );
}