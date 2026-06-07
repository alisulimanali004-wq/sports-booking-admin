import MainLayout from "../../../layouts/MainLayout";
import LoginForm from "../components/LoginForm";
import AuthCard from "../components/AuthCard";
import "../styles/auth.css";

function LoginPage() {
  return (
    <MainLayout>
      <AuthCard
        title="Welcome to Bplay"
        subtitle="Admin Login"
      >
        <LoginForm />
      </AuthCard>
    </MainLayout>
  );
}

export default LoginPage;