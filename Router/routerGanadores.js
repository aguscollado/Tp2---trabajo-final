import ControllerGanadores from '../controller/ganadores.js'
import express from 'express'

export class RouterGanadores {
    constructor() {
        this.router = express.Router()
        this.losGanadores = new ControllerGanadores()
    }

    start() {

        this.router.get('/sortear', this.losGanadores.getSorteados)

        return this.router
    }

}

