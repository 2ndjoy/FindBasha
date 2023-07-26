import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import { Col, Container, Row } from "react-bootstrap";

const AvailableServices = () => {
  return (
    <div className="my-5">
      <h1>Properties For Rent</h1>
      <br />
      <br />
      <hr className="mx-5" />
      <br />
      <p className="text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.
      </p>
      <div className="d-flex flex-wrap justify-content-center gap-3 p-lg-5">
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
        <CustomCard></CustomCard>
      </div>
    </div>
  );
};

export default AvailableServices;
