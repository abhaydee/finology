import React from 'react'
import { Container } from 'react-bootstrap';
import {service} from "../../utils/utils";
import Avatar from "../../assets/people/darlene-chabrat.jpg";
import styles from "./ServiceCard.module.scss"
import Heading from '../Heading/Heading';
function ServiceCard({}) {
    return (
        <div className={styles["servicecard"]}>
            <Container>
                <div className={styles["servicecard__container"]}>
                    <img src={Avatar}  className={styles["servicecard__image"]}/>
                    <div className={styles["servicecard__content"]}>
                        <Heading heading={"David Campion"} className={styles["servicecard__title"]}/>
                        <Heading heading={"CEO of Icloud"} className={styles["servicecard__subtitle"]}/>
                    </div>
                </div>
                <div>
                <div className={styles["servicecard__description"]}>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo."
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ServiceCard;
