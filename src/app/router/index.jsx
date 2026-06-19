import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminManagementPage from "../../features/admin-management/pages/AdminManagementPage";
import LandingPage from "../../features/landing/pages/LandingPage";

import LoginPage from "../../features/auth/pages/LoginPage";
import ResetPasswordPage from "../../features/auth/pages/ResetPasswordPage";
import ForgotPasswordPage from "../../features/auth/pages/ForgotPasswordPage";
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
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
path="/reset-password"
element={<ResetPasswordPage />}
/>

        {/* DASHBOARD SYSTEM */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
<Route
  path="/app/admins"
  element={<AdminManagementPage />}
/>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;