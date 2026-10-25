import { motion } from "framer-motion";
import { Box, Container, Typography, Card, Stack } from "@mui/material";

const PHASES = [
  { num: "01", title: "Foundation Skills", color: "#3B82F6" },
  { num: "02", title: "Communication & Soft Skills", color: "#8B5CF6" },
  { num: "03", title: "Aptitude & Reasoning", color: "#EC4899" },
  { num: "04", title: "Technical Readiness", color: "#F59E0B" },
  { num: "05", title: "Mock Interviews", color: "#10B981" },
  { num: "06", title: "Placement Preparation", color: "#6366F1" },
];

export default function RoadmapSection() {
  return (
    <Box sx={{ bgcolor: "#0B1228", py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.625rem" },
              mb: 2,
            }}
          >
            Your Placement Journey
          </Typography>
        </Box>

        <Stack spacing={4} sx={{ position: "relative" }}>
          {/* Vertical connecting line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "28px", sm: "40px" },
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "rgba(255,255,255,0.05)",
              zIndex: 0,
            }}
          />

          {PHASES.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Card
                sx={{
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 4,
                  p: { xs: 2.5, sm: 4 },
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 3, sm: 4 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.1)",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 56, sm: 80 },
                    height: { xs: 56, sm: 80 },
                    borderRadius: 3,
                    bgcolor: `${phase.color}15`,
                    border: `1px solid ${phase.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography sx={{ color: phase.color, fontWeight: 700, fontSize: { xs: "1.25rem", sm: "1.75rem" } }}>
                    {phase.num}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.875rem", mb: 0.5, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Phase {phase.num}
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: { xs: "1.25rem", sm: "1.5rem" }, fontWeight: 600 }}>
                    {phase.title}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
