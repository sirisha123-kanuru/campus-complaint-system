import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">

        <NavLink className="navbar-brand text-info fw-bold" to="/">
        <i className="bi bi-building me-2"></i>
          Campus Complaints
        </NavLink>

        <div className="ms-auto d-flex">

          <NavLink to="/" className="nav-link text-white me-3">
            <i className="bi bi-house-door-fill me-1"></i> Home
          </NavLink>

          <NavLink to="/submit" className="nav-link text-white me-3">
            <i className="bi bi-pencil-square text-primary me-1"></i> Submit
          </NavLink>

          <NavLink to="/track" className="nav-link text-white me-3">
            <i className="bi bi-search text-success me-1"></i> Track
          </NavLink>

          <NavLink to="/admin" className="nav-link text-white">
            <i className="bi bi-speedometer2 text-danger me-1"></i> Admin
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;