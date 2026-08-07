import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { MASTER_FONTS, MASTER_PALETTE } from "../../theme/masterThemeConfig";

const workshops = [
  {
    track: "Track 01 / Artificial Intelligence",
    title: "Generative AI & LLM Systems Architecture",
    days: "4-Day On-Campus Immersion",
    stack: "LangChain, OpenAI API, Vector Databases (ChromaDB), Python",
    body: "Students engineer real-time Retrieval-Augmented Generation (RAG) knowledge pipelines, eliminating hallucination rates and deploying autonomous corporate reasoning agents."
  },
  {
    track: "Track 02 / Cloud DevOps",
    title: "Enterprise Containerization & Kubernetes Infrastructure",
    days: "5-Day Intensive Practitioner Bootcamp",
    stack: "Docker, Kubernetes (K8s), GitHub Actions CI/CD, AWS ECR",
    body: "Participants transition monolithic university student web applications into highly resilient, horizontal-scaling container orchestration deployments across production AWS clusters."
  },
  {
    track: "Track 03 / High-Throughput Engineering",
    title: "Event-Driven Microservices & Real-time Web APIs",
    days: "3-Day Applied Coding Lab",
    stack: "Node.js / Express, Apache Kafka, Redis Caching, PostgreSQL",
    body: "Architecting zero-latency transactional microservice systems equipped with tokenized rate limiting, asynchronous event publishing, and distributed session clustering."
  },
  {
    track: "Track 04 / Data Infrastructure",
    title: "Production Data Engineering & Analytical Pipelines",
    days: "4-Day Enterprise ETL Workshop",
    stack: "Apache Spark, Airflow Orchestration, Snowflake, Python Pandas",
    body: "Building automated enterprise ingestion pipelines capable of extracting, transforming, and loading high-velocity real-time telemetry streaming data at multi-gigabit speeds."
  }
];

export default function WorkshopPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: MASTER_PALETTE.paper, minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: 16, color: MASTER_PALETTE.ink }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, maxWidth: "860px", borderBottom: `1px solid ${MASTER_PALETTE.hairline}`, pb: 6 }}>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted, mb: 2.5 }}>
            Practitioner Workshop Immersions
          </Typography>
          <Typography component="h1" sx={{ fontFamily: MASTER_FONTS.display, fontSize: { xs: "2.8rem", md: "4.2rem" }, color: MASTER_PALETTE.ink, lineHeight: 1.08, mb: 4 }}>
            3 to 5 day on-campus engineering laboratories. Zero textbook theory.
          </Typography>
          <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: { xs: "1.05rem", md: "1.2rem" }, color: MASTER_PALETTE.inkMuted, lineHeight: 1.7, mb: 5 }}>
            Conducted directly inside your college computer labs by practicing senior software developers. Every student completes the immersion with a deployed live application and a rigorous GitHub portfolio commit.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/contact")} endIcon={<ArrowForwardRoundedIcon />} sx={{ height: "50px", px: 4.5, bgcolor: MASTER_PALETTE.ink, color: MASTER_PALETTE.paper, fontSize: "0.98rem", fontWeight: 600, borderRadius: "4px" }}>
            Book an On-Campus Workshop
          </Button>
        </Box>

        {/* Workshop Tracks Grid */}
        <Grid container spacing={4}>
          {workshops.map((w, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Box sx={{ p: { xs: 4, md: 5 }, bgcolor: MASTER_PALETTE.paper, border: `1px solid ${MASTER_PALETTE.hairlineDark}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.2s ease", "&:hover": { bgcolor: MASTER_PALETTE.paperDeep } }}>
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: MASTER_PALETTE.inkMuted }}>
                      {w.track}
                    </Typography>
                    <Typography sx={{ px: 1.5, py: 0.4, bgcolor: MASTER_PALETTE.paperDeep, border: `1px solid ${MASTER_PALETTE.hairline}`, fontSize: "0.75rem", fontWeight: 700, fontFamily: MASTER_FONTS.sans }}>
                      {w.days}
                    </Typography>
                  </Stack>
                  <Typography component="h3" sx={{ fontFamily: MASTER_FONTS.display, fontSize: "2rem", color: MASTER_PALETTE.ink, lineHeight: 1.15, mb: 2.5 }}>
                    {w.title}
                  </Typography>
                  <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.85rem", fontWeight: 700, color: MASTER_PALETTE.ink, mb: 2 }}>
                    Stack: <Box component="span" sx={{ fontWeight: 400, color: MASTER_PALETTE.inkMuted }}>{w.stack}</Box>
                  </Typography>
                  <Typography sx={{ fontFamily: MASTER_FONTS.sans, fontSize: "0.96rem", color: MASTER_PALETTE.inkMuted, lineHeight: 1.7, mb: 4 }}>
                    {w.body}
                  </Typography>
                </Box>
                <Button variant="outlined" onClick={() => navigate("/contact")} sx={{ width: "max-content", height: "40px", borderColor: MASTER_PALETTE.hairlineDark, color: MASTER_PALETTE.ink, fontSize: "0.88rem", fontWeight: 600 }}>
                  Request Syllabus & Pricing →
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
