import participantesApi from '../Api/participantes.js'

class controllerParticipantes {

    constructor() {
        this.arrayParticipantes = new participantesApi()
    }

    getParticipantes = async (res) => {
        //Sin req salvo que le metamos alguna busqueda de algun participante
        res.json( await this.arrayParticipantes.devolverParticipantes())
    }

    postParticipantes = async (req, res) => {
        const participante = req.body
        res.json (await this.arrayParticipantes.incorporarParticipante(participante))
    }
}

export default controllerParticipantes