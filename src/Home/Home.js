import React from "react";
import FilterBox from "./FilterBox/FilterBox";
import MyTransparentCarousel from "../Banner/MyTransparentCarousel";
import AvailableServices from "../AvailableServices/AvailableServices";
import AboutSec from "../AboutSection/AboutSec";

const Home = () => {
  return (
    <div>
      {/*
      <div className="fs-1 fw-bolder p-5 my-5">
        Find House based On your choice
      </div> */}
      <FilterBox></FilterBox>
      <AvailableServices></AvailableServices>
      <MyTransparentCarousel></MyTransparentCarousel>
      <AboutSec></AboutSec>
    </div>
  );
};

export default Home;
