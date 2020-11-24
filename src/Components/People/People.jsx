import React,{useState}from "react";
import { Container,Card } from "react-bootstrap";
import happyFace from "../../assets/icons/happy-face.svg";
import Heading from "../Heading/Heading";
import { ComponentReSize, People as people } from "../../utils/utils";
import styles from "./People.module.scss";
import Person from "./Person";
import PeopleModal from "./PeopleModal";
function People() {
  const isMobile = ComponentReSize();
  const [toggleModal,setToggleModal]=useState(false)
  const handleClick=()=>{
    setToggleModal(true)
  }
  const handleClose=()=>{
    setToggleModal(false)
  }
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
        <button className={styles["people__controls__edit"]} onClick={handleClick}>Edit</button>
        <button className={styles["people__controls__add"]} onClick={handleClick}>Add</button>
      </div>
    </Container>
    <Person/>
    {toggleModal &&
      <PeopleModal toggleModal={toggleModal} handleClose={handleClose}/>
    }
    </>
  );
}

export default People;
