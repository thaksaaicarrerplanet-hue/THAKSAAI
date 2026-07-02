import { Box, Container, Typography, Chip } from "@mui/material";

const CHIPS = [
  "📍 Gachibowli, Hyderabad",
  "🏢 Jyothi Imperial",
  "🎓 Career Learning Hub",
  "🕒 Workshops & CRT Programs",
];

export default function LearningHubSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#020617", // Deep Navy
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial gradient background */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, rgba(2, 6, 23, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{
            color: "#94a3b8",
            letterSpacing: "0.1em",
            fontWeight: 600,
            display: "block",
            mb: 2,
          }}
        >
          📍 HYDERABAD LEARNING HUB
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#f8fafc",
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          Visit Our Learning Hub
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#94a3b8",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            mb: 6,
            maxWidth: "800px",
            mx: "auto"
          }}
        >
          Located in Hyderabad's technology corridor, THAKSA.AI provides practical learning experiences, industry mentorship, career readiness programs, and professional guidance for aspiring students.
        </Typography>

        <Box
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: "24px",
            bgcolor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(0, 0, 0, 0.2)",
            mb: 4
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
              left: "-10%",
              width: "120%",
              height: "120%",
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: { xs: "100%", sm: "56.25%" }, // Aspect ratio
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <Box
              component="iframe"
              src="https://maps.google.com/maps?q=Jyothi%20Imperial,%20Gachibowli,%20Hyderabad&t=m&z=15&output=embed"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) contrast(80%)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            mt: 4
          }}
        >
          {CHIPS.map((chip, index) => (
            <Chip
              key={index}
              label={chip}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.03)",
                color: "#e2e8f0",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                fontSize: "0.9rem",
                px: 1,
                py: 2.5,
                borderRadius: "12px",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.06)",
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
