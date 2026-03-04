import { useState } from "react";

function SubmitComplaint() {

  const [form, setForm] = useState({
    name: "",
    roll: "",
    category: "",
    description: ""
  });

  const [success, setSuccess] = useState(false);
  const [complaintId, setComplaintId] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = "CMP" + Math.floor(Math.random() * 10000);
    const currentDateTime = new Date().toLocaleString();
    const complaint = {
      ...form,
      id: newId,
      status: "Pending",
      date: currentDateTime
    };

    const existing = JSON.parse(localStorage.getItem("complaints")) || [];
    existing.push(complaint);
    localStorage.setItem("complaints", JSON.stringify(existing));
    setComplaintId(newId);
    setDateTime(currentDateTime);
    setSuccess(true);

    setForm({
      name: "",
      roll: "",
      category: "",
      description: ""
    });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="card shadow p-4">

        <h2 className="mb-4 text-center mb-4">
          <i className="bi bi-exclamation-circle me-2"></i>Complaint Form</h2>

        {success && (
          <div className="alert alert-success">
            Complaint Submitted Successfully! <br />
            <strong>Your Complaint ID: {complaintId}</strong>
            <p><strong>Date & Time:</strong> {dateTime}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person  text-primary"></i>
              </span>
            
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Registration Number</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-card-text"></i>
              </span>
            <input
              type="text"
              name="roll"
              className="form-control"
              placeholder="Enter Registration Number"
              value={form.roll}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Category</label>
            <div className="input-group">
               <span className="input-group-text">
                <i className="bi bi-folder text-warning"></i>
               </span>
            <select
              name="category"
              className="form-select"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option>Hostel</option>
              <option>Transport</option>
              <option>Lab</option>
              <option>Internet/Wifi</option>
              <option>Faculty</option>
              <option>Other</option>
            </select>
            </div>
          </div>

          <div className="mb-3">
             <label className="form-label">Description</label>
             <div className="input-group">
              <span className="input-group-text">
                 <i className="bi bi-chat-left-text text-info"></i>
              </span>
            <textarea
              name="description"
              className="form-control"
              placeholder="Describe your issue"
              value={form.description}
              onChange={handleChange}
              required
            />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            <i className="bi bi-send me-2"></i>
            Submit Complaint
          </button>

        </form>
      </div>
    </div>
  );
}

export default SubmitComplaint; 