import React from "react";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const trustBadges = [
  { label: "Industry Workshops", icon: <EngineeringRoundedIcon /> },
  { label: "CRT Programs", icon: <RocketLaunchRoundedIcon /> },
  { label: "Career Readiness", icon: <SchoolRoundedIcon /> },
  { label: "AI Learning", icon: <CodeRoundedIcon /> },
];

export default function TrustBarSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(180deg, #020B2D 0%, #020617 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5} alignItems="center" textAlign="center">
          <Typography
            sx={{
              color: "#E2E8F0",
              fontSize: { xs: "20px", md: "28px" },
              fontWeight: 600,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            "Bridging academia and industry through practical learning experiences."
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
          >
            {trustBadges.map((badge, index) => (
              <Chip
                key={index}
                icon={badge.icon}
                label={badge.label}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  color: "#94A3B8",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  px: 1,
                  py: 2.5,
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 500,
                  "& .MuiChip-icon": { color: "#4F46E5", fontSize: 20 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(79, 70, 229, 0.3)",
                    color: "#FFFFFF",
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
