import { Box, Card, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useEffect, useState } from "react";

const journeySteps = [
  "Learn Skills",
  "Build Projects",
  "Receive Mentorship",
  "Prepare For Interviews",
  "Placement Readiness",
  "Career Growth",
];

export default function StorytellingComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: 0,
        backgroundColor: "transparent",


        border: "1px solid #d1d7dc",
        boxShadow: "0 24px 48px -12px rgba(15, 23, 42, 0.5)",
        overflow: "hidden",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease 0.3s",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Decorative Dashboard Header (macOS window style) */}
      <Box
        sx={{
          px: 2.5,
          py: 1.5,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Stack direction="row" spacing={0.75}>
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ef4444" }} />
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#eab308" }} />
          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22c55e" }} />
        </Stack>
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#cbd5e1",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Career Readiness Journey
        </Typography>
      </Box>

      {/* Decorative Gradient Background inside card */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundColor: "#1c1d1f",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <Box sx={{ p: { xs: 3, sm: 4 }, position: "relative", zIndex: 1 }}>
        <Stack spacing={2.5}>
          {journeySteps.map((step, index) => (
            <Stack direction="row" alignItems="center" spacing={2} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                }}
              >
                <CheckCircleRoundedIcon sx={{ fontSize: 20 }} />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#f8fafc",
                  fontSize: "1rem",
                }}
              >
                {step}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Card>
  );
}
