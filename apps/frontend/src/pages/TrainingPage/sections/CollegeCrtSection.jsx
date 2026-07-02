import { motion } from "framer-motion";
import { Box, Container, Typography, Card } from "@mui/material";
import { Grid } from "@mui/material";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import CastForEducationRoundedIcon from "@mui/icons-material/CastForEducationRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const PROGRAMS = [
  { title: "Offline Training", icon: <DomainRoundedIcon fontSize="large" />, color: "#6366F1", desc: "In-campus immersive learning" },
  { title: "Hybrid Training", icon: <CastForEducationRoundedIcon fontSize="large" />, color: "#10B981", desc: "Flexible blended modules" },
  { title: "Department-Specific", icon: <Diversity3RoundedIcon fontSize="large" />, color: "#F59E0B", desc: "Tailored for specific branches" },
  { title: "Placement Bootcamps", icon: <RocketLaunchRoundedIcon fontSize="large" />, color: "#8B5CF6", desc: "Intensive prep sessions" },
];

export default function CollegeCrtSection() {
  return (
    <Box sx={{ bgcolor: "#020B2D", py: { xs: 8, md: 12 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, maxWidth: 800, mx: "auto" }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.625rem" },
              mb: 3,
            }}
          >
            Available for Campus-Wide CRT Programs
          </Typography>
          <Typography sx={{ color: "#94A3B8", fontSize: "1.125rem", lineHeight: 1.6 }}>
            THAKSA.AI collaborates with colleges to conduct structured CRT programs designed to improve student employability and placement readiness.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {PROGRAMS.map((program, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
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
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.04)",
                      transform: "translateY(-4px)",
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: program.color,
                      bgcolor: `${program.color}15`,
                      p: 2,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {program.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1.125rem", mb: 0.5 }}>
                      {program.title}
                    </Typography>
                    <Typography sx={{ color: "#94A3B8", fontSize: "0.875rem" }}>
                      {program.desc}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
