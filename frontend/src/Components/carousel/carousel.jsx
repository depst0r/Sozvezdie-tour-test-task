import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo, indexSlide }) => {
  const [count, setCount] = useState(Number);

  const prev = () => {
    const prev = document.getElementsByClassName("carousel-control-prev")[0];
    prev.addEventListener("click", () => {
      return setCount(count - 1);
    });
  };

  // const next = () => {
  //   const next = document.getElementsByClassName("carousel-control-next")[0];
  //   next.addEventListener("click", () => {
  //     setCount(count + 1);
  //     console.log(count);
  //   });
  // };

  useEffect(() => {
    const next = document.getElementsByClassName("carousel-control-next")[0];
    next.addEventListener("click", () => {
      setCount(count + 1);
      console.log(count);
    });
    prev();
  }, []);

  return (
    <Carousel fade variant="dark" activeIndex={count}>
      {photo.data?.photoAlbum.map((res) => (
        <Carousel.Item>
          <img className="d-block w-100" src={res.photo} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
