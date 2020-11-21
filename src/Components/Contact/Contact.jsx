import React from 'react'
import { Container } from 'react-bootstrap'
import Heading from '../Heading/Heading'
import styles from "./Contact.module.scss"
function Contact() {
    return (
        <Container className={styles["contact"]}>
            <Heading heading={"Contact Us"}/>
        </Container>
    )
}

export default Contact
