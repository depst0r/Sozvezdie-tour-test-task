import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import moment from "moment";

import { transformDate } from "../../utils";
import { API_URL } from "../../constants";

import "./Cards.css";

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((responseData) => responseData.json())
      .then((responseDataJSON) => setCards(responseDataJSON));
  }, []);

  return (
    <>
      {cards.data?.map((dataCards) => {
        return (
          <Col key={dataCards.id} className="img-wrap">
            <Link
              to={"/diteils/" + dataCards.id}
              className="link"
              state={dataCards}
            >
              <Card
                style={{ width: "25rem", margin: "5%", height: "45rem" }}
                className="text-center card"
              >
                <div id="card-img">
                  <Card.Img
                    variant="top"
                    src={
                      dataCards.photoCard?.thumbnail
                        ? dataCards.photoCard?.thumbnail
                        : dataCards.photoAlbum[0].photo
                    }
                    alt="Изоброжение отсуствует"
                    className=""
                  />
                </div>
                <Card.Text className="date">
                  {dataCards.periodEnd && dataCards.periodStart
                    ? `${transformDate(dataCards.periodStart)}-${transformDate(
                        dataCards.periodEnd
                      )}`
                    : "Уточнить дату"}
                  {dataCards.periodEnd && dataCards.periodStart
                    ? `(${
                        moment(dataCards.periodEnd).diff(
                          moment(dataCards.periodStart),
                          "days"
                        ) + 1
                      } дн.)`
                    : ""}
                </Card.Text>
                <Card.Header className="textTitle">
                  <span className="c-white">{dataCards.title}</span>
                </Card.Header>
                <Card.Body>
                  <Card.Body>{dataCards.header}</Card.Body>
                  <Card.Text>
                    {dataCards.minPrice
                      ? `Цена от ${dataCards.minPrice.toLocaleString(
                          "ru-RU"
                        )} ₽`
                      : "Уточнить цену"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </>
  );
};
