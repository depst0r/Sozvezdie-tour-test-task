import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Col from "react-bootstrap/Col";

export const Cards = ({ cardsSelected }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://cdn.sozvezdie-tour.ru/content/demo_offers-231105.json")
      .then((responseData) => responseData.json())
      .then((responseDataJSON) => setCard(responseDataJSON));
  }, []);

  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <>
      {card.map((dataCards) => {
        const date = () => new Date(dataCards.periodStart);
        return (
          <Col key={dataCards.id}>
            <Card
              style={{ width: "25rem", margin: "5%" }}
              onClick={() => cardsSelected(dataCards.id)}
            >
              <Card.Img variant="top" src={dataCards.photoCard?.thumbnail} />
              <Card.Body>
                <Card.Title>{dataCards.title}</Card.Title>
                <Card.Text>{dataCards.header}</Card.Text>
                <Card.Text>
                  {addZero(date().getDay())}-{addZero(date().getMonth() + 1)}-
                  {date().getFullYear()}
                </Card.Text>
                <Card.Text>Цена от {dataCards.minPrice} ₽ </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
