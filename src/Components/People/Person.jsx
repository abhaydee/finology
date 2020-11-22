import React from "react";
import { People as people } from "../../utils/utils";
import { Container, Card } from "react-bootstrap";
import styles from "./People.module.scss";
function Person() {
  return (
    <Container className={styles["person"]}>
        {people.map((person) => (
          <Card className={styles["person__card"]}>
            <Card.Img
              variant="top"
              src={person.imageurl}
              className={styles["person__image"]}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
}

export default Person;
