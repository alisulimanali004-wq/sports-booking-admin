import { motion } from "framer-motion";

function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <motion.div
      className="auth-container"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="auth-card">

        <div className="auth-logo">
          ⚽
        </div>

        <h1 className="auth-title">
          {title}
        </h1>

        {subtitle && (
          <p className="auth-subtitle">
            {subtitle}
          </p>
        )}

        {children}

      </div>
    </motion.div>
  );
}

export default AuthCard;