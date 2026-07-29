import { Box, Button, Container, Paper } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { ThemeProvider } from "@mui/material/styles";
import appTheme from "../../theme/appTheme";

export default function AuthLayout({ children, onBackHome, maxWidth = "sm" }) {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: { xs: 4, md: 8 },
          background: "linear-gradient(180deg, #eef6ff 0%, #f8fbff 32%, #ffffff 58%, #f6fffb 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 360,
            height: 360,
            borderRadius: "50%", display: "none",
            background: "rgba(37, 99, 235, 0.14)",
            filter: "blur(90px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -90,
            right: -90,
            width: 320,
            height: 320,
            borderRadius: "50%", display: "none",
            background: "rgba(15, 118, 110, 0.1)",
            filter: "blur(90px)",
          }}
        />

        <Container maxWidth={maxWidth} sx={{ position: "relative", zIndex: 1 }}>
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            onClick={onBackHome}
            sx={{
              mb: 2,
              color: "text.secondary",
              "&:hover": { backgroundColor: "transparent", color: "primary.main" },
            }}
          >
            Back to Home
          </Button>

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #F1F5F9",
              boxShadow: "0px 4px 20px rgba(15, 23, 42, 0.05)",

              background: "#ffffff",
              p: { xs: 2.5, sm: 4, md: 5 },
            }}
          >
            {children}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
