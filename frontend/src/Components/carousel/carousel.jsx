import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Slider = ({ photo }) => {
  const [photoAlbum, setPhotoAlbum] = useState();

  const getPhoto = (photo) => setPhotoAlbum(photo);

  useEffect(() => {
    getPhoto(photo);
    photo.data.photoAlbum.map((res) => console.log(res.photo));
  }, []);

  return (
    <>
      <Carousel fade variant="dark">
        {photo.data?.photoAlbum.map((res) => (
          <Carousel.Item>
            <img className="d-block w-100" src={res.photo} alt="First slide" />;
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
