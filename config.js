import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_DE_PERSISTENCIA = 'MEM' // ' MONGO'
const COLECCION_PARTICIPANTES = 'participantes'

export default {
    PORT,
    MODO_DE_PERSISTENCIA,
    COLECCION_PARTICIPANTES
}