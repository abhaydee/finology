import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Heading from "../Heading/Heading";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <Container fluid className={styles["footer"]}>
      <div className={styles["footer__logo-container"]}>
        <img src={Logo} width={50} height={50} className="nav-container__img" />
        <Heading
          heading={"Easy Work"}
          className={styles["footer__heading-style"]}
        />
      </div>
      <div className={styles["footer__description"]}>
        <div className={styles["footer__address"]}>
          <Heading
            heading={"Address"}
            className={styles["footer__address__title"]}
          />
          <p className={styles["footer__address__content"]}>
            52-1,Jalan Aman Hijau , Taman Overseas Union ,58200 Kuala Lumpur ,
            Wilayah Persekutuan Kuala Lumpur
          </p>
        </div>
        <div className={styles["footer__address"]}>
          <Heading
            heading={"Contact"}
            className={styles["footer__address__title"]}
          />
          <p className={styles["footer__address__content"]}>03-7451 5283</p>
        </div>
        <div className={styles["footer__address"]}>
          <Heading
            heading={"Fax"}
            className={styles["footer__address__title"]}
          />
          <p className={styles["footer__address__content"]}>03-7451 5283</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
