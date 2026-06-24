import React from "react";
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";

const contactOptions = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    description: "Usually within minutes",
    color: "#25D366",
    link: "https://wa.me/919494808669",
  },
  {
    icon: PhoneRoundedIcon,
    title: "Phone",
    description: "Direct conversation with team",
    color: "#06B6D4",
    link: "tel:+919494808669",
  },
  {
    icon: EmailRoundedIcon,
    title: "Email",
    description: "For detailed discussions",
    color: "#4F46E5",
    link: "mailto:thaksaai@gmail.com",
  },
  {
    icon: BusinessRoundedIcon,
    title: "Office Location",
    description: "Visit or schedule a meeting",
    color: "#8B5CF6",
    link: "#location",
  },
];

export default function QuickContactSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#020B2D" }}>
      <Container maxWidth="lg">
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
            Choose Your Preferred Way to Connect
          </Typography>

          <Grid container spacing={3}>
            {contactOptions.map((option, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  component="a"
                  href={option.link}
                  target={option.link.startsWith("http") ? "_blank" : undefined}
                  rel={option.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    height: "100%",
                    p: 4,
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "24px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      boxShadow: `0 10px 30px ${option.color}20`,
                    },
                  }}
                >
                  <Stack spacing={2.5} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "16px",
                        bgcolor: `${option.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        ".MuiSvgIcon-root": {
                          color: option.color,
                          fontSize: 28,
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      <option.icon />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "20px",
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {option.title}
                      </Typography>
                      <Typography sx={{ color: "#94A3B8", fontSize: "14px" }}>
                        {option.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
