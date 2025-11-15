import { Tiempos } from "../modelos/ModeloSemaforo.js";

function esperar(ms) {return new Promise((res) => setTimeout(res, ms));
}

onmessage = async (e) => {
    if (e.data === "amarillo-previo") {
    postMessage("amarillo");
    await esperar(Tiempos.amarillo); }
    if (e.data === "verde") {
    postMessage("verde");
    await esperar(Tiempos.verde);
    postMessage("amarillo"); // amarillo al final
    await esperar(Tiempos.amarillo);
    postMessage("rojo");
    postMessage("terminado"); // aviso al controlador
    }
};
