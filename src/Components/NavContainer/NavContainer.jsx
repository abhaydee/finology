import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from "../../assets/images/logo.png"
import Search from "../../assets/icons/search.svg"
import "./NavContainer.scss"
import {navList} from "../../utils/utils"
function NavContainer() {
    return (
        <Container>
            <div className="nav-container">
               <img src={Logo} width={50} height={50} className="nav-container__img"/>
               <ul className="nav-container__list">
                {navList.map((data)=>(
                    <li key={data.id} className="nav-container__listitem">
                        {data.title}
                    </li>
                ))
                }
               </ul>
                <img src={Search} className="nav-container__search"  width={30} height={30}/>
            </div>
        </Container>
    )
}

export default NavContainer
