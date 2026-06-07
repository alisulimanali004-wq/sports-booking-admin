import { Outlet } from "react-router-dom";
import Sidebar from "../shared/components/sidebar/Sidebar";

function DashboardLayout() {
  return (
    <div className="app-shell">

      <Sidebar />

      <main className="app-content">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;