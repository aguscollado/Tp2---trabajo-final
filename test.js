import ganadores from "./Model/ganadores.js";

const test = new ganadores()

const arrayGanadores = test.obtenerGanadores()

function mostrarGanadores() {
    for (let index = 0; index < arrayGanadores.length; index++) {
        console.log(arrayGanadores[index])
        index++
    }
}

console.log(arrayGanadores)
/* mostrarGanadores() */