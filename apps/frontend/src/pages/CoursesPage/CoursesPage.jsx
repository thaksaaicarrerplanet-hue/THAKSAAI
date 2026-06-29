import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MemoryIcon from '@mui/icons-material/Memory';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const courses = [
  {
    id: "aws",
    title: "AWS CLOUD",
    icon: CloudQueueIcon,
    summary: "Learn modern cloud infrastructure using AWS.",
    overview: "Learn modern cloud infrastructure using AWS.",
    skills: ["EC2", "S3", "IAM", "VPC", "Cloud Security", "Deployment"],
    projects: "Cloud-hosted applications, Infrastructure setup",
    outcome: "Understand real cloud deployment workflows."
  },
  {
    id: "devops",
    title: "DEVOPS ENGINEERING",
    icon: EngineeringIcon,
    summary: "Learn how modern software teams automate development and deployment.",
    overview: "Learn how modern software teams automate development and deployment.",
    skills: ["Linux", "Git", "Docker", "CI/CD", "Monitoring"],
    projects: "Automated deployment pipelines",
    outcome: "Understand complete software delivery workflows."
  },
  {
    id: "ml",
    title: "MACHINE LEARNING",
    icon: MemoryIcon,
    summary: "Learn how to build intelligent systems using data.",
    overview: "Learn how to build intelligent systems using data.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Model Training"],
    projects: "Prediction systems, Classification models",
    outcome: "Build and deploy practical machine learning solutions."
  },
  {
    id: "ai",
    title: "AI TOOLS & PROMPT ENGINEERING",
    icon: SmartToyIcon,
    summary: "Designed especially for first-year engineering students.",
    overview: "Designed especially for first-year engineering students.",
    skills: ["ChatGPT", "Claude", "Gemini", "Prompt Design", "AI Productivity"],
    projects: "AI workflows, Research assistants, Content automation",
    outcome: "Learn how to use modern AI tools effectively for academics and productivity."
  },
  {
    id: "iot",
    title: "IoT • EMBEDDED • VLSI",
    icon: DeveloperBoardIcon,
    summary: "Core electronics and hardware innovation track.",
    overview: "Core electronics and hardware innovation track.",
    skills: ["Arduino", "Embedded C", "Sensors", "Microcontrollers", "VLSI Fundamentals"],
    projects: "Smart automation systems, Embedded device prototypes",
    outcome: "Gain practical exposure to modern electronics engineering domains."
  }
];

export default function CoursesPage() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#020617",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        color: "#F8FAFC",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(2, 6, 23, 0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 }, maxWidth: "min(100%, 800px)", mx: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              mb: 3,
              letterSpacing: "-0.02em",
              background: "linear-gradient(to right, #F8FAFC, #94A3B8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Career-Focused Learning Tracks
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              color: "#94A3B8",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "min(100%, 700px)",
              mx: "auto"
            }}
          >
            Industry-relevant programs designed to help engineering students build practical skills through guided learning and real-world implementation.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {courses.map((course) => {
            const isExpanded = expandedId === course.id;
            return (
              <Grid item xs={12} md={isExpanded ? 12 : 6} lg={isExpanded ? 12 : 4} key={course.id} sx={{ transition: "all 0.3s ease" }}>
                <Box
                  component={motion.div}
                  layout
                  onClick={() => setExpandedId(isExpanded ? null : course.id)}
                  sx={{
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    p: { xs: 3, md: 4 },
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(79, 70, 229, 0.3)",
                      transform: isExpanded ? "none" : "translateY(-4px)",
                      boxShadow: "0 20px 40px -20px rgba(79, 70, 229, 0.15)"
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: isExpanded ? 4 : 0 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "16px",
                        background: "rgba(79, 70, 229, 0.1)",
                        color: "#818CF8",
                        display: "flex"
                      }}
                    >
                      <course.icon fontSize="medium" />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#F8FAFC",
                          mb: 1,
                          letterSpacing: "-0.01em"
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#94A3B8",
                          fontSize: "0.95rem",
                          lineHeight: 1.5,
                          display: isExpanded ? "none" : "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {course.summary}
                      </Typography>
                    </Box>
                  </Box>

                  <AnimatePresence>
                    {isExpanded && (
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        sx={{ overflow: "hidden" }}
                      >
                        <Grid container spacing={4}>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ mb: 4 }}>
                              <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 600, mb: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>Overview</Typography>
                              <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.6 }}>{course.overview}</Typography>
                            </Box>

                            <Box>
                              <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 600, mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>Skills Covered</Typography>
                              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {course.skills.map(skill => (
                                  <Chip
                                    key={skill}
                                    label={skill}
                                    size="small"
                                    sx={{
                                      bgcolor: "rgba(255,255,255,0.05)",
                                      color: "#CBD5E1",
                                      border: "1px solid rgba(255,255,255,0.1)",
                                      borderRadius: "8px",
                                      fontFamily: "Inter"
                                    }}
                                  />
                                ))}
                              </Box>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box sx={{ mb: 4 }}>
                              <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 600, mb: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>Project Examples</Typography>
                              <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.6 }}>{course.projects}</Typography>
                            </Box>

                            <Box>
                              <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 600, mb: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>Learning Outcome</Typography>
                              <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "rgba(79, 70, 229, 0.05)", border: "1px solid rgba(79, 70, 229, 0.1)" }}>
                                <Typography sx={{ color: "#A5B4FC", fontSize: "0.95rem", lineHeight: 1.6 }}>{course.outcome}</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </AnimatePresence>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
