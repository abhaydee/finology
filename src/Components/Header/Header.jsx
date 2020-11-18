import React from 'react'
import {Container} from "react-bootstrap"
import NavContainer from '../NavContainer/NavContainer'
import "./Header.scss"
function Header() {
    return (
        <Container fluid className="header">
            <NavContainer/>
            <Container className="header__data">
                <div>
                    <h3 className="header__title">Make development easy with us</h3>
                    <p className="header__description"> Doing development can never be easy and it takes time and resources. We at EasyWork has the solution </p>
                </div>
                
            </Container>
        </Container>
    )
}

export default Header
