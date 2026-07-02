import { motion } from "framer-motion";
import { Box, Container, Typography, Card } from "@mui/material";
import { Grid } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const AI_TOOLS = [
  "AI Research",
  "Prompt Engineering",
  "ChatGPT Productivity",
  "Resume Optimization",
  "AI for Placements",
  "AI Career Tools",
];

export default function AiAdvantageSection() {
  return (
    <Box sx={{ bgcolor: "#0B1228", py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, maxWidth: 800, mx: "auto" }}>
          <Typography
            sx={{
              color: "#8B5CF6",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              mb: 2,
            }}
          >
            Unique THAKSA.AI Positioning
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.625rem" },
              mb: 3,
            }}
          >
            Beyond Traditional CRT
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.125rem", lineHeight: 1.6 }}>
            Students learn how to use AI tools to accelerate learning, improve productivity, and prepare for the future workplace.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {AI_TOOLS.map((tool, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(99,102,241,0.05) 100%)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    borderRadius: 4,
                    p: 4,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px rgba(139,92,246,0.15)",
                      borderColor: "rgba(139,92,246,0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(139,92,246,0.2)",
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <AutoAwesomeRoundedIcon sx={{ color: "#A855F7" }} />
                  </Box>
                  <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1.125rem" }}>
                    {tool}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
