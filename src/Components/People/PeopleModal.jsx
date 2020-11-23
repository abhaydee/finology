import React from 'react'
import {Modal,Button} from "react-bootstrap"
import styles from "./PeopleModal.module.scss"
function PeopleModal({toggleModal,handleClose}) {
    return (
        <Modal show={toggleModal}
        onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default PeopleModal
