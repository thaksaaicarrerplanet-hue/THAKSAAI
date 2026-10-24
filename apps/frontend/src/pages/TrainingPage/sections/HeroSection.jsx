import { motion } from "framer-motion";
import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import { Grid } from "@mui/material";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const MOCKUP_DATA = [
  { label: "Resume Score", value: "92/100", progress: "92%", color: "#10B981", icon: <CheckCircleRoundedIcon fontSize="small" /> },
  { label: "Aptitude Progress", value: "Advanced", progress: "85%", color: "#3B82F6", icon: <AutoAwesomeRoundedIcon fontSize="small" /> },
  { label: "Interview Readiness", value: "High", progress: "78%", color: "#8B5CF6", icon: <ChatBubbleOutlineRoundedIcon fontSize="small" /> },
  { label: "Industry Projects", value: "4 Completed", progress: "100%", color: "#F59E0B", icon: <CodeRoundedIcon fontSize="small" /> },
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#020617",
        pt: { xs: 15, md: 20 },
        pb: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(2,6,23,0) 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Chip
                icon={<RocketLaunchRoundedIcon sx={{ fontSize: "16px !important", color: "#6366F1" }} />}
                label="Career Readiness Training Program"
                sx={{
                  bgcolor: "rgba(99,102,241,0.1)",
                  color: "#818CF8",
                  fontWeight: 600,
                  mb: 3,
                  border: "1px solid rgba(99,102,241,0.2)",
                  "& .MuiChip-label": { px: 2 },
                }}
              />
              <Typography
                variant="h1" component="h1"
                sx={{
                  color: "#FFFFFF",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Become{" "}
                <Box component="span" sx={{ color: "#6366F1" }}>
                  Placement Ready.
                </Box>
                <br />
                Not Just Degree Ready.
              </Typography>
              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  mb: 5,
                  lineHeight: 1.6,
                  maxWidth: "540px",
                }}
              >
                Master aptitude, communication, interview skills, AI tools, resume building, and industry expectations through structured CRT programs designed for engineering students.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    bgcolor: "#6366F1",
                    color: "white",
                    py: 1.5,
                    px: 4,
                    fontSize: "1rem",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#4F46E5" },
                  }}
                >
                  Join CRT Program
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    py: 1.5,
                    px: 4,
                    fontSize: "1rem",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.4)",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  Talk to Mentor
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Content - Dashboard Mockup */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(15, 23, 42, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: "rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <AutoAwesomeRoundedIcon sx={{ color: "#818CF8" }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}>Student Profile</Typography>
                    <Typography sx={{ color: "#94A3B8", fontSize: "0.875rem" }}>Readiness Overview</Typography>
                  </Box>
                </Box>

                <Stack spacing={3}>
                  {MOCKUP_DATA.map((item, index) => (
                    <Box key={index}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box sx={{ color: item.color, display: "flex" }}>{item.icon}</Box>
                          <Typography sx={{ color: "#E2E8F0", fontSize: "0.875rem", fontWeight: 500 }}>{item.label}</Typography>
                        </Box>
                        <Typography sx={{ color: "white", fontSize: "0.875rem", fontWeight: 600 }}>{item.value}</Typography>
                      </Box>
                      <Box sx={{ height: 6, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.progress }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          style={{ height: "100%", backgroundColor: item.color, borderRadius: 3 }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
