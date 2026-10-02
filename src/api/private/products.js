"use client";

import config from "@/config/config";
import axios from "axios";

export const addProduct = async (data) => {
  const token = localStorage.getItem("authToken");

  return await axios.post(`${config.apiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
