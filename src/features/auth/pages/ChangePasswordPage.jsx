import MainLayout from "../../../layouts/MainLayout";
import ChangePasswordForm from "../components/ChangePasswordForm";
import AuthCard from "../components/AuthCard";
import "../styles/auth.css";

function ChangePasswordPage() {
  return (
    <MainLayout>
      <AuthCard
        title="Create New Password"
        subtitle="Choose a strong password for your account"
      >
        <ChangePasswordForm />
      </AuthCard>
    </MainLayout>
  );
}

export default ChangePasswordPage;