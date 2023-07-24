import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa" }} className="fw-bolder py-3">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="fs-3 nav-link">
              <i>Find Basha </i>
            </Link>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-end">
              <li className="list-inline-item">
                <Link to="/addservices" className="nav-link ">
                  Add service
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/services" className="nav-link mx-3">
                  Services
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/login" className="nav-link">
                  {" "}
                  <button type="button" className="me-5 btn btn-outline-dark">
                    Log in
                  </button>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
