import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import appTheme from "./appTheme";
import { MASTER_PALETTE, MASTER_FONTS } from "./masterThemeConfig";

const m = MASTER_PALETTE.midnight;

// ============================================================================
// MIDNIGHT INDIGO SCOPED THEME PROVIDER — POWERED BY MASTER CONFIG
// ============================================================================

export const midnightTheme = createTheme({
  ...appTheme,
  palette: {
    ...appTheme.palette,
    mode: "dark",
    primary: {
      main: m.primary,
      dark: m.primaryDark,
      light: m.primaryLight,
    },
    secondary: {
      main: m.secondary,
      dark: m.secondaryDark,
      light: m.secondaryLight,
    },
    background: {
      default: m.bgDefault,
      paper: m.bgPaper,
    },
    text: {
      primary: m.textPrimary,
      secondary: m.textSecondary,
    },
    divider: m.divider,
  },
  typography: {
    ...appTheme.typography,
    fontFamily: `${MASTER_FONTS.modernSans}, ${MASTER_FONTS.techDisplay}`,
    h1: { ...appTheme.typography.h1, fontFamily: MASTER_FONTS.techDisplay },
    h2: { ...appTheme.typography.h2, fontFamily: MASTER_FONTS.techDisplay },
    h3: { ...appTheme.typography.h3, fontFamily: MASTER_FONTS.techDisplay },
    h4: { ...appTheme.typography.h4, fontFamily: MASTER_FONTS.techDisplay },
    h5: { ...appTheme.typography.h5, fontFamily: MASTER_FONTS.techDisplay },
    h6: { ...appTheme.typography.h6, fontFamily: MASTER_FONTS.techDisplay },
    button: { ...appTheme.typography.button, fontFamily: MASTER_FONTS.techDisplay },
  },
});

export default function RedesignTheme({ children }) {
  return (
    <ThemeProvider theme={midnightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
