import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import "../styles/profile.css";

function ProfilePage() {
  return (
    <div className="profile-page">

      <motion.div
        className="profile-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        <ProfileCard />

      </motion.div>

    </div>
  );
}

export default ProfilePage;