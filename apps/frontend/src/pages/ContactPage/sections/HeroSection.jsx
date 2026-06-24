import React from "react";
import { Box, Button, Card, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function HeroSection() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #020B2D 0%, #081530 50%, #0B1228 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(79, 70, 229, 0) 70%)",
          filter: "blur(60px)",
          animation: "pulseGlow 8s infinite alternate",
        },
        "@keyframes pulseGlow": {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Box>
                <Chip
                  icon={<LocationOnRoundedIcon sx={{ fontSize: 16 }} />}
                  label="Contact THAKSA.AI"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    color: "#06B6D4",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(10px)",
                    fontWeight: 600,
                    mb: 2,
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "36px", md: "64px" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Let's Build Career-Ready Talent Together
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                Whether you're a student, college, training coordinator, or industry partner, our team is ready to help you design impactful learning experiences.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    bgcolor: "#4F46E5",
                    color: "#FFFFFF",
                    height: "52px",
                    borderRadius: "14px",
                    px: 4,
                    fontSize: "16px",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#4338CA", transform: "translateY(-2px)" },
                  }}
                >
                  Book a Discussion
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  component="a"
                  href="https://wa.me/919494808669"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#FFFFFF",
                    bgcolor: "transparent",
                    height: "52px",
                    borderRadius: "14px",
                    px: 4,
                    fontSize: "16px",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.4)",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Talk on WhatsApp
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                p: { xs: 3, md: 4 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: "20px", mb: 3 }}>
                Premium Support Dashboard
              </Typography>

              <Stack spacing={2.5}>
                {[
                  "WhatsApp Support",
                  "College Workshop Requests",
                  "CRT Program Inquiries",
                  "Partnership Discussions",
                  "Career Guidance"
                ].map((item, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        bgcolor: "rgba(6, 182, 212, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon sx={{ color: "#06B6D4", fontSize: 20 }} />
                    </Box>
                    <Typography sx={{ color: "#E2E8F0", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
