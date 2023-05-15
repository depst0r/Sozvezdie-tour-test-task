import React, { useState } from "react";
import { Cards } from "./Components/Cards/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDiteils } from "./Components/CardsDeteil/CardsDeteils";

function App() {
  const [selected, setSelected] = useState(null);

  const cardsSelected = (id) => {
    setSelected(id);
  };

  return (
    <>
      <Container>
        <Row>
          <CardDiteils selected={selected} />
          <Cards cardsSelected={cardsSelected} />
        </Row>
      </Container>
    </>
  );
}

export default App;
