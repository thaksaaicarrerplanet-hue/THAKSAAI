import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Pipe Core Web Vitals telemetry in development
if (import.meta.env.DEV && typeof PerformanceObserver !== "undefined") {
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.info(`[THAKSA WebVitals] LCP: ${Math.round(entry.startTime)}ms`);
        }
      }
    });
    observer.observe({ type: "largest-contentful-paint", buffered: true });
  } catch {
    // PerformanceObserver entryType unsupported in current browser
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
