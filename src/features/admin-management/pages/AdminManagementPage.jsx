import { useState } from "react";
import { motion } from "framer-motion";

import AdminSearch from "../components/AdminSearch";
import AdminFilters from "../components/AdminFilters";
import AdminTable from "../components/AdminTable";
import ActiveAdminsWidget from "../components/ActiveAdminsWidget";
import ActivityLogs from "../components/ActivityLogs";

import InviteAdminModal from "../components/InviteAdminModal";
import EditAdminModal from "../components/EditAdminModal";
import SuspendAdminModal from "../components/SuspendAdminModal";
import DeleteAdminModal from "../components/DeleteAdminModal";

import { useAdminStore } from "../../../store/adminStore";

import "../styles/admin-management.css";

function AdminManagementPage() {
  const {
    admins,
    logs,
    inviteAdmin,
    updateAdmin,
    suspendAdmin,
    deleteAdmin,
    setSelectedAdmin,
  } = useAdminStore();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [inviteOpen, setInviteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [suspendOpen, setSuspendOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleInviteAdmin = (data) => inviteAdmin(data);

  const handleEditAdmin = (data) => {
    const selected = useAdminStore.getState().selectedAdmin;
    updateAdmin(selected.id, data);
  };

  const handleSuspendAdmin = () => {
    const selected = useAdminStore.getState().selectedAdmin;
    suspendAdmin(selected.id);
  };

  const handleDeleteAdmin = () => {
    const selected = useAdminStore.getState().selectedAdmin;
    deleteAdmin(selected.id);
  };

  return (
    <motion.div
      className="admins-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* HEADER */}
      <div className="admins-header">
        <div>
          <h1>Admin Management</h1>
          <p>Manage platform admins</p>
        </div>

        <button
          className="invite-btn"
          onClick={() => setInviteOpen(true)}
        >
          + Invite Admin
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="admins-top">
        <AdminSearch search={search} setSearch={setSearch} />

        <AdminFilters filter={filter} setFilter={setFilter} />
      </div>

      {/* CONTENT */}
      <div className="admins-content">

        <div>
          <AdminTable
            admins={admins}
            search={search}
            filter={filter}
            setSelectedAdmin={setSelectedAdmin}
            openEdit={() => setEditOpen(true)}
            openSuspend={() => setSuspendOpen(true)}
            openDelete={() => setDeleteOpen(true)}
          />

          <ActivityLogs logs={logs} />
        </div>

        <ActiveAdminsWidget />
      </div>

      {/* MODALS */}
      <InviteAdminModal
        isOpen={inviteOpen}
        onClose={() => setInviteOpen(false)}
        onInvite={handleInviteAdmin}
      />

      <EditAdminModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        onSave={handleEditAdmin}
      />

      <SuspendAdminModal
        isOpen={suspendOpen}
        onClose={() => setSuspendOpen(false)}
        onConfirm={handleSuspendAdmin}
      />

      <DeleteAdminModal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDeleteAdmin}
      />

    </motion.div>
  );
}

export default AdminManagementPage;