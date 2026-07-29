import { Box, Container, Typography } from "@mui/material";

const IMAGES = [
  "/IMG-20260619-WA0004.jpg",
  "/IMG-20260619-WA0005.jpg",
  "/IMG-20260619-WA0006.jpg",
  "/IMG-20260619-WA0007.jpg",
  "/IMG-20260619-WA0009.jpg",
  "/IMG-20260619-WA0011.jpg",
  "/IMG-20260619-WA0012.jpg",
];

export default function VisualProofSection() {
  return (
    <Box sx={{ bgcolor: "#0B1228", py: { xs: 8, md: 12 }, overflow: "hidden" }}>
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
            Learning In Action
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          width: "200%",
          animation: "marquee 40s linear infinite",
          "&:hover": {
            animationPlayState: "paused",
          },
          "@keyframes marquee": {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...IMAGES, ...IMAGES].map((src, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "280px", md: "400px" },
              height: { xs: "200px", md: "280px" },
              flexShrink: 0,
              mx: 2,
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              position: "relative",
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img" alt="Students participating in a THAKSA.AI hands-on coding workshop"
              src={src}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
