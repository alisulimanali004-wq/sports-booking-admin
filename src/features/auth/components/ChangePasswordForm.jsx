import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/auth.service";

function ChangePasswordForm() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await changePassword({ password });

    navigate("/login");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        className="auth-input"
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        className="auth-input"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className="auth-button" type="submit">
        Update Password
      </button>
    </form>
  );
}

export default ChangePasswordForm;