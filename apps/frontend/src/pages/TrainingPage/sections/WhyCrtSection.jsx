import { motion } from "framer-motion";
import { Box, Container, Typography, Card, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

const STRUGGLES = [
  "Weak Communication",
  "No Interview Practice",
  "Lack of Industry Exposure",
  "Poor Resume Quality",
];

export default function WhyCrtSection() {
  return (
    <Box sx={{ bgcolor: "#020B2D", py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="lg">
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
            Why Most Students Struggle During Placements
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          {STRUGGLES.map((struggle, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    p: 3,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "none",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(239,68,68,0.1)",
                      p: 1,
                      borderRadius: 2,
                      display: "flex",
                    }}
                  >
                    <CloseRoundedIcon sx={{ color: "#EF4444" }} />
                  </Box>
                  <Typography sx={{ color: "#E2E8F0", fontWeight: 500, fontSize: "1.1rem" }}>
                    {struggle}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#818CF8",
              }}
            >
              <ArrowDownwardRoundedIcon />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: 8,
                py: 2,
                px: { xs: 3, md: 6 },
                display: "inline-flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <SchoolRoundedIcon sx={{ color: "#94A3B8" }} />
                <Typography sx={{ color: "#94A3B8", fontWeight: 500 }}>Student</Typography>
              </Stack>
              <ArrowForwardRoundedIcon sx={{ color: "#6366F1" }} />
              <Stack direction="row" alignItems="center" spacing={1}>
                <WorkRoundedIcon sx={{ color: "#6366F1" }} />
                <Typography sx={{ color: "white", fontWeight: 600 }}>Career Ready Professional</Typography>
              </Stack>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
