import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo }) => {
  return (
    <>
      <Carousel fade variant="dark" activeIndex={1}>
        {photo.data?.photoAlbum.map((res) => (
          <Carousel.Item>
            <img className="d-block w-100" src={res.photo} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
