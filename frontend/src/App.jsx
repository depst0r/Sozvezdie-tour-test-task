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

  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <>
      <Container>
        <Row>
          <CardDiteils cardDiteilsData={cardDiteilsData} addZero={addZero} />
          <Cards cardsData={cardsData} addZero={addZero} />
        </Row>
      </Container>
    </>
  );
}

export default App;
