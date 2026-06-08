import { useAdminStore } from "../../../store/adminStore";
import "../styles/AdminTable.css";
function AdminTable({
  admins,
  search,
  filter,
  setSelectedAdmin,
  openEdit,
  openSuspend,
  openDelete,
}) {
  const { currentUser } = useAdminStore();

  const filteredAdmins = admins.filter((admin) => {
    const searchMatch =
      admin.name.toLowerCase().includes(search.toLowerCase()) ||
      admin.email.toLowerCase().includes(search.toLowerCase());

    const filterMatch =
      filter === "all" ? true : admin.status === filter;

    return searchMatch && filterMatch;
  });

  return (
    <table className="admin-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {filteredAdmins.map((admin) => (
          <tr key={admin.id}>

            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>{admin.role}</td>

            <td>
              <span className={`status ${admin.status}`}>
                {admin.status}
              </span>
            </td>

            <td>

              <button
                onClick={() => {
                  setSelectedAdmin(admin);
                  openEdit();
                }}
                disabled={currentUser.role === "Viewer"}
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setSelectedAdmin(admin);
                  openSuspend();
                }}
                disabled={currentUser.role === "Viewer"}
              >
                Suspend
              </button>

              <button
                onClick={() => {
                  setSelectedAdmin(admin);
                  openDelete();
                }}
                disabled={currentUser.role !== "Super Admin"}
              >
                Delete
              </button>

            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default AdminTable;