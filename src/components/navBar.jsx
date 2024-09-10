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

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="logo">
            <a href={"/"}>
            </a>
          </div>
          <div className="social-icons">
            <div className="social-description">
              <Wps phoneNumber="+5491176095089" message={wps1} />
              <Email />
            </div>
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
