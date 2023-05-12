import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Col from "react-bootstrap/Col";

export const Cards = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://cdn.sozvezdie-tour.ru/content/demo_offers-231105.json")
      .then((resp) => resp.json())
      .then((res) => setCard(res));
  }, []);

  return (
    <>
      {card.map((res) => {
        return (
          <Col key={res.id}>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="card" />
              <Card.Body>
                <Card.Title>{res.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
