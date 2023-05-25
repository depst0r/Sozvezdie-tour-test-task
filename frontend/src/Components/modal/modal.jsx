import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Slider } from "../carousel/carousel";

export const ModalWindow = ({ cardData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <Slider photo={cardData} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
