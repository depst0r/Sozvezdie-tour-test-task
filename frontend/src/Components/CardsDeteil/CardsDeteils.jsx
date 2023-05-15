import React from "react";

export const CardDiteils = ({ selected }) => {
  return (
    <>
      <div>{selected?.description.replace(/<p>/g, "")}</div>
    </>
  );
};
