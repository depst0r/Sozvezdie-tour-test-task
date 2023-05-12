import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Col from "react-bootstrap/Col";

export const Cards = () => {
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
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="card" />
              <Card.Body>
                <Card.Title>{dataCards.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
