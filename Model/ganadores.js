import ParticipantesParaSorteo from './participantes.js'
import ParticipantesParaSorteoEnMongo from './participantesEnMongo.js'

class Ganadores {

    constructor() {
        this.ganadores = []
        this.participantes = new ParticipantesParaSorteoEnMongo()
    }

    cantidadDeParticiantes = async () => {
        try {
            return (await this.participantes.obtenerParticipantes()).length
        }
        catch (error) {
            console.log(`ACA ESTA EL ERROR EN MODEL, motivo de error:  ${err.message}`)
        }

    }

    random = async () => {
        try {
            const cantParticipantes = await this.cantidadDeParticiantes()
            return Math.floor(Math.random() * cantParticipantes)
        }
        catch (error) {
            console.log(`ACA ESTA EL ERROR EN MODEL, motivo de error:  ${err.message}`)
        }

    }

    sortear = async () => {
        try {
            const TOPE_GANADORES = 3
            /* const arrayAux = [...await this.participantes.obtenerParticipantes()] */ // si hago esto, sale un undifined de vez en cuando
            const arrayAux = await this.participantes.obtenerParticipantes()

            console.log(arrayAux)

            for (let index = 0; index < TOPE_GANADORES; index++) {
                let numeroRandom = await this.random()
                this.ganadores.push(arrayAux[numeroRandom])
                arrayAux.splice(numeroRandom, 1)
            }

            return this.ganadores
        }
        catch (error) {
            console.log(`ACA ESTA EL ERROR EN MODEL, motivo de error:  ${error.message}`)
        }

    }

    devolver = async () => {
        return this.ganadores
    }
}

export default Ganadores