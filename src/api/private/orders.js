import api from "./api";

export const createOrder = async (data) => {
  return await api.post("/api/orders", data);
};

export const getOrdersByUser = async () => {
  const response = await api.get("/api/orders/users");

  return response.data;
};

export const cancelOrder = async (id) => {
  return await api.patch(`/api/orders/${id}/cancel`);
};
