import React, { useState, useRef } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    Button,
    Card,
    IconButton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

// --- THEME CONSTANTS ---
const COLORS = {
    bgDark: "#020817",
    bgDarker: "#000000",
    bgCard: "rgba(255,255,255,0.03)",
    borderCard: "rgba(255,255,255,0.08)",
    primaryText: "#f8fafc",
    secondaryText: "#94a3b8",
    accent: "#6366F1",
    accentHover: "#4f46e5"
};

// --- UTILITY COMPONENTS ---
function FadeIn({ children, delay = 0, direction = "up", fullWidth = false }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
    const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial={{ opacity: 0, x: xOffset, y: yOffset }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xOffset, y: yOffset }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            sx={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 1: IMMERSIVE WORKSHOP HERO
// ───────────────────────────────────────────────
function HeroSection() {
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "80vh", md: "70vh" },
                minHeight: "600px",
                maxHeight: "800px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                bgcolor: COLORS.bgDarker,
            }}
        >
            {/* Background Image & Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url(/IMG-20260619-WA0022.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.4,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(to bottom, rgba(2,8,23,0.3) 0%, rgba(2,8,23,0.9) 100%)",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                <FadeIn delay={0.1}>
                    <Chip
                        label="OFFLINE • HANDS-ON • INDUSTRY LED"
                        sx={{
                            bgcolor: "rgba(255,255,255,0.1)",
                            color: COLORS.primaryText,
                            fontWeight: 700,
                            letterSpacing: "1px",
                            backdropFilter: "blur(10px)",
                            border: `1px solid ${COLORS.borderCard}`,
                            mb: 4,
                        }}
                    />
                </FadeIn>

                <FadeIn delay={0.2}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: COLORS.primaryText,
                            fontWeight: 800,
                            fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                            lineHeight: 1.1,
                            mb: 3,
                            maxWidth: "1000px",
                            mx: "auto",
                        }}
                    >
                        Industry Workshops That Students Actually Remember
                    </Typography>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <Typography
                        sx={{
                            color: COLORS.secondaryText,
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            maxWidth: "700px",
                            mx: "auto",
                            mb: 5,
                            lineHeight: 1.6,
                        }}
                    >
                        Practical learning experiences delivered directly at colleges through real projects, live mentoring, and industry-led sessions.
                    </Typography>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                        <Button
                            variant="contained"
                            href="#gallery"
                            sx={{
                                bgcolor: COLORS.accent,
                                color: "#fff",
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                                fontWeight: 600,
                                borderRadius: "12px",
                                textTransform: "none",
                                "&:hover": { bgcolor: COLORS.accentHover },
                            }}
                        >
                            View Workshop Gallery
                        </Button>
                        <Button
                            variant="outlined"
                            href="#contact"
                            sx={{
                                borderColor: COLORS.borderCard,
                                color: COLORS.primaryText,
                                px: 4,
                                py: 1.5,
                                fontSize: "1rem",
                                fontWeight: 600,
                                borderRadius: "12px",
                                textTransform: "none",
                                bgcolor: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                "&:hover": { borderColor: "rgba(255,255,255,0.2)", bgcolor: "rgba(255,255,255,0.1)" },
                            }}
                        >
                            Request Workshop
                        </Button>
                    </Stack>
                </FadeIn>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 2: WORKSHOP MEMORIES WALL
// ───────────────────────────────────────────────
function MemoriesWallSection() {
    // Standard Masonry / Bento grid concept
    const images = [
        { src: "/IMG-20260619-WA0004.jpg", size: { xs: 12, md: 8 }, height: 400 },
        { src: "/IMG-20260619-WA0005.jpg", size: { xs: 12, md: 4 }, height: 400 },
        { src: "/IMG-20260619-WA0007.jpg", size: { xs: 12, md: 4 }, height: 300 },
        { src: "/IMG-20260619-WA0009.jpg", size: { xs: 12, md: 4 }, height: 300 },
        { src: "/IMG-20260619-WA0011.jpg", size: { xs: 12, md: 4 }, height: 300 },
        { src: "/IMG-20260619-WA0038.jpg", size: { xs: 12, md: 12 }, height: 500 },
    ];

    return (
        <Box id="gallery" sx={{ py: { xs: 10, md: 15 }, bgcolor: COLORS.bgDark }}>
            <Container maxWidth="xl">
                <FadeIn>
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <Typography variant="h2" sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                            These workshops actually happened.
                        </Typography>
                        <Typography sx={{ color: COLORS.secondaryText, fontSize: "1.2rem" }}>
                            Glimpses from our recent campus collaborations.
                        </Typography>
                    </Box>
                </FadeIn>

                <Grid container spacing={2}>
                    {images.map((img, i) => (
                        <Grid size={{ xs: img.size.xs, md: img.size.md }} key={i}>
                            <FadeIn delay={0.1 * (i % 3)} fullWidth>
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: img.height,
                                        width: "100%",
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                        "&:hover .img-bg": { transform: "scale(1.05)" },
                                        "&:hover .img-overlay": { opacity: 0.1 }
                                    }}
                                >
                                    <Box
                                        className="img-bg"
                                        component="img"
                                        src={img.src}
                                        loading="lazy"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                        }}
                                    />
                                    <Box
                                        className="img-overlay"
                                        sx={{
                                            position: "absolute",
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            bgcolor: "#000",
                                            opacity: 0.3,
                                            transition: "opacity 0.4s ease",
                                        }}
                                    />
                                </Box>
                            </FadeIn>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 3: INSIDE A THAKSA.AI WORKSHOP
// ───────────────────────────────────────────────
function TimelineSection() {
    const steps = [
        { title: "Industry Introduction", desc: "Setting the context with real-world scenarios." },
        { title: "Hands-On Activities", desc: "Guided exercises and interactive learning." },
        { title: "Team Collaboration", desc: "Working in groups to solve problems." },
        { title: "Mini Project Build", desc: "Applying skills to build a tangible project." },
        { title: "Career Mentoring", desc: "Guidance on resumes, interviews, and paths." },
    ];

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#050B14" }}>
            <Container maxWidth="lg">
                <FadeIn>
                    <Box sx={{ textAlign: "center", mb: 10 }}>
                        <Typography variant="h2" sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                            Inside a THAKSA.AI Workshop
                        </Typography>
                    </Box>
                </FadeIn>

                <Box sx={{ position: "relative" }}>
                    {/* Vertical Line for Desktop */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: "50%",
                            width: "2px",
                            bgcolor: COLORS.borderCard,
                            transform: "translateX(-50%)",
                        }}
                    />

                    {steps.map((step, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", md: i % 2 === 0 ? "row" : "row-reverse" },
                                    alignItems: "center",
                                    mb: { xs: 4, md: 8 },
                                    position: "relative",
                                }}
                            >
                                {/* Center Node for Desktop */}
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        bgcolor: COLORS.bgDark,
                                        border: `2px solid ${COLORS.accent}`,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: COLORS.primaryText,
                                        fontWeight: 700,
                                        zIndex: 2,
                                    }}
                                >
                                    {i + 1}
                                </Box>

                                {/* Content Card */}
                                <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: { xs: "center", md: i % 2 === 0 ? "right" : "left" } }}>
                                    <Box
                                        sx={{
                                            bgcolor: COLORS.bgCard,
                                            border: `1px solid ${COLORS.borderCard}`,
                                            borderRadius: "24px",
                                            p: 4,
                                            backdropFilter: "blur(20px)",
                                            transition: "transform 0.3s ease",
                                            "&:hover": { transform: "scale(1.02)" }
                                        }}
                                    >
                                        <Typography sx={{ color: COLORS.accent, fontWeight: 700, mb: 1, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                                            Step {i + 1}
                                        </Typography>
                                        <Typography sx={{ color: COLORS.primaryText, fontWeight: 700, fontSize: "1.5rem", mb: 1 }}>
                                            {step.title}
                                        </Typography>
                                        <Typography sx={{ color: COLORS.secondaryText }}>
                                            {step.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </FadeIn>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 4: WORKSHOP TRACKS
// ───────────────────────────────────────────────
function TracksSection() {
    const tracks = [
        {
            title: "AI & Emerging Tech",
            tags: ["AI Tools", "Prompt Engineering", "Machine Learning", "GenAI"]
        },
        {
            title: "Cloud & DevOps",
            tags: ["AWS Cloud", "Docker", "CI/CD", "DevOps"]
        },
        {
            title: "Software Development",
            tags: ["Full Stack", "React", "APIs", "Databases"]
        },
        {
            title: "ECE / EEE",
            tags: ["IoT", "Embedded Systems", "VLSI", "Industry 4.0"]
        }
    ];

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: COLORS.bgDark }}>
            <Container maxWidth="lg">
                <FadeIn>
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <Typography variant="h2" sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                            Workshop Tracks
                        </Typography>
                        <Typography sx={{ color: COLORS.secondaryText, fontSize: "1.2rem" }}>
                            Specialized domains tailored for modern industry needs.
                        </Typography>
                    </Box>
                </FadeIn>

                <Grid container spacing={4}>
                    {tracks.map((track, i) => (
                        <Grid size={{ xs: 12, md: 6 }}>
                            <FadeIn delay={0.1 * i} fullWidth>
                                <Box
                                    sx={{
                                        bgcolor: COLORS.bgCard,
                                        border: `1px solid ${COLORS.borderCard}`,
                                        borderRadius: "24px",
                                        p: 5,
                                        height: "100%",
                                        backdropFilter: "blur(20px)",
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                                        transition: "all 0.3s ease",
                                        "&:hover": { borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-5px)" }
                                    }}
                                >
                                    <Typography sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: "1.8rem", mb: 3 }}>
                                        {track.title}
                                    </Typography>
                                    <Stack direction="row" flexWrap="wrap" gap={1.5}>
                                        {track.tags.map((tag, j) => (
                                            <Chip
                                                key={j}
                                                label={tag}
                                                sx={{
                                                    bgcolor: "rgba(255,255,255,0.05)",
                                                    color: COLORS.secondaryText,
                                                    border: `1px solid rgba(255,255,255,0.1)`,
                                                    borderRadius: "8px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: 600,
                                                    px: 1,
                                                    py: 2.5,
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            </FadeIn>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 5: COLLEGES WE HAVE WORKED WITH
// ───────────────────────────────────────────────
function LogosSection() {
    const colleges = ["JNTUH", "OU", "CMR", "KITS", "VCE", "SNIST", "SR University", "Malla Reddy", "CBIT", "MGIT"];

    return (
        <Box sx={{ py: 8, bgcolor: "#030A18", overflow: "hidden" }}>
            <Container maxWidth="lg" sx={{ textAlign: "center", mb: 4 }}>
                <FadeIn>
                    <Typography sx={{ color: COLORS.secondaryText, fontWeight: 600, fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                        Trusted by Top Institutions
                    </Typography>
                </FadeIn>
            </Container>

            <Box sx={{ position: "relative", display: "flex", width: "100%", overflow: "hidden" }}>
                <Box
                    component={motion.div}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    sx={{ display: "flex", whiteSpace: "nowrap", gap: { xs: 4, md: 8 }, px: 4 }}
                >
                    {[...colleges, ...colleges, ...colleges].map((college, i) => (
                        <Typography
                            key={i}
                            sx={{
                                color: "rgba(255,255,255,0.3)",
                                fontWeight: 800,
                                fontSize: { xs: "1.5rem", md: "2.5rem" },
                                transition: "color 0.3s",
                                "&:hover": { color: COLORS.primaryText }
                            }}
                        >
                            {college}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 6: WORKSHOP HIGHLIGHTS
// ───────────────────────────────────────────────
function HighlightsSection() {
    const stats = [
        { value: 50, suffix: "+", label: "Workshops" },
        { value: 1000, suffix: "+", label: "Students" },
        { value: 20, suffix: "+", label: "Campuses" },
        { value: 4.9, suffix: "/5", label: "Feedback Score", decimals: 1 },
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: COLORS.bgDark, borderTop: `1px solid ${COLORS.borderCard}`, borderBottom: `1px solid ${COLORS.borderCard}` }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {stats.map((stat, i) => (
                        <Grid size={{ xs: 6, md: 3 }}>
                            <FadeIn delay={0.1 * i}>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1 }}>
                                        <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        {stat.suffix}
                                    </Typography>
                                    <Typography sx={{ color: COLORS.secondaryText, fontWeight: 600, fontSize: "1rem", mt: 1 }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </FadeIn>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 7: TESTIMONIAL MARQUEE
// ───────────────────────────────────────────────
function TestimonialsSection() {
    const testimonials = [
        { quote: "The hands-on AWS session was incredible. Built my first CI/CD pipeline right there.", role: "CSE Student", college: "VCE", rating: 5 },
        { quote: "Finally a workshop that doesn't feel like a boring lecture. Loved the React project.", role: "IT Student", college: "SNIST", rating: 5 },
        { quote: "The mentors were actual industry folks. Gave me so much clarity on my career path.", role: "ECE Student", college: "CMR", rating: 5 },
        { quote: "Best 2 days. The GenAI track opened my eyes to what's possible.", role: "CS Student", college: "JNTUH", rating: 5 },
        { quote: "Very practical. We didn't just write code, we deployed it.", role: "Student", college: "SR University", rating: 5 },
    ];

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#050B14", overflow: "hidden" }}>
            <Container maxWidth="lg" sx={{ textAlign: "center", mb: 6 }}>
                <FadeIn>
                    <Typography variant="h2" sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" } }}>
                        What Students Say
                    </Typography>
                </FadeIn>
            </Container>

            <Box sx={{ position: "relative", display: "flex", width: "100%", overflow: "hidden" }}>
                <Box
                    component={motion.div}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    sx={{ display: "flex", gap: 3, px: 2 }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <Box
                            key={i}
                            sx={{
                                minWidth: { xs: "300px", md: "400px" },
                                p: 4,
                                bgcolor: COLORS.bgCard,
                                border: `1px solid ${COLORS.borderCard}`,
                                borderRadius: "24px",
                                backdropFilter: "blur(10px)",
                                whiteSpace: "normal"
                            }}
                        >
                            <Stack direction="row" spacing={0.5} mb={2}>
                                {[...Array(t.rating)].map((_, j) => <StarRoundedIcon key={j} sx={{ color: "#F59E0B", fontSize: 20 }} />)}
                            </Stack>
                            <Typography sx={{ color: COLORS.primaryText, fontSize: "1.1rem", fontStyle: "italic", mb: 3, lineHeight: 1.6 }}>
                                "{t.quote}"
                            </Typography>
                            <Typography sx={{ color: COLORS.secondaryText, fontWeight: 700, fontSize: "0.9rem" }}>
                                {t.role} • {t.college}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 8: FAQ
// ───────────────────────────────────────────────
function FaqSection() {
    const faqs = [
        { q: "How can my college organize a THAKSA.AI workshop?", a: "Reach out via WhatsApp or email with your college details. Our team will get back to you within 24 hours to discuss logistics." },
        { q: "Are the workshops online or offline?", a: "All THAKSA.AI workshops are strictly offline (in-person) at your college campus for maximum hands-on engagement." },
        { q: "What is the typical batch size?", a: "We conduct workshops for groups of 30–300+ students, customized based on department needs." },
        { q: "Do students get certificates?", a: "Yes, every participant receives a verified Certificate of Participation co-branded with THAKSA.AI." },
    ];

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: COLORS.bgDark }}>
            <Container maxWidth="md">
                <FadeIn>
                    <Box sx={{ textAlign: "center", mb: 8 }}>
                        <Typography variant="h2" sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                            Frequently Asked Questions
                        </Typography>
                    </Box>
                </FadeIn>

                <Box>
                    {faqs.map((faq, i) => (
                        <FadeIn key={i} delay={0.1 * i}>
                            <Accordion
                                expanded={expanded === `panel${i}`}
                                onChange={handleChange(`panel${i}`)}
                                sx={{
                                    bgcolor: "transparent",
                                    color: COLORS.primaryText,
                                    borderBottom: `1px solid ${COLORS.borderCard}`,
                                    "&:before": { display: "none" },
                                    boxShadow: "none",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: COLORS.secondaryText }} />}
                                    sx={{ py: 2, px: 0 }}
                                >
                                    <Typography sx={{ fontWeight: 600, fontSize: "1.1rem" }}>{faq.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: 0, pb: 4 }}>
                                    <Typography sx={{ color: COLORS.secondaryText, lineHeight: 1.7 }}>
                                        {faq.a}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </FadeIn>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// SECTION 9: COLLABORATION CTA
// ───────────────────────────────────────────────
function ContactSection() {
    return (
        <Box id="contact" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#030A18" }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="stretch">
                    {/* Maps Column */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FadeIn direction="right" fullWidth>
                            <Box
                                sx={{
                                    height: { xs: "320px", sm: "400px", md: "100%" },
                                    minHeight: { xs: "320px", sm: "400px", md: "400px" },
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    border: `1px solid ${COLORS.borderCard}`,
                                    position: "relative",
                                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                                }}
                            >
                                <iframe
                                    src="https://maps.google.com/maps?q=Jyothi+Imperial,+Old+Mumbai+Highway,+Gachibowli,+Hyderabad,+Telangana+500032&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%)", display: "block" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                        </FadeIn>
                    </Grid>

                    {/* Contact Card */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FadeIn direction="left" fullWidth>
                            <Box
                                sx={{
                                    bgcolor: COLORS.bgCard,
                                    border: `1px solid ${COLORS.borderCard}`,
                                    borderRadius: "24px",
                                    p: { xs: 4, md: 6 },
                                    height: "100%",
                                    backdropFilter: "blur(20px)",
                                }}
                            >
                                <Typography sx={{ color: COLORS.primaryText, fontWeight: 800, fontSize: "2rem", mb: 2 }}>
                                    Ready to collaborate?
                                </Typography>
                                <Typography sx={{ color: COLORS.secondaryText, mb: 4, fontSize: "1.1rem" }}>
                                    Bring THAKSA.AI to your campus. Reach out to our team to plan your next workshop.
                                </Typography>

                                <Stack spacing={3} mb={5}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <PhoneRoundedIcon sx={{ color: COLORS.primaryText }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: COLORS.secondaryText, fontSize: "0.9rem" }}>Call Us</Typography>
                                            <Typography component="a" href="tel:+919494808669" sx={{ color: COLORS.primaryText, fontWeight: 600, textDecoration: "none" }}>+91 94948 08669</Typography>
                                        </Box>
                                    </Stack>

                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <EmailRoundedIcon sx={{ color: COLORS.primaryText }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: COLORS.secondaryText, fontSize: "0.9rem" }}>Email</Typography>
                                            <Typography component="a" href="mailto:thaksaai@gmail.com" sx={{ color: COLORS.primaryText, fontWeight: 600, textDecoration: "none" }}>thaksaai@gmail.com</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>

                                <Button
                                    variant="contained"
                                    href="https://wa.me/919494808669"
                                    target="_blank"
                                    startIcon={<WhatsAppIcon />}
                                    fullWidth
                                    sx={{
                                        bgcolor: "#25D366",
                                        color: "#fff",
                                        py: 2,
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        borderRadius: "16px",
                                        textTransform: "none",
                                        "&:hover": { bgcolor: "#1ebe58" },
                                    }}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </Box>
                        </FadeIn>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

// ───────────────────────────────────────────────
// MAIN PAGE
// ───────────────────────────────────────────────
export default function WorkshopPage() {
    return (
        <Box sx={{ bgcolor: COLORS.bgDark, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
            <HeroSection />
            <MemoriesWallSection />
            <TimelineSection />
            <TracksSection />
            <LogosSection />
            <HighlightsSection />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection />
        </Box>
    );
}
