import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MemoryIcon from "@mui/icons-material/Memory";
import CodeIcon from "@mui/icons-material/Code";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import RouterIcon from "@mui/icons-material/Router";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const COLORS = {
    bgDark: "#020617",
    primaryText: "#F8FAFC",
    secondaryText: "#94A3B8",
    bgCard: "rgba(255,255,255,0.02)",
    borderCard: "rgba(255,255,255,0.08)",
    primary: "#4F46E5",
    primaryLight: "rgba(79, 70, 229, 0.15)",
    primaryTextLight: "#A5B4FC"
};

const domains = [
  {
    id: "ai",
    title: "Artificial Intelligence & ML",
    icon: SmartToyIcon,
    duration: "2-3 Days",
    prerequisites: "Basic Python knowledge",
    activities: ["Building neural networks", "Training image classification models", "Deploying NLP pipelines"],
    outcome: "Students gain practical experience building and training predictive models from scratch."
  },
  {
    id: "prompt",
    title: "AI Tools & Prompt Engineering",
    icon: SmartToyIcon,
    duration: "1-2 Days",
    prerequisites: "None",
    activities: ["Advanced LLM prompting techniques", "Automating workflows with AI", "Building custom AI agents"],
    outcome: "Equips students with state-of-the-art AI productivity skills for academics and future careers."
  },
  {
    id: "cloud",
    title: "AWS Cloud & DevOps",
    icon: CloudQueueIcon,
    duration: "2-3 Days",
    prerequisites: "Basic networking & OS concepts",
    activities: ["Deploying EC2 instances", "Setting up CI/CD with Jenkins", "Docker containerization labs"],
    outcome: "Provides hands-on exposure to deploying and managing highly available cloud architectures."
  },
  {
    id: "fs",
    title: "Full Stack Development",
    icon: CodeIcon,
    duration: "3-5 Days",
    prerequisites: "Basic HTML/CSS/JS",
    activities: ["Building responsive React UIs", "Developing Node.js REST APIs", "Connecting to MongoDB"],
    outcome: "Students build a complete, deployable web application from frontend to backend."
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    icon: RouterIcon,
    duration: "2-3 Days",
    prerequisites: "Basic C/C++ knowledge",
    activities: ["Arduino programming", "Interfacing sensors & actuators", "Building cloud dashboards via MQTT"],
    outcome: "Hands-on experience bridging physical hardware with digital networks and cloud platforms."
  },
  {
    id: "vlsi",
    title: "VLSI Design",
    icon: MemoryIcon,
    duration: "2-4 Days",
    prerequisites: "Digital logic design basics",
    activities: ["Verilog/VHDL coding", "FPGA implementation", "Logic synthesis and simulation"],
    outcome: "Practical skills in modern chip design workflows and hardware description languages."
  }
];

const benefits = [
    { title: "Industry Mentors", desc: "Workshops led by experienced software engineers." },
    { title: "Practical Learning", desc: "90% hands-on labs, 10% theory." },
    { title: "Flexible Scheduling", desc: "Customized to fit your academic calendar." },
    { title: "Campus Delivery", desc: "Conducted offline at your institution." },
    { title: "Certificates", desc: "Verified participation certificates provided." },
    { title: "Real Project Demos", desc: "Students build functional mini-projects." }
];

const workflow = [
    { title: "Institution Discussion", step: "01" },
    { title: "Curriculum Finalization", step: "02" },
    { title: "Workshop Planning", step: "03" },
    { title: "On-Campus Delivery", step: "04" },
    { title: "Hands-On Labs", step: "05" },
    { title: "Certificate Distribution", step: "06" }
];

const partners = [
    { name: "JNTU", logo: "/logos/jntu.png" }, // Mock data, fallback to text if image fails
    { name: "Osmania University", logo: "/logos/ou.png" },
    { name: "CVR College of Engineering", logo: "/logos/cvr.png" },
    { name: "VNR VJIET", logo: "/logos/vnr.png" },
    { name: "GRIET", logo: "/logos/griet.png" },
    { name: "KMIT", logo: "/logos/kmit.png" }
];


export default function WorkshopPage() {
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
        bgcolor: COLORS.bgDark,
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        color: COLORS.primaryText,
      }}
    >
      <Container maxWidth="lg">
        {/* 1. Compact Introduction */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 }, maxWidth: "min(100%, 800px)", mx: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 3,
              letterSpacing: "-0.02em",
              color: COLORS.primaryText,
            }}
          >
            Industry Workshops for Engineering Institutions
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              color: COLORS.secondaryText,
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "min(100%, 700px)",
              mx: "auto"
            }}
          >
            Partner with THAKSA.AI to deliver practical, industry-led technical workshops at your campus. Bridge the gap between academic learning and real-world technology.
          </Typography>
        </Box>

        {/* 2. Workshop Domains */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: COLORS.primaryText }}>
                Available Workshop Domains
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
                        background: COLORS.bgCard,
                        border: `1px solid ${COLORS.borderCard}`,
                        borderRadius: "20px",
                        backdropFilter: "blur(20px)",
                        p: { xs: 3, md: 4 },
                        cursor: "pointer",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "none",
                        "&:hover": {
                            borderColor: "rgba(79, 70, 229, 0.4)",
                            background: "rgba(255,255,255,0.04)",
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
                            background: COLORS.primaryLight,
                            color: COLORS.primaryTextLight,
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
                            color: COLORS.primaryText,
                            mb: 1,
                            letterSpacing: "-0.01em"
                            }}
                        >
                            {domain.title}
                        </Typography>
                         <Typography
                            variant="body2"
                            sx={{
                                color: COLORS.primaryTextLight,
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                mb: 1
                            }}
                        >
                           Duration: {domain.duration}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                            color: COLORS.secondaryText,
                            fontSize: "0.95rem",
                            lineHeight: 1.5,
                            display: isExpanded ? "none" : "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                            }}
                        >
                            {domain.outcome}
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
                                <Typography sx={{ color: COLORS.primaryText, fontSize: "0.875rem", fontWeight: 700, mb: 1.5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Practical Activities</Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0, color: COLORS.secondaryText, fontSize: "0.95rem", lineHeight: 1.6 }}>
                                    {domain.activities.map((activity, idx) => (
                                        <li key={idx} style={{ marginBottom: "8px" }}>{activity}</li>
                                    ))}
                                </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box sx={{ mb: 4 }}>
                                <Typography sx={{ color: COLORS.primaryText, fontSize: "0.875rem", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>Prerequisites</Typography>
                                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    <Chip
                                        label={domain.prerequisites}
                                        size="small"
                                        sx={{
                                        bgcolor: "rgba(255,255,255,0.05)",
                                        color: "#CBD5E1",
                                        fontWeight: 500,
                                        borderRadius: "6px",
                                        fontFamily: "Inter"
                                        }}
                                    />
                                </Box>
                                </Box>

                                <Box>
                                <Typography sx={{ color: COLORS.primaryText, fontSize: "0.875rem", fontWeight: 700, mb: 1.5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Learning Outcome</Typography>
                                <Box sx={{ p: 2.5, borderRadius: "12px", bgcolor: COLORS.bgDark, border: `1px solid ${COLORS.borderCard}` }}>
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

        {/* 3. Workshop Delivery Model */}
         <Box sx={{ mb: { xs: 12, md: 16 } }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: COLORS.primaryText }}>
                Delivery Model
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
                    <Box key={index} sx={{ minWidth: "180px", flexShrink: 0, position: "relative" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Box sx={{ width: "32px", height: "32px", borderRadius: "50%", bgcolor: COLORS.primaryLight, color: COLORS.primaryTextLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", zIndex: 1 }}>
                                {step.step}
                            </Box>
                            {index < workflow.length - 1 && <Box sx={{ flexGrow: 1, height: "2px", bgcolor: "rgba(255,255,255,0.1)", ml: -1 }} />}
                        </Box>
                        <Typography sx={{ fontWeight: 600, color: "#E2E8F0", fontSize: "0.95rem" }}>{step.title}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>

        {/* 4. Workshop Gallery (Primary Showcase) */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: COLORS.primaryText }}>
                Real Workshops in Action
            </Typography>
            <Grid container spacing={2}>
                {/* Fallback to colorful placeholder boxes if no real images exist in the system */}
                {[
                    { height: 300, bg: "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)" },
                    { height: 200, bg: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)" },
                    { height: 250, bg: "linear-gradient(135deg, #b45309 0%, #78350f 100%)" },
                    { height: 350, bg: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)" },
                    { height: 200, bg: "linear-gradient(135deg, #be185d 0%, #831843 100%)" },
                    { height: 300, bg: "linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)" },
                ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                         <Box
                            sx={{
                                height: `${item.height}px`,
                                borderRadius: "16px",
                                background: item.bg,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                border: `1px solid ${COLORS.borderCard}`,
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                                }
                            }}
                         >
                            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Workshop Photo {index + 1}</Typography>
                         </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* 5. Institutional Benefits */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
             <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, textAlign: "center", color: COLORS.primaryText }}>
                Institutional Benefits
            </Typography>
            <Grid container spacing={3}>
                {benefits.map((benefit, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                         <Box sx={{ p: 3, borderRadius: "16px", bgcolor: COLORS.bgCard, border: `1px solid ${COLORS.borderCard}`, height: "100%" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                                <CheckCircleOutlineIcon sx={{ color: COLORS.primary }} />
                                <Typography sx={{ color: COLORS.primaryText, fontWeight: 700, fontSize: "1.05rem" }}>{benefit.title}</Typography>
                            </Box>
                            <Typography sx={{ color: COLORS.secondaryText, fontSize: "0.95rem", lineHeight: 1.5 }}>{benefit.desc}</Typography>
                         </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* 6. Institutions We've Worked With */}
        <Box sx={{ mb: { xs: 12, md: 16 }, textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 6, color: COLORS.primaryText }}>
                Institutions We've Worked With
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                 {partners.map((partner, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                         <Box sx={{ p: 2, opacity: 0.6, transition: "opacity 0.3s", "&:hover": { opacity: 1 } }}>
                             {/* Fallback to text if logos aren't in public dir */}
                            <Typography sx={{ fontWeight: 800, color: COLORS.primaryText, fontSize: "1.1rem" }}>{partner.name}</Typography>
                         </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>

        {/* 7. Workshop Request */}
        <Box sx={{ maxWidth: "min(100%, 800px)", mx: "auto" }}>
            <Box sx={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                border: `1px solid ${COLORS.borderCard}`,
                borderRadius: "24px",
                p: { xs: 4, md: 6 },
                textAlign: "center",
                color: "#FFFFFF",
                backdropFilter: "blur(20px)"
            }}>
                <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 2 }}>
                    Bring a THAKSA.AI Workshop to Your Campus
                </Typography>
                 <Typography sx={{ color: COLORS.secondaryText, fontSize: "1.05rem", mb: 5, maxWidth: "min(100%, 600px)", mx: "auto", lineHeight: 1.6 }}>
                    Tell us about your institution, preferred domain, student strength, and schedule. Our team will prepare a customized workshop proposal.
                </Typography>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
                     <Button
                        component="a"
                        href="/contact"
                        variant="contained"
                        startIcon={<EmailRoundedIcon />}
                        sx={{
                            bgcolor: COLORS.primary,
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
                        Request Workshop Proposal
                    </Button>
                     <Button
                        component="a"
                        href="/contact"
                        variant="outlined"
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
                        Contact Our Team
                    </Button>
                </Box>
            </Box>
        </Box>

      </Container>
    </Box>
  );
}
