import React from "react";
import { Box, Card, Chip, Container, Stack, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

export default function LocationSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#0B1228" }}>
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
            Visit Our Office
          </Typography>

          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "300px", md: "450px" },
                filter: "invert(90%) hue-rotate(180deg) contrast(80%)",
                opacity: 0.85,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            >
              <iframe
                title="THAKSA.AI Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8272226612307!2d78.361543!3d17.433898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dcbb39f28d%3A0xc3f124cfa9760e7e!2sJyothi%20Imperial!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>

            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                alignItems={{ xs: "flex-start", md: "center" }}
                justifyContent="space-between"
              >
                <Box>
                  <Typography sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 600, mb: 1 }}>
                    THAKSA.AI Career Planet
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.6 }}>
                    Plot No. 189 to 198, Survey No. 50<br />
                    Jyothi Imperial, Vamsiram Builders Building<br />
                    Near Gachibowli Flyover, Old Bombay Road<br />
                    Gachibowli, Hyderabad, Telangana 500032
                  </Typography>
                </Box>

                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                  {[
                    { label: "Gachibowli Technology District", icon: <LocationOnRoundedIcon /> },
                    { label: "Jyothi Imperial", icon: <BusinessRoundedIcon /> },
                    { label: "Career Learning Hub", icon: <SchoolRoundedIcon /> },
                    { label: "Workshops & CRT Programs", icon: <RocketLaunchRoundedIcon /> },
                  ].map((badge, index) => (
                    <Chip
                      key={index}
                      icon={badge.icon}
                      label={badge.label}
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        color: "#E2E8F0",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        "& .MuiChip-icon": { color: "#4F46E5" },
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
