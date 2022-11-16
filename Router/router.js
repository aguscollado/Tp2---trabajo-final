import controllerParticipantes from '../Controller/participante.js'
import express from 'express'

export class RouterParticipantes {
    constructor() {
        this.router = express.Router()
        this.controladorParticipantes = new controllerParticipantes()
    }

    start() {
        /* GET Cliente/s */
        this.router.get('/', this.controladorParticipantes.getParticipantes())
        /* POST Cliente */
        this.router.post('/', this.controladorParticipantes.postParticipantes())
        /* PUT Cliente */

        return this.router
    }
}

