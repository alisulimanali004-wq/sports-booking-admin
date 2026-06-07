import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../../features/landing/pages/LandingPage";

import LoginPage from "../../features/auth/pages/LoginPage";
import OtpPage from "../../features/auth/pages/OtpPage";

import ForgotPasswordPage from "../../features/auth/pages/ForgotPasswordPage";
import ChangePasswordPage from "../../features/auth/pages/ChangePasswordPage";

import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardHome from "../../features/dashboard/pages/DashboardHome";
import ProfilePage from "../../features/profile/pages/ProfilePage";

import NotFound from "../../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<LandingPage />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />

        {/* DASHBOARD SYSTEM */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;