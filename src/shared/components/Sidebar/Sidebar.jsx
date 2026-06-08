import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* TOP BRAND */}
      <div className="top">
        <div className="logo">⚽ Bplay</div>
      </div>

      {/* PROFILE */}
      <NavLink
        to="/app/profile"
        className={({ isActive }) =>
          isActive ? "profile active" : "profile"
        }
      >
        <div className="avatar">A</div>

        <div className="info">
          <div className="name">Admin</div>
          <div className="email">admin@bplay.com</div>
        </div>
      </NavLink>

      {/* MENU */}
      <div className="menu">

        <NavLink
          to="/app/admins"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          👥 Admin Management
        </NavLink>

      </div>

      <div className="spacer" />

      {/* LOGOUT */}
      <motion.button
        className="logout"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/")}
      >
        🚪 Logout
      </motion.button>
    </motion.aside>
  );
}

export default Sidebar;