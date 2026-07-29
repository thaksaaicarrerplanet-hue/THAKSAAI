import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const initialFormData = {
  institutionName: "",
  contactPerson: "",
  designation: "",
  mobile: "",
  email: "",
  location: "",
  program: "",
  workshopRequirement: "",
  studentCount: "",
  additionalNotes: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.institutionName.trim()) newErrors.institutionName = "Institution Name is required";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact Person Name is required";
    if (!formData.designation.trim()) newErrors.designation = "Designation is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Official Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.program) newErrors.program = "Please select a program";
    if (!formData.workshopRequirement) newErrors.workshopRequirement = "Please select a requirement";
    if (!formData.studentCount.trim()) newErrors.studentCount = "Expected Student Count is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Format WhatsApp Message
    const message = `Institution Name:
${formData.institutionName}

Contact Person:
${formData.contactPerson}

Designation:
${formData.designation}

Mobile:
${formData.mobile}

Email:
${formData.email}

Location:
${formData.location}

Interested Program:
${formData.program}

Requirement:
${formData.workshopRequirement}

Student Count:
${formData.studentCount}

Additional Notes:
${formData.additionalNotes || "N/A"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919494808669?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show Success Modal
    setSuccessModalOpen(true);

    // Reset Form
    setFormData(initialFormData);
  };

  const handleCloseModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "#020B2D",
        minHeight: "100vh",
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #020B2D 0%, #061138 50%, #020B2D 100%)",
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Workshop & Training Partnership Inquiry
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Connect with THAKSA.AI to discuss industry workshops, CRT programs, faculty development initiatives, and career readiness training for your institution.
          </Typography>
        </Box>

        <Card
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            p: { xs: 3, md: 5 },
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Institution Name *"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                error={!!errors.institutionName}
                helperText={errors.institutionName}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Contact Person Name *"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                error={!!errors.contactPerson}
                helperText={errors.contactPerson}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Designation *"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                error={!!errors.designation}
                helperText={errors.designation}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Mobile Number *"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Official Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="College / Organization Location *"
                name="location"
                value={formData.location}
                onChange={handleChange}
                error={!!errors.location}
                helperText={errors.location}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                fullWidth
                label="Interested Program *"
                name="program"
                value={formData.program}
                onChange={handleChange}
                error={!!errors.program}
                helperText={errors.program}
                variant="outlined"
                sx={textFieldSx}
              >
                <MenuItem value="AWS Cloud">AWS Cloud</MenuItem>
                <MenuItem value="DevOps Engineering">DevOps Engineering</MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                <MenuItem value="AI Tools & Prompt Engineering">AI Tools & Prompt Engineering</MenuItem>
                <MenuItem value="IoT / Embedded Systems / VLSI">IoT / Embedded Systems / VLSI</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                fullWidth
                label="Workshop Requirement *"
                name="workshopRequirement"
                value={formData.workshopRequirement}
                onChange={handleChange}
                error={!!errors.workshopRequirement}
                helperText={errors.workshopRequirement}
                variant="outlined"
                sx={textFieldSx}
              >
                <MenuItem value="1-Day Workshop">1-Day Workshop</MenuItem>
                <MenuItem value="2-Day Workshop">2-Day Workshop</MenuItem>
                <MenuItem value="3-Day Workshop">3-Day Workshop</MenuItem>
                <MenuItem value="CRT Training Program">CRT Training Program</MenuItem>
                <MenuItem value="Custom Requirement">Custom Requirement</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Expected Student Count *"
                name="studentCount"
                value={formData.studentCount}
                onChange={handleChange}
                error={!!errors.studentCount}
                helperText={errors.studentCount}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Additional Requirements"
                name="additionalNotes"
                multiline
                rows={4}
                value={formData.additionalNotes}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: "14px",
                  background: "linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)",
                  color: "#FFFFFF",
                  textTransform: "none",
                  boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 30px rgba(79, 70, 229, 0.5)",
                    background: "linear-gradient(90deg, #4338CA 0%, #6D28D9 100%)",
                  },
                }}
              >
                Submit Inquiry
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Success Modal */}
      <Modal
        open={successModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#0B1228",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            borderRadius: "24px",
            p: { xs: 4, md: 5 },
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
            position: "relative",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#94A3B8",
              "&:hover": { color: "#FFFFFF" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src="/logo.png?v=2"
            alt="THAKSA.AI Logo"
            sx={{ height: 40, mb: 3 }}
          />

          <CheckCircleOutlineIcon
            sx={{
              fontSize: 64,
              color: "#10B981",
              mb: 2,
            }}
          />

          <Typography
            id="success-modal-title"
            variant="h5"
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Thank You For Reaching Out
          </Typography>

          <Typography
            id="success-modal-description"
            sx={{
              color: "#94A3B8",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            We have received your inquiry successfully. Our team will review the details and connect with you shortly to discuss the most suitable program for your institution.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              onClick={handleCloseModal}
              sx={{
                py: 1.5,
                px: 3,
                borderRadius: "12px",
                borderColor: "rgba(255,255,255,0.2)",
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#FFFFFF",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Close
            </Button>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{
                py: 1.5,
                px: 3,
                borderRadius: "12px",
                background: "#4F46E5",
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background: "#4338CA",
                },
              }}
            >
              Continue Browsing
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

// Shared styles for TextFields to maintain the premium dark look
const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#FFFFFF",
    bgcolor: "rgba(255, 255, 255, 0.03)",
    borderRadius: "12px",
    transition: "all 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4F46E5",
      borderWidth: "1px",
    },
    "&.Mui-error fieldset": {
      borderColor: "#EF4444",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#94A3B8",
    "&.Mui-focused": {
      color: "#4F46E5",
    },
    "&.Mui-error": {
      color: "#EF4444",
    },
  },
  "& .MuiSelect-icon": {
    color: "#94A3B8",
  },
  // Fix dropdown menu dark styling
  "& .MuiMenuItem-root": {
    color: "#FFFFFF",
  },
};
