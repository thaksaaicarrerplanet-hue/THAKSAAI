import { motion } from "framer-motion";
import { Box, Container, Typography, Card, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

const INDICATORS = [
  { label: "Placement Readiness", progress: "95%", color: "#6366F1" },
  { label: "Resume Confidence", progress: "90%", color: "#10B981" },
  { label: "Interview Readiness", progress: "88%", color: "#8B5CF6" },
  { label: "Communication Improvement", progress: "92%", color: "#F59E0B" },
  { label: "Industry Awareness", progress: "94%", color: "#06B6D4" },
];

export default function SuccessSnapshotSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box sx={{ bgcolor: "#0B1228", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.625rem" },
              mb: 2,
            }}
          >
            Student Success Snapshot
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.125rem" }}>
            Average readiness indicators after completing our CRT programs.
          </Typography>
        </Box>

        <Card
          ref={ref}
          sx={{
            bgcolor: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5)",
          }}
        >
          <Stack spacing={4}>
            {INDICATORS.map((item, index) => (
              <Box key={index}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                  <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1rem" }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: item.color, fontWeight: 700, fontSize: "1rem" }}>
                    {item.progress}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: 8,
                    bgcolor: "rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: item.progress } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      backgroundColor: item.color,
                      borderRadius: 4,
                      boxShadow: `0 0 10px ${item.color}80`,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
