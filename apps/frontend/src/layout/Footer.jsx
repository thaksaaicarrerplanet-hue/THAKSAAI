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
      {/* Soft gradient bridge from dark to light */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60px", md: "80px" },
          background: "linear-gradient(180deg, #020617 0%, #1E293B 40%, #F8FAFC 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          bgcolor: "#F8FAFC",
          overflow: "hidden",
          pb: { xs: 4, md: 5 },
        }}
      >
        {/* Subtle radial gradient glow */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "800px",
          height: "300px",
          background: "radial-gradient(circle at top center, rgba(99,102,241,0.08), transparent 60%)",
          pointerEvents: "none",
        }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, pt: { xs: 2, md: 4 } }}>
          <Stack spacing={{ xs: 4, md: 5 }}>

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
                  color: "#0F172A",
                  lineHeight: 1,
                  fontSize: { xs: "24px", md: "32px" },
                  mb: 1.5
                }}>
                  THAKSA.AI
                </Typography>
                <Typography sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "#64748B",
                  whiteSpace: { xs: "normal", md: "nowrap" }
                }}>
                  Industry-led workshops, CRT programs, and career readiness experiences.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.5}>
                {[
                  { Icon: LinkedInIcon, href: "#" },
                  { Icon: InstagramIcon, href: "#" },
                  { Icon: EmailRoundedIcon, href: "mailto:thaksaai@gmail.com" }
                ].map((item, idx) => (
                  <IconButton
                    key={idx}
                    component="a"
                    href={item.href}
                    target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    sx={{
                      width: 44,
                      height: 44,
                      bgcolor: "transparent",
                      border: "1px solid #E2E8F0",
                      color: "#64748B",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#0F172A",
                        borderColor: "#CBD5E1",
                        bgcolor: "rgba(99,102,241,0.04)",
                        boxShadow: "0 4px 12px rgba(99,102,241,0.08)",
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
                <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#475569" }}>Platform:</Typography>
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
                        color: "#64748B",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#0F172A" }
                      }}
                    >
                      {link.label}
                    </MuiLink>
                  ))}
                </Stack>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} spacing={{ xs: 1.5, sm: 3 }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#475569" }}>Programs:</Typography>
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
                        color: "#64748B",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#0F172A" }
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
              <Stack direction="row" spacing={1.5} alignItems="center" component="a" href="mailto:thaksaai@gmail.com" sx={{ textDecoration: "none", color: "#64748B", "&:hover": { color: "#0F172A" }, transition: "color 0.2s" }}>
                <EmailRoundedIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>thaksaai@gmail.com</Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center" component="a" href="tel:+919494808669" sx={{ textDecoration: "none", color: "#64748B", "&:hover": { color: "#0F172A" }, transition: "color 0.2s" }}>
                <PhoneRoundedIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>+91 94948 08669</Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ color: "#64748B" }}>
                <LocationOnRoundedIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>Gachibowli, Hyderabad</Typography>
              </Stack>
            </Stack>

            <Box sx={{ borderTop: "1px solid #E2E8F0", pt: 3 }} />

            {/* Row 4: Footer Bottom */}
            <Stack
              direction="column"
              spacing={1.5}
              alignItems="center"
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "#64748B", textAlign: "center" }}>
                Industry Workshops • CRT Programs • Career Readiness
              </Typography>

              <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#94A3B8", textAlign: "center" }}>
                © 2026 THAKSA.AI
              </Typography>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <MuiLink href="#" underline="none" sx={{ color: "#94A3B8", fontSize: "13px", fontWeight: 400, transition: "color 0.2s", "&:hover": { color: "#475569" } }}>
                  Privacy Policy
                </MuiLink>
                <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#94A3B8" }}>•</Typography>
                <MuiLink href="#" underline="none" sx={{ color: "#94A3B8", fontSize: "13px", fontWeight: 400, transition: "color 0.2s", "&:hover": { color: "#475569" } }}>
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
