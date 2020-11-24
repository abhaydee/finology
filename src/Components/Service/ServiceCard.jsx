import React from "react";
import { Container } from "react-bootstrap";
import { service } from "../../utils/utils";
import Avatar from "../../assets/people/darlene-chabrat.jpg";
import styles from "./ServiceCard.module.scss";
import Heading from "../Heading/Heading";
function ServiceCard({ imageurl, title, description, profession }) {
  return (
    <div className={styles["servicecard"]}>
      <Container>
        <div className={styles["servicecard__container"]}>
          <img src={imageurl} className={styles["servicecard__image"]} />
          <div className={styles["servicecard__content"]}>
            <Heading heading={title} className={styles["servicecard__title"]} />
            <Heading
              heading={profession}
              className={styles["servicecard__subtitle"]}
            />
          </div>
        </div>
        <div>
          <div className={styles["servicecard__description"]}>
            {description}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ServiceCard;
