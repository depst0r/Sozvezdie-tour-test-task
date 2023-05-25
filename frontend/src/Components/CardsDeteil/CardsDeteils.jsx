import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

import { Slider } from "../carousel/carousel";
import { API_URL } from "../../constants";
import { transformDate } from "../../utils";

import "./CardsDeteil.css";

export const CardDiteils = () => {
  const location = useLocation();
  const { id } = useParams();

  const [cardData, setCardData] = useState(location.state);

  const [show, setShow] = useState(false);

  const [indexSlide, setIndexSlide] = useState();

  const getIndexSlide = (index) => {
    setIndexSlide(index);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!cardData) {
      getByCard(id);
    }
  }, []);

  const getByCard = (id) => {
    fetch(API_URL + id)
      .then((res) => res.json())
      .then((res) => setCardData(res.data));
  };
  return (
    <main key={cardData?.id}>
      <Link to="/">На главную</Link>
      <div className="title">
        <h1>{cardData?.title}</h1>
      </div>
      <div className="period">
        {cardData?.minPrice ? (
          <>
            <span>Цена от</span>
            <span id="priceDiteils">
              {cardData?.minPrice.toLocaleString("ru-RU")} ₽
            </span>
            <span>за человека</span>
          </>
        ) : (
          "Уточнить цену "
        )}
        {cardData?.periodEnd && cardData?.periodStart ? (
          <span id="datePeriod">
            {transformDate(cardData?.periodStart)} -{" "}
            {transformDate(cardData?.periodEnd)}
          </span>
        ) : (
          "Уточнить дату"
        )}
      </div>
      <div className="info">
        {cardData?.description?.replace(/[\/<p>/]/g, "")}
      </div>
      <ul>
        <li>
          <h3>Экскурсионный тур по маршруту:</h3>
        </li>
        <span className="city">{cardData?.route.join("-")}</span>
      </ul>
      <div className="numbersOfDays">
        <span id="day">
          {!cardData?.periodEnd && !cardData?.periodStart
            ? ""
            : `${
                moment(cardData?.periodEnd).diff(
                  moment(cardData?.periodStart),
                  "days"
                ) + 1
              } дн.`}
        </span>
      </div>
      <div className="album">
        {cardData?.photoAlbum?.map((photo, i) => (
          <img
            key={i}
            src={photo.thumbnail}
            alt="img"
            onClick={() => {
              handleShow();
              getIndexSlide(i);
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
