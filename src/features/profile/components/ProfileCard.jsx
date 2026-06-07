import { motion } from "framer-motion";

function ProfileCard() {
  return (
    <motion.div
      className="profile-card"
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="profile-avatar">
        ⚽
      </div>

      <h2 className="profile-name">
        Bplay Admin
      </h2>

      <p className="profile-email">
        admin@bplay.com
      </p>

      <div className="profile-divider" />

      <div className="profile-info">

        <div className="profile-item">
          <span>Role</span>
          <strong>Administrator</strong>
        </div>

        <div className="profile-item">
          <span>Status</span>
          <strong>Active</strong>
        </div>

      </div>

      <button className="profile-button">
        Edit Profile
      </button>
    </motion.div>
  );
}

export default ProfileCard;