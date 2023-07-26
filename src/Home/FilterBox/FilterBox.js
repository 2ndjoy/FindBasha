const FilterBox = () => {
  const imagUrl =
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="p-lg-5">
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(2, 41, 88, 6),rgba(75, 69, 69, 0.3)), url(${imagUrl})`,
          padding: "1vw",
          backgroundSize: "cover", // Adjust backgroundSize as needed
          backgroundRepeat: "no-repeat", // Adjust backgroundRepeat as needed
          backgroundPosition: "center", // Adjust backgroundPosition as needed
          width: "100%",
          height: "600px", // Set an appropriate height for the container
        }}
      >
        <div>
          <div>
            <h1 style={{ color: "white" }} className="m-3 p-5">
              Find your house
            </h1>
          </div>
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="exampleSelect" className="form-label">
                  <b style={{ color: "white" }}> Location: </b>
                </label>
                <select className="form-select" id="exampleSelect">
                  <option defaultValue>Select an location...</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="barishal">Barishal</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="khulna">Khulna</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mt-3">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="exampleSelect" className="form-label">
                  <b style={{ color: "white" }}>Size:</b>
                </label>
                <select className="form-select" id="exampleSelect">
                  <option defaultValue>Select Size size...</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-transparent mt-4"
          style={{
            backgroundColor: "rgba(100, 40, 255, 5)",
            color: "white", // Set the text color to a contrasting color for better visibility
            borderColor: "transparent", // Optional: Set border color to transparent for a borderless button
            width: "19vw",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
