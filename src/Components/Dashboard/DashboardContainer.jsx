import React from 'react'
import { Container } from 'react-bootstrap'
import "./DashboardContainer.scss"
import Dashboard from "../../assets/images/dashboard.png"
function DashboardContainer() {
    return (
        <Container className="dashboard-container">
            <img src={Dashboard} className="dashboard-container__image"/>
            <div className="dashboard-container__content">
                <h3 className="dashboard-container__title">We can give you our best user experience to your system</h3>
            </div>
        </Container>
    )
}

export default DashboardContainer;
