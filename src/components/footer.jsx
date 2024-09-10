import { Wps,Email,Direccion } from "./social";
import { Copiar } from "./copiar";
import "../styles/footer.css"
export const Footer = () => {
    let wps1 =
    "Buenos dias. Me gustaria disponer de tus servicios inmoviliarios.";
    let copy= "Celular: +54 9 11 7609-5089. Mail: Larisafernandezm@gmail.com."
  return (
    <footer>
      <div className="footer-container">
        <h2>Contacto: </h2>
        <ul>
            <li><p>WhatsApp</p><Wps phoneNumber="+5491176095089" message={wps1} /></li>
            <li><p>E-mail</p><Email/></li>
            <li><p>Direccion</p><Direccion/></li>
            <li><p>Copiar datos</p><Copiar copiar={copy}/></li>
        </ul>
      </div>
    </footer>
  );
};
