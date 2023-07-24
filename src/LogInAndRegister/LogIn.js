import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      This is login <br />
      Go to <Link to="/register">Register</Link>
    </div>
  );
};

export default LogIn;
