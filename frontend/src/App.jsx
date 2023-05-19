import React, { useState } from "react";
import { Cards } from "./Components/cards/cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDiteils } from "./Components/cardsDeteil/cardsDeteils";

function App() {
  const [cardDiteilsData, setCardDiteilsData] = useState(null);

  const cardsData = (data) => {
    setCardDiteilsData(data);
  };

  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const numberOfDays = (endDate, startDate) => {
    return Math.abs(startDate - endDate + 1);
  };

  return (
    <>
      <Container>
        <Row>
          <CardDiteils
            cardDiteilsData={cardDiteilsData}
            numberOfDays={numberOfDays}
            addZero={addZero}
          />
          <Cards
            cardsData={cardsData}
            addZero={addZero}
            numberOfDays={numberOfDays}
          />
        </Row>
      </Container>
    </>
  );
}

export default App;
