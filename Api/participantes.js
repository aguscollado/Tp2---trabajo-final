import config from '../config.js'
import factoryDeParticipantes from '../model/DAO/factoryParticipantes.js'
//import listaPersonas from '../model/participantes.js'

class apiParticipantes {

    constructor() {
        this.arrayParticipantes = factoryDeParticipantes.get(config.MODO_DE_PERSISTENCIA)
    }

    devolverParticipantes = async () => {
        return await this.arrayParticipantes.obtenerParticipantes()
    }

    incorporarParticipante = async (participante) => {
        return await this.arrayParticipantes.ingresarParticipante(participante)
    }

    actualizarUnParticipante = async (participante, id) => {
        return await this.arrayParticipantes.modificarParticipante(participante, id)
    }

    quitarUnParticipante = async (id) => {
        return await this.arrayParticipantes.quitarParticipante(id)
    }

    //********************************* LOS DE ARRIBA VAN A LOS METODOS GET POST PUT DELETE ****************************************/

    // Hacer metodos para sacar estadisticas tipo rango edad que participo?
    // Otras opciones de metodos para que no quede en 2 nada mas.

}

export default apiParticipantes
