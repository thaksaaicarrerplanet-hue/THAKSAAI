import React from "react";

/**
 * Global Error Boundary for THAKSAAI Platform.
 * Catches any unhandled render-phase errors and shows a clean recovery UI
 * instead of a blank white screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("[THAKSAAI ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#F7F8F4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "#1a1a1a",
              color: "#fff",
              borderRadius: "24px",
              padding: "3rem",
              maxWidth: "480px",
              width: "100%",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "#C7F36B",
                color: "#1a1a1a",
                borderRadius: "999px",
                padding: "0.25rem 1rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Something went wrong
            </span>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
              We hit an unexpected error.
            </h1>
            <p style={{ color: "#9ca3af", lineHeight: 1.6, marginBottom: "2rem" }}>
              Our team has been notified. Please refresh the page to continue â€” your data is safe.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: "#C7F36B",
                color: "#1a1a1a",
                border: "none",
                borderRadius: "999px",
                padding: "0.875rem 2rem",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
