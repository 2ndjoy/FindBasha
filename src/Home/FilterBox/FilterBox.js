import React, { useState } from "react";

function FilterBox() {
  const initialFormData = {
    location: "",
    size: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(data);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-slate-100-700 font-bold mb-2"
          >
            <p className="text-black">Location</p>
          </label>
          <select
            name="location"
            value={formData.location}
            required
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a location</option>
            <option value="sylhet">Sylhet</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="barishal">Barishal</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
          </select>
        </div>

        {/* Size */}
        {/* Size */}
        <div className="mb-4">
          <label
            htmlFor="size"
            className="block text-slate-100-700 font-bold mb-2"
          >
            <p className="text-black">Size</p>
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button type="button" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default FilterBox;