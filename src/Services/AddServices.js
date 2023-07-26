import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here (e.g., API call to create a user)
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className={`form-control ${
                  errors.location ? "is-invalid" : ""
                }`}
                {...register("location", { required: "Location is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">
                  {errors.location.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="apartmentSize" className="form-label">
                Apartment Size
              </label>
              <input
                type="text"
                name="apartmentSize"
                id="apartmentSize"
                className={`form-control ${
                  errors.apartmentSize ? "is-invalid" : ""
                }`}
                {...register("apartmentSize", {
                  required: "Apartment Size is required",
                })}
              />
              {errors.apartmentSize && (
                <div className="invalid-feedback">
                  {errors.apartmentSize.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="contactNo" className="form-label">
                Contact No
              </label>
              <input
                type="number"
                name="contactNo"
                id="contactNo"
                className={`form-control ${errors.age ? "is-invalid" : ""}`}
                {...register("contactNo", {
                  required: "contactNo is required",
                  min: 18,
                })}
              />
              {errors.age && (
                <div className="invalid-feedback">
                  {errors.contactNo.message}
                </div>
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
            <button type="submit" className="btn btn-primary">
              Add your apartment
            </button>
          </div>
        </div>
      </form>
      <div className="m-3">
        Go to <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default AddServices;
