import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/auth.service";

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await forgotPassword({ email });

    navigate("/change-password");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        className="auth-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="auth-button" type="submit">
        Send OTP
      </button>
    </form>
  );
}

export default ForgotPasswordForm;