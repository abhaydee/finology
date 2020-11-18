import React from 'react'
import {Container} from "react-bootstrap"
import NavContainer from '../NavContainer/NavContainer'
import "./Header.scss"
function Header() {
    return (
        <Container fluid className="header">
            <NavContainer/>
        </Container>
    )
}

export default Header
