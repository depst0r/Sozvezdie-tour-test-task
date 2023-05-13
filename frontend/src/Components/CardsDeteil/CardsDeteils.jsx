import React, { useState, useEffect } from "react";

export const CardDiteils = ({ selected }) => {
  const [cardId, setCardId] = useState(null);

  //   useEffect(() => {
  //     fetch("https://cdn.sozvezdie-tour.ru/content/demo_offers-231105.json")
  //       .then((responseData) => responseData.json())
  //       .then((responseDataJSON) => setCardid(responseDataJSON));
  //   }, [cardId]);

  return (
    <>
      <div>{selected}</div>
    </>
  );
};
