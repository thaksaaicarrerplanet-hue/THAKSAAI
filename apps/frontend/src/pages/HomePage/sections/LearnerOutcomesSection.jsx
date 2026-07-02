import { Box, Container, Typography, Stack, Paper, IconButton } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useRef, useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    name: "Mohammed Azhar",
    role: "Computer Science Student",
    review: "The AWS Cloud and DevOps workshop helped me understand how modern applications are deployed and managed in real-world environments. Concepts like EC2, S3, CI/CD pipelines, Docker, and cloud infrastructure became much easier to understand through the practical demonstrations. As a student, this gave me valuable exposure to industry technologies that are rarely covered in traditional academics."
  },
  {
    name: "K. Rahul",
    role: "Final Year Student",
    review: "The Machine Learning sessions provided a strong foundation in data-driven problem solving. The trainers explained complex concepts such as model training, feature engineering, and predictive analytics in a simple and practical manner. Working on hands-on examples helped me gain confidence in applying machine learning techniques to real-world scenarios."
  },
  {
    name: "Sheikh Zubair",
    role: "Aspiring Software Engineer",
    review: "As a first-year student, I was amazed by how AI tools can improve productivity, learning, and creativity. The Prompt Engineering workshop taught us how to communicate effectively with AI systems and use them for research, coding, content creation, and problem-solving. This session completely changed the way I look at technology and future careers."
  },
  {
    name: "Pavan Kumar",
    role: "Workshop Participant",
    review: "The learning environment feels professional and structured. Every session had practical value and actionable takeaways."
  },
  {
    name: "Mohammed Farooq",
    role: "Engineering student",
    review: "Before attending the workshop, cloud computing and DevOps seemed complicated. The trainers broke down every concept with real-world examples and practical use cases. Learning about cloud deployment, automation, and modern development workflows gave me a much clearer understanding of how technology teams operate in the industry."
  },
  {
    name: "Ayesha Fathima",
    role: "Computer Science student",
    review: "The AI and Machine Learning program was highly engaging and future-focused. From understanding AI tools to exploring machine learning applications, every session was designed to build practical knowledge. The hands-on approach made learning enjoyable and motivated me to pursue advanced skills in AI technologies."
  }
];

export default function LearnerOutcomesSection() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const getScrollAmount = () => {
    if (!containerRef.current) return 0;
    // Assuming container width is roughly divided into 3 on desktop, 1 on mobile
    // Taking the width of one child as the scroll amount
    return containerRef.current.children[0].offsetWidth;
  };

  const handleNext = () => {
    if (containerRef.current) {
      const scrollAmount = getScrollAmount();
      const newScrollLeft = containerRef.current.scrollLeft + scrollAmount;
      // Loop back if reached the end
      if (newScrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
         containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
         containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const scrollAmount = getScrollAmount();
      const newScrollLeft = containerRef.current.scrollLeft - scrollAmount;
      // Loop to end if reached the start
      if (newScrollLeft <= 0 && containerRef.current.scrollLeft === 0) {
        containerRef.current.scrollTo({ left: containerRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #071224 0%, #0B1120 50%, #111827 100%)",
        color: "white",
        overflow: "hidden", // Prevent full page horizontal scroll
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 6, md: 8 }}>
          {/* Header Section */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 4 }}>
            <Box sx={{ maxWidth: "600px" }}>
              <div
              >
                <Typography
                  sx={{
                    color: "#60A5FA",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  TESTIMONIALS
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",

                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Trusted by Students Across Programs
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Experiences shared by learners who participated in workshops, mentorship programs, and career readiness training.
                </Typography>
              </div>
            </Box>

            {/* Navigation Controls */}
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                onClick={() => scroll("left")}
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': { background: 'rgba(255,255,255,0.1)' }
                }}
              >
                <ArrowBackIosNewRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => scroll("right")}
                sx={{
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': { background: 'rgba(255,255,255,0.1)' }
                }}
              >
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          {/* Testimonials Slider */}
          <Box
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            sx={{ position: "relative", width: "100%", py: 2 }}
          >
            <Box
              ref={containerRef}
              sx={{
                display: "flex",
                gap: 3,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Chrome, Safari
                },
                scrollBehavior: "smooth",
                px: { xs: 2, md: 0 },
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "0 0 auto",
                    width: { xs: "100%", md: "calc((100% - 48px) / 3)" }, // 3 items on desktop, 1 on mobile
                    scrollSnapAlign: "start",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ height: '100%' }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 3, md: 4 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: "rgba(255, 255, 255, 0.04)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "24px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    >
                      {/* Top Row: Quote Icon & Stars */}
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                        <FormatQuoteIcon sx={{ color: "rgba(255,255,255,0.2)", fontSize: 40, transform: "rotate(180deg) scaleX(-1)" }} />
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon key={star} sx={{ color: "#FBBF24", fontSize: 20 }} />
                          ))}
                        </Stack>
                      </Box>

                      {/* Review Text */}
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                          mb: 4,
                          flexGrow: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        "{testimonial.review}"
                      </Typography>

                      {/* Reviewer Info */}
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: "18px",
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          — {testimonial.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>
              ))}
            </Box>

            {/* Minimal SaaS Navigation */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
              <IconButton
                onClick={handlePrev}
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  },
                }}
              >
                <ArrowBackIosNewRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                  },
                }}
              >
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Trust Booster */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
             <div
            >
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" mb={1}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} sx={{ color: "#FBBF24", fontSize: 24 }} />
                ))}
                <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1.1rem", ml: 1 }}>
                  4.9/5 Average Learner Satisfaction
                </Typography>
              </Stack>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9rem" }}>
                Based on workshop, mentorship, and CRT participant feedback.
              </Typography>
            </div>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}
