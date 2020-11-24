import React from "react";
import { Container } from "react-bootstrap";
import "./DashboardContainer.scss";
import Dashboard from "../../assets/images/dashboard.png";
import Signin from "../../assets/images/sign-in.png";
function DashboardContainer() {
  return (
    <Container>
      <div className="dashboard-container">
        <img src={Dashboard} className="dashboard-container__image" alt="container"/>
        <div className="dashboard-container__content">
          <h3 className="dashboard-container__title">
            We can give you our best user experience to your system
          </h3>
          <p className="dashboard-container__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quibusdam dignissimos, suscipit quae voluptatum ipsa mollitia odit!
            Possimus numquam minus sit, dolor perspiciatis nesciunt suscipit
            neque consectetur voluptas vero alias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fugit, molestias! Unde, repellendus
            tur, adipisicing elit. Fugit, moles
          </p>
        </div>
      </div>
      <div className="signin-container">
        <div className="dashboard-container__content">
          <h3 className="dashboard-container__title">
            We can give you our best user experience to your system
          </h3>
          <p className="dashboard-container__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quibusdam dignissimos, suscipit quae voluptatum ipsa mollitia odit!
            Possimus numquam minus sit, dolor perspiciatis nesciunt suscipit
            neque consectetur voluptas vero alias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fugit, molestias! Unde, repellendus
            tur, adipisicing elit. Fugit, moles
          </p>
        </div>
        <img src={Signin} className="dashboard-container__image"  alt="dashboard"/>
      </div>
    </Container>
  );
}

export default DashboardContainer;
