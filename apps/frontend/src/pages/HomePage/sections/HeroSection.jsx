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
    >
      <Card
        onClick={() => navigate(module.route)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
          transform: visible
            ? hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
            : "translateY(40px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: `all 0.55s cubic-bezier(0.34,1.56,0.64,1) ${index * 120}ms`,
          position: "relative",

          p: { xs: 3, md: 4 },
        }}
      >
        {/* Glow blob */}
        <Box
          sx={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: module.gradient,
            opacity: hovered ? 0.3 : 0.1,
            filter: "blur(40px)",
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />

        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          {/* Icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "24px",
              background: module.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              boxShadow: `0 8px 24px ${module.bgGlow}`,
              transform: hovered ? "scale(1.05) translateY(-4px)" : "scale(1) translateY(0)",
              transition: "transform 0.4s ease",
            }}
          >
            <Icon sx={{ color: "#fff", fontSize: 34 }} />
          </Box>

          <Chip
            label={module.tag}
            size="small"
            sx={{
              mb: 3,

              fontSize: "0.75rem",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: `1px solid rgba(255, 255, 255, 0.2)`,
            }}
          />

          <Typography
            variant="h5"
            sx={{

              color: "#ffffff",
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            {module.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",

              color: "#cbd5e1",
              mb: 0,
            }}
          >
            {module.subtitle}
          </Typography>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ flexGrow: 1, mb: 4 }}>
          <Stack spacing={1.5}>
            {module.benefits.map((benefit, i) => (
              <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
                <CheckCircleRoundedIcon sx={{ fontSize: 18, color: module.color, opacity: 0.9 }} />
                <Typography sx={{ color: "#e2e8f0", fontSize: "0.95rem",  }}>
                  {benefit}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* CTA */}
        <Box sx={{ mt: "auto" }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              color: "#ffffff",
              opacity: hovered ? 1 : 0.8,
              transition: "opacity 0.3s ease",
            }}
          >
            <Typography sx={{  fontSize: "0.95rem" }}>Learn More</Typography>
            <ArrowForwardRoundedIcon
              sx={{
                fontSize: 20,
                transform: hovered ? "translateX(6px)" : "translateX(0)",
                transition: "transform 0.3s ease",
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
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

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

      {/* Dark overlay for readability (target ~15-20% video visibility) */}
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>

        {/* ── Top row: text content + logo ── */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          {/* TEXT COLUMN */}
          <Grid size={{ xs: 12, lg: 7 }} sx={{ position: "relative", zIndex: 2, textAlign: { xs: "center", lg: "left" } }}>
            {/* Badge */}
            <Box
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
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-12px)",
                transition: "all 0.5s ease",
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
              variant="h1"
              sx={{
                color: "#ffffff",
                mb: 3,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.1s",
                fontWeight: 800,
                lineHeight: 1.05,




              }}
            >
              <Box component="span" sx={{ position: "relative", display: "inline-block" }}>

                Your Future Deserves
              </Box>{" "}
              <Box component="span" sx={{ color: "#a5b4fc" }}>
                More Than Just Another
              </Box>{" "}
              Online Course.
            </Typography>

            {/* Sub-headline / Description */}
            <Typography
              sx={{
                color: "#94a3b8",
                maxWidth: "650px",
                mx: { xs: "auto", lg: 0 },
                lineHeight: 1.7,
                mb: { xs: 4, md: 6 },
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.2s",

              }}
            >
              Discover immersive learning, industry projects, career guidance, and an AI-powered ecosystem built to prepare you for real opportunities.
            </Typography>

            {/* CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              sx={{
                mb: { xs: 6, md: 8 },
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.3s",
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/workshops")}
                aria-label="Explore Workshops"
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
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.4)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Explore Workshops
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/contact")}
                aria-label="Contact Us"
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
                    background: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Contact Us
              </Button>
            </Stack>

            {/* Trust Indicators (Metrics) */}
            <Box
              sx={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease 0.4s",
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

            {/* Mobile Storytelling Placement (Moved below metrics) */}
            <Box sx={{ display: { xs: 'block', lg: 'none' }, mt: 2, textAlign: 'left', width: "100%", maxWidth: "400px", mx: "auto" }}>
              <StorytellingComponent />
            </Box>
          </Grid>

          {/* VISUAL COLUMN / STORYTELLING */}
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: { xs: 'none', lg: 'block' }, position: "relative", zIndex: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', ml: { lg: 4 } }}>
              <Box sx={{ width: '100%', maxWidth: 380 }}>
                <StorytellingComponent />
              </Box>
            </Box>
          </Grid>

        </Grid>

        {/* Module Cards */}
        <Box
          sx={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 0.4s",
          }}
        >
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
