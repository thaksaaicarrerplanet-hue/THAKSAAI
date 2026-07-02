import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MemoryIcon from "@mui/icons-material/Memory";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import RouterIcon from "@mui/icons-material/Router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const domains = [
  {
    id: "ai",
    title: "Artificial Intelligence & ML",
    icon: SmartToyIcon,
    summary: "Intelligent systems, deep learning, and predictive models.",
    ideas: ["Disease Prediction Systems", "NLP-based Chatbots", "Fake News Detection"],
    tech: ["Python", "TensorFlow", "Scikit-Learn", "OpenCV"],
    departments: ["CSE", "IT", "AIML"],
    outcome: "Mastering data modeling and deploying intelligent algorithms."
  },
  {
    id: "ds",
    title: "Data Science & Big Data",
    icon: DataObjectIcon,
    summary: "Large scale data analytics, visualization, and processing.",
    ideas: ["Real-time Sentiment Analysis", "Customer Churn Prediction", "Sales Forecasting"],
    tech: ["Hadoop", "Spark", "Pandas", "PowerBI"],
    departments: ["CSE", "IT", "Data Science"],
    outcome: "Building robust data pipelines and extracting actionable insights."
  },
  {
    id: "cloud",
    title: "AWS Cloud & DevOps",
    icon: CloudQueueIcon,
    summary: "Scalable infrastructure, CI/CD pipelines, and microservices.",
    ideas: ["Serverless Web Applications", "Automated Deployment Pipelines", "Cloud Cost Optimization Tools"],
    tech: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins"],
    departments: ["CSE", "IT"],
    outcome: "Designing and deploying highly available cloud architectures."
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    icon: RouterIcon,
    summary: "Hardware integration, sensor networks, and smart automation.",
    ideas: ["Smart Agriculture Systems", "Health Monitoring Wearables", "Home Automation Hubs"],
    tech: ["Arduino", "Raspberry Pi", "Sensors", "MQTT", "C++"],
    departments: ["ECE", "EEE", "CSE"],
    outcome: "Bridging physical devices with cloud data and real-time control."
  },
  {
    id: "fs",
    title: "Full Stack Development",
    icon: CodeIcon,
    summary: "End-to-end web applications with modern architectures.",
    ideas: ["E-commerce Platforms", "Task Management Systems", "Real-time Collaboration Tools"],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    departments: ["CSE", "IT"],
    outcome: "Developing scalable, secure, and responsive web applications."
  },
  {
    id: "cyber",
    title: "Cybersecurity & Blockchain",
    icon: SecurityIcon,
    summary: "Secure systems, cryptography, and decentralized apps.",
    ideas: ["Secure File Storage via Blockchain", "Intrusion Detection Systems", "Phishing Website Detectors"],
    tech: ["Solidity", "Ethereum", "Python", "Kali Linux tools"],
    departments: ["CSE", "IT"],
    outcome: "Understanding vulnerabilities and implementing secure architectures."
  }
];

const deliverables = [
    "Personalized project consultation",
    "IEEE & industry-inspired project guidance",
    "Source code with proper architecture",
    "Technical documentation (SRS, Architecture)",
    "Professional PPT preparation",
    "Research paper guidance (if applicable)",
    "Local & Cloud deployment assistance",
    "Extensive Viva preparation",
    "One-to-one mentor support",
    "Post-project technical clarification"
];

const workflow = [
    { title: "Consultation", step: "01" },
    { title: "Domain Selection", step: "02" },
    { title: "Project Planning", step: "03" },
    { title: "Development", step: "04" },
    { title: "Documentation", step: "05" },
    { title: "Testing", step: "06" },
    { title: "Final Review", step: "07" },
    { title: "Viva Preparation", step: "08" },
];

export default function FinalYearProjectsPage() {
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
      }}
    >
      <Container maxWidth="lg">
        {/* 1. Clean Introduction */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 }, maxWidth: "min(100%, 800px)", mx: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 3,
              letterSpacing: "-0.02em",
              color: "#F8FAFC",
            }}
          >
            Build a Final Year Project <Box component="br" sx={{ display: { xs: "none", md: "block" } }}/> That Stands Out
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
            Receive complete, expert guidance from initial project selection to final implementation, thorough documentation, testing, presentation design, and rigorous viva preparation.
          </Typography>
        </Box>

        {/* 2. Project Domains */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: "#F8FAFC" }}>
                Explore Project Domains
            </Typography>
            <Grid container spacing={3} justifyContent="center">
            {domains.map((domain) => {
                const isExpanded = expandedId === domain.id;
                return (
                <Grid item xs={12} md={isExpanded ? 12 : 6} lg={isExpanded ? 12 : 4} key={domain.id} sx={{ transition: "all 0.3s ease" }}>
                    <Box
                    component={motion.div}
                    layout
                    onClick={() => setExpandedId(isExpanded ? null : domain.id)}
                    sx={{
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "20px",
                        p: { xs: 3, md: 4 },
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "none",
                        "&:hover": {
                            borderColor: "rgba(99, 102, 241, 0.4)",
                            background: "rgba(255,255,255,0.04)",
                            transform: isExpanded ? "none" : "translateY(-4px)",
                            boxShadow: "0 20px 40px -20px rgba(99, 102, 241, 0.15)"
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                    >
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: isExpanded ? 4 : 0 }}>
                        <Box
                        sx={{
                            p: 1.5,
                            borderRadius: "16px",
                            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                            color: "#6366F1",
                            display: "flex"
                        }}
                        >
                        <domain.icon fontSize="medium" />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h4"
                            sx={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#F8FAFC",
                            mb: 1,
                            letterSpacing: "-0.01em"
                            }}
                        >
                            {domain.title}
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
                            {domain.summary}
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
                                <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 700, mb: 1.5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Example Ideas</Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0, color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                    {domain.ideas.map((idea, idx) => (
                                        <li key={idx} style={{ marginBottom: "8px" }}>{idea}</li>
                                    ))}
                                </Box>
                                </Box>

                                <Box>
                                <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>Technologies</Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    {domain.tech.map(tech => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        size="small"
                                        sx={{
                                        bgcolor: "rgba(255,255,255,0.05)",
                                        color: "#CBD5E1",
                                        fontWeight: 500,
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
                                <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>Suitable For</Typography>
                                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    {domain.departments.map(dept => (
                                    <Chip
                                        key={dept}
                                        label={dept}
                                        size="small"
                                        sx={{
                                        bgcolor: "rgba(99, 102, 241, 0.15)",
                                        color: "#A5B4FC",
                                        fontWeight: 600,
                                        borderRadius: "6px",
                                        fontFamily: "Inter"
                                        }}
                                    />
                                    ))}
                                </Box>
                                </Box>

                                <Box>
                                <Typography sx={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 700, mb: 1.5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Learning Outcome</Typography>
                                <Box sx={{ p: 2.5, borderRadius: "12px", bgcolor: "#020617", border: "1px solid rgba(255,255,255,0.08)" }}>
                                    <Typography sx={{ color: "#CBD5E1", fontSize: "0.95rem", lineHeight: 1.6 }}>{domain.outcome}</Typography>
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
        </Box>

        {/* 3. What Students Receive */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: "#F8FAFC" }}>
                What You Receive
            </Typography>
            <Grid container spacing={2}>
                {deliverables.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                         <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <CheckCircleOutlineIcon sx={{ color: "#10B981" }} />
                            <Typography sx={{ color: "#CBD5E1", fontWeight: 500, fontSize: "0.95rem" }}>{item}</Typography>
                         </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* 4. Project Workflow */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: "#F8FAFC" }}>
                Project Workflow
            </Typography>
            <Box sx={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                pb: 2,
                gap: 2,
                "&::-webkit-scrollbar": { height: "6px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#CBD5E1", borderRadius: "10px" }
            }}>
                {workflow.map((step, index) => (
                    <Box key={index} sx={{ minWidth: "160px", flexShrink: 0, position: "relative" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Box sx={{ width: "32px", height: "32px", borderRadius: "50%", bgcolor: "rgba(99, 102, 241, 0.15)", color: "#A5B4FC", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", zIndex: 1 }}>
                                {step.step}
                            </Box>
                            {index < workflow.length - 1 && <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "rgba(255,255,255,0.1)", ml: -1 }} />}
                        </Box>
                        <Typography sx={{ fontWeight: 600, color: "#E2E8F0", fontSize: "0.95rem" }}>{step.title}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>

        {/* 5. Final CTA */}
        <Box sx={{ maxWidth: "min(100%, 700px)", mx: "auto" }}>
            <Box sx={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
                borderRadius: "24px",
                p: { xs: 4, md: 6 },
                textAlign: "center",
                color: "#FFFFFF",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}>
                <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 2 }}>
                    Ready to Start Your Final Year Project?
                </Typography>
                 <Typography sx={{ color: "#94A3B8", fontSize: "1.05rem", mb: 4 }}>
                    Get expert guidance and build a project that stands out.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
                    <Button
                        component="a"
                        href="tel:+919494808669"
                        variant="contained"
                        sx={{
                            bgcolor: "#4F46E5",
                            color: "white",
                            px: 4,
                            py: 1.5,
                            borderRadius: "12px",
                            fontWeight: 600,
                            textTransform: "none",
                            fontSize: "1rem",
                            "&:hover": { bgcolor: "#4338CA" }
                        }}
                    >
                        Discuss Your Project
                    </Button>
                     <Button
                        component="a"
                        href="https://wa.me/919494808669"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                            bgcolor: "transparent",
                            borderColor: "rgba(255,255,255,0.2)",
                            color: "white",
                            px: 4,
                            py: 1.5,
                            borderRadius: "12px",
                            fontWeight: 600,
                            textTransform: "none",
                            fontSize: "1rem",
                            "&:hover": { borderColor: "rgba(255,255,255,0.4)", bgcolor: "rgba(255,255,255,0.05)" }
                        }}
                    >
                        WhatsApp a Mentor
                    </Button>
                </Box>
            </Box>
        </Box>

      </Container>
    </Box>
  );
}
