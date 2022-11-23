import GanadoresApi from '../Api/ganadores.js'

class ControllerGanadores {

    constructor() {
        this.losGanadores = new GanadoresApi()
    }

    getSorteados = async (req, res) => {
        try {

            let datosGanadores = []
            console.log(`Hasta aca llegue!!!!!!!!!!!!!!!!!`)
            datosGanadores = await this.losGanadores.traerGanadores()
            console.log(await datosGanadores)
            res.json(datosGanadores)

        }
        catch (error) {
            console.log(`ACA ESTA EL ERROR EN EL CONTROLLER, motivo de error:  ${error.message}`)
        }
    }

    getObtenerGanadores = async () => {
        return await this.losGanadores.traerGanadores()
    }

}

export default ControllerGanadores

/* const controller = new ControllerGanadores()

controller.getSorteados() */