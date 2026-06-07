import apiClient from "../../../shared/services/apiClient";

export const loginApi = (data) => {
  return apiClient.post("/auth/login", data);
};

export const verifyOtpApi = (data) => {
  return apiClient.post("/auth/verify-otp", data);
};

export const forgotPasswordApi = (data) => {
  return apiClient.post("/auth/forgot-password", data);
};

export const changePasswordApi = (data) => {
  return apiClient.post("/auth/change-password", data);
};