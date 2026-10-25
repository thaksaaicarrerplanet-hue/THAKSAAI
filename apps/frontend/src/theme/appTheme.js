import { createTheme } from "@mui/material/styles";
import { tokens } from "./masterThemeConfig";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: tokens.color.precision,
      dark: tokens.color.midnight,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: tokens.color.electric,
      contrastText: tokens.color.midnight,
    },
    error: {
      main: tokens.color.danger,
    },
    background: {
      default: tokens.color.porcelain,
      paper: tokens.color.paper,
    },
    text: {
      primary: tokens.color.midnight,
      secondary: tokens.color.slate,
    },
    divider: tokens.color.hairline,
  },
  typography: {
    fontFamily: tokens.font.body,
    h1: { fontFamily: tokens.font.display, fontWeight: 700, color: tokens.color.midnight, letterSpacing: "-0.02em" },
    h2: { fontFamily: tokens.font.display, fontWeight: 700, color: tokens.color.midnight, letterSpacing: "-0.02em" },
    h3: { fontFamily: tokens.font.display, fontWeight: 600, color: tokens.color.midnight, letterSpacing: "-0.02em" },
    h4: { fontFamily: tokens.font.display, fontWeight: 600, color: tokens.color.midnight },
    h5: { fontFamily: tokens.font.body, fontWeight: 600, color: tokens.color.midnight },
    h6: { fontFamily: tokens.font.body, fontWeight: 600, color: tokens.color.midnight },
    body1: { fontFamily: tokens.font.body, lineHeight: 1.6 },
    body2: { fontFamily: tokens.font.body, lineHeight: 1.6 },
    button: { fontFamily: tokens.font.body, fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: tokens.radius.md,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: `${tokens.color.porcelain} !important`,
          color: tokens.color.midnight,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: `${tokens.radius.md}px`,
          minHeight: "44px",
          padding: "10px 20px",
          fontWeight: 600,
          boxShadow: tokens.elevation.e0,
          transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: tokens.elevation.e2,
          },
          "&:active": {
            transform: "translateY(1px)",
            boxShadow: tokens.elevation.e1,
          },
        },
        containedPrimary: {
          backgroundColor: tokens.color.precision,
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#2948B8",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.color.paper,
          border: `1px solid ${tokens.color.hairline}`,
          borderRadius: `${tokens.radius.lg}px`,
          boxShadow: tokens.elevation.e1,
        },
      },
    },
  },
});

export default appTheme;
