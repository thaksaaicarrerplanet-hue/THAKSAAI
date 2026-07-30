import { Box, Card, Chip, Container, Grid, Stack, Typography, Button } from "@mui/material";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import StorytellingComponent from "./StorytellingComponent";

const modules = [
  {
    id: "workshops",
    icon: BuildRoundedIcon,
    title: "Workshops",
    subtitle: "Hands-On Industry Learning",
    benefits: [
      "Expert Sessions",
      "Real-world Exposure",
      "Collaborative Learning"
    ],
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    bgGlow: "rgba(99,102,241,0.12)",
    borderColor: "rgba(99,102,241,0.25)",
    route: "/workshops",
    tag: "Offline Mode",
    tagColor: "#6366f1",
    tagBg: "rgba(99,102,241,0.1)",
  },
  {
    id: "training",
    icon: WorkspacePremiumRoundedIcon,
    title: "CRT Training",
    subtitle: (
      <>
        Industry Career Readiness Program
        <span style={{ display: 'block', fontSize: '0.85em', opacity: 0.8, fontWeight: 400, marginTop: '6px', lineHeight: 1.4 }}>
          Hands-on training designed for emerging technologies and modern industry roles.
        </span>
      </>
    ),
    benefits: [
      "AWS Cloud & Cloud Fundamentals",
      "DevOps & Deployment Practices",
      "Machine Learning & AI Foundations"
    ],
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #0f766e 0%, #0891b2 100%)",
    bgGlow: "rgba(15,118,110,0.12)",
    borderColor: "rgba(15,118,110,0.25)",
    route: "/training",
    tag: "Placement Assured",
    tagColor: "#0f766e",
    tagBg: "rgba(15,118,110,0.1)",
  },
  {
    id: "fyp",
    icon: RocketLaunchRoundedIcon,
    title: "Final Year Projects",
    subtitle: "Build Real-World Solutions",
    benefits: [
      "Guided Project Execution",
      "IEEE-standard Reporting",
      "Live Demos"
    ],
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #ea580c 100%)",
    bgGlow: "rgba(217,119,6,0.12)",
    borderColor: "rgba(217,119,6,0.25)",
    route: "/final-year-projects",
    tag: "Industry Grade",
    tagColor: "#d97706",
    tagBg: "rgba(217,119,6,0.1)",
  },
];

function AnimatedCard({ module, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Icon = module.icon;

  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      ref={ref}
      sx={{
        scrollSnapAlign: "start",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, type: "spring", stiffness: 100, damping: 20 }}
    >
      <Card
        component={motion.div}
        onClick={() => navigate(module.route)}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        elevation={0}
        sx={{
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          border: `1px solid rgba(255, 255, 255, 0.15)`,
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: hovered
            ? `0 24px 48px rgba(0, 0, 0, 0.2), 0 0 0 1px ${module.color}`
            : "0 4px 16px rgba(0, 0, 0, 0.1)",
          position: "relative",

          p: { xs: 3, md: 4 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: `radial-gradient(800px circle at center, ${module.bgGlow}, transparent)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }
        }}
      >
        {/* Glow behind icon */}
        <Box
          sx={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 80,
            height: 80,
            background: module.color,
            filter: "blur(40px)",
            opacity: hovered ? 0.3 : 0.1,
            transition: "opacity 0.3s ease",
            borderRadius: "50%",
          }}
        />

        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Box
            sx={{
              display: "inline-flex",
              p: 1.5,
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Icon sx={{ fontSize: 28 }} />
          </Box>
          <Chip
            label={module.tag}
            size="small"
            sx={{
              background: module.tagBg,
              color: module.tagColor,
              fontWeight: 600,
              fontSize: "0.75rem",
              borderRadius: "12px",
              border: `1px solid ${module.borderColor}`,
              backdropFilter: "blur(4px)",
            }}
          />
        </Stack>

        <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 1, position: "relative", zIndex: 1 }}>
          {module.title}
        </Typography>
        <Typography sx={{ color: "#94a3b8", mb: 3, lineHeight: 1.6, position: "relative", zIndex: 1, flexGrow: 1 }}>
          {module.subtitle}
        </Typography>

        <Stack spacing={1.5} sx={{ position: "relative", zIndex: 1, mb: 4 }}>
          {module.benefits.map((benefit, idx) => (
            <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
              <CheckCircleRoundedIcon sx={{ fontSize: 18, color: module.color, mt: 0.25 }} />
              <Typography sx={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                {benefit}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "color 0.3s ease",
                ...(hovered && { color: module.color })
              }}
            >
              Explore Module
            </Typography>
            <ArrowForwardRoundedIcon
              component={motion.svg}
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              sx={{
                fontSize: 20,
                color: module.color
              }}
            />
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: "90px", sm: "104px", md: "112px" },
        pb: { xs: 5, md: 9 },
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/VID-20260619-WA0002.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 42, 0.85)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Radial Gradient Overlay for focus */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.8) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{ position: "relative", zIndex: 2, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
      >

        {/* ── Top row: text content + logo ── */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          {/* TEXT COLUMN */}
          <Grid size={{ xs: 12, lg: 7 }} sx={{ position: "relative", zIndex: 2, textAlign: { xs: "center", lg: "left" } }}>
            {/* Badge */}
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                px: 2,
                py: 0.75,
                mb: 3,
                backdropFilter: "blur(12px)",
              }}
            >
              <AutoAwesomeRoundedIcon sx={{ fontSize: 14, color: "#a5b4fc" }} />
              <Typography sx={{ fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)", color: "#cbd5e1", letterSpacing: "0.02em" }}>
                1000+ Students Trained • 40+ Workshops Conducted
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1" component={motion.h1}
              variants={itemVariants}
              sx={{
                color: "#ffffff",
                mb: 3,
                fontWeight: 800,
                lineHeight: 1.05,
              }}
            >
              <Box component="span" sx={{ position: "relative", display: "block" }}>
                Campus Recruitment Training & Industry
              </Box>
              <Box component="span" sx={{ color: "#a5b4fc", display: "block", mt: 1 }}>
                Collaboration Platform
              </Box>
            </Typography>

            {/* Sub-headline / Description */}
            <Typography
              component={motion.p}
              variants={itemVariants}
              sx={{
                color: "#94a3b8",
                maxWidth: "650px",
                mx: { xs: "auto", lg: 0 },
                lineHeight: 1.7,
                mb: { xs: 4, md: 6 },
              }}
            >
              Transform your engineering students into industry-ready professionals with our comprehensive Campus Recruitment Training (CRT) and hands-on technical workshops.
            </Typography>

            {/* CTAs */}
            <Stack
              component={motion.div}
              variants={itemVariants}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              sx={{
                mb: { xs: 6, md: 8 },
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/workshops")}
                aria-label="Explore Workshops"
                component={motion.button}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                sx={{
                  height: "52px",
                  borderRadius: "14px",
                  bgcolor: "#6366F1",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  width: { xs: "100%", sm: "220px" },
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    bgcolor: "#4f46e5",
                  },
                }}
              >
                Explore Workshops
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/contact")}
                aria-label="Contact Us"
                component={motion.button}
                whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.96 }}
                sx={{
                  height: "52px",
                  borderRadius: "14px",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  width: { xs: "100%", sm: "220px" },
                  textTransform: "none",
                  fontSize: "16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    borderColor: "#fff",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>

            {/* Trust Indicators (Metrics) */}
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{
                mb: { xs: 6, lg: 0 },
              }}
            >
              <Grid container spacing={3} justifyContent={{ xs: "center", lg: "flex-start" }}>
                {[
                  { value: "1000+", label: "Students Trained" },
                  { value: "40+", label: "Workshops Conducted" },
                  { value: "50+", label: "CRT Programs" },
                  { value: "500+", label: "Mentorship Sessions" }
                ].map((item, idx) => (
                  <Grid size={{ xs: 6, sm: 6, md: 3 }} key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", lg: "flex-start" } }}>
                    <Typography sx={{ fontSize: "24px", fontWeight: 700, color: "#fff", lineHeight: 1.2, mb: 0.5 }}>
                      {item.value}
                    </Typography>
                    <Typography sx={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: { xs: "center", lg: "left" } }}>
                      {item.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Mobile Storytelling Placement */}
            <Box sx={{ display: { xs: 'block', lg: 'none' }, mt: 2, textAlign: 'left', width: "100%", maxWidth: "400px", mx: "auto" }}>
              <StorytellingComponent />
            </Box>
          </Grid>

          {/* VISUAL COLUMN / STORYTELLING */}
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: { xs: 'none', lg: 'block' }, position: "relative", zIndex: 2 }}>
            <Box component={motion.div} variants={itemVariants} sx={{ display: 'flex', justifyContent: 'center', width: '100%', ml: { lg: 4 } }}>
              <Box sx={{ width: '100%', maxWidth: 380 }}>
                <StorytellingComponent />
              </Box>
            </Box>
          </Grid>

        </Grid>

        {/* Module Cards */}
        <Box component={motion.div} variants={itemVariants}>
          <Typography
            sx={{
              fontSize: "0.78rem",
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 3,
            }}
          >
            ⚡ OUR LEARNING ECOSYSTEM
          </Typography>
          <Grid
            container
            spacing={3}
            wrap="wrap"
            sx={{
              pb: 1,
            }}
          >
            {modules.map((mod, i) => (
              <AnimatedCard key={mod.id} module={mod} index={i} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
