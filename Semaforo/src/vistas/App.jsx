import React, { useState, useEffect } from "react";
import Interseccion from "./Interseccion";
import { SemaforoModelo } from "../modelos/ModeloSemaforo";
import { iniciarTrabajadores } from "../controladores/ControladorSemaforos";

export default function App() {
  const [semaforos, setSemaforos] = useState({ ...SemaforoModelo });

  useEffect(() => {
    const trabajadores = iniciarTrabajadores(setSemaforos);
    return () => {
      Object.values(trabajadores).forEach(worker => worker.terminate());
    };
  }, []);


  return <Interseccion semaforos={semaforos} />;
}
