import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from "../../assets/images/logo.png"
import Heading from '../Heading/Heading'
import styles from "./Footer.module.scss"
function Footer() {
    return (
        <Container fluid className={styles["footer"]}>
            <div className={styles["footer__logo-container"]}>
                <img src={Logo} width={50} height={50} className="nav-container__img"/>
                <Heading heading={"Easy Work"} className={styles["footer__heading-style"]}/>
            </div>
        </Container>
    )
}

export default Footer
