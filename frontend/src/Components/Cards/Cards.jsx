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

  return (
    <>
      {card.map((dataCards) => {
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
                <Card.Text>{dataCards.periodStart}</Card.Text>
                <Card.Text>Цена от {dataCards.minPrice} ₽ </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
