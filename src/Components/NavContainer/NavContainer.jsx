import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/icons/search.svg";
import Menu from "../../assets/icons/menu-icon.png";
import { navList, ComponentReSize } from "../../utils/utils";
import "./NavContainer.scss";
function NavContainer() {
  const isMobile = ComponentReSize();
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(true);
  };
  const handleClose = () => {
    setToggleModal(false);
  };
  return (
    <Container>
      <div className="nav-container">
        <img src={Logo} width={50} height={50} className="nav-container__img" />
        {!isMobile && (
          <ul className="nav-container__list">
            {navList.map((data) => (
              <li key={data.id} className="nav-container__listitem">
                {data.title}
              </li>
            ))}
          </ul>
        )}
        {!isMobile ? (
          <img
            src={Search}
            className="nav-container__search"
            width={30}
            height={30}
          />
        ) : (
            <span style={{fontSize:"xx-large",cursor:"pointer",color:"white"}} onClick={handleClick}>&#9776;</span>
        )}
        {toggleModal && (
          <>
            <div
              id="mySidenav"
              className={`${"sidenav"} ${
                toggleModal ? "sidenav-open" : "sidenav-close"
              }`}
            >
              <img
                src={Logo}
                width={50}
                height={50}
                className="nav-container__img mb-2"
              />

              <a
                href="javascript:void(0)"
                class="closebtn"
                onClick={handleClose}
              >
                &times;
              </a>
              <div className="d-flex flex-column">
                {navList.map((data) => (
                  <a key={data.id} className="nav-container__listitem">
                    {data.title}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default NavContainer;
