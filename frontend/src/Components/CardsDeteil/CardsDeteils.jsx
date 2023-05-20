import React from "react";
import { Link } from "react-router-dom";

import "./cardsDeteil.css";

export const CardDiteils = ({ cardDiteilsData, numberOfDays, addZero }) => {
  return (
    <main>
      <Link to="/">На главную</Link>
      <div className="title">
        <h1>{cardDiteilsData?.title}</h1>
      </div>
      <div className="period">
        {cardDiteilsData?.periodStart}
        {cardDiteilsData?.periodEnd}
      </div>
      <div className="price">
        {!cardDiteilsData?.minPrice
          ? "Уточнить цену"
          : `Цена от ${cardDiteilsData?.minPrice.toLocaleString("ru-RU")} ₽`}
      </div>
      <div className="info">
        {cardDiteilsData?.description.replace(/[\/<p>/]/g, "")}
      </div>
      <h6>Экскурсионный тур по маршруту:</h6>
      <ul>
        {cardDiteilsData?.route.map((cites) => (
          <li>{cites}</li>
        ))}
      </ul>
      <div className="album">
        {cardDiteilsData?.photoAlbum?.map((photo) => (
          <img src={photo.thumbnail} alt="img" />
        ))}
      </div>
    </main>
  );
};
