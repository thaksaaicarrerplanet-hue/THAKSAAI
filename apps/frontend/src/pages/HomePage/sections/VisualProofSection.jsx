import React from "react";
import { Box, Typography, Container, Stack, Grid } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const workshopImages = [
  "/screenshots/IMG-20260619-WA0025.jpg",
  "/screenshots/IMG-20260619-WA0024.jpg",
  "/screenshots/IMG-20260619-WA0008.jpg",
  "/screenshots/IMG-20260619-WA0003.jpg",
  "/screenshots/IMG-20260301-WA0022.jpg",
  "/screenshots/IMG-20260301-WA0021.jpg",
  "/screenshots/IMG-20260301-WA0018.jpg",
  "/screenshots/IMG-20260301-WA0008.jpg",
];

const crtImages = [
  "/IMG-20260619-WA0039.jpg",
  "/IMG-20260619-WA0038.jpg",
  "/IMG-20260619-WA0037.jpg",
  "/IMG-20260619-WA0026.jpg",
  "/IMG-20260619-WA0023.jpg",
  "/IMG-20260619-WA0022.jpg",
  "/IMG-20260619-WA0012.jpg",
  "/IMG-20260619-WA0011.jpg",
  "/IMG-20260619-WA0009.jpg",
  "/IMG-20260619-WA0007.jpg",
  "/IMG-20260619-WA0006.jpg",
  "/IMG-20260619-WA0005.jpg",
  "/IMG-20260619-WA0004.jpg",
];

const stats = [
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 40, suffix: "+", label: "Workshops Conducted" },
  { value: 50, suffix: "+", label: "CRT Programs" },
  { value: 500, suffix: "+", label: "Mentorship Sessions" },
];

const MarqueeRow = ({ images, direction, duration, title }) => {
  const isLeftToRight = direction === "left-to-right";

  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, width: "100%", overflow: "hidden", position: "relative" }}>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight={700} color="rgba(255,255,255,0.9)">
          {title}
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${isLeftToRight ? "marquee-ltr" : "marquee-rtl"} ${duration}s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
            "& .image-card": {
              opacity: 0.7,
            },
          },
          "@keyframes marquee-ltr": {
            "0%": { transform: "translateX(-50%)" },
            "100%": { transform: "translateX(0)" },
          },
          "@keyframes marquee-rtl": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...images, ...images, ...images, ...images].map((imgSrc, index) => (
          <Box
            key={index}
            className="image-card"
            sx={{
              flexShrink: 0,
              width: { xs: 240, md: 360 },
              height: { xs: 160, md: 240 },
              mx: { xs: 1, md: 2 },
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              p: 1,
              "&:hover": {
                transform: "scale(1.03)",
                zIndex: 10,
                opacity: "1 !important",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              },
            }}
          >
            <Box
              component="img"
              src={imgSrc}
              alt="Learning in Action"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function VisualProofSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      overflow: "hidden",
      position: "relative",
      background: "linear-gradient(180deg, #071224 0%, #0B1120 50%, #111827 100%)",
      color: "white"
    }}>
      {/* Visual Depth Lights/Gradients */}
      <Box sx={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, rgba(15,23,42,0) 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Edge Fade Masks for dark mode */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "50px", md: "150px" },
          height: "100%",
          background: "linear-gradient(to right, #071224 0%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "50px", md: "150px" },
          height: "100%",
          background: "linear-gradient(to left, #071224 0%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, position: "relative", zIndex: 10 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#A855F7",
            fontWeight: 700,
            letterSpacing: 1.5,
            mb: 1,
            display: "block",
            textTransform: "uppercase"
          }}
        >
          REAL LEARNING EXPERIENCES
        </Typography>
        <Typography variant="h2" fontWeight={700} color="white" sx={{ mb: 2, fontSize: { xs: "32px", md: "40px", lg: "48px" } }}>
          Learning In Action
        </Typography>
        <Typography
          variant="h6"
          color="rgba(255,255,255,0.75)"
          sx={{ maxWidth: "700px", mx: "auto", fontWeight: 400 }}
        >
          Explore real workshops, CRT sessions, mentorship programs, and hands-on learning experiences that prepare students for industry careers.
        </Typography>
      </Container>

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <MarqueeRow images={workshopImages} direction="left-to-right" duration={70} title="Industry Workshops" />

        {/* Center Trust Panel */}
        <Container maxWidth="lg" sx={{ my: { xs: 6, md: 8 }, position: "relative", zIndex: 10 }} ref={ref}>
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              p: { xs: 4, md: 6 },
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              textAlign: "center"
            }}
          >
            <Typography variant="h4" fontWeight={700} color="white" sx={{ mb: 2 }}>
              Building Industry-Ready Professionals Through Practical Learning
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.75)" sx={{ mb: 5, maxWidth: "600px", mx: "auto" }}>
              Real workshops, real classrooms, real mentorship, and real career-focused learning experiences.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid size={{ xs: 6, sm: 3 }} key={index}>
                  <Stack alignItems="center" spacing={1}>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        background: "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
                      {stat.suffix}
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.75)" fontWeight={600} textAlign="center">
                      {stat.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <MarqueeRow images={crtImages} direction="right-to-left" duration={80} title="CRT Training Sessions" />
      </Box>
    </Box>
  );
}
