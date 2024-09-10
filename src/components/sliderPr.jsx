import React, { useState, useEffect } from "react";
import "../styles/Slider.css";

export const Slider = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === elements.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [elements.length]);

  return (
    <div className="slider">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`slider-item ${index === currentIndex ? "active " : ""}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};
