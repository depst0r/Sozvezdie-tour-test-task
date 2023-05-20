import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./cards.css";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export const Cards = ({ cardsData, addZero, numberOfDays }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000")
      .then((responseData) => responseData.json())
      .then((responseDataJSON) => setCard(responseDataJSON));
  }, []);

  return (
    <>
      {card.data?.map((dataCards) => {
        const dateStart = () => new Date(dataCards.periodStart);
        const dateEnd = () => new Date(dataCards.periodEnd);

        return (
          <Col key={dataCards.id} className="img-wrap">
            <Link to="/diteils" className="link">
              <Card
                style={{ width: "25rem", margin: "5%" }}
                onClick={() => cardsData(dataCards.id)}
                className="text-center card"
              >
                <Card.Img
                  variant="top"
                  src={
                    !dataCards.photoCard?.thumbnail
                      ? ""
                      : dataCards.photoCard?.thumbnail
                  }
                  alt="Изоброжение отсуствует"
                />
                <Card.Text className="date">
                  {!dataCards.periodEnd && !dataCards.periodStart
                    ? "Уточнить дату"
                    : `${addZero(dateStart().getDay())}.${addZero(
                        dateStart().getMonth() + 1
                      )}-${addZero(dateEnd().getDate())}.${addZero(
                        dateEnd().getMonth() + 1
                      )}`}
                  {!dataCards.periodEnd && !dataCards.periodStart
                    ? ""
                    : `(${numberOfDays(
                        dateStart().getDay(),
                        dateEnd().getDate()
                      )} дн.)`}
                </Card.Text>
                <Card.Header className="textTitle">
                  <span className="c-white">{dataCards.title}</span>
                </Card.Header>

                <Card.Body>
                  <Card.Body>{dataCards.header}</Card.Body>
                  <Card.Text>
                    {!dataCards.minPrice
                      ? "Уточнить цену"
                      : `Цена от ${dataCards.minPrice.toLocaleString(
                          "ru-RU"
                        )} ₽`}
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
