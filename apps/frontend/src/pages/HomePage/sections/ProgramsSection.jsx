import { Box, Card, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
          p: { xs: 3, sm: 3.5 },
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${hovered ? module.color : 'rgba(255,255,255,0.1)'}`,
          boxShadow: hovered
            ? `0 20px 40px ${module.bgGlow}`
            : "0 4px 20px rgba(0,0,0,0.1)",
          transform: visible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(40px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: visible ? `${index * 100}ms` : "0ms",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Effect behind icon */}
        <Box
          sx={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 120,
            height: 120,
            background: module.gradient,
            opacity: 0.15,
            filter: "blur(30px)",
            borderRadius: "50%",
            transition: "all 0.5s ease",
            transform: hovered ? "scale(1.5)" : "scale(1)",
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "16px",
              background: module.bgGlow,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: module.color,
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <Icon sx={{ fontSize: 28 }} />
          </Box>
          <Chip
            label={module.tag}
            size="small"
            sx={{
              bgcolor: module.tagBg,
              color: module.tagColor,
              fontWeight: 600,
              fontSize: "0.75rem",
              borderRadius: "8px",
              border: `1px solid ${module.borderColor}`
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 1, fontSize: "1.35rem" }}>
            {module.title}
          </Typography>
          <Typography sx={{ color: "#94a3b8", fontSize: "0.95rem", mb: 3, fontWeight: 500 }}>
            {module.subtitle}
          </Typography>

          <Stack spacing={1.5} sx={{ mb: 4 }}>
            {module.benefits.map((benefit, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <CheckCircleRoundedIcon sx={{ fontSize: 18, color: module.color, opacity: 0.8 }} />
                <Typography sx={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>
              Explore Program
            </Typography>
            <ArrowForwardRoundedIcon
              sx={{
                fontSize: 18,
                transform: hovered ? "translateX(6px)" : "none",
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

export default function ProgramsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0F172A' }}>
      <Container maxWidth="lg">
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
            ⚡ Explore Our Programmes
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
