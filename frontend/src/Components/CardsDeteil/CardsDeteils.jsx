import React from "react";

export const CardDiteils = ({ cardDiteilsData }) => {
  return (
    <>
      <h1>{cardDiteilsData?.title}</h1>
      <div>
        {cardDiteilsData?.periodStart}
        {cardDiteilsData?.periodEnd}
      </div>
      {cardDiteilsData?.minPrice}
      <div>{cardDiteilsData?.description.replace(/[\/<p>/]/g, "")}</div>
    </>
  );
};
