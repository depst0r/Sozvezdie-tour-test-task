import React, { useState } from "react";
import { Cards } from "./Components/Cards/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDiteils } from "./Components/CardsDeteil/CardsDeteils";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selected, setSelected] = useState(null);

  const cardsSelected = (id) => {
    setSelected(id);
  };

  return (
    <>
      <Container>
        <Row>
          <Cards cardsSelected={cardsSelected} />
        </Row>
      </Container>
      <CardDiteils selected={selected} />
    </>
  );
}

export default App;
