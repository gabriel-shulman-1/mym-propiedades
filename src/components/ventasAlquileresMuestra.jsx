import "../styles/vAMuestra.css";
import { useNavigate } from "react-router-dom";

export const Case = ({ caso1, caso2, precio1, precio2 }) => {
  let c1 = { caso1 }.caso1;
  let c2 = { caso2 }.caso2;
  let p1 = { precio1 }.precio1;
  let p2 = { precio2 }.precio2;
  if (c1 && !c2) {
    return <p className="seccionTx">{p1} U$</p>;
  }
  if (!c1 && c2) {
    return <p className="seccionTx">{p2} $</p>;
  }
  if (c1 && c2) {
    return (
      <p className="seccionTx">
        Venta: {p1}/Alquiler: {p2}
      </p>
    );
  }
};

export const VentasAlquileresMuestra = ({ props }) => {
  const navigate = useNavigate();
  const houseStyle = {
    flexDirection: "row",
    justifyContent: "space-around",
  };
  const WorkStyle = {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  };

  
  const Show = () => {
    const handleClick = () => {
      navigate("/propiedad/"+{ props }.props.tt.replaceAll(" ","-"), { state: { props }.props });
    };

    if ({ props }.props.type === 1) {
      return (
        <>
          <div className="elementVA house" style={houseStyle} onClick={handleClick}>
            <div
              className="txContainer"
              style={{ alignItems: "flex-start", right: "15%" }}
            >
              <h2 className="section-title">
                {{ props }.props.tt[0].toUpperCase()}
                {{ props }.props.tt.substring(1)}
              </h2>
              <p className="seccionTx">
                <span>{{ props }.props.Htipe ? "Casa" : "Departamento"}</span>:{" "}
                {{ props }.props.tx}
              </p>
              <Case
                caso1={{ props }.props.action[0]}
                caso2={{ props }.props.action[1]}
                precio1={{ props }.props.cost[0]}
                precio2={{ props }.props.cost[1]}
              />
            </div>
          </div>
        </>
      );
    }

    if ({ props }.props.type === 2) {
      return (
        <>
          <div className="elementVA workshop" style={WorkStyle} onClick={handleClick}>
            <div
              className="txContainer workshop"
              style={{ alignItems: "flex-end", left: "15%" }}
            >
              <h2 className="section-title">
                {{ props }.props.tt[0].toUpperCase()}
                {{ props }.props.tt.substring(1)}
              </h2>
              <p className="seccionTx">
                <span>{!{ props }.props.Wtype ? "Galpon" : "Local"}</span>
              </p>
              <p className="seccionTx">
                Dimensiones: {{ props }.props.x} por {{ props }.props.y}
              </p>
              <p className="seccionTx">
                {{ props }.props.action[0]
                  ? { props }.props.cost[0] + "U$"
                  : { props }.props.cost[1] + "$"}
              </p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Show />
    </>
  );
};
