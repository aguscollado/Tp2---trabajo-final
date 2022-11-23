import GanadoresSorteados from '../Model/ganadores.js'

class apiGanadores {

    constructor() {
        this.ganadores = new GanadoresSorteados()
    }

    traerGanadores = async () => {

        return await this.ganadores.sortear()

        /*  catch (error) {
             console.log(`ACA ESTA EL ERROR EN API, motivo de error:  ${err.message}`)
         } */
    }

}

export default apiGanadores