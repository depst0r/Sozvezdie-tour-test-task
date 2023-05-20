import React from "react";
import Spinner from "react-bootstrap/Spinner";

export const BasicSpinner = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
