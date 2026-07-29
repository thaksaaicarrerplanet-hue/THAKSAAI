import { createTheme } from "@mui/material/styles";

const bodyFont = '"SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif';
const headingFont = '"SF Pro Display", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif';

let appTheme = createTheme({
  palette: {
    primary: {
      main: "#1c1d1f", // Udemy Black/Charcoal for primary buttons
    },
    secondary: {
      main: "#a435f0", // Udemy Purple Accent
    },
    text: {
      primary: "#1c1d1f",
      secondary: "#6a6f73",
    },
    success: {
      main: "#10B981",
    },
    warning: {
      main: "#F59E0B",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 0, // Very sharp or slightly rounded, Udemy is mostly 0px or 4px
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2rem, 4vw, 2.5rem)"
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: "clamp(1.5rem, 3vw, 2rem)"
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 700,
      color: "#1c1d1f",
      fontSize: "1.125rem"
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.4
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.4
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 700,
      textTransform: "uppercase",
      color: "#6a6f73"
    },
    button: {
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: bodyFont,
          color: "#1c1d1f",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0, // Sharp buttons
          padding: "0 1.2rem",
          height: "48px",
          transition: "background-color 0.2s ease",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          }
        },
        containedPrimary: {
          backgroundColor: "#1c1d1f",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#000000",
          }
        },
        containedSecondary: {
          backgroundColor: "#a435f0",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#8710d8",
          }
        },
        outlinedPrimary: {
          backgroundColor: "transparent",
          borderColor: "#1c1d1f",
          color: "#1c1d1f",
          borderWidth: "1px",
          "&:hover": {
            backgroundColor: "rgba(28,29,31,0.04)",
            borderColor: "#1c1d1f",
            borderWidth: "1px",
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1c1d1f",
            borderWidth: "1px",
          }
        },
        notchedOutline: {
          borderColor: "#1c1d1f",
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "1px solid #d1d7dc",
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.08)",
            transform: "none",
          }
        }
      }
    }
  },
});

export default appTheme;
