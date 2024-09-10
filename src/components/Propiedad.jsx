import { useLocation } from "react-router-dom";
import { Case } from "./ventasAlquileresMuestra";
import { Wps, Email } from "./social";
import "../styles/Propiedades.css";
export const Propiedad = () => {
  const location = useLocation();
  const chosedGround = location.state;

  return (
    <div className="groundChosed">
      <h1 className="section-title">
        {chosedGround.tt[0].toUpperCase() + chosedGround.tt.substring(1)}
      </h1>

      <div className="datailcontainer">

        <div>
          <p className="seccionTx">
            Tipo de inmueble: <span>{chosedGround ? "casa" : "edificio"}</span>
          </p>
          <p className="seccionTx">
            Descripcion: <span>{chosedGround.tx}</span>
          </p>
          <Case
            caso1={chosedGround.action[0]}
            caso2={chosedGround.action[1]}
            precio1={chosedGround.cost[0]}
            precio2={chosedGround.cost[1]}
          />
          <Wps />
          <Email />
        </div>

        <div></div>

      </div>
    </div>
  );
};
