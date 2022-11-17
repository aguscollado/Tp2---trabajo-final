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

    actualizarUnParticipante = async (participante, id) => {
        return await this.arrayParticipantes.modificarParticipante(participante,id)
    }

    quitarUnParticipante = async (id) => {
        return await this.arrayParticipantes.quitarParticipante(id)
    }

    //********************************* LOS DE ARRIBA VAN A LOS METODOS GET POST PUT DELETE ****************************************/

    // Hacer metodos para sacar estadisticas tipo rango edad que participo?
    // Otras opciones de metodoso para que no quede en 2 nada mas.

    cantidadParticipantes = async () => {
        return await this.apiParticipantes.obtenerParticipantes().lenght

    }
    getRandom() {
        return Math.floor(Math.random() * this.cantidadParticipantes())
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
