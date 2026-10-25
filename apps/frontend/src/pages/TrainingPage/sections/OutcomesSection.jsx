import { motion } from "framer-motion";
import { Box, Container, Typography, Card } from "@mui/material";
import { Grid } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const STATS = [
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 50, suffix: "+", label: "Career Programs" },
  { value: 40, suffix: "+", label: "Workshops Conducted" },
  { value: 500, suffix: "+", label: "Mentorship Sessions" },
];

export default function OutcomesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box sx={{ bgcolor: "#020B2D", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg" ref={ref}>
        <Grid container spacing={4} justifyContent="center">
          {STATS.map((stat, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 4,
                    p: 4,
                    textAlign: "center",
                    boxShadow: "0 0 20px rgba(99,102,241,0)",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 0 30px rgba(99,102,241,0.1)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      fontWeight: 800,
                      color: "white",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textShadow: "0 0 20px rgba(255,255,255,0.1)",
                    }}
                  >
                    {inView && <CountUp end={stat.value} duration={2.5} separator="," />}
                    {stat.suffix}
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontWeight: 500, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
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
