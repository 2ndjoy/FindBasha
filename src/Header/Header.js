import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary px-5 fw-bolder">
        {/* <div className="d-flex justify-content-center gap-3"> */}
        <a href="#" className="fs-3 nav-link">
          <i>Find Basha </i>
        </a>
        <a href="#" className=" nav-link">
          Add service
        </a>
        <a href="#" className=" nav-link">
          Services
        </a>
        <a href="#" className=" nav-link">
          Log in
        </a>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Header;
