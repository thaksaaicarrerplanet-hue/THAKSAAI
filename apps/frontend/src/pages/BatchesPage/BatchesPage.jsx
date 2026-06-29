import { Box, Container, Stack, Typography, CircularProgress, Chip, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getPublicBatches, enrollBatch } from "../../services/batchService";
import useToast from "../../hooks/useToast";

const PRESET_PROGRAMS = [
  {
    course_title: "AWS Cloud",
    mode: "Online / Offline",
    duration: "12 Weeks",
    details: {
      learn: "Cloud Infrastructure, EC2, S3, VPC, Serverless, IAM.",
      projects: "3 Live Projects (Web App Hosting, Serverless API).",
      tools: "AWS Console, CLI, Terraform, Docker.",
      certificate: "Yes, AWS Cloud Architect Completion Certificate.",
      mentorship: "1:1 Live Mentorship & Portfolio Review.",
      who: "Students & IT Professionals aiming for Cloud roles."
    }
  },
  {
    course_title: "DevOps Engineering",
    mode: "Online / Offline",
    duration: "14 Weeks",
    details: {
      learn: "CI/CD, Containerization, Orchestration, Infrastructure as Code.",
      projects: "4 Live Projects (End-to-End Pipeline, Kubernetes Cluster).",
      tools: "Git, Jenkins, Docker, Kubernetes, Ansible, Terraform.",
      certificate: "Yes, DevOps Engineer Completion Certificate.",
      mentorship: "1:1 Live Mentorship & Mock Interviews.",
      who: "Software Engineers, SysAdmins, and Tech Enthusiasts."
    }
  },
  {
    course_title: "Machine Learning",
    mode: "Online / Offline",
    duration: "16 Weeks",
    details: {
      learn: "Supervised/Unsupervised Learning, Neural Networks, Deep Learning.",
      projects: "5 Live Projects (Predictive Modeling, Image Classification).",
      tools: "Python, Scikit-Learn, TensorFlow, PyTorch, Pandas.",
      certificate: "Yes, Machine Learning Specialist Completion Certificate.",
      mentorship: "1:1 Live Mentorship & Kaggle Competition Support.",
      who: "Data Enthusiasts, Analysts, and Software Developers."
    }
  },
  {
    course_title: "AI Tools & Prompt Engineering",
    mode: "Online",
    duration: "8 Weeks",
    details: {
      learn: "Advanced Prompting, AI Agents, Workflow Automation, LLM Integration.",
      projects: "2 Live Projects (Custom GPT Builder, Automated Content Pipeline).",
      tools: "ChatGPT, Midjourney, LangChain, Zapier, OpenAI API.",
      certificate: "Yes, AI Tools Specialist Completion Certificate.",
      mentorship: "Group Mentorship & Weekly Q&A.",
      who: "Creators, Marketers, Developers, and Productivity Seekers."
    }
  },
  {
    course_title: "IoT • Embedded • VLSI",
    mode: "Offline",
    duration: "16 Weeks",
    details: {
      learn: "Microcontrollers, Sensors, PCB Design, Verilog, FPGA.",
      projects: "4 Live Projects (Smart Home System, Custom Processor Design).",
      tools: "Arduino, Raspberry Pi, Altium, Xilinx Vivado.",
      certificate: "Yes, Hardware Engineering Completion Certificate.",
      mentorship: "1:1 Live Mentorship & Hardware Debugging Support.",
      who: "ECE/EEE Students and Hardware Engineering Aspirants."
    }
  }
];

export default function BatchesPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrollingId, setEnrollingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let active = true;
    const fetchBatches = async () => {
      try {
        const response = await getPublicBatches({ limit: 50 });
        if (!active) return;
        const fetchedBatches = (Array.isArray(response?.batches) ? response.batches : [])
          .filter(b => b.status === "upcoming" || b.status === "started");

        // Enrich fetched batches with predefined data if it matches course title, otherwise provide defaults
        const enrichedBatches = fetchedBatches.map(batch => {
          const preset = PRESET_PROGRAMS.find(p => batch.course_title?.toLowerCase().includes(p.course_title.toLowerCase())) ||
          PRESET_PROGRAMS.find(p => p.course_title === "AWS Cloud"); // Default fallback
          return {
            ...batch,
            mode: preset.mode,
            duration: preset.duration,
            details: preset.details
          };
        });

        setBatches(enrichedBatches);
      } catch (error) {
        console.error("Failed to load batches", error);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchBatches();
    return () => { active = false; };
  }, []);

  const handleEnroll = async (batchId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      setEnrollingId(batchId);
      await enrollBatch(batchId);
      showToast("Enrolled successfully", "success");
    } catch (requestError) {
      showToast(requestError?.response?.data?.message || "Failed to enroll", "error");
    } finally {
      setEnrollingId(null);
    }
  };

  const formatDate = (value) => {
    if (!value) return "TBA";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "TBA";
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  const handleExpand = (id) => (event, isExpanded) => {
    setExpandedId(isExpanded ? id : null);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#020617", pt: { xs: 12, md: 16 }, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 800,
              mb: 2,
              letterSpacing: "-0.02em"
            }}
          >
            Upcoming Learning Cohorts
          </Typography>
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "16px", md: "18px" },
              maxWidth: "min(100%, 600px)",
              mx: "auto"
            }}
          >
            Choose a program and join the next available batch.
          </Typography>
        </Box>

        {/* Batches Grid */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
            <CircularProgress sx={{ color: "#4F46E5" }} />
          </Box>
        ) : batches.length > 0 ? (
          <Stack spacing={3} sx={{ mb: 8 }}>
            {batches.map((batch) => (
              <Accordion
                key={batch.id}
                expanded={expandedId === batch.id}
                onChange={handleExpand(batch.id)}
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px !important",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.04)",
                    borderColor: "rgba(79, 70, 229, 0.3)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#94A3B8" }} />}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    "& .MuiAccordionSummary-content": {
                      m: 0,
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "flex-start", md: "center" },
                      gap: { xs: 2, md: 4 },
                      width: "100%"
                    }
                  }}
                >
                  <Box sx={{ flexGrow: 1, width: "100%" }}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1, flexWrap: "wrap", gap: 1 }}>
                      <Typography variant="h6" sx={{ color: "#F8FAFC", fontWeight: 700, fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                        {batch.course_title}
                      </Typography>
                      <Chip
                        label={batch.available_seats === null || batch.available_seats > 5 ? "OPEN" : batch.available_seats > 0 ? "FEW SEATS LEFT" : "FULL"}
                        size="small"
                        sx={{
                          bgcolor: batch.available_seats === null || batch.available_seats > 5 ? "rgba(16, 185, 129, 0.1)" : batch.available_seats > 0 ? "rgba(245, 158, 11, 0.1)" : "rgba(239, 68, 68, 0.1)",
                          color: batch.available_seats === null || batch.available_seats > 5 ? "#34D399" : batch.available_seats > 0 ? "#FBBF24" : "#F87171",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          letterSpacing: "0.05em",
                          height: 22,
                          borderRadius: "6px"
                        }}
                      />
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1.5, sm: 3 }} sx={{ color: "#94A3B8", fontSize: "0.875rem", mt: 1.5 }}>
                       <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#4F46E5" }} />
                        <Typography component="span" sx={{ fontWeight: 500, color: "#CBD5E1" }}>{batch.mode}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                         <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#4F46E5" }} />
                        <Typography component="span" sx={{ fontWeight: 500, color: "#CBD5E1" }}>{batch.duration}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <EventAvailableRoundedIcon sx={{ fontSize: 16, color: "#64748B" }} />
                        <Box>Starts: <Typography component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>{formatDate(batch.start_date)}</Typography></Box>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                         <GroupRoundedIcon sx={{ fontSize: 16, color: "#64748B" }} />
                         <Box>Seats: <Typography component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>{batch.available_seats === null ? "Open" : batch.available_seats}</Typography></Box>
                      </Box>
                    </Stack>
                  </Box>

                  <Button
                    variant="contained"
                    disabled={enrollingId === batch.id || (batch.available_seats !== null && batch.available_seats <= 0)}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEnroll(batch.id);
                    }}
                    sx={{
                      bgcolor: "#4F46E5",
                      color: "#FFFFFF",
                      px: 3,
                      py: 1,
                      borderRadius: "10px",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                      width: { xs: "100%", md: "auto" },
                      "&:hover": { bgcolor: "#4338CA" },
                    }}
                  >
                    {enrollingId === batch.id ? "Enrolling..." : "Enroll Now"}
                  </Button>
                </AccordionSummary>
                <AccordionDetails sx={{ p: { xs: 2.5, md: 3 }, pt: 0, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <Box sx={{ mt: 2 }}>
                    <Stack spacing={2}>
                      <DetailRow label="What Students Learn" value={batch.details?.learn} />
                      <DetailRow label="Projects Included" value={batch.details?.projects} />
                      <DetailRow label="Tools Covered" value={batch.details?.tools} />
                      <DetailRow label="Certificate Availability" value={batch.details?.certificate} />
                      <DetailRow label="Mentorship Support" value={batch.details?.mentorship} />
                      <DetailRow label="Who Should Join" value={batch.details?.who} />
                    </Stack>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        ) : (
          <Box sx={{ textAlign: "center", py: 12, bgcolor: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px dashed rgba(255,255,255,0.1)", mb: 8 }}>
             <Typography sx={{ color: "#94A3B8", fontSize: "1.1rem" }}>No upcoming cohorts available right now.</Typography>
          </Box>
        )}

        {/* Bottom Section */}
        <Box
          sx={{
            bgcolor: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            p: { xs: 4, md: 5 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h5" sx={{ color: "#F8FAFC", fontWeight: 700, mb: 1.5, fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
            Not Sure Which Program Fits You?
          </Typography>
          <Typography sx={{ color: "#94A3B8", mb: 4, maxWidth: "min(100%, 600px)", lineHeight: 1.6 }}>
            Speak with our team and receive guidance on selecting the most relevant learning pathway based on your academic background and career goals.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{
                bgcolor: "#4F46E5",
                color: "#FFFFFF",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { bgcolor: "#4338CA" },
              }}
            >
              Talk to Advisor
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="https://wa.me/919494808669"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.15)",
                color: "#F8FAFC",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
              }}
            >
              WhatsApp Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 0.5, sm: 2 } }}>
      <Typography sx={{ color: "#94A3B8", fontWeight: 600, minWidth: "200px", fontSize: "0.9rem" }}>
        {label}:
      </Typography>
      <Typography sx={{ color: "#E2E8F0", fontSize: "0.9rem" }}>
        {value}
      </Typography>
    </Box>
  );
}
