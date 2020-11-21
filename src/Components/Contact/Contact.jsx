import React from "react";
import { Container, Form } from "react-bootstrap";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.scss";
function Contact() {
  return (
    <Container className={styles["contact"]}>
      <Heading heading={"Contact Us"} />
      <div className={styles["contact__form"]}>
        <Form className={styles["contact__container"]}>
          <Form.Group controlId="formBasicEmail" className={styles["contact__group"]}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className={styles["contact__group"]}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className={styles["contact__group"]}>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className={styles["contact__group"]}>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
