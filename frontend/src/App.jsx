import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Cards } from './Components/Cards/Cards';
import { CardDiteils } from './Components/CardsDeteil/CardsDeteils';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Container className="font-dancing-script">
        <Row>
          <Routes>
            <Route
              exact
              path="/"
              element={<Cards />}
            />
            <Route
              path="/diteils/:id"
              element={
                <CardDiteils />
              }
            />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
