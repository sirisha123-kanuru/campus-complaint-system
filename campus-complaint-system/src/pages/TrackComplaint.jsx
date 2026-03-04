import { useState } from "react";

function TrackComplaint() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);

  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const found = complaints.find(c => c.id === id);

    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
      }
    };

  return (
    <div className="container mt-5 pt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-3">Track Complaint</h2>

        <input
          className="form-control mb-3"
          placeholder="Enter Complaint ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button className="btn btn-success mb-3" onClick={handleSearch}>
          <i className="bi bi-search me-3"></i>
          Search Complaint
        </button>
        {notFound && (
           <div className="alert alert-danger mt-3">
              Complaint Not Found!
           </div>
        )}

        {result && (
          <div className="alert alert-info">
            <p><b>Name:</b> {result.name}</p>
            <p><b>Status:</b> {result.status}</p>
            <p><b>Description:</b> {result.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackComplaint;