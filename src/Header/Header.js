import React from "react";

const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa" }} className="fw-bolder py-3">
        <div className="row">
          <div className="col-md-6">
            <a href="#" className="fs-3 nav-link">
              <i>Find Basha </i>
            </a>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-end">
              <li className="list-inline-item">
                <a href="#" className="nav-link ">
                  Add service
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="nav-link mx-3">
                  Services
                </a>
              </li>
              <li className="list-inline-item">
                <button type="button" className="me-5 btn btn-outline-dark">
                  Log in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
