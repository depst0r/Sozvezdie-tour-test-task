import React, { useState } from "react";
import { Cards } from "./Components/Cards/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDiteils } from "./Components/CardsDeteil/CardsDeteils";

function App() {
  const [cardDiteilsData, setCardDiteilsData] = useState(null);

  const cardsData = (data) => {
    setCardDiteilsData(data);
  };

  return (
    <>
      <Container>
        <Row>
          <CardDiteils cardDiteilsData={cardDiteilsData} />
          <Cards cardsData={cardsData} />
        </Row>
      </Container>
    </>
  );
}

export default App;
