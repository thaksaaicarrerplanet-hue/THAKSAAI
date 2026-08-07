import { createTheme } from "@mui/material/styles";
import { MASTER_PALETTE, MASTER_FONTS } from "./masterThemeConfig";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: MASTER_PALETTE.ink,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: MASTER_PALETTE.brandGreen,
      contrastText: MASTER_PALETTE.ink,
    },
    background: {
      default: MASTER_PALETTE.paper,
      paper: "rgba(255, 255, 255, 0.72)",
    },
    text: {
      primary: MASTER_PALETTE.ink,
      secondary: MASTER_PALETTE.inkMuted,
    },
    divider: MASTER_PALETTE.hairline,
  },
  typography: {
    fontFamily: MASTER_FONTS.sans,
    h1: { fontFamily: MASTER_FONTS.display, fontWeight: 700, color: MASTER_PALETTE.ink, letterSpacing: "-0.03em" },
    h2: { fontFamily: MASTER_FONTS.display, fontWeight: 600, color: MASTER_PALETTE.ink, letterSpacing: "-0.02em" },
    h3: { fontFamily: MASTER_FONTS.display, fontWeight: 600, color: MASTER_PALETTE.ink },
    h4: { fontFamily: MASTER_FONTS.display, fontWeight: 600, color: MASTER_PALETTE.ink },
    h5: { fontFamily: MASTER_FONTS.sans, fontWeight: 600, color: MASTER_PALETTE.ink },
    h6: { fontFamily: MASTER_FONTS.sans, fontWeight: 600, color: MASTER_PALETTE.ink },
    body1: { fontFamily: MASTER_FONTS.sans, lineHeight: 1.6 },
    body2: { fontFamily: MASTER_FONTS.sans, lineHeight: 1.6 },
    button: { fontFamily: MASTER_FONTS.sans, fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: `${MASTER_PALETTE.paper} !important`,
          color: MASTER_PALETTE.ink,
          selection: {
            backgroundColor: MASTER_PALETTE.brandGreen,
            color: "#000000",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          padding: "10px 24px",
          fontWeight: 600,
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(26, 26, 26, 0.15)",
          },
        },
        containedPrimary: {
          backgroundColor: MASTER_PALETTE.ink,
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#000000",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${MASTER_PALETTE.hairline}`,
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
        },
      },
    },
  },
});

export default appTheme;
