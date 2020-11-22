import React from "react";
import { Container,Card } from "react-bootstrap";
import happyFace from "../../assets/icons/happy-face.svg";
import Heading from "../Heading/Heading";
import { componentCheckSize, People as people } from "../../utils/utils";
import styles from "./People.module.scss";
import Person from "./Person";
function People() {
  const isMobile = componentCheckSize();
  return (
    <>
    <Container className={styles["people"]}>
      <div className={styles["people__happy"]}>
        {!isMobile && (
          <img src={happyFace} className={styles["people__image"]} />
        )}
        <Heading
          heading={"Our important people are listed here"}
          className={styles["people__heading"]}
        />
      </div>
      <div className={styles["people__controls"]}>
        <button className={styles["people__controls__edit"]}>Edit</button>
        <button className={styles["people__controls__add"]}>Add</button>
      </div>
    </Container>
    <Person/>
    </>
  );
}

export default People;
