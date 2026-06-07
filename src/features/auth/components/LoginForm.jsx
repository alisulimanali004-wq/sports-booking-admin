import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { Link } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    await login({ email, password });

    navigate("/otp");
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <input
        className="auth-input"
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="auth-button" type="submit">
        Sign in
      </button>
<div className="auth-links">
  <Link to="/forgot-password">
    Forgot Password?
  </Link>
</div>
      
    
    </form>
  );
}

export default LoginForm;