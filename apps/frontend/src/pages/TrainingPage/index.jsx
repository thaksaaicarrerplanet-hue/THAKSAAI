import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { MASTER_FONTS, MASTER_PALETTE } from "../../theme/masterThemeConfig";

const tiers = [
  {
    code: "Tier A / Apex",
    target: "Product & Competitive Algorithms",
    focus: "Advanced Data Structures, Graph Theory, Dynamic Programming, System Design optimization, and competitive coding speed for 12 LPA+ hiring tiers."
  },
  {
    code: "Tier B / Core",
    target: "Enterprise Systems & Logical Architecture",
    focus: "Object-Oriented Design, Relational Database normalization, REST API mechanics, and quantitative logical deduction for tier-1 service IT giants."
  },
  {
    code: "Tier C / Foundation",
    target: "Core Syntax & Problem Solving",
    focus: "Rigorous syntactic memory elimination, algorithmic flowchart logic, loop optimization, and fundamental language proficiency in Python/Java."
  }
];

export default function TrainingPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: MASTER_PALETTE.paper, minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: 16, color: MASTER_PALETTE.ink }}>
      {/* 1. Header Banner */}
      <Box sx={{ borderBottom: `1px solid ${MASTER_PALETTE.hairline}`, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2.5 }}>
            Institutional CRT Programme
          </Typography>
          <Typography component="h1" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.8rem", md: "4.2rem" }, color: MASTER_PALETTE.ink, lineHeight: 1.08, maxWidth: "900px", mb: 4 }}>
            Semester-length campus recruitment training, calibrated by actual student velocity.
          </Typography>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: { xs: "1.05rem", md: "1.2rem" }, color: MASTER_PALETTE.inkMuted, lineHeight: 1.7, maxWidth: "700px", mb: 6 }}>
            We discard traditional college roll-number seating. Our institutional diagnostic segregates cohorts into calibrated competency tiers—ensuring advanced thinkers are challenged while developing students gain foundational mastery.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/contact")} endIcon={<ArrowForwardRoundedIcon />} sx={{ height: "50px", px: 4.5, bgcolor: MASTER_PALETTE.ink, color: MASTER_PALETTE.paper, fontSize: "0.98rem", fontWeight: 600, borderRadius: "4px" }}>
            Schedule TPO Cohort Diagnostic
          </Button>
        </Container>
      </Box>

      {/* 2. Tiered Architecture Grid */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: MASTER_PALETTE.paperDeep, borderBottom: `1px solid ${MASTER_PALETTE.hairline}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2 }}>
            The Tiered Architecture
          </Typography>
          <Typography component="h2" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.2rem", md: "3rem" }, color: MASTER_PALETTE.ink, mb: 8, maxWidth: "760px", lineHeight: 1.15 }}>
            Why homogeneous classroom lectures produce high placement attrition.
          </Typography>

          <Grid container spacing={4}>
            {tiers.map((t, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box sx={{ p: 4.5, bgcolor: MASTER_PALETTE.paper, border: `1px solid ${MASTER_PALETTE.hairlineDark}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.82rem", color: MASTER_PALETTE.ink, textTransform: "uppercase", letterSpacing: "0.12em", mb: 1.5 }}>
                      {t.code}
                    </Typography>
                    <Typography component="h3" sx={{ fontFamily: MASTER_FONTS.display, fontSize: "1.65rem", color: MASTER_PALETTE.ink, lineHeight: 1.2, mb: 2.5 }}>
                      {t.target}
                    </Typography>
                    <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.94rem", color: MASTER_PALETTE.inkMuted, lineHeight: 1.7 }}>
                      {t.focus}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
