import React from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";

const partnershipFeatures = [
  {
    title: "Industry Workshops",
    description: "Hands-on learning sessions led by industry experts to bridge the gap between academic curriculum and real-world applications.",
    color: "#06B6D4",
    gridProps: { xs: 12, md: 8 },
  },
  {
    title: "CRT Training",
    description: "Comprehensive Campus Recruitment Training designed to ensure students are fully prepared for top-tier placements.",
    color: "#4F46E5",
    gridProps: { xs: 12, md: 4 },
  },
  {
    title: "AI Programs",
    description: "Specialized training in Artificial Intelligence and Machine Learning to equip students with future-ready tech skills.",
    color: "#8B5CF6",
    gridProps: { xs: 12, md: 4 },
  },
  {
    title: "Department-Specific Training",
    description: "Tailored educational programs focusing on specific engineering branches to provide relevant, specialized knowledge.",
    color: "#10B981",
    gridProps: { xs: 12, md: 8 },
  },
];

export default function PartnershipSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020B2D" }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center" sx={{ maxWidth: 800, mx: "auto" }}>
            <Typography
              variant="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "30px", md: "42px" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Bring THAKSA.AI to Your Campus
            </Typography>
            <Typography sx={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.6 }}>
              We collaborate with colleges to conduct industry workshops, CRT programs, AI training, and career readiness initiatives.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {partnershipFeatures.map((feature, index) => (
              <Grid item {...feature.gridProps} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: feature.color,
                      opacity: 0.8,
                    },
                  }}
                >
                  <Stack spacing={2} sx={{ height: "100%", justifyContent: "center" }}>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
