import axios from "axios";

// Read API URL from environment variable, fallback to localhost for dev
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default api;
