import React, { useState, useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";
import "./Cards.css";

export const Cards = () => {
  const [card, setCard] = useState([]);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch("https://cdn.sozvezdie-tour.ru/content/demo_offers-231105.json")
      .then((resp) => resp.json())
      .then((res) => setCard(res));
  }, []);

  return (
    <>
      <div>
        {card.map((res, i) => {
          return (
            <ul key={i}>
              <li>{res.id}</li>
              <li>{res.title}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
