class ParticipantesSorteo {

    constructor() {
        this.participantes = [
            { id: '1', nombre: 'Juan', apellido: 'Rodriguez', domicilio: 'Yatay 239' }
        ]
    }

    obtenerParticipantes = async () => {
        try {
            return this.participantes
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
            console.log(`No se pudo agregar al participante ${participante.apellido}`)

        }
    }

    modificarParticipante = async (participante, id) => {
        participante.id = id
        const index = this.participante.findIndex(participante => participante.id == id)
        this.participante.splice(index, 1, participante)

        return participante    
    }

    quitarParticipante = async (id) => {
        try {
            const index = this.participantes.findIndex(participante => participante.id == id)
            const participante = this.participantes[index]
            participantes.splice(index, 1)

            return participante

        } catch {
            console.log(`Error al eliminar el participante buscado`)
        }

    }
}



export default ParticipantesSorteo

