import React from "react";
import GoogleMapReact from "google-map-react";
import { ComponentReSize } from "../../utils/utils";
import styles from "./Contact.module.scss";
function ContactMap() {
  const isMobile = ComponentReSize();
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;
  return (
    <div
      style={{
        height: "450px",
        width: isMobile ? "100%" : "450px",
        marginTop: "2rem",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDjBGjBQFm1WHlUvLDvcsqMeLVlK9SMO4E" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default ContactMap;
