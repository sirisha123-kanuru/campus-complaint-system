import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div
        className="text-center text-white d-flex align-items-center"
        style={{
          height: "80vh",
          background: "linear-gradient(to right, #0d6efd, #6610f2)"
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">
            Campus Complaint Management System
          </h1>

          <p className="lead mb-4">
            Submit, Track and Manage Campus Issues Easily & Efficiently
          </p>

          <Link to="/submit" className="btn btn-light btn-lg me-3">
            Submit Complaint
          </Link>

          <Link to="/track" className="btn btn-outline-light btn-lg">
            Track Complaint
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow p-4">
              <i className="bi bi-pencil-square fs-1 text-primary"></i>
              <h4>Easy Submission</h4>
              <p>
                Students can quickly submit complaints through a simple form.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <i className="bi bi-search fs-1 text-success"></i>
              <h4>Real-time Tracking</h4>
              <p>
                Track complaint status instantly using Complaint ID.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <i className="bi bi-speedometer2 fs-1 text-danger"></i>
              <h4>Admin Dashboard</h4>
              <p>
                Admin can manage, update and resolve complaints efficiently.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        © 2026 Campus Complaint System | Developed by Sirisha
      </footer>

    </div>
  );
}

export default Home;