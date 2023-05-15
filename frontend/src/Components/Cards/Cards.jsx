import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Col from "react-bootstrap/Col";

export const Cards = ({ cardsData }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://cdn.sozvezdie-tour.ru/content/demo_offers-231105.json")
      .then((responseData) => responseData.json())
      .then((responseDataJSON) => setCard(responseDataJSON));
  }, []);

  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const numberOfDays = (endDate, startDate) => {
    return Math.abs(startDate - endDate);
  };

  return (
    <>
      {card.map((dataCards) => {
        const dateStart = () => new Date(dataCards.periodStart);
        const dateEnd = () => new Date(dataCards.periodEnd);

        return (
          <Col key={dataCards.id}>
            <Card
              style={{ width: "25rem", margin: "5%" }}
              onClick={() => cardsData(dataCards)}
            >
              <Card.Img
                variant="top"
                src={
                  !dataCards.photoCard?.thumbnail
                    ? "data:image/png;base64,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"
                    : dataCards.photoCard?.thumbnail
                }
                alt="img"
              />
              <Card.Body>
                <Card.Title>{dataCards.title}</Card.Title>
                <Card.Text>{dataCards.header}</Card.Text>
                <Card.Text>
                  {addZero(dateStart().getDay())}.
                  {addZero(dateStart().getMonth() + 1)}-
                  {addZero(dateEnd().getDate())}.
                  {addZero(dateEnd().getMonth() + 1)}
                  <Card.Text>
                    {numberOfDays(dateStart().getDay(), dateEnd().getDate()) +
                      1}
                    дн.
                  </Card.Text>
                </Card.Text>
                <Card.Text>
                  {!dataCards.minPrice
                    ? "Уточнить цену"
                    : `Цена от ${dataCards.minPrice} ₽`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
