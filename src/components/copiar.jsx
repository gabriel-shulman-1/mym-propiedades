import { useState } from "react"
export const Copiar = () => {
    const [copied,setCopied] = useState(false)
    let copy= "Celular: +54 9 11 . Mail: @gmail.com."

    const handleCopy = () => {
        navigator.clipboard.writeText(copy)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch((err) => {
            console.error('Error al copiar el texto: ', err);
          });
      };

      return (
        <div>
          <button onClick={handleCopy}>
            {copied ? "Copiado!" : "Copiar al portapapeles"}
          </button>
        </div>
      );

}