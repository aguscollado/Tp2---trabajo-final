class ParticipantesSorteo {

    constructor() {
        this.participantes = [
            { id: '1', nombre: 'Juan', apellido: 'Rodriguez', domicilio: 'Yatay 239' },
            { id: '2', nombre: 'Pepe', apellido: 'Fernandez', domicilio: 'Belgrano algo 239'},
            { id: '3', nombre: 'lucia', apellido: 'alvez', domicilio: 'Yatay 239' },
            { id: '4', nombre: 'ricardo', apellido: 'Montaner', domicilio: 'Belgrano algo 239' },
            { id: '5', nombre: 'China', apellido: 'Suarez', domicilio: 'Yatay 239' },
            { id: '6', nombre: 'Pepe', apellido: 'Argento', domicilio: 'Belgrano algo 239' },
        ]
    }

    obtenerParticipantes = async () => {
        try {
            return await this.participantes
        }
        catch (err) {
            console.log(`No se pudo devolver a los participantes, motivo de error:  ${err.message}`)
            return []
            // O sino console.log(`Error al obtener la lista de participantes`)
            // Pensar un camino por si esta vacio el array
        }
    }

    ingresarParticipante = async (participante) => {
        try {
            //Sin usar mongo que nos otorgue la id
            let id = await parseInt(this.participantes[this.participantes.length - 1].id) + 1
            participante.id = id
            await this.participantes.push(participante)
            return this.participante
        }
        catch (err) {
            console.log(`No se pudo agregar al participante, motivo de error:  ${err.message}`)

        }
    }

    modificarParticipante = async (participante, id) => {
        try {
            participante.id = id
            const index = await this.participantes.findIndex(participanteBuscado => participanteBuscado.id == id)
            this.participantes.splice(index, 1, participante)

            return participante
        } catch (err) {
            console.log(`Error al actualizar el participante buscado ${err.message}`)
        }

    }
    quitarParticipante = async (id) => {
        try {
            const index = this.participantes.findIndex(participante => participante.id == id)
            const participante = this.participantes[index]
            this.participantes.splice(index, 1)

            return participante

        } catch (err) {
            console.log(`Error al eliminar el participante buscado ${err.message}`)
        }

    }
}

export default ParticipantesSorteo

