import React,{useState} from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/icons/search.svg";
import Cancel from "../../assets/icons/cancel.svg";
import { navList, ComponentReSize } from "../../utils/utils";
import "./NavContainer.scss";
import NavContainerModal from "./NavContainerModal";
function NavContainer() {
  const isMobile = ComponentReSize();
  console.log("the mobile view", isMobile);
  const [toggleModal,setToggleModal]=useState(false)
  const handleClick=()=>{
    setToggleModal(true)
  }
  const handleClose=()=>{
      console.log("hitting close")
    setToggleModal(false)
  }
  return (
    <Container>
      <div className="nav-container">
        <img src={Logo} width={50} height={50} className="nav-container__img" />
        <ul className="nav-container__list">
          {navList.map((data) => (
            <li key={data.id} className="nav-container__listitem">
              {data.title}
            </li>
          ))}
        </ul>
        {isMobile ? (
          <img
            src={Search}
            className="nav-container__search"
            width={30}
            height={30}
            onClick={handleClick}
          />
        ) : (
          <img
            src={Search}
            className="nav-container__search"
            width={30}
            height={30}
          />
        )}
        {toggleModal && (
          <>

         
          <div id="mySidenav" className={`${"sidenav"} ${toggleModal?"sidenav-open":"sidenav-close"}`} >
          <a href="javascript:void(0)" class="closebtn" onClick={handleClose}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
         </>  
        )}
      </div>
    </Container>
  );
}

export default NavContainer;
