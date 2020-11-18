import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from "../../assets/images/logo.png"
import "./NavContainer.scss"
import {navList} from "../../utils/utils"
function NavContainer() {
    return (
        <Container>
            <div className="nav-container">
               <img src={Logo} width={70} height={70} className="nav-container__img"/>
               <ul>
                {navList.map((data)=>(
                    <li key={data.id} className="nav-container__listitem">
                        {data.title}
                    </li>
                ))
                }
               </ul>
               
            </div>
        </Container>
    )
}

export default NavContainer
