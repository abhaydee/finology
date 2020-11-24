import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../Heading/Heading";
import { Partners } from "../../utils/utils";
import styles from "./BrandsContainer.module.scss";
function BrandsContainer() {
  return (
    <div className={styles["brands-container"]}>
      <Heading heading="We've worked with" />
      <Container className={styles["brands-container__imagecontainer"]}>
        {Partners.map((brand) => (
          <img
            key={brand.id}
            src={brand.imageurl}
            className={styles["brands-container__image"]}
            alt="brand"
          />
        ))}
      </Container>
    </div>
  );
}

export default BrandsContainer;
