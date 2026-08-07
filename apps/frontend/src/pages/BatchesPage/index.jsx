import React from "react";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { MASTER_FONTS, MASTER_PALETTE } from "../../theme/masterThemeConfig";

const activeBatches = [
  { id: "CRT-2026-WGL-A1", inst: "National Institute & Partner Engineering Colleges, Warangal", status: "Active Runtime Assessment", tier: "Apex Algorithmics Cohort", dates: "Current Semester" },
  { id: "GENAI-LAB-HYD-04", inst: "Autonomous Engineering Institutions, Telangana Region", status: "Enrolling Institutional Cohort", tier: "Applied GenAI & RAG Systems", dates: "Upcoming Month" },
  { id: "CAPSTONE-ENTERPRISE-02", inst: "Regional University Associated Campuses", status: "In Git Continuous Integration", tier: "Cloud DevOps & Kubernetes", dates: "Ongoing Capstone" }
];

export default function BatchesPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: MASTER_PALETTE.paper, minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: 16, color: MASTER_PALETTE.ink }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 12 }, maxWidth: "800px", borderBottom: `1px solid ${MASTER_PALETTE.hairline}`, pb: 6 }}>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2.5 }}>
            Active Institutional Cohorts
          </Typography>
          <Typography component="h1" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.8rem", md: "4.2rem" }, color: MASTER_PALETTE.ink, lineHeight: 1.08, mb: 4 }}>
            Live on-campus deployment tracking across partner engineering colleges.
          </Typography>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: { xs: "1.05rem", md: "1.18rem" }, color: MASTER_PALETTE.inkMuted, lineHeight: 1.7 }}>
            Every active institutional cohort operates on structured weekly evaluation runtimes. TPOs and academic leadership may verify active batch execution metrics directly below or commission a customized cohort for the upcoming semester.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {activeBatches.map((b, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box sx={{ p: 4, bgcolor: MASTER_PALETTE.paperDeep, border: `1px solid ${MASTER_PALETTE.hairlineDark}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.75rem", color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.1em", mb: 1.5 }}>
                    ● {b.status}
                  </Typography>
                  <Typography component="h3" sx={{ fontFamily: MASTER_FONTS.display, fontSize: "1.6rem", color: MASTER_PALETTE.ink, mb: 2, lineHeight: 1.2 }}>
                    {b.id}
                  </Typography>
                  <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.92rem", color: MASTER_PALETTE.ink, fontWeight: 600, mb: 1.5 }}>
                    {b.inst}
                  </Typography>
                  <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.88rem", color: MASTER_PALETTE.inkMuted }}>
                    Curriculum Track: {b.tier}
                  </Typography>
                </Box>
                <Box sx={{ pt: 4, mt: 4, borderTop: `1px solid ${MASTER_PALETTE.hairline}` }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ fontSize: "0.8rem", color: MASTER_PALETTE.inkLight, fontFamily: MASTER_FONTS.sans }}>
                      {b.dates}
                    </Typography>
                    <Typography sx={{ fontSize: "0.88rem", fontWeight: 700, color: MASTER_PALETTE.ink, cursor: "pointer", "&:hover": { textDecoration: "underline" } }} onClick={() => navigate("/contact")}>
                      Inquire TPO Access →
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
