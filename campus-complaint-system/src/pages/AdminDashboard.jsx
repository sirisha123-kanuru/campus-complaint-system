import { useState, useEffect } from "react";

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(data);
  }, []);

  const deleteComplaint = (id) => {
    const filtered = complaints.filter(c => c.id !== id);
    setComplaints(filtered);
    localStorage.setItem("complaints", JSON.stringify(filtered));
   };

  const updateStatus = (id, newStatus) => {
    const updated = complaints.map(c =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    setComplaints(updated);
    localStorage.setItem("complaints", JSON.stringify(updated));
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row mb-4">
        <div className="col">
          <div className="card p-3 bg-warning shadow text-white">
            <i className="bi bi-hourglass-split me-2"></i>
            Pending: {complaints.filter(c => c.status === "Pending").length}
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-success text-white">
            <i className="bi bi-check-circle me-2"></i>
            Resolved: {complaints.filter(c => c.status === "Resolved").length}
          </div>
        </div>
      </div>
      <input
        className="form-control mb-3"
        placeholder="Search by Name"
        onChange={(e) => {
           const value = e.target.value.toLowerCase();
           const data = JSON.parse(localStorage.getItem("complaints")) || [];
           const filtered = data.filter(c =>
            c.name.toLowerCase().includes(value)
           );
            setComplaints(filtered);
           }}
       />
      <table className="table table-bordered shadow table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.category}</td>
              <td>
                 <span className={
                    c.status === "Pending"
                    ? "badge bg-warning"
                    : c.status === "In Progress"
                    ? "badge bg-info"
                    : "badge bg-success"
                 }>
                   {c.status}
                 </span>
              </td>
              <td>
                <select
                  className="form-select"
                  onChange={(e) => updateStatus(c.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </td>
              <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteComplaint(c.id)}
                >
                   Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;