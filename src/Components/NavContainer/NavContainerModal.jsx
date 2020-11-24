import React from 'react'
import {Modal} from "react-bootstrap";

function NavContainerModal() {
    return (
        <Modal
        show={toggleModal}
        onHide={handleClose}
        dialogClassName={styles["modal"]}
      ></Modal>
    )
}

export default NavContainerModal
