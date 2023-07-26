import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/AuthProvider";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError, setLoading] = useState("");
  const { signIn, forgetPassword } = useContext(AuthContext);
  const [loginemail, setLoginemail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginemail(data.email);
        navigate(from, { replace: true });
        console.log(data.email, data.password);
      })
      .catch((error) => {
        // console.log(error.message)
        // setLoading(false);
        setLoginError(error.message);
      });
  };

  const handleforgetPassword = (data) => {
    forgetPassword(data.email)
      .then(() => {
        toast.success("Sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <form onSubmit={handleSubmit(handleLogin)} className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("email", { required: "email is required" })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
          </div>
        </form>
        <div className="m-3">
          Go to <Link to="/register">Register</Link>
        </div>
        <button
          className="btn btn-secondary"
          onClick={handleSubmit(handleforgetPassword)}
        >
          Forget Password?
        </button>
      </div>
    </div>
  );
};

export default LogIn;
