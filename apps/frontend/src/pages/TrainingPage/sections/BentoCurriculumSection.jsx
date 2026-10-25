import { motion } from "framer-motion";
import { Box, Container, Typography, Card } from "@mui/material";
import { Grid } from "@mui/material";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

const TOPICS = [
  { title: "Aptitude", icon: <CalculateRoundedIcon fontSize="large" />, color: "#3B82F6", size: { xs: 12, md: 4 } },
  { title: "Reasoning", icon: <PsychologyRoundedIcon fontSize="large" />, color: "#8B5CF6", size: { xs: 12, md: 4 } },
  { title: "Group Discussions", icon: <GroupsRoundedIcon fontSize="large" />, color: "#EC4899", size: { xs: 12, md: 4 } },
  { title: "Interview Skills", icon: <MicRoundedIcon fontSize="large" />, color: "#10B981", size: { xs: 12, md: 6 } },
  { title: "Resume Building", icon: <ArticleRoundedIcon fontSize="large" />, color: "#F59E0B", size: { xs: 12, md: 6 } },
  { title: "LinkedIn Optimization", icon: <WorkspacePremiumRoundedIcon fontSize="large" />, color: "#06B6D4", size: { xs: 12, md: 3 } },
  { title: "AI Productivity Tools", icon: <AutoFixHighRoundedIcon fontSize="large" />, color: "#6366F1", size: { xs: 12, md: 3 } },
  { title: "Prompt Engineering", icon: <TerminalRoundedIcon fontSize="large" />, color: "#14B8A6", size: { xs: 12, md: 3 } },
  { title: "Professional Communication", icon: <HandshakeRoundedIcon fontSize="large" />, color: "#F43F5E", size: { xs: 12, md: 3 } },
];

export default function BentoCurriculumSection() {
  return (
    <Box sx={{ bgcolor: "#020B2D", py: { xs: 8, md: 12 } }}>
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
            What Students Learn
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {TOPICS.map((topic, index) => (
            <Grid key={index} size={topic.size}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                    alignItems: "flex-start",
                    gap: 2,
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `radial-gradient(circle at top right, ${topic.color}15 0%, transparent 60%)`,
                      pointerEvents: "none",
                    },
                  }}
                >
                  <Box sx={{ color: topic.color, mb: 1 }}>{topic.icon}</Box>
                  <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1.25rem" }}>
                    {topic.title}
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
