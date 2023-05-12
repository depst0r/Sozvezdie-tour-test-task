import React from "react";
import { Cards } from "./Components/Cards/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Cards />
      </Row>
    </Container>
  );
}

export default App;
