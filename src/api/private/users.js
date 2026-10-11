import api from "./api";

export const getAllUsers = async () => {
  const response = await api.get("/api/users");

  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/api/users/${id}`);

  return response.data;
};

export const updateUser = async (id, roles) => {
  const response = await api.put(`/api/users/${id}`, { roles });

  return response.data;
};

export const updateAuthUser = async (data) => {
  return await api.put(`/api/users/me`, data);
};

export const updateAuthUserPassword = async (data) => {
  return await api.put(`/api/users/me/change-password`, data);
};

export const updateProfileImage = async (data) => {
  return await api.put(`/api/users/profile-image`, data);
};
