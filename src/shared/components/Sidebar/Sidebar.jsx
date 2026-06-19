import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { logout } from "../../../features/auth/services/auth.service";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      // remove token
      localStorage.removeItem("accessToken");

      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="top">
        <div className="logo">⚽ Bplay</div>
      </div>

      <NavLink to="/app/profile" className="profile">
        <div className="avatar">A</div>
        <div className="info">
          <div className="name">Admin</div>
          <div className="email">admin@bplay.com</div>
        </div>
      </NavLink>

      <div className="menu">
        <NavLink to="/app/admins" className="menu-item">
          👥 Admin Management
        </NavLink>
      </div>

      <div className="spacer" />

      {/* LOGOUT */}
      <motion.button
        className="logout"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleLogout}
      >
        🚪 Logout
      </motion.button>
    </motion.aside>
  );
}

export default Sidebar;