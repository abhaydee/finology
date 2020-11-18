import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from "../../assets/images/logo.png"
import "./NavContainer.scss"
function NavContainer() {
    return (
        <Container>
            <div className="nav-container">
               <img src={Logo} width={70} height={70} className="nav-container__img"/>
               <div>
                   
               </div>
            </div>
        </Container>
    )
}

export default NavContainer
