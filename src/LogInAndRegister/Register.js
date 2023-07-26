import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { AuthContext } from "../UserContext/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const [createdemail, setCreatedemail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");

  //   const imageHostKEy = process.env.REACT_APP_IMGB_APIKEY;
  // console.log(imageHostKEy);
  const handleSignUp = (data) => {
    // console.log(imageHostKEy)
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=94c2a478e54e97d802b6d035fdda4286`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        createUser(data.email, data.password).then((result) => {
          const user = result.user;
          console.log(user);
          createUser(data.email, data.name);
          updateUserProfile(data.name, imgData.data.display_url).then(
            toast.success("user created successfully")
          );
          setLoading(false);
          navigate(from, { replace: true }).catch((err) => console.log(err));
        });
      });
    // console.log(data);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            {...register("phone", {
              required: "Phone number is required",
            })}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            className={`form-control ${errors.photo ? "is-invalid" : ""}`}
            {...register("photo")}
          />
          {errors.photo && (
            <div className="invalid-feedback">{errors.photo.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password", { required: "password is required" })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Create User
        </button>
        <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
      </form>
    </div>
  );
};

export default Register;
