import React from "react";
import { People as people } from "../../utils/utils";
import { Container, Card } from "react-bootstrap";
import styles from "./People.module.scss";
function Person() {
  return (
    <Container className={styles["person"]}>
      {people.map((person) => (
        <Card className={styles["person__card"]} key={person.id}>
          <Card.Img
            variant="top"
            src={person.imageurl}
            className={styles["person__image"]}
          />
          <Card.Body>
            <Card.Title className={styles["person__title"]}>
              {person.title}
            </Card.Title>
            <Card.Text className={styles["person__description"]}>
              {person.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Person;
