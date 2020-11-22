import React from "react";
import { Container } from "react-bootstrap";
import Heart from "../../assets/icons/heart.svg"
import {componentCheckSize,service} from "../../utils/utils";
import Heading from "../Heading/Heading";
import ServiceCard from "./ServiceCard";
import Carousel from "react-elastic-carousel"
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
    <Carousel itemsToShow={isMobile? 1:2.5}>
        {service.map((serve)=>(
            <div id={serve.id}>
            <ServiceCard imageurl={serve.imageurl} title={serve.title} profession={serve.profession} description={serve.description}/>
            </div>
        ))}
    </Carousel>
    </>
  );
}

export default Service;
