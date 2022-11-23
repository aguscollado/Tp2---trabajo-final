import baseDeDatos from '../Model/BD.js'
import { ObjectId } from 'mongodb'
import config from '../config.js'

class ParticipantesSorteo {

    constructor() {
        this.participantes = []
    }

    obtenerParticipantes = async () => {

        devolverParticipante = async (id) => {
            if (!baseDeDatos.conectado) return {}
            let participante = await baseDeDatos.db.collection(config.COLECCION_PARTICIPANTES).findOne({ _id: ObjectId(id) })
            return participante
        }

        devolverParticipantes = async () => {
            if (!baseDeDatos.conectado) return []
            try {
                let participantes = await baseDeDatos.db.collection(config.COLECCION_PARTICIPANTES).find({}).toArray()
                return participantes
            }
            catch (err) {
                console.log(`No se pudo devolver a los participantes, motivo de error:  ${err.message}`)
                return []
            }
        }
    }
}

ingresarParticipante = async (participante) => {
    try {
        if (!baseDeDatos.conectado) return {}
        await baseDeDatos.db.collection(config.COLECCION_PARTICIPANTES).insertOne(participante)
        return participante
    }
    catch (error) {
        console.log(`No se pudo agregar al participante, motivo de error:  ${error.message}`)
    }

}

modificarParticipante = async (participante, id) => {
    try {
        if (!baseDeDatos.conectado) return {}
        await baseDeDatos.db.collection(config.COLECCION_PARTICIPANTES).updateOne({ _id: ObjectId(id) }, { $set: participante })
        let partipanteActualizado = await this.obtenerParticipante(id)
        return partipanteActualizado

    } catch (err) {
        console.log(`Error al actualizar el participante buscado ${err.message}`)
    }

}

quitarParticipante = async (id) => {
    try {
        if (!baseDeDatos.conectado) return {}
        let partipanteEliminado = await this.obtenerParticipante(id)
        await baseDeDatos.db.collection(config.COLECCION_PARTICIPANTES).deleteOne({ _id: ObjectId(id) })
        return partipanteEliminado

    } catch (err) {
        console.log(`Error al actualizar el participante buscado ${err.message}`)
    }

}

export default ParticipantesSorteo

