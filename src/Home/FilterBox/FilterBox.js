const FilterBox = () => {
  return (
    <div>
      <div>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <label htmlFor="exampleSelect" className="form-label">
                <b> Location: </b>
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
                <b>Size:</b>
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
      <button type="button" class="btn btn-primary mt-2">
        Search
      </button>
    </div>
  );
};

export default FilterBox;
