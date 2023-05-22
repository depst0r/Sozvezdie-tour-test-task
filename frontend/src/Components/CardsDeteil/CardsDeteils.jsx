import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cardsDeteil.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Slider } from "../carousel/carousel";
import Carousel from "react-bootstrap/Carousel";

export const CardDiteils = ({
  cardDiteilsData,
  numberOfDays,
  addZero,
  date,
}) => {
  const [cardData, setCardData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getByCard(cardDiteilsData);
  }, [cardDiteilsData]);

  const getByCard = (id) => {
    fetch(`http://localhost:9000/${id}`)
      .then((res) => res.json())
      .then((res) => setCardData(res));
    console.log();
  };

  return (
    <main key={cardData.data?.id}>
      <Link to="/">На главную</Link>
      <div className="title">
        <h1>{cardData.data?.title}</h1>
      </div>
      <div className="period">
        {!cardData.data?.minPrice
          ? "Уточнить цену "
          : `Цена от ${cardData.data?.minPrice.toLocaleString(
              "ru-RU"
            )} ₽ За человека `}
        {!cardData.data?.periodEnd && !cardData.data?.periodStart
          ? "Уточнить дату"
          : `${addZero(date(cardData.data?.periodStart).getDay())}.${addZero(
              date(cardData.data?.periodStart).getMonth() + 1
            )} - ${addZero(date(cardData.data?.periodEnd).getDay())}.${addZero(
              date(cardData.data?.periodEnd).getMonth() + 1
            )} `}
      </div>
      <div className="info">
        {cardData.data?.description?.replace(/[\/<p>/]/g, "")}
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
      {/* {show === true ? <Slider phoro={cardData} /> : console.log(show)} */}
      <div className="numbersOfDays">
        <span id="day">
          {!cardData.data?.periodEnd && !cardData.data?.periodStart
            ? ""
            : `${numberOfDays(
                date(cardData.data?.periodStart).getDay(),
                date(cardData.data?.periodEnd).getDate()
              )} дн.`}
        </span>
      </div>
      <div className="album">
        {cardData.data?.photoAlbum?.map((photo) => (
          <img src={photo.thumbnail} alt="img" onClick={handleShow} />
        ))}
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton />
            <Modal.Body>
              <Slider photo={cardData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </main>
  );
};
