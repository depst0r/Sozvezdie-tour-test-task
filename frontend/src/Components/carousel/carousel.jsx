import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo, indexSlide }) => {
  const [count, setCount] = useState(Number);

  useEffect(() => {
    setCount(indexSlide);
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setCount(selectedIndex);
  };

  return (
    <Carousel fade variant="dark" activeIndex={count} onSelect={handleSelect}>
      {photo.data?.photoAlbum.map((res) => (
        <Carousel.Item>
          <img className="d-block w-100" src={res.photo} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
