import apiClient from "../../../shared/services/apiClient";

// LOGIN
export const login = (data) => {
  return apiClient.post("/admin/login", data);
};

// FORGOT PASSWORD
export const forgotPassword = (data) => {
  return apiClient.post("/auth/forgot-password", data);
};

// RESET PASSWORD
export const resetPassword = (data) => {
  return apiClient.post("/auth/reset-password", data);
};

// LOGOUT
export const logout = () => {
  return apiClient.post("/admin/logout");
};