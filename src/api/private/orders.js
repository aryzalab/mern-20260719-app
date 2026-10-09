import api from "./api";

export const createOrder = async (data) => {
  return await api.post("/api/orders", data);
};

export const getAllOrders = async () => {
  const response = await api.get("/api/orders");

  return response.data;
};

export const getOrdersByMerchant = async () => {
  const response = await api.get("/api/orders/merchants");

  return response.data;
};

export const getOrdersByUser = async () => {
  const response = await api.get("/api/orders/users");

  return response.data;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/api/orders/${id}`);

  return response.data;
};

export const updateOrderStatus = async (id, data) => {
  return await api.put(`/api/orders/${id}/status`, data);
};

export const cancelOrder = async (id) => {
  return await api.patch(`/api/orders/${id}/cancel`);
};

export const payViaCash = async (id) => {
  return await api.put(`/api/orders/${id}/payment/cash`);
};

export const payViaKhalti = async (id) => {
  return await api.put(`/api/orders/${id}/payment/khalti`);
};

export const payViaStripe = async (id) => {
  return await api.put(`/api/orders/${id}/payment/stripe`);
};

export const confirmOrder = async (id, data) => {
  return await api.patch(`/api/orders/${id}/confirm`, data);
};
