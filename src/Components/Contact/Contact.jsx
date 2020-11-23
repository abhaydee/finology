import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
function Contact() {
  return (
    <>
     <Heading heading={"Contact Us"} className={styles["contact-heading"]} />
    <Container className={styles["contact"]}>
      <div className={styles["contact__form"]}>
        <ContactForm/>
      </div>
       <div>
           <ContactMap/>
        </div> 
    </Container>
    </>
  );
}

export default Contact;
