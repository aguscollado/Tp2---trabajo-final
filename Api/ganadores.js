import GanadoresSorteados from '../Model/ganadores.js'

class apiGanadores {

    constructor() {
        this.ganadores = new GanadoresSorteados()
    }

    traerGanadores = async () => {
        try {
            const losGanadores = await this.ganadores.sortear()
            await this.ganadores.devolver()

            return losGanadores
        }
        catch (error) {
            console.log(`ACA ESTA EL ERROR EN API, motivo de error:  ${err.message}`)
        }
      
    }

}

export default apiGanadores

const test = new apiGanadores()
console.log(`pruebaaaaaaaaaaaaaaaaaaaaaaaaaaa`, await test.traerGanadores())

