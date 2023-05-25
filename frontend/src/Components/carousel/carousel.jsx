import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo, indexSlide }) => {
  const [index, setIndex] = useState();

  const getState = (state) => {
    setIndex(state);
  };

  useEffect(() => {
    getState(indexSlide);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
      {photo?.photoAlbum.map((res) => (
        <Carousel.Item>
          <img className="d-block w-100" src={res.photo} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
