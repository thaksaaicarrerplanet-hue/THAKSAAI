import SEO from "../../components/SEO";
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

import { IconButton, Modal, Backdrop, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


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


const workshopImages = [
    { src: "/IMG-20260619-WA0004.jpg", alt: "Trainer introduction and workshop kickoff", height: 320 },
    { src: "/IMG-20260619-WA0011.jpg", alt: "Student engagement during interactive sessions", height: 240 },
    { src: "/IMG-20260619-WA0009.jpg", alt: "Hands-on practical session with laptops", height: 400 },
    { src: "/IMG-20260619-WA0023.jpg", alt: "Team collaboration and group problem solving", height: 280 },
    { src: "/IMG-20260619-WA0006.jpg", alt: "Classroom interaction and Q&A", height: 350 },
    { src: "/IMG-20260619-WA0007.jpg", alt: "Faculty interaction and discussion", height: 260 },
    { src: "/IMG-20260619-WA0012.jpg", alt: "Certificate distribution ceremony", height: 300 },
    { src: "/IMG-20260619-WA0038.jpg", alt: "Group photograph of students and trainers", height: 380 },
    { src: "/IMG-20260619-WA0022.jpg", alt: "Workshop outcomes and successful completion", height: 250 },
    { src: "/IMG-20260717-WA0028.jpg", alt: "Students collaborating during an industry workshop", height: 300 },
    { src: "/IMG-20260717-WA0027.jpg", alt: "Industry workshop hands-on practical session", height: 350 },
    { src: "/IMG-20260717-WA0026.jpg", alt: "Interactive learning during industry workshop", height: 260 },
    { src: "/IMG-20260717-WA0025.jpg", alt: "Real workshop in action with student participation", height: 320 },
    { src: "/IMG-20260717-WA0024.jpg", alt: "Students engaging with trainers in workshop", height: 280 },
    { src: "/IMG-20260717-WA0023.jpg", alt: "Practical problem solving in an industry workshop", height: 240 }
];

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
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "Hands-On Engineering Workshops",
    "description": "Practical, on-campus technical workshops for engineering students. Led by industry experts.",
    "organizer": {
      "@type": "Organization",
      "name": "THAKSA.AI",
      "url": "https://www.thaksa.ai"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
  };


  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % workshopImages.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? workshopImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>

      <SEO
        title="Hands-On Engineering Workshops"
        description="Book our industry-expert led offline workshops for your engineering college. Real-world skills in AI, Cloud, and Web Development."
        url="/workshops"
        schema={eventSchema}
      />
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
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 }, maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h1" component="h1"
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
              maxWidth: "700px",
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
             <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: 700, mb: 2, textAlign: "center", color: COLORS.primaryText }}>
                Real Workshops in Action
            </Typography>
            <Typography sx={{ color: COLORS.secondaryText, fontSize: "1.1rem", textAlign: "center", mb: 6, maxWidth: "800px", mx: "auto", fontStyle: "italic" }}>
                Explore real classroom sessions, industry workshops, mentorship programs, and hands-on learning experiences delivered across engineering colleges.
            </Typography>
            <Box
                sx={{
                    columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
                    columnGap: "16px",
                    "& > div": {
                        breakInside: "avoid",
                        mb: "16px",
                    }
                }}
            >
                {workshopImages.map((item, index) => (
                    <Box key={index}>
                        <Box
                            onClick={() => openLightbox(index)}
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: `${item.height}px`,
                                borderRadius: "20px",
                                overflow: "hidden",
                                border: `1px solid rgba(255,255,255,0.1)`,
                                cursor: "pointer",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                transform: "translateZ(0)",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                                    "& img": {
                                        filter: "brightness(1.1)",
                                    }
                                }
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "filter 0.4s ease",
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Interactive Lightbox */}
            <Modal
                open={lightboxOpen}
                onClose={closeLightbox}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                        sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            backdropFilter: "blur(10px)",
                        }
                    }
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999
                }}
                aria-labelledby="lightbox-modal"
                aria-describedby="full-screen-image-gallery"
            >
                <Fade in={lightboxOpen}>
                    <Box sx={{
                        position: "relative",
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        outline: "none"
                    }}>
                        <IconButton
                            onClick={closeLightbox}
                            aria-label="Close gallery"
                            sx={{
                                position: "absolute",
                                top: { xs: 16, md: 32 },
                                right: { xs: 16, md: 32 },
                                color: "white",
                                bgcolor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(4px)",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                                zIndex: 10
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <IconButton
                            onClick={prevImage}
                            aria-label="Previous image"
                            sx={{
                                position: "absolute",
                                left: { xs: 8, md: 32 },
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                bgcolor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(4px)",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                                zIndex: 10
                            }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>

                        <IconButton
                            onClick={nextImage}
                            aria-label="Next image"
                            sx={{
                                position: "absolute",
                                right: { xs: 8, md: 32 },
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                bgcolor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(4px)",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                                zIndex: 10
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>

                        <Box sx={{ maxWidth: "90vw", maxHeight: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {workshopImages[currentImageIndex] && (
                                <img
                                    src={workshopImages[currentImageIndex].src}
                                    alt={workshopImages[currentImageIndex].alt}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "90vh",
                                        objectFit: "contain",
                                        borderRadius: "8px",
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                </Fade>
            </Modal>
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
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
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
                 <Typography sx={{ color: COLORS.secondaryText, fontSize: "1.05rem", mb: 5, maxWidth: "600px", mx: "auto", lineHeight: 1.6 }}>
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
    </>
  );
}
