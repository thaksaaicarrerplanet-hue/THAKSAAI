import { createTheme } from "@mui/material/styles";

const bodyFont = "'Inter', system-ui, sans-serif";
const headingFont = "'Inter', system-ui, sans-serif";

let appTheme = createTheme({
  palette: {
    primary: {
      main: "#6366F1", // Primary Brand
    },
    secondary: {
      main: "#A855F7", // Brand Accent
    },
    text: {
      primary: "#0F172A", // Primary Text
      secondary: "#475569", // Secondary Text
    },
    success: {
      main: "#10B981", // Success
    },
    warning: {
      main: "#F59E0B", // Warning
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: "-0.04em",
      fontSize: "clamp(2.25rem, 5vw, 4rem)"
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: "clamp(1.75rem, 4vw, 2.625rem)" // 28px to 42px
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 600,
      lineHeight: 1.3,
      fontSize: "clamp(1.25rem, 3vw, 1.5rem)" // 20px to 24px
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 500,
      color: "#475569",
      fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)" // 18px to 20px
    },
    body1: {
      fontSize: "clamp(1rem, 2vw, 1.125rem)", // 16px to 18px
      fontWeight: 400,
      lineHeight: 1.7
    },
    subtitle2: {
      fontSize: "clamp(0.8125rem, 1.5vw, 0.875rem)", // 13px to 14px
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#64748b" // Muted Text
    },
    button: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: bodyFont,
          color: "#0F172A",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "12px 32px",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          backgroundColor: "#0F172A", // Dark navy
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#1e293b",
            transform: "translateY(-2px)",
          }
        },
        outlinedPrimary: {
          backgroundColor: "#ffffff",
          borderColor: "#E2E8F0",
          color: "#0F172A",
          "&:hover": {
            backgroundColor: "#F8FAFC",
            borderColor: "#cbd5e1",
            transform: "translateY(-2px)",
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0px 4px 20px rgba(15, 23, 42, 0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0px 12px 30px rgba(15, 23, 42, 0.1)",
          }
        }
      }
    }
  },
});

export default appTheme;
