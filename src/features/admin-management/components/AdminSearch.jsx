function AdminSearch({ search, setSearch }) {
  return (
    <input
      className="admin-search"
      type="text"
      placeholder="Search admin by name or email..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default AdminSearch;