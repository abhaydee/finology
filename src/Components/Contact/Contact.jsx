import React,{useState} from "react";
import { Container, Form } from "react-bootstrap";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.scss";
function Contact() {
    const [input,setInput]=useState({});
    const handleChange=(e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
  return (
    <Container className={styles["contact"]}>
      <Heading heading={"Contact Us"} />
      <div className={styles["contact__form"]}>
        <Form className={styles["contact__container"]}>
          <Form.Group
            controlId="formBasicEmail"
            className={styles["contact__group"]}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={handleChange} name="Contact Name"/>
            <Form.Control.Feedback
              type="invalid"
              className={styles["contact__error"]}
            >
              Please Enter your Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            controlId="formBasicEmail"
            className={styles["contact__group"]}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={handleChange} name="Email"/>
            <Form.Control.Feedback
              type="invalid"
              className={styles["contact__error"]}
            >
              Please Enter your email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            controlId="formBasicEmail"
            className={styles["contact__group"]}
          >
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject"  onChange={handleChange} name="Contact Subject"/>
            <Form.Control.Feedback
              type="invalid"
              className={styles["contact__error"]}
            >
              Please Enter your Subject
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            controlId="formBasicEmail"
            className={styles["contact__group"]}
          >
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange} name="Message"/>
            <Form.Control.Feedback
              type="invalid"
              className={styles["contact__error"]}
            >
              Please Enter your Message
            </Form.Control.Feedback>
          </Form.Group>
          <input
            type="submit"
            name="Send"
            value="Send"
            className={styles["contact__button"]}
          />
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
