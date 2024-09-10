import propiedades from "../data/propiedades.json";
import { useState, useEffect } from "react";
import "../styles/showOferts.css";
import { useNavigate } from "react-router-dom";
export const ShowOferts = () => {
  const navigate = useNavigate();
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

  const Action = ({ act1, act2 }) => {
    let venta = { act1 }.act1;
    let alquila = { act2 }.act2;
    if (venta) {
      if (alquila) {
        return <p className="seccionTx">Vende y alquila</p>;
      } else {
        return <p className="seccionTx">Vende</p>;
      }
    }
    if (!venta) {
      return <p className="seccionTx">Alquila</p>;
    }
  };

  const handleNavigate = (e) => {
    navigate("/propiedad/"+e.tt.replaceAll(" ","-"), { state: e });
  };

  return (
    <div className="offertContainer" >
      <h1 className="section-title" style={{ fontSize: "xx-large", marginRight:"auto", marginLeft:"3rem" }}>
        Mas propiedades disponibles
      </h1>
      <div className="offerts">
        {rdh.map((e) => (
          <div key={e.id} className="offertDiv" onClick={() => handleNavigate(e)}>
            <h2
              className="section-title"
              style={{ fontSize: "20px" }}
            >
              {{ e }.e.tt[0].toUpperCase()}
                {{ e }.e.tt.substring(1)}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <p className="seccionTx">
                {e.Htipe === true ? "Casa" : "Departamento"}
              </p>
              <Action act1={e.action[0]} act2={e.action[1]} />
            </div>
          </div>
        ))}

        {rdo.map((e) => (
          <div key={e.id} className="offertDiv" onClick={() => handleNavigate(e)}>
            <h2 className="section-title">{e.tt}</h2>
            <p className="seccionTx">{e.Wtype === true ? "Local" : "Galpon"}</p>
            <Action act1={e.action[0]} act2={e.action[1]} />
          </div>
        ))}
      </div>
    </div>
  );
};
