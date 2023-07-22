import React from "react";
import footer from "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-dark fw-semibold py-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; {new Date().getFullYear()} Find Basha. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-md-end">
              <li className="list-inline-item">
                <a href="#" className="nav-link ">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="nav-link">
                  Terms of Service
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
