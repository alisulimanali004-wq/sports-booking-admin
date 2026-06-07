import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/auth.service";

function OtpForm() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOtp = async (e) => {
    e.preventDefault();

    await verifyOtp({ otp });

    navigate("/app");
  };

  return (
    <form className="auth-form" onSubmit={handleOtp}>
      <input
        className="auth-input otp-input"
        type="text"
        maxLength="6"
        placeholder="Enter 6-digit OTP"
        onChange={(e) => setOtp(e.target.value)}
      />

      <button className="auth-button" type="submit">
        Verify OTP
      </button>
    </form>
  );
}

export default OtpForm;