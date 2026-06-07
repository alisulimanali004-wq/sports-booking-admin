import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">

      {/* TOP BRAND */}
      <div className="top">
        <div className="logo">⚽ Bplay</div>
      </div>

      {/* PROFILE */}
      <NavLink to="/app/profile" className="profile">
        <div className="avatar">A</div>

        <div className="info">
          <div className="name">Admin</div>
          <div className="email">admin@bplay.com</div>
        </div>
      </NavLink>

      <div className="spacer" />

      {/* LOGOUT */}
      <button
        className="logout"
        onClick={() => navigate("/")}
      >
        🚪 Logout
      </button>

    </aside>
  );
}

export default Sidebar;