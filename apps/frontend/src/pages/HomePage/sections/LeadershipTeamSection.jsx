import React from "react";
import { Box, Container, Grid, Typography, Stack, Avatar, IconButton } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const GlassCard = ({ children, sx }) => (
  <Box
    sx={{
        backgroundColor: "transparent",

      borderRadius: 0,
        border: "1px solid #d1d7dc",
      boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.15)",
      },
      ...sx,
    }}
  >
    {children}
  </Box>
);

const NetworkLinesBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{ position: "absolute", top: 0, left: 0, zIndex: 0, opacity: 0.4, pointerEvents: "none" }}
  >
    <path
      d="M-10,50 Q20,20 50,50 T110,50"
      fill="none"
      stroke="rgba(99, 102, 241, 0.1)"
      strokeWidth="0.2"
    />
    <path
      d="M-10,80 Q30,10 70,80 T110,80"
      fill="none"
      stroke="rgba(14, 165, 233, 0.1)"
      strokeWidth="0.2"
    />
    <circle cx="20" cy="35" r="0.5" fill="rgba(99, 102, 241, 0.3)" />
    <circle cx="50" cy="50" r="0.8" fill="rgba(99, 102, 241, 0.4)" />
    <circle cx="80" cy="65" r="0.5" fill="rgba(14, 165, 233, 0.3)" />
    <circle cx="30" cy="60" r="0.6" fill="rgba(14, 165, 233, 0.3)" />
  </svg>
);

export default function LeadershipTeamSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        position: "relative",
        bgcolor: "#0B1120",
        overflow: "hidden",
      }}
    >
      <NetworkLinesBackground />

      {/* Background Gradients */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "50%",
          height: "60%",
          backgroundColor: "#1c1d1f",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "50%",
          height: "60%",
          backgroundColor: "#1c1d1f",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={{ xs: 8, md: 12 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  color: "#a435f0",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 2,
                  display: "inline-block",
                  px: 2,
                  py: 0.5,
                  borderRadius: 0,
                  bgcolor: "rgba(99, 102, 241, 0.1)",
                }}
              >
                LEADERSHIP & MENTORSHIP
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
          color: "#ffffff",
                  mb: 3,

                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Industry Experts Behind THAKSA.AI
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  color: "#64748b",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Industry professionals helping students bridge the gap between academics and real-world careers.
              </Typography>
            </motion.div>
          </motion.div>
        </Box>

        {/* Metrics Strip */}
        <Box sx={{ mb: { xs: 6, md: 8 }, display: "flex", justifyContent: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
            <Box
              sx={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: { xs: 3, md: 6 },
                backgroundColor: "transparent",

                border: "1px solid #d1d7dc",
                borderRadius: "100px",
                py: 2,
                px: { xs: 4, md: 6 },
                justifyContent: "center",
              }}
            >
              {[
                { label: "1000+", desc: "Students Reached" },
                { label: "50+", desc: "Programs" },
                { label: "40+", desc: "Workshops" }
              ].map((metric, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                    {metric.label}
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontWeight: 500, fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
                    {metric.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Executive Cards Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {/* Executive Card 01 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              style={{ height: "100%" }}
            >
              <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "row", alignItems: "center", p: { xs: 3, md: 4 }, gap: 3 }}>
                <Box sx={{ position: "relative", flexShrink: 0 }}>
                   <Box sx={{ width: 80, height: 80, borderRadius: "50%", border: "2px solid #fdba74", display: "flex", justifyContent: "center", alignItems: "center", p: 0.5 }}>
                     <Avatar
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#1c1d1f",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      RS
                    </Avatar>
                   </Box>
                </Box>

                <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                  <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 600, mb: 0.5 }}>
                    R. Sudheer
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
                    Business Operations
                  </Typography>
                </Box>
              </GlassCard>
            </motion.div>
          </Grid>

          {/* Executive Card 02 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              style={{ height: "100%" }}
            >
              <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "row", alignItems: "center", p: { xs: 3, md: 4 }, gap: 3 }}>
                <Box sx={{ position: "relative", flexShrink: 0 }}>
                   <Box sx={{ width: 80, height: 80, borderRadius: "50%", border: "2px solid #fdba74", display: "flex", justifyContent: "center", alignItems: "center", p: 0.5 }}>
                     <Avatar
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#1c1d1f",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      DM
                    </Avatar>
                   </Box>
                </Box>

                <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                  <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 600, mb: 0.5 }}>
                    Dr. Murthy
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}>
                    Senior Business Lead
                  </Typography>
                </Box>
              </GlassCard>
            </motion.div>
          </Grid>

        </Grid>

        </Container>
    </Box>
  );
}
