import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

/**
 * Core Application Root.
 * Stripped of third-party JavaScript scroll hijackers (Lenis/Locomotive)
 * to ensure zero input latency and native 60/120Hz hardware scrolling performance.
 */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  );
}
