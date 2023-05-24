import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Slider } from "../carousel/carousel";
import "./cardsDeteil.css";
import moment from "moment";

export const CardDiteils = ({ cardDiteilsData, date }) => {
  const [cardData, setCardData] = useState([]);

  const [show, setShow] = useState(false);

  const [indexSlide, setIndexSlide] = useState();

  const getIndexSlide = (index) => {
    setIndexSlide(index);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getByCard(cardDiteilsData);
  }, [cardDiteilsData]);

  const getByCard = (id) => {
    fetch(`http://localhost:9000/${id}`)
      .then((res) => res.json())
      .then((res) => setCardData(res));
  };
  console.log(cardData.data?.route.join("-"));
  return (
    <main key={cardData.data?.id}>
      <Link to="/">На главную</Link>
      <div className="title">
        <h1>{cardData.data?.title}</h1>
      </div>
      <div className="period">
        {!cardData.data?.minPrice ? (
          "Уточнить цену "
        ) : (
          <>
            <span>Цена от</span>
            <span id="priceDiteils">
              {cardData.data?.minPrice.toLocaleString("ru-RU")} ₽
            </span>
            <span>за человека</span>
          </>
        )}
        {!cardData.data?.periodEnd && !cardData.data?.periodStart ? (
          "Уточнить дату"
        ) : (
          <span id="datePeriod">
            {date(cardData.data?.periodStart)} -{" "}
            {date(cardData.data?.periodEnd)}
          </span>
        )}
      </div>
      <div className="info">
        {cardData.data?.description?.replace(/[\/<p>/]/g, "")}
      </div>
      <ul>
        <li>
          <h3>Экскурсионный тур по маршруту:</h3>
        </li>
        <span className="city">{cardData.data?.route.join("-")}</span>
      </ul>
      <div className="numbersOfDays">
        <span id="day">
          {!cardData.data?.periodEnd && !cardData.data?.periodStart
            ? ""
            : `${
                moment(cardData.data?.periodEnd).diff(
                  moment(cardData.data?.periodStart),
                  "days"
                ) + 1
              } дн.`}
        </span>
      </div>
      <div className="album">
        {cardData.data?.photoAlbum?.map((photo, i) => (
          <img
            key={i}
            src={photo.thumbnail}
            alt="img"
            onClick={() => {
              return handleShow(), getIndexSlide(i);
            }}
          />
        ))}
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton />
            <Modal.Body>
              <Slider photo={cardData} indexSlide={indexSlide} />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </main>
  );
};
