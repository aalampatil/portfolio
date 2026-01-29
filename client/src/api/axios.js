import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_PRODUCTION_URL
      : import.meta.env.VITE_LOCAL_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
