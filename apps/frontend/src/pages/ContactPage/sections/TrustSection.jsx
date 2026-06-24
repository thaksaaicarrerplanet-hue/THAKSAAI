import React from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const trustReasons = [
  {
    icon: CodeRoundedIcon,
    title: "Industry-Relevant Learning",
    description: "Curriculums are continuously updated to match current industry demands, ensuring students learn the technologies that matter today.",
    color: "#06B6D4",
  },
  {
    icon: EngineeringRoundedIcon,
    title: "Practical Hands-On Training",
    description: "We emphasize project-based learning and real-world scenarios over theoretical concepts to build genuine competence.",
    color: "#4F46E5",
  },
  {
    icon: TrendingUpRoundedIcon,
    title: "Career Transformation Focus",
    description: "Our primary objective is bridging the gap between academia and industry, leading directly to successful career placements.",
    color: "#8B5CF6",
  },
];

export default function TrustSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#020B2D" }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "30px", md: "42px" },
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Why Organizations Trust THAKSA.AI
          </Typography>

          <Grid container spacing={4}>
            {trustReasons.map((reason, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    p: { xs: 4, md: 5 },
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "24px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      boxShadow: `0 20px 40px ${reason.color}15`,
                    },
                  }}
                >
                  <Stack spacing={3}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "16px",
                        bgcolor: `${reason.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <reason.icon sx={{ color: reason.color, fontSize: 32 }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "22px",
                          fontWeight: 700,
                          mb: 1.5,
                        }}
                      >
                        {reason.title}
                      </Typography>
                      <Typography sx={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.6 }}>
                        {reason.description}
                      </Typography>
                    </Box>
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
