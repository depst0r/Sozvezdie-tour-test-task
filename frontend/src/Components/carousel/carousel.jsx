import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = () => {
  return (
    <>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src="photo" alt="First slide" />
        </Carousel.Item>
      </Carousel>
      ;
    </>
  );
};
