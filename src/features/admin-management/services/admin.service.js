import { mockAdmins } from "../data/mockAdmins";

let admins = [...mockAdmins];

let logs = [];

// =====================
// GET ADMINS
// =====================
export const getAdmins = () => {
  return [...admins];
};

// =====================
// GET LOGS
// =====================
export const getLogs = () => {
  return [...logs];
};

// =====================
// ADD LOG
// =====================
const addLog = (message, adminName = "System") => {
  logs.unshift({
    id: Date.now(),
    message,
    admin: adminName,
    time: new Date().toLocaleTimeString(),
  });
};

// =====================
// INVITE ADMIN
// =====================
export const inviteAdmin = (admin) => {
  admins.push({
    id: Date.now(),
    ...admin,
    status: "active",
  });

  addLog(`Invited admin ${admin.name}`, "You");
};

// =====================
// UPDATE ADMIN
// =====================
export const updateAdmin = (id, data) => {
  const target = admins.find((a) => a.id === id);

  admins = admins.map((admin) =>
    admin.id === id ? { ...admin, ...data } : admin
  );

  addLog(`Updated admin ${target?.name}`, "You");
};

// =====================
// SUSPEND / ACTIVATE
// =====================
export const suspendAdmin = (id) => {
  const target = admins.find((a) => a.id === id);

  admins = admins.map((admin) =>
    admin.id === id
      ? {
          ...admin,
          status:
            admin.status === "active"
              ? "suspended"
              : "active",
        }
      : admin
  );

  addLog(`Changed status of ${target?.name}`, "You");
};

// =====================
// DELETE ADMIN
// =====================
export const deleteAdmin = (id) => {
  const target = admins.find((a) => a.id === id);

  admins = admins.filter((a) => a.id !== id);

  addLog(`Deleted admin ${target?.name}`, "You");
};