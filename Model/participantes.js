class ParticipantesSorteo {

    constructor() {
        this.participantes = [
            { id: '1', nombre: 'Juan', apellido: 'Rodriguez', domicilio: 'Yatay 239' },
            { id: '2', nombre: 'Mario', apellido: 'Party', domicilio: 'Yatay 239' },
            { id: '3', nombre: 'Pato', apellido: 'Lucas', domicilio: 'Yatay 239' },
            { id: '4', nombre: 'Clark', apellido: 'Wayne', domicilio: 'Yatay 239'}
        ]
    }

    obtenerParticipantes = async () => {
        try {
            return await this.participantes
        }
        catch (err) {
            return []
            // O sino console.log(`Error al obtener la lista de participantes`)
            // Pensar un camino por si esta vacio el array
        }
    }

    ingresarParticipante = async (participante) => {
        try {
            //Sin usar mongo que nos otorgue la id
            let id = parseInt(this.clientes[clientes.length - 1].id) + 1
            participante.id = id
            this.participantes.push(participante)
            return this.participantes
        }
        catch {
            console.log(`No se pudo agregar al participante, motivo de error:  ${err.message}`)

        }
    }

    modificarParticipante = async (participante, id) => {
        try {
            participante.id = id
            const index = this.participante.findIndex(participante => participante.id == id)
            this.participante.splice(index, 1, participante)

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

