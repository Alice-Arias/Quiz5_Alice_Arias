// Inicializa los workers o hilos de cada semáforo y controla la secuencia de luces
export function iniciarTrabajadores(setSemaforos) {
  const logica = {
    norteSur: new Worker(
      new URL("../LogicaSemaforo/norteSur.js", import.meta.url),
      { type: "module" }
    ),
    surNorte: new Worker(
      new URL("../LogicaSemaforo/surNorte.js", import.meta.url),
      { type: "module" }
    ),
    esteOeste: new Worker(
      new URL("../LogicaSemaforo/esteOeste.js", import.meta.url),
      { type: "module" }
    ),
    oesteEste: new Worker(
      new URL("../LogicaSemaforo/oesteEste.js", import.meta.url),
      { type: "module" }
    ),
  };
  const orden = ["norteSur", "surNorte", "esteOeste", "oesteEste"];
  let indice = 0;
  function siguiente() {
    const actual = orden[indice];
    // primero aviso a quien va a verde que pase por amarillo
    logica[actual].postMessage("amarillo-previo");
    setTimeout(() => {
      logica[actual].postMessage("verde");
    }, 2000);
  }
  for (const clave in logica) {
    logica[clave].onmessage = (e) => {
      if (e.data === "terminado") {
        indice = (indice + 1) % orden.length;
        siguiente();
      } else {
        setSemaforos((prev) => ({ ...prev, [clave]: e.data }));
      }
    };
  }
  siguiente();
  return logica;
}
