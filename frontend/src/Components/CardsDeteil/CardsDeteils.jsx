import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./cardsDeteil.css";

export const CardDiteils = ({ cardDiteilsData, numberOfDays, addZero }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getByCard(cardDiteilsData);
  }, [cardDiteilsData]);

  const getByCard = (id) => {
    fetch(`http://localhost:9000/${id}`)
      .then((res) => res.json())
      .then((res) => setCardData(res));
  };

  return (
    <main key={cardData.data?.id}>
      <Link to="/">На главную</Link>
      <div className="title">
        <h1>{cardData.data?.title}</h1>
      </div>
      <div className="period">
        {cardData.data?.periodStart}
        {cardData.data?.periodEnd}
      </div>
      <div className="price">
        {!cardData.data?.minPrice
          ? "Уточнить цену"
          : `Цена от ${cardData.data?.minPrice.toLocaleString("ru-RU")} ₽`}
      </div>
      <div className="info">
        {cardData.data?.description.replace(/[\/<p>/]/g, "")}
      </div>
      <ul>
        <li>
          <h3>Экскурсионный тур по маршруту:</h3>
        </li>
        {cardData.data?.route.map((cites) => (
          <li>
            <h3>{cites}</h3>
          </li>
        ))}
      </ul>
      <div className="album">
        {cardData.data?.photoAlbum?.map((photo) => (
          <img src={photo.thumbnail} alt="img" />
        ))}
      </div>
    </main>
  );
};
