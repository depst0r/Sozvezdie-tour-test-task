import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo, indexSlide }) => {
  useEffect(() => {
    const prev = document.getElementsByClassName("carousel-control-prev")[0];
    const next = document.getElementsByClassName("carousel-control-next")[0];
    prev.addEventListener("click", () => {
      console.log(prev);
      return console.log("click");
    });
  });
  return (
    <Carousel fade variant="dark" activeIndex={indexSlide}>
      {photo.data?.photoAlbum.map((res) => (
        <Carousel.Item>
          <img className="d-block w-100" src={res.photo} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
