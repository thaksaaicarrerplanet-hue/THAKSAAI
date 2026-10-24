import axios from "axios";

const isLocal =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const configuredBaseUrl = import.meta.env.VITE_API_URL?.trim();
const defaultBaseUrl = isLocal ? "http://localhost:5000/api" : "/api";

const api = axios.create({
  baseURL: configuredBaseUrl || defaultBaseUrl,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((req) => {
  // Storage access can throw in hardened/private browser contexts.
  try {
    const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : null;
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  } catch {
    // Do not fail an otherwise public request because storage is unavailable.
  }
  return req;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = Object.assign(error, {
      normalized: {
        code: error.response?.status || (error.request ? "NETWORK_ERR" : "REQUEST_ERR"),
        message:
          error.response?.data?.message ||
          (error.request && !configuredBaseUrl && !isLocal
            ? "The backend API is not configured for this deployment. Please contact the site administrator."
            : error.message) ||
          "Unable to reach the THAKSAAI server. Please verify your connection.",
      },
    });

    // Fail closed: do not replace real API errors with fabricated users, ratings or records.
    return Promise.reject(normalizedError);
  }
);

export default api;
