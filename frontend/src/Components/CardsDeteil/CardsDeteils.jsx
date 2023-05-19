import React from "react";
import { PhotoAlbum } from "../corousel/corousel";

export const CardDiteils = ({ cardDiteilsData, numberOfDays, addZero }) => {
  return (
    <>
      <h1>{cardDiteilsData?.title}</h1>
      <div>
        {cardDiteilsData?.periodStart}
        {cardDiteilsData?.periodEnd}
      </div>
      {cardDiteilsData?.minPrice}
      <div>{cardDiteilsData?.description.replace(/[\/<p>/]/g, "")}</div>
      {/* <h6>Экскурсионный тур по маршруту:</h6> */}
      {cardDiteilsData?.route.map((cites) => (
        <div>{cites}</div>
      ))}
      <div className="album">
        {cardDiteilsData?.photoAlbum?.map((photo) => (
          <img src={photo.thumbnail} alt="img" />
        ))}
      </div>
    </>
  );
};
