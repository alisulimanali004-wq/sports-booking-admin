import { motion } from "framer-motion";
import "../../../styles/home.css";

function DashboardHome() {
  return (
    <div className="home">

      <motion.div
        className="home-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h1>Welcome to Bplay ⚽</h1>

        <p>
          Manage your sports bookings easily.
        </p>

        <div className="floating-balls">
          ⚽ 🏀 🎾 🏐
        </div>

      </motion.div>

    </div>
  );
}

export default DashboardHome;