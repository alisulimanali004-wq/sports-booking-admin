import MainLayout from "../../../layouts/MainLayout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import AuthCard from "../components/AuthCard";
import "../styles/auth.css";

function ForgotPasswordPage() {
  return (
    <MainLayout>
      <AuthCard
        title="Forgot Password"
        subtitle="Enter your email to receive a verification code"
      >
        <ForgotPasswordForm />
      </AuthCard>
    </MainLayout>
  );
}

export default ForgotPasswordPage;