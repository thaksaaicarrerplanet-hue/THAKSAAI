import React from "react";
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { MASTER_FONTS, MASTER_PALETTE } from "../../theme/masterThemeConfig";

const auditRecords = [
  { dept: "Computer Science & Engineering (CSE)", size: "480 Candidates", clearRate: "89.4%", tierA: "142 Engineers", primaryRecruiter: "Tier-1 Product & Systems IT" },
  { dept: "Information Technology (IT)", size: "220 Candidates", clearRate: "88.1%", tierA: "74 Engineers", primaryRecruiter: "Global Enterprise IT" },
  { dept: "Electronics & Communication (ECE)", size: "340 Candidates", clearRate: "81.5%", tierA: "68 Engineers", primaryRecruiter: "Embedded systems & IT Services" },
  { dept: "Electrical & Electronics (EEE)", size: "180 Candidates", clearRate: "76.2%", tierA: "32 Engineers", primaryRecruiter: "Core & Analytics IT" }
];

export default function PlacementsPage() {
  return (
    <Box sx={{ bgcolor: MASTER_PALETTE.paper, minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: 16, color: MASTER_PALETTE.ink }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 8, md: 10 }, maxWidth: "860px" }}>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2.5 }}>
            Verifiable Institutional Outcomes
          </Typography>
          <Typography component="h1" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.8rem", md: "4.2rem" }, color: MASTER_PALETTE.ink, lineHeight: 1.08, mb: 4 }}>
            Evidence, not adjectives. Verified placement readiness milestones.
          </Typography>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: { xs: "1.05rem", md: "1.2rem" }, color: MASTER_PALETTE.inkMuted, lineHeight: 1.7 }}>
            Our partner institutions receive unshakeable, auditable placement ledgers across all core engineering departments. Below is an aggregated representation of screening clearance rates following completion of our tiered diagnostic program.
          </Typography>
        </Box>

        <TableContainer sx={{ border: `1px solid ${MASTER_PALETTE.hairlineDark}`, borderRadius: "4px", bgcolor: MASTER_PALETTE.paper }}>
          <Table aria-label="Placement Audit Ledger">
            <TableHead>
              <TableRow sx={{ borderBottom: `2px solid ${MASTER_PALETTE.ink}` }}>
                <TableCell sx={{ color: MASTER_PALETTE.ink, fontWeight: 700, py: 2.5, px: 3, fontFamily: MASTER_FONTS.sans, textTransform: "uppercase" }}>Engineering Department</TableCell>
                <TableCell sx={{ color: MASTER_PALETTE.ink, fontWeight: 700, py: 2.5, px: 3, fontFamily: MASTER_FONTS.sans, textTransform: "uppercase" }}>Cohort Size</TableCell>
                <TableCell sx={{ color: MASTER_PALETTE.ink, fontWeight: 700, py: 2.5, px: 3, fontFamily: MASTER_FONTS.sans, textTransform: "uppercase", bgcolor: MASTER_PALETTE.paperDeep }}>Technical Screening Pass %</TableCell>
                <TableCell sx={{ color: MASTER_PALETTE.ink, fontWeight: 700, py: 2.5, px: 3, fontFamily: MASTER_FONTS.sans, textTransform: "uppercase" }}>Tier A Apex Achievers</TableCell>
                <TableCell sx={{ color: MASTER_PALETTE.ink, fontWeight: 700, py: 2.5, px: 3, fontFamily: MASTER_FONTS.sans, textTransform: "uppercase", textAlign: "right" }}>Recruiter Track</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auditRecords.map((r, idx) => (
                <TableRow key={idx} sx={{ borderBottom: `1px solid ${MASTER_PALETTE.hairline}`, "&:hover": { bgcolor: MASTER_PALETTE.paperDeep } }}>
                  <TableCell sx={{ color: MASTER_PALETTE.ink, fontWeight: 700, fontSize: "0.98rem", py: 3.5, px: 3, fontFamily: MASTER_FONTS.sans }}>{r.dept}</TableCell>
                  <TableCell sx={{ color: MASTER_PALETTE.inkMuted, fontSize: "0.95rem", py: 3.5, px: 3, fontFamily: MASTER_FONTS.sans }}>{r.size}</TableCell>
                  <TableCell sx={{ color: MASTER_PALETTE.ink, fontSize: "1.2rem", fontWeight: 700, py: 3.5, px: 3, fontFamily: MASTER_FONTS.display, bgcolor: "rgba(0,0,0,0.015)" }}>{r.clearRate}</TableCell>
                  <TableCell sx={{ color: MASTER_PALETTE.ink, fontSize: "0.95rem", fontWeight: 600, py: 3.5, px: 3, fontFamily: MASTER_FONTS.sans }}>✓ {r.tierA}</TableCell>
                  <TableCell sx={{ py: 3.5, px: 3, textAlign: "right", color: MASTER_PALETTE.inkMuted, fontSize: "0.9rem", fontFamily: MASTER_FONTS.sans, fontWeight: 500 }}>{r.primaryRecruiter}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
