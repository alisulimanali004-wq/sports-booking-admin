import { create } from "zustand";
import { getAdmins, getLogs } from "../features/admin-management/services/admin.service";

import {
  inviteAdmin as invite,
  updateAdmin as update,
  suspendAdmin as suspend,
  deleteAdmin as remove,
} from "../features/admin-management/services/admin.service";

// =========================
// PERMISSIONS SYSTEM
// =========================
const permissions = {
  "Super Admin": {
    canAdd: true,
    canEdit: true,
    canDelete: true,
    canSuspend: true,
  },
  Admin: {
    canAdd: true,
    canEdit: true,
    canDelete: false,
    canSuspend: true,
  },
  Viewer: {
    canAdd: false,
    canEdit: false,
    canDelete: false,
    canSuspend: false,
  },
};

export const useAdminStore = create((set, get) => ({
  // =========================
  // STATE
  // =========================
  admins: getAdmins(),
  logs: getLogs(),

  selectedAdmin: null,

  currentUser: {
    id: 1,
    name: "You",
    role: "Super Admin", // غيّرها لتجربة الصلاحيات
  },

  // =========================
  // HELPERS
  // =========================
  hasPermission: (action) => {
    const role = get().currentUser.role;
    return permissions[role]?.[action];
  },

  setSelectedAdmin: (admin) => set({ selectedAdmin: admin }),

  // =========================
  // ACTIONS
  // =========================

  inviteAdmin: (data) => {
    if (!get().hasPermission("canAdd")) return;

    invite(data);

    set({
      admins: getAdmins(),
      logs: getLogs(),
    });
  },

  updateAdmin: (id, data) => {
    if (!get().hasPermission("canEdit")) return;

    update(id, data);

    set({
      admins: getAdmins(),
      logs: getLogs(),
    });
  },

  suspendAdmin: (id) => {
    if (!get().hasPermission("canSuspend")) return;

    suspend(id);

    set({
      admins: getAdmins(),
      logs: getLogs(),
    });
  },

  deleteAdmin: (id) => {
    if (!get().hasPermission("canDelete")) return;

    remove(id);

    set({
      admins: getAdmins(),
      logs: getLogs(),
    });
  },
}));