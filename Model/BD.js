import { MongoClient } from "mongodb"

class BaseDeDatos {
    static db
    static conectado = false
    static client

    static conectar = async () => {
        try {
            console.log('Conectando a la base de datos...')
            BaseDeDatos.client = new MongoClient('mongodb://localhost', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            await BaseDeDatos.client.connect()
            console.log('Base de datos conectada!')

            BaseDeDatos.db = BaseDeDatos.client.db('sorteo')
            BaseDeDatos.connection = true


        } catch (error) {
            console.log(`Error en la conexión de base datos: ${error.message}`)
        }

    }

    static desconectar = async () => {
        if (!BaseDeDatos.conectado) return
        await BaseDeDatos.client.close()

    }

}

export default BaseDeDatos