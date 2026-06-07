import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SportsAnimation from "./SportsAnimation";

function HeroSection() {
  return (
    <section className="hero-section">

      <motion.div
        className="hero-content"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >

        <motion.span
          className="hero-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sports Booking Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to <span>Bplay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Manage bookings, sports facilities,
          schedules and players from one place.
        </motion.p>

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Link to="/login" className="hero-button">
            Get Started
          </Link>
        </motion.div>

      </motion.div>

      <SportsAnimation />

    </section>
  );
}

export default HeroSection;