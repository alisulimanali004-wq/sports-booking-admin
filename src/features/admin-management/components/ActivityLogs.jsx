import { useState } from "react";
import { useAdminStore } from "../../../store/adminStore";
import "../styles/ActivityLogs.css";

function ActivityLogs() {
  const { logs } = useAdminStore();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredLogs = logs.filter((log) => {
    const matchSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.admin.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ? true : log.type === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="logs-box">

      <div className="logs-header">
        <h3>Activity Logs</h3>

        <input
          type="text"
          placeholder="Search logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="create">Create</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
          <option value="suspend">Suspend</option>
        </select>
      </div>

      <div className="logs-list">
        {filteredLogs.map((log, i) => (
          <div key={i} className="log-item">
            <span className="log-admin">{log.admin}</span>
            <span className="log-action">{log.action}</span>
            <span className="log-date">{log.date}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ActivityLogs;