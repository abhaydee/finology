import React from "react";
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
            src={Cancel}
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
          <NavContainerModal toggleModal={toggleModal} handleClose={handleClose} />
        )}
      </div>
    </Container>
  );
}

export default NavContainer;
