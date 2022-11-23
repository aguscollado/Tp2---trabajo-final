import ganadores from "./model/ganadores.js";

const test = new ganadores()

console.log(`prueba`, await test.sortear())

/* console.log(await test.devolver()) */
