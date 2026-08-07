import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button, Stack, MenuItem } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { MASTER_FONTS, MASTER_PALETTE, SITE_BRANDING } from "../../theme/masterThemeConfig";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: MASTER_PALETTE.paper, minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: 16, color: MASTER_PALETTE.ink }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 8, md: 10 }}>
          {/* Left Column: Institutional Advisory Copy */}
          <Grid item xs={12} md={5}>
            <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2.5 }}>
              Executive Advisory Briefing
            </Typography>
            <Typography component="h1" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.6rem", md: "3.5rem" }, color: MASTER_PALETTE.ink, lineHeight: 1.1, mb: 4 }}>
              Bring a measurable placement programme to your campus.
            </Typography>
            <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "1.05rem", color: MASTER_PALETTE.inkMuted, lineHeight: 1.7, mb: 6 }}>
              Tell us your engineering cohort size and academic timeline. Our directorate will analyze your requirement and furnish a comprehensive baseline diagnostic plan within one working day.
            </Typography>

            <Box sx={{ p: 3.5, bgcolor: MASTER_PALETTE.paperDeep, border: `1px solid ${MASTER_PALETTE.hairlineDark}` }}>
              <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.88rem", color: MASTER_PALETTE.ink, textTransform: "uppercase", mb: 2 }}>
                Direct Directorate Liaison
              </Typography>
              <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.95rem", color: MASTER_PALETTE.inkMuted, mb: 1.5 }}>
                Telephone: <Box component="span" sx={{ color: MASTER_PALETTE.ink, fontWeight: 700 }}>{SITE_BRANDING.supportPhone}</Box>
              </Typography>
              <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.95rem", color: MASTER_PALETTE.inkMuted, mb: 1.5 }}>
                Electronic Mail: <Box component="span" sx={{ color: MASTER_PALETTE.ink, fontWeight: 700 }}>{SITE_BRANDING.contactEmail}</Box>
              </Typography>
              <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.95rem", color: MASTER_PALETTE.inkMuted }}>
                Regional Office: <Box component="span" sx={{ color: MASTER_PALETTE.ink, fontWeight: 600 }}>{SITE_BRANDING.officeAddress}</Box>
              </Typography>
            </Box>
          </Grid>

          {/* Right Column: TPO Intake Form */}
          <Grid item xs={12} md={7}>
            <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: MASTER_PALETTE.paper, border: `1px solid ${MASTER_PALETTE.hairlineDark}` }}>
              {submitted ? (
                <Stack spacing={3} alignItems="center" textAlign="center" sx={{ py: 8 }}>
                  <CheckCircleOutlineRoundedIcon sx={{ fontSize: 64, color: "#0D9488" }} />
                  <Typography sx={{ fontFamily: MASTER_FONTS.display, fontSize: "2.4rem", color: MASTER_PALETTE.ink }}>
                    Advisory Briefing Registered
                  </Typography>
                  <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "1.05rem", color: MASTER_PALETTE.inkMuted, maxWidth: "460px", lineHeight: 1.6 }}>
                    Your institutional consultation details have been transmitted to our senior deployment directorate. Expect a customized baseline structure within 24 working hours.
                  </Typography>
                </Stack>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Typography sx={{ fontFamily: MASTER_FONTS.display, fontSize: "2rem", color: MASTER_PALETTE.ink, mb: 4, pb: 2, borderBottom: `1px solid ${MASTER_PALETTE.hairline}` }}>
                    Institutional Consultation Docket
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Institution / College Name" variant="outlined" sx={{ bgcolor: MASTER_PALETTE.paper }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Dean or TPO Name & Title" variant="outlined" sx={{ bgcolor: MASTER_PALETTE.paper }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Institutional Email Address" type="email" variant="outlined" sx={{ bgcolor: MASTER_PALETTE.paper }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth required label="Direct Phone / WhatsApp Liaison" variant="outlined" sx={{ bgcolor: MASTER_PALETTE.paper }} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth select label="Programme Focus Track" defaultValue="crt" sx={{ bgcolor: MASTER_PALETTE.paper }}>
                        <MenuItem value="crt">Semester-Length Campus Recruitment Training (CRT)</MenuItem>
                        <MenuItem value="workshop">3 to 5 Day Practitioner Technical Workshops</MenuItem>
                        <MenuItem value="capstone">Production Enterprise Capstone Project Integration</MenuItem>
                        <MenuItem value="audit">Comprehensive TPO Placement Readiness Audit</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth multiline rows={4} label="Estimated Cohort Size & Target Academic Semester Timeline" variant="outlined" sx={{ bgcolor: MASTER_PALETTE.paper }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" endIcon={<ArrowForwardRoundedIcon />} sx={{ height: "50px", px: 5, bgcolor: MASTER_PALETTE.ink, color: MASTER_PALETTE.paper, fontSize: "1rem", fontWeight: 700, borderRadius: "4px", width: "100%", mt: 2 }}>
                        Transmit Briefing Docket to Directorate
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
