import config from "@/config/config";
import formatQuery from "@/utils/queryFormatter";
import axios from "axios";

export const getProducts = async (query) => {
  const filter = formatQuery(query?.filter);

  console.log(filter)

  const response = await axios.get(`${config.apiUrl}/api/products?${filter}`);

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products/categories`);

  return response.data;
};

export const getBrands = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products/brands`);

  return response.data;
};
