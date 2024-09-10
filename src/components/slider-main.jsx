import "../styles/slider-main.css";
import propiedades from "../data/propiedades.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SliderMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === propiedades.houses.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  });

  let venta = propiedades.houses[currentIndex].action[0];
  let alquila = propiedades.houses[currentIndex].action[1];
  let tittle =
    propiedades.houses[currentIndex].tt[0].toUpperCase() +
    propiedades.houses[currentIndex].tt.substring(1);

  /*let blImagen = require("../Photos/" +
    propiedades.houses[currentIndex].tt +
    " front.jpeg");*/

  const VentaCompra = () => {
    if (venta && alquila) {
      return (
        <>
          <p className="seccionTx">
            En alquiler: {propiedades.houses[currentIndex].cost[1]}$/Mes.
          </p>
          <p className="seccionTx">
            En venta: {propiedades.houses[currentIndex].cost[0]} U$
          </p>
        </>
      );
    }
    if (venta && !alquila) {
      return (
        <>
          <p className="seccionTx">En venta: </p>
          <p className="seccionTx">
            {" "}
            {propiedades.houses[currentIndex].cost[0]} U$
          </p>
        </>
      );
    }
    if (!venta && alquila) {
      return (
        <>
          <p className="seccionTx">Alquila: </p>
          <p className="seccionTx">
            {propiedades.houses[currentIndex].cost[1]} $/Mes
          </p>
        </>
      );
    }
  };

  const handleClick = () => {
    navigate("/propiedad/"+propiedades.houses[currentIndex].tt.replaceAll(" ","-"), { state: propiedades.houses[currentIndex] });
  };

  return (
    <div className="sliderContainer">
      <div className="imgSection">
        
      </div>
      <div className="descriptionSect" onClick={handleClick}>
        <h1 className="section-title">{tittle}</h1>
        <img src="" alt="" />
        <p className="seccionTx">
          {propiedades.houses[currentIndex].Htipe === true
            ? "Casa"
            : "Departamento"}
        </p>
        <p className="seccionTx">{propiedades.houses[currentIndex].tx}</p>
        <VentaCompra/>
      </div>
    </div>
  );
};
