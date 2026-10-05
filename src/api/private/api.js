"use client";

import config from "@/config/config";
import axios from "axios";

const api = axios.create({
  baseURL: config.apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
