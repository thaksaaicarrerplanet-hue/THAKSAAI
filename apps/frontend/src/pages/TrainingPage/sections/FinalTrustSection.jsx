import { motion } from "framer-motion";
import { Box, Container, Typography, Card } from "@mui/material";
import { Grid } from "@mui/material";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const TRUST_POINTS = [
  { title: "Industry-Oriented Curriculum", icon: <VerifiedUserRoundedIcon fontSize="large" />, color: "#6366F1" },
  { title: "Practical Learning Approach", icon: <BuildRoundedIcon fontSize="large" />, color: "#10B981" },
  { title: "Mentorship-Driven Growth", icon: <PeopleRoundedIcon fontSize="large" />, color: "#8B5CF6" },
];

export default function FinalTrustSection() {
  return (
    <Box sx={{ bgcolor: "#020617", py: { xs: 8, md: 12 }, position: "relative" }}>
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
            Why Colleges & Students Trust THAKSA.AI
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center" sx={{ mb: { xs: 6, md: 8 } }}>
          {TRUST_POINTS.map((point, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                    boxShadow: "none",
                  }}
                >
                  <Box sx={{ color: point.color }}>
                    {point.icon}
                  </Box>
                  <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1.125rem" }}>
                    {point.title}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              maxWidth: 800,
              mx: "auto",
              textAlign: "center",
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: "rgba(99,102,241,0.05)",
              border: "1px solid rgba(99,102,241,0.1)",
              position: "relative",
            }}
          >
            <FormatQuoteRoundedIcon
              sx={{
                position: "absolute",
                top: { xs: 16, md: 24 },
                left: { xs: 16, md: 24 },
                fontSize: 64,
                color: "rgba(99,102,241,0.1)",
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1.25rem", md: "1.75rem" },
                fontWeight: 500,
                lineHeight: 1.6,
                fontStyle: "italic",
                position: "relative",
                zIndex: 1,
              }}
            >
              "Bridging the gap between academic learning and industry expectations."
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
