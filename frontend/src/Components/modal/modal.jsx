import React from "react";
import Modal from "react-bootstrap/Modal";
import { Slider } from "../carousel/carousel";

export const MyModal = () => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Slider />
      </Modal.Body>
    </Modal>
  );
};
