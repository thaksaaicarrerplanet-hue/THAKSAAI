import React, { useState } from "react";
import { Box, Container, Stack, Typography, Collapse, IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const faqs = [
  {
    question: "How can colleges collaborate with THAKSA.AI?",
    answer: "Colleges can partner with us to integrate CRT programs into their curriculum, host industry-led workshops on campus, or set up dedicated AI training centers. Reach out through our contact form to schedule an initial consultation.",
  },
  {
    question: "Do you conduct offline workshops?",
    answer: "Yes, we conduct comprehensive offline workshops at partner college campuses as well as at our dedicated career learning hub in Gachibowli, Hyderabad.",
  },
  {
    question: "Can CRT programs be customized?",
    answer: "Absolutely. We understand that every institution has unique needs. Our CRT programs can be customized based on the specific engineering branches, current skill levels of students, and target placement goals.",
  },
  {
    question: "Which engineering branches are supported?",
    answer: "Our core tech and AI programs primarily cater to CSE, IT, and specialized computing branches. However, our foundational CRT and aptitude training are highly beneficial for students across all engineering disciplines.",
  },
  {
    question: "How quickly can your team respond?",
    answer: "For WhatsApp and phone inquiries during business hours (Mon-Sat, 9 AM-7 PM IST), we typically respond within minutes. Email and form inquiries are addressed within 12-24 hours.",
  },
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState(0);

  const toggleAccordion = (index) => {
    setExpanded((prev) => (prev === index ? -1 : index));
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#0B1228" }}>
      <Container maxWidth="md">
        <Stack spacing={6}>
          <Typography
            variant="h2"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "30px", md: "42px" },
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Stack spacing={2}>
            {faqs.map((faq, index) => {
              const isExpanded = expanded === index;
              return (
                <Box
                  key={index}
                  onClick={() => toggleAccordion(index)}
                  sx={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid",
                    borderColor: isExpanded ? "rgba(79, 70, 229, 0.5)" : "rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.04)",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ p: { xs: 2.5, md: 3 } }}
                  >
                    <Typography
                      sx={{
                        color: isExpanded ? "#FFFFFF" : "#E2E8F0",
                        fontSize: "18px",
                        fontWeight: 600,
                        pr: 2,
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{
                        color: isExpanded ? "#4F46E5" : "#94A3B8",
                        bgcolor: isExpanded ? "rgba(79, 70, 229, 0.1)" : "transparent",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {isExpanded ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                    </IconButton>
                  </Stack>
                  <Collapse in={isExpanded}>
                    <Box sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 }, pt: 0 }}>
                      <Typography sx={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.6 }}>
                        {faq.answer}
                      </Typography>
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
