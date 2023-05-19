import React from "react";

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
      {cardDiteilsData?.route.map((res) => (
        <div>{res}</div>
      ))}
      <div className="album">
        {cardDiteilsData?.photoAlbum?.map((photo) => (
          <img src={photo.thumbnail} alt="" />
        ))}
      </div>
    </>
  );
};
