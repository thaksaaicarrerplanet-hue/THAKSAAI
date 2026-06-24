import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { submitContactMessage } from "../../../services/contactService";
import useToast from "../../../hooks/useToast";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  purpose: "",
  message: "",
};

const trustItems = [
  { icon: BoltRoundedIcon, title: "Fast Response", color: "#06B6D4" },
  { icon: BusinessCenterRoundedIcon, title: "Industry Collaboration", color: "#4F46E5" },
  { icon: SchoolRoundedIcon, title: "Student Success Focus", color: "#8B5CF6" },
  { icon: SupportAgentRoundedIcon, title: "Dedicated Support", color: "#10B981" },
];

export default function ContactFormSection() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!formData.purpose) nextErrors.purpose = "Please select a purpose";
    if (!formData.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      // Map purpose to subject for the backend service
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.purpose + (formData.organization ? ` - ${formData.organization}` : ""),
        message: formData.message,
      };
      const response = await submitContactMessage(payload);
      showToast(response.message || "Message sent successfully.", "success");
      setFormData(initialFormData);
    } catch (error) {
      showToast(
        error?.response?.data?.message || "Failed to send message. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      bgcolor: "rgba(255, 255, 255, 0.03)",
      color: "#FFFFFF",
      borderRadius: "12px",
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.15)" },
      "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
      "&.Mui-focused fieldset": { borderColor: "#4F46E5" },
    },
    "& .MuiInputLabel-root": { color: "#94A3B8" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#4F46E5" },
    "& .MuiSelect-icon": { color: "#94A3B8" },
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#0B1228" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{ color: "#FFFFFF", fontSize: { xs: "30px", md: "42px" }, fontWeight: 700, mb: 1.5 }}
                >
                  Tell Us About Your Requirement
                </Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "16px" }}>
                  Share your details and our team will connect with you shortly.
                </Typography>
              </Box>

              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "24px",
                  p: { xs: 3, md: 4 },
                }}
              >
                <Stack component="form" spacing={3} onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        sx={textFieldStyles}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={textFieldStyles}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Organization / College"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        sx={textFieldStyles}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    select
                    fullWidth
                    label="Purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    error={Boolean(errors.purpose)}
                    helperText={errors.purpose}
                    sx={textFieldStyles}
                  >
                    <MenuItem value="Student Inquiry">Student Inquiry</MenuItem>
                    <MenuItem value="Workshop Request">Workshop Request</MenuItem>
                    <MenuItem value="CRT Program">CRT Program</MenuItem>
                    <MenuItem value="Partnership">Partnership</MenuItem>
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    sx={textFieldStyles}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      bgcolor: "#4F46E5",
                      color: "#FFFFFF",
                      height: "52px",
                      borderRadius: "14px",
                      fontSize: "16px",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#4338CA" },
                      "&:disabled": { bgcolor: "rgba(79, 70, 229, 0.5)", color: "#94A3B8" },
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={4} sx={{ pl: { md: 4 } }}>
              {trustItems.map((item, index) => (
                <Stack key={index} direction="row" spacing={3} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon sx={{ color: item.color, fontSize: 24 }} />
                  </Box>
                  <Box sx={{ pt: 1 }}>
                    <Typography sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
