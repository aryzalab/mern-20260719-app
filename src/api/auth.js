import config from "@/config/config";
import axios from "axios";

export const login = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/login`, data);
};

export const signUp = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/register`, data);
};

export const logout = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/logout`);
};
