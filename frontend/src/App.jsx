import React, { useState } from "react";
import { Cards } from "./Components/cards/cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDiteils } from "./Components/cardsDeteil/cardsDeteils";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import moment from "moment";

function App() {
  const [cardDiteilsData, setCardDiteilsData] = useState(null);

  const cardsData = (data) => {
    return setCardDiteilsData(data);
  };

  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const transformDate = (date) => moment(date).format("DD.MM");

  const numberOfDays = (endDate, startDate) => {
    return Math.abs(startDate - endDate) + 1;
  };

  return (
    <Router>
      <>
        <Container>
          <Row>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Cards
                    cardsData={cardsData}
                    addZero={addZero}
                    numberOfDays={numberOfDays}
                    date={transformDate}
                  />
                }
              />
              <Route
                path="/diteils"
                element={
                  <CardDiteils
                    cardDiteilsData={cardDiteilsData}
                    numberOfDays={numberOfDays}
                    addZero={addZero}
                    date={transformDate}
                  />
                }
              />
            </Routes>
          </Row>
        </Container>
      </>
    </Router>
  );
}

export default App;
