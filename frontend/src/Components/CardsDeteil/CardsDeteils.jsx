import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import "./cardsDeteil.css";

export const CardDiteils = ({
  cardDiteilsData,
  numberOfDays,
  addZero,
  date,
}) => {
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
        {!cardData.data?.periodEnd && !cardData.data?.periodStart
          ? "Уточнить дату"
          : `${addZero(date(cardData.data?.periodStart).getDay())}.${addZero(
              date(cardData.data?.periodStart).getMonth() + 1
            )} - ${addZero(date(cardData.data?.periodEnd).getDay())}.${addZero(
              date(cardData.data?.periodEnd).getMonth() + 1
            )} `}
        {!cardData.data?.periodEnd && !cardData.data?.periodStart
          ? ""
          : `(${numberOfDays(
              date(cardData.data?.periodStart).getDay(),
              date(cardData.data?.periodEnd).getDate()
            )} дн.)`}
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

      <Carousel>
        {cardData.data?.photoAlbum?.map((photo) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photo.photo}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </main>
  );
};
