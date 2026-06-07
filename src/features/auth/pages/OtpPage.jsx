import MainLayout from "../../../layouts/MainLayout";
import OtpForm from "../components/OtpForm";
import AuthCard from "../components/AuthCard";
import "../styles/auth.css";

function OtpPage() {
  return (
    <MainLayout>
      <AuthCard
        title="Verify Account"
        subtitle="Enter the OTP sent to your email"
      >
        <OtpForm />
      </AuthCard>
    </MainLayout>
  );
}

export default OtpPage;