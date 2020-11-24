import React from "react";
import { Modal, Button } from "react-bootstrap";
import User from "../../assets/icons/user.svg";
import styles from "./PeopleModal.module.scss";
import styles1 from "../Contact/Contact.module.scss";
import ContactForm from "../Contact/ContactForm";
function PeopleModal({ toggleModal, handleClose }) {
  return (
    <Modal
      show={toggleModal}
      onHide={handleClose}
      dialogClassName={styles["modal"]}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal Heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={User} className={styles["modal__image"]} />
          <ContactForm message={"description"} labelReq={"position"}  />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className={styles["modal__cancel"]}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          className={styles["modal__save"]}
          onClick={handleClose}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PeopleModal;
