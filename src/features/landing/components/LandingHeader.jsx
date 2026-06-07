import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingHeader() {
  return (
    <motion.header
      className="landing-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="landing-logo">
        Bplay
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/login" className="landing-login-btn">
          Login
        </Link>
      </motion.div>
    </motion.header>
  );
}

export default LandingHeader;