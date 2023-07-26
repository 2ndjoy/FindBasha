import React from "react";
import { Carousel } from "react-bootstrap";
import "./TransparentCarousel.css"; // Import the custom CSS for the TransparentCarousel

const MyTransparentCarousel = () => {
  return (
    <div className="p-lg-5">
      <div className="transparent-carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 1"
            />
            <Carousel.Caption>
              <h3>Carousel Item 1</h3>
              <p>This is the content for Carousel Item 1.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h3>Carousel Item 2</h3>
              <p>This is the content for Carousel Item 2.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h3>Carousel Item 3</h3>
              <p>This is the content for Carousel Item 3.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MyTransparentCarousel;
