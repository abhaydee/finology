import React from "react";
import { Container } from "react-bootstrap";
import Heart from "../../assets/icons/heart.svg"
import {componentCheckSize} from "../../utils/utils";
import Heading from "../Heading/Heading";
import styles from "./Service.module.scss";
function Service() {
    const isMobile=componentCheckSize();
  return (
    <>
    <Container className={styles["service"]}>
      <div className={styles["service__heart"]}>
        {!isMobile && (
          <img src={Heart} className={styles["service__image"]} />
        )}
        <Heading
          heading={"What other people say about our service"}
          className={styles["service__heading"]}
        />
      </div>
    </Container>
    </>
  );
}

export default Service;
