import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { ReactLenis } from "lenis/react";

export default function App() {
  return (
    <HelmetProvider>
      <ReactLenis root>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
          </ReactLenis>
    </HelmetProvider>
  );
}
