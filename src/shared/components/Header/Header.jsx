import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="app-header-container">

        <Link
          to="/"
          className="app-logo"
        >
          ⚽ Bplay
        </Link>

        <Link
          to="/login"
          className="login-btn"
        >
          Login
        </Link>

      </div>
    </header>
  );
}

export default Header;