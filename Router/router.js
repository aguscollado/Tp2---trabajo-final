import controllerParticipantes from '../controller/participante.js'

import express from 'express'

export class RouterParticipantes {
    constructor() {
        this.router = express.Router()
        this.controladorParticipantes = new controllerParticipantes()
    }

    start() {

        this.router.get('/traer', this.controladorParticipantes.getParticipantes)
        
        this.router.post('/', this.controladorParticipantes.postParticipantes)

        this.router.put('/:id', this.controladorParticipantes.putParticipante)

        this.router.delete('/:id', this.controladorParticipantes.deleteParticipantes)
        
        return this.router
    }
}

