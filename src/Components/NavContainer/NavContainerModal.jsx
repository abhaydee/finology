import React from "react";
import { Modal } from "react-bootstrap";
import styles from "./NavContainerModal.module.scss";
function NavContainerModal({ toggleModal, handleClose }) {
  return (
    <div >
    {/* <Modal
      show={toggleModal}
      onHide={handleClose}
      dialogClassName={styles["modal"]}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal Heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      </Modal.Body>
    </Modal> */}
    </div>
  );
}

export default NavContainerModal;
