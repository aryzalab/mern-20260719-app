import config from "@/config/config";
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
};
