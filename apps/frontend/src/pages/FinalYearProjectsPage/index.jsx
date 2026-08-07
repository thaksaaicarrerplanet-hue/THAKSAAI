import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { MASTER_FONTS, MASTER_PALETTE } from "../../theme/masterThemeConfig";

const pillars = [
  {
    num: "I",
    title: "Production Git workflows",
    desc: "Eliminating static zip folder submissions. Students implement industry branch architecture, semantic commits, code review pull requests, and automated branch protection rules."
  },
  {
    num: "II",
    title: "Automated test suites & CI/CD",
    desc: "Every capstone must demonstrate exceeding 80% automated unit and integration test coverage executing inside continuous integration server pipelines prior to production merger."
  },
  {
    num: "III",
    title: "Architectural peer defense",
    desc: "Simulating enterprise RFC (Request for Comments) design reviews. Teams defend their database indexing, caching strategies, and security schemas before active tech leads."
  }
];

export default function FinalYearProjectsPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: MASTER_PALETTE.paper, minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: 16, color: MASTER_PALETTE.ink }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: { xs: 8, md: 12 }, maxWidth: "880px", borderBottom: `1px solid ${MASTER_PALETTE.hairline}`, pb: 6 }}>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2.5 }}>
            Enterprise Capstone Architecture
          </Typography>
          <Typography component="h1" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.8rem", md: "4.2rem" }, color: MASTER_PALETTE.ink, lineHeight: 1.08, mb: 4 }}>
            Eliminate obsolete academic demos. Architect verified enterprise portfolios.
          </Typography>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: { xs: "1.05rem", md: "1.2rem" }, color: MASTER_PALETTE.inkMuted, lineHeight: 1.7, mb: 5 }}>
            THAKSAAI converts mandatory final-year engineering requirements from static, copied scripts into live production microservices deployed on AWS and GCP—providing unshakeable evidence during technical interview screening.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/contact")} endIcon={<ArrowForwardRoundedIcon />} sx={{ height: "50px", px: 4.5, bgcolor: MASTER_PALETTE.ink, color: MASTER_PALETTE.paper, fontSize: "0.98rem", fontWeight: 600, borderRadius: "4px" }}>
            Institutional Capstone Consultation
          </Button>
        </Box>

        {/* Pillars of Verified Production */}
        <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2 }}>
          The Production Standard
        </Typography>
        <Typography component="h2" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.2rem", md: "3rem" }, color: MASTER_PALETTE.ink, mb: 8, maxWidth: "760px", lineHeight: 1.15 }}>
          Three mandatory pillars separating academic projects from software engineering.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 12 }}>
          {pillars.map((p, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box sx={{ p: 4.5, bgcolor: MASTER_PALETTE.paperDeep, border: `1px solid ${MASTER_PALETTE.hairlineDark}`, height: "100%" }}>
                <Typography sx={{ fontFamily: MASTER_FONTS.display, fontSize: "2.5rem", color: MASTER_PALETTE.inkMuted, mb: 1.5, lineHeight: 1 }}>
                  {p.num}
                </Typography>
                <Typography component="h3" sx={{ fontFamily: MASTER_FONTS.display, fontSize: "1.6rem", color: MASTER_PALETTE.ink, mb: 2, lineHeight: 1.2 }}>
                  {p.title}
                </Typography>
                <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.94rem", color: MASTER_PALETTE.inkMuted, lineHeight: 1.7 }}>
                  {p.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
