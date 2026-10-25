import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import appTheme from "./theme/appTheme";
import "./interiorPageSystem.css";
import ToastProvider from "./context/ToastProvider";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <ToastProvider>
          <MotionConfig reducedMotion="user">
            <BrowserRouter>
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:px-5 focus:py-3 focus:bg-[#3659D9] focus:text-white focus:font-bold focus:rounded-lg focus:shadow-lg"
              >
                Skip to main content
              </a>
              <ErrorBoundary>
                <ScrollToTop />
                <AppRoutes />
                <Analytics />
                <SpeedInsights />
              </ErrorBoundary>
            </BrowserRouter>
          </MotionConfig>
        </ToastProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
