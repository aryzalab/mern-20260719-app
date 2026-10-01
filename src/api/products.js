import config from "@/config/config";
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);

  return response.data;
};
