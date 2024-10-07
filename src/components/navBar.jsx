import "../styles/navBar.css";
import React from "react";
import { Wps, Email } from "./social";

export const NavBar = () => {
  let wps1 =
    "Buenos dias. Me gustaria disponer de tus servicios inmoviliarios.";
  let buttons = [
    { id: "Inicio", name: '/' },
    { id: "Ventas", name: '/ventas' },
    { id: "Alquileres", name: '/alquileres' },
    { id: "Proyectos", name: '/proyectos' }
  ];

  const logoStyle = {
    fontFamily:"Baskerville Old Face",
    color:"rgb(189 55 28)"
  }

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="logo">
            <h1 style={logoStyle}>PROIEDADES<br/>
            <span style={{fontSize:"xxx-large"}}>MAGNONE ~ MARANO</span></h1>
          </div>
          <div className="social-icons">
              <Wps phoneNumber="+5491176095089" message={wps1} />
              <Email />
          </div>
        </div>

        <nav className="nav-bar">
          {{buttons}.buttons.map((link, index)=>(
            <a href={link.name} key={link.id+index}>
              <button className="nav-btn">{link.id}</button>
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};
