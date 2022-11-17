class ganadores {

    constructor() {
        this.ganadores = [
            {}
        ]

        this.participantes = [
            { id: '1', nombre: 'Juan', apellido: 'Rodriguez', domicilio: 'Yatay 239' },
            { id: '2', nombre: 'Pepe', apellido: 'Fernandez', domicilio: 'Belgrano algo 239' },
            { id: '3', nombre: 'lucia', apellido: 'alvez', domicilio: 'Yatay 239' },
            { id: '4', nombre: 'ricardo', apellido: 'Montaner', domicilio: 'Belgrano algo 239'},
            { id: '5', nombre: 'China', apellido: 'Suarez', domicilio: 'Yatay 239' },
            { id: '6', nombre: 'Pepe', apellido: 'Argento', domicilio: 'Belgrano algo 239' },
        ]
    }

    cantidadDeParticiantes() {
        return this.participantes.length
    }

    random = () => {
        return Math.floor(Math.random() * this.participantes.length)
    }

    obtenerGanadores = () =>  {
        const TOPE_GANADORES = 3
        const arrayAux = [...this.participantes]
        let ganadores = []
        for(let index = 0; index < TOPE_GANADORES; index++) {
            let numeroRandom = this.random()
            ganadores.push(arrayAux[numeroRandom])
            arrayAux.splice(numeroRandom, 1)
        }
        return ganadores
    }

    sortear = () => {
        obtenerGanadores()
    }

}

export default ganadores