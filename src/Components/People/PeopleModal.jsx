import React from 'react'
import {Modal,Button} from "react-bootstrap"
import styles from "./PeopleModal.module.scss"
function PeopleModal({toggleModal,handleClose}) {
    return (
        <Modal show={toggleModal}
        onHide={handleClose}
        dialogClassName={styles["modal"]}
        >
        <Modal.Header closeButton >
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default PeopleModal
