import React from "react";
import Semaforo from "./Semaforo";
import "../estilos/interseccion.css";

export default function Interseccion({ semaforos }) {
  return (
    <div className="interseccion">
      {/* Semaforos */}
      <div className="norte"><Semaforo color={semaforos.norteSur} /></div>
      <div className="sur"><Semaforo color={semaforos.surNorte} /></div>
      <div className="este"><Semaforo color={semaforos.esteOeste} /></div>
      <div className="oeste"><Semaforo color={semaforos.oesteEste} /></div>
      <>
        {semaforos.norteSur === "rojo" && <div className="arrow arrow-up">↑</div>}
        {semaforos.surNorte === "rojo" && <div className="arrow arrow-down">↓</div>}
        {semaforos.esteOeste === "rojo" && <div className="arrow arrow-right">→</div>}
        {semaforos.oesteEste === "rojo" && <div className="arrow arrow-left">←</div>}
      </>
      <div className="lane vertical"></div>
      <div className="lane horizontal"></div>
      <div className="lane vertical top"></div>
      <div className="lane vertical bottom"></div>
      <div className="lane horizontal left"></div>
      <div className="lane horizontal right"></div>
      <div className="norte">
        <Semaforo color={semaforos.norteSur} />
      </div>
      <div className="sur">
        <Semaforo color={semaforos.surNorte} />
      </div>
      <div className="este">
        <Semaforo color={semaforos.esteOeste} />
      </div>
      <div className="oeste">
        <Semaforo color={semaforos.oesteEste} />
      </div>
    </div>
  );
}

