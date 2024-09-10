import propiedades from "../data/propiedades.json";
import { useState, useEffect } from "react";
import { VentasAlquileresMuestra } from "./ventasAlquileresMuestra";
export const Ventas = () => {
  const [rdh, setRdh] = useState([]);
  const [rdo, setRdo] = useState([]);

  const generateRandomHouses = () => {
    let shuffledCards = [...propiedades.houses]
      .sort(() => Math.random() - 0.5) // Mezclar aleatoriamente
      .slice(0, 5); //Tomar solo los primeros 10
    setRdh(shuffledCards);
  };
  const generateRandomOthers = () => {
    let shuffledCards = [...propiedades.workshops]
      .sort(() => Math.random() - 0.5) // Mezclar aleatoriamente
      .slice(0, 5); //Tomar solo los primeros 10
    setRdo(shuffledCards);
  };

  // Generar tarjetas al cargar el componente
  useEffect(() => {
    generateRandomHouses();
    generateRandomOthers();
  }, []);

  const VentasHome = ({ houses }) => {
    return <VentasAlquileresMuestra props={{ houses }.houses} tipe={true}/>
  };
  const VentasWork = ({ works }) => {
    return <VentasAlquileresMuestra props={{ works }.works} tipe={false}/>
  };

  return (
    <>
      <div className="ventas" style={{display:"flex", flexDirection:"column", margin:"3rem 7rem" }}>
        <h1 className="section-title" style={{fontSize:"xxx-large", width:"fit-content", margin:"1rem auto 2rem auto"}}>Propiedades en venta</h1>
        {rdh.map((e,index) =>
          e.action[0] === true ? <VentasHome houses={e}/> : <></>
        )}
        {rdo.map((e,index) =>
          e.action[0] === true ? <VentasWork works={e}/> : <></>
        )}
      </div>
    </>
  );
};
