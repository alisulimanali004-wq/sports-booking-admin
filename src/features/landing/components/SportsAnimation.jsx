import { motion } from "framer-motion";

function SportsAnimation() {
  return (
    <div className="sports-animation">

      <motion.div
        className="ball football"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      >
        ⚽
      </motion.div>

      <motion.div
        className="ball basketball"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      >
        🏀
      </motion.div>

      <motion.div
        className="ball tennis"
        animate={{
          x: [-20, 20, -20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        🎾
      </motion.div>

      <motion.div
        className="ball volleyball"
        animate={{
          x: [20, -20, 20],
          rotate: [0, -360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
      >
        🏐
      </motion.div>

    </div>
  );
}

export default SportsAnimation;