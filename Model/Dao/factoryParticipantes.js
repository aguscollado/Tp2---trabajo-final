import participantesEnMemoria from '../participantes.js'
import participantesEnMongoDb from '../participantesEnMongo.js'

class factoryParticipantes {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**************Persistiendo en memoria**************')
                return new participantesEnMemoria()

            case 'MONGO':
                console.log('**************Persistiendo en MONGO**************')
                return new participantesEnMongoDb()

            default: //Para debatir si hacemos una factory
        }
    }
}

export default factoryParticipantes


