import config from '../config.js'
import factoryDeParticipantes from '../Model/Dao/factoryParticipantes.js'
//import listaPersonas from '../Model/participantes.js'

class apiParticipantes {

    constructor() {
        this.arrayParticipantes = factoryDeParticipantes.get(config.MODO_DE_PERSISTENCIA)
    }

    devolverParticipantes = async () => {
        return await this.arrayParticipantes.obtenerParticipantes()
    }

    incorporarParticipante = async (participante) => {
        return await  this.arrayParticipantes.ingresarParticipante(participante)
    }

    // Hacer metodos para sacar estadisticas tipo rango edad que participo?
    // Otras opciones de metodoso para que no quede en 2 nada mas.

    cantidadParticipantes = async () => {
        return await this.apiParticipantes.obtenerParticipantes().lenght

    }
    getRandom(min, cantidadParticipantes) {
        return Math.random() * (cantidadParticipantes - min) + min;
      }


    obtenerGanadores = async () => {
        for (let index = 0; index < 3; index++) {
            this.getRandom(1,cantidadParticipantes())
            index++
            //hacer que devuelva los id con los 3 ganadores
        }
    }
}

export default apiParticipantes
