import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo, indexSlide }) => {
  return (
    <>
      <Carousel fade variant="dark" activeIndex={indexSlide}>
        {photo.data?.photoAlbum.map((res) => (
          <Carousel.Item>
            <img className="d-block w-100" src={res.photo} alt="slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
