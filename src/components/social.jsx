import React from "react";
import wpsLogo from "../assets/wps.svg";
import Mail from "../assets/mail.svg"
import Mapa from "../assets/maps.svg"


export const Wps = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src={wpsLogo} alt="WhatsApp" width="30" />
      </a>
    </>
  );
};

export const Email = () => {
  return (
    <a href={"Larisafernandezm@gmail.com"} target="_blank" rel="noopener noreferrer">
      <img src={Mail} alt="Mail" width="30"/>
    </a>
  );
};

export const Direccion = () =>{
  return (
    <a href={"https://maps.app.goo.gl/4Yh83efjeMyD7NB59"} target="_blank" rel="noopener noreferrer">
      <img src={Mapa} alt="Map" />
    </a>
  )
}
