import participantesEnMemoria from '../participantes.js'

class factoryParticipantes {
    static get(tipo) {
        switch (tipo) {
            case 'MEM': 
            return new participantesEnMemoria()
            
            default: //Para debatir si hacemos una factory
        }
    }

}

export default factoryParticipantes


