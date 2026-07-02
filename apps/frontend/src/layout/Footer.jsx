import { Box, Container, Typography, Stack, IconButton, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export default function Footer() {
  return (
    <Box component="footer" sx={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Dark professional SaaS theme */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#020617",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          overflow: "hidden",
          pb: { xs: 4, md: 5 },
          pt: { xs: 4, md: 6 }
        }}
      >
        {/* Subtle premium gradient glow */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1000px",
          height: "400px",
          background: "radial-gradient(ellipse at top center, rgba(79,70,229,0.06), transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={{ xs: 5, md: 6 }}>

            {/* Row 1: Brand & Socials */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={3}
            >
              <Box>
                <Typography sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  fontSize: { xs: "24px", md: "28px" },
                  mb: 1.5,
                  letterSpacing: "-0.02em"
                }}>
                  THAKSA.AI
                </Typography>
                <Typography sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "#94A3B8",
                  whiteSpace: { xs: "normal", md: "nowrap" }
                }}>
                  Industry-led workshops, CRT programs, and career readiness experiences.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.5}>
                {[
                  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
                  { Icon: InstagramIcon, href: "#", label: "Instagram" },
                  { Icon: EmailRoundedIcon, href: "mailto:thaksaai@gmail.com", label: "Email" }
                ].map((item, idx) => (
                  <IconButton
                    key={idx}
                    component="a"
                    href={item.href}
                    aria-label={item.label}
                    target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94A3B8",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#FFFFFF",
                        borderColor: "rgba(99,102,241,0.5)",
                        bgcolor: "rgba(255,255,255,0.06)",
                        boxShadow: "0 4px 12px rgba(99,102,241,0.15)",
                        transform: "translateY(-2px)"
                      }
                    }}
                  >
                    <item.Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>

            {/* Row 2: Navigation */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 3, md: 6 }}
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} spacing={{ xs: 1.5, sm: 3 }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.05em" }}>Platform</Typography>
                <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap sx={{ rowGap: 1 }}>
                  {[
                    { label: "Home", to: "/" },
                    { label: "Workshops", to: "/workshops" },
                    { label: "CRT Training", to: "/crt" },
                    { label: "Contact", to: "/contact" }
                  ].map((link) => (
                    <MuiLink
                      key={link.label}
                      component={RouterLink}
                      to={link.to}
                      underline="none"
                      sx={{
                        color: "#94A3B8",
                        fontSize: "14px",
                        fontWeight: 400,
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#FFFFFF" }
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Stack>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} spacing={{ xs: 1.5, sm: 3 }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.05em" }}>Programs</Typography>
                <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap sx={{ rowGap: 1 }}>
                  {[
                    { label: "Courses", to: "/courses" },
                    { label: "Batches", to: "/batches" }
                  ].map((link) => (
                    <MuiLink
                      key={link.label}
                      component={RouterLink}
                      to={link.to}
                      underline="none"
                      sx={{
                        color: "#94A3B8",
                        fontSize: "14px",
                        fontWeight: 400,
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#FFFFFF" }
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Stack>
              </Stack>
            </Stack>

            {/* Row 3: Contact */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2.5, md: 4 }}
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" component="a" href="mailto:thaksaai@gmail.com" sx={{ textDecoration: "none", color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, transition: "color 0.2s" }}>
                <EmailRoundedIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>thaksaai@gmail.com</Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center" component="a" href="tel:+919494808669" sx={{ textDecoration: "none", color: "#94A3B8", "&:hover": { color: "#FFFFFF" }, transition: "color 0.2s" }}>
                <PhoneRoundedIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>+91 94948 08669</Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: "#94A3B8" }}>
                <LocationOnRoundedIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>Gachibowli, Hyderabad</Typography>
              </Stack>
            </Stack>

            <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.06)", pt: 4 }} />

            {/* Row 4: Professional Footer Bottom */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 0 }}
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Left */}
              <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#64748B", order: { xs: 2, md: 1 } }}>
                © 2026 THAKSA.AI
              </Typography>

              {/* Center */}
              <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#64748B", textAlign: "center", order: { xs: 1, md: 2 } }}>
                Industry Workshops • CRT Programs • Career Readiness
              </Typography>

              {/* Right */}
              <Stack direction="row" spacing={2} alignItems="center" sx={{ order: 3 }}>
                <MuiLink href="#" underline="none" sx={{ color: "#64748B", fontSize: "13px", fontWeight: 400, transition: "color 0.2s", "&:hover": { color: "#94A3B8" } }}>
                  Privacy Policy
                </MuiLink>
                <MuiLink href="#" underline="none" sx={{ color: "#64748B", fontSize: "13px", fontWeight: 400, transition: "color 0.2s", "&:hover": { color: "#94A3B8" } }}>
                  Terms of Service
                </MuiLink>
              </Stack>
            </Stack>

          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
