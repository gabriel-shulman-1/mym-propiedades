import { Wps, Email, Direccion } from "./social";
import { Copiar } from "./copiar";
import "../styles/footer.css";
export const Footer = () => {
  let wps1 =
    "Buenos dias. Me gustaria disponer de tus servicios inmoviliarios.";
  let copy = "Celular: +54 9 11 6139-5794.";
  return (
    <footer>
      <h2>Contacto: </h2>
      <div className="footer-data-container">
        <div className="footer-container">
          <ul>
            <li className="liFooter">
              <Wps phoneNumber="+5491161395794" message={wps1} />
              <p>Telefono: +5491161395794</p>
            </li>
            <li className="liFooter">
              <Direccion />
              <p>
                Direccion: Coronel Martiniano Chilavert 6611, C1439 Cdad.
                Autónoma de Buenos Aires
              </p>
            </li>
            <li className="liFooter">
              <Email />
              <p>Email: </p>
            </li>
          </ul>
        </div>
        <div className="footer-container">
          <p>Copiar datos</p>
          <Copiar copiar={copy} />
        </div>
      </div>
    </footer>
  );
};
