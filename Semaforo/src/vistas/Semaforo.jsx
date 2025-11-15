import React from "react";
import "../estilos/interseccion.css";

export default function Semaforo({ color }) {
  return (
    <div className="semaforo">
      <div className={`luz rojo ${color === "rojo" ? "encendido" : ""}`}></div>
      <div className={`luz amarillo ${color === "amarillo" ? "encendido" : ""}`}></div>
      <div className={`luz verde ${color === "verde" ? "encendido" : ""}`}></div>
    </div>
  );
}
