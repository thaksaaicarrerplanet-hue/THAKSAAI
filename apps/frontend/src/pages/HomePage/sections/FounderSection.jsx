import React from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";

import imgMain from "./cofounder.jpg";
import imgSecondary1 from "./1.png";
import imgSecondary2 from "./2.jpg";
import imgSecondary3 from "./3.png";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: { xs: "400px", md: "100%" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      py: { xs: 2, md: 0 }
    }}>
      {/* Background Glow */}
      <Box sx={{
        position: "absolute",
        width: "70%",
        height: "70%",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(11,17,32,0) 70%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
      }} />

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: isMobile ? "65%" : "70%",
          height: isMobile ? "65%" : "65%",
          top: "10%",
          right: "5%",
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src={imgMain}
          alt="CEO K. Tharunkrishna presenting during an industry-grade technology workshop"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
            border: "8px solid #0B1120",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />
      </motion.div>

      {/* Secondary Image 1 - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: isMobile ? "50%" : "55%",
          height: isMobile ? "45%" : "45%",
          bottom: "5%",
          left: "5%",
          zIndex: 3,
        }}
      >
        <Box
          component="img"
          src={imgSecondary1}
          alt="Founder mentoring students on real-world engineering projects"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
            border: "8px solid #0B1120",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />
      </motion.div>

      {/* Secondary Image 2 - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: isMobile ? "35%" : "40%",
          height: isMobile ? "35%" : "35%",
          top: "0%",
          left: "0%",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={imgSecondary2}
          alt="Students actively participating in a THAKSA.AI career transformation seminar"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
            border: "6px solid #0B1120",
            opacity: 0.85,
          }}
        />
      </motion.div>

      {/* Secondary Image 3 - Bottom Right Floating Detail */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: isMobile ? "30%" : "35%",
          height: isMobile ? "30%" : "30%",
          bottom: "0%",
          right: "0%",
          zIndex: 4,
        }}
      >
        <Box
          component="img"
          src={imgSecondary3}
          alt="Close-up of a collaborative learning session led by the founder"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
            border: "6px solid #0B1120",
            boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          }}
        />
      </motion.div>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "#0B1120", overflow: "hidden", position: "relative" }}>
      <Grid container sx={{ minHeight: { md: "85vh" } }}>

        {/* LEFT COLUMN */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8, lg: 12 }, display: "flex", flexDirection: "column", justifyContent: "center", order: { xs: 1, md: 1 } }}>
          <Box sx={{ maxWidth: 650, mx: "auto", width: "100%", zIndex: 5, position: 'relative' }}>

            {isMobile && headingContent}

            {isMobile && (
              <Box sx={{ width: "100%", mb: 5 }}>
                {imageShowcase}
              </Box>
            )}

            {!isMobile && headingContent}

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
        {!isMobile && (
          <Grid size={{ xs: 12, md: 5 }} sx={{ position: "relative", minHeight: "auto", order: { xs: 2, md: 2 } }}>
            {imageShowcase}
          </Grid>
        )}

      </Grid>
    </Box>
  );
}