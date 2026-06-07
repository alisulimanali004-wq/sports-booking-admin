// MOCK AUTH SERVICE

export const login = async (data) => {
  console.log("Mock Login:", data);

  return {
    success: true,
    token: "mock-token",
    user: data,
  };
};

export const verifyOtp = async (data) => {
  console.log("Mock OTP:", data);

  return {
    success: true,
  };
};

export const forgotPassword = async (data) => {
  console.log("Mock Forgot Password:", data);

  return {
    success: true,
  };
};

export const changePassword = async (data) => {
  console.log("Mock Change Password:", data);

  return {
    success: true,
  };
};