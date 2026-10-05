"use client";

import api from "./api";

export const addProduct = async (data) => {
  return await api.post(`/api/products`, data);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/api/products/${id}`);
};

export const updateProduct = async (id, data) => {
  return await api.put(`/api/products/${id}`, data);
};

//dry - don't repeat yourself
