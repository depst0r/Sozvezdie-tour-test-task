import React from "react";
import Spinner from "react-bootstrap/Spinner";

export const MySpinner = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
