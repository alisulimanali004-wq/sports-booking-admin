import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/InviteAdminModal.css";

function InviteAdminModal({ isOpen, onClose, onInvite }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onInvite({
      name,
      email,
      role,
    });

    setName("");
    setEmail("");
    setRole("Admin");

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>

      <motion.div
        className="invite-card"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="invite-avatar">⚽</div>

        <h2 className="invite-title">Invite Admin</h2>
        <p className="invite-subtitle">Send an invitation to new admin</p>

        <div className="invite-divider" />

        <form onSubmit={handleSubmit} className="invite-form">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Admin</option>
            <option>Super Admin</option>
          </select>

          <button type="submit" className="invite-button">
            Send Invite
          </button>

          <button type="button" className="invite-cancel" onClick={onClose}>
            Cancel
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default InviteAdminModal;