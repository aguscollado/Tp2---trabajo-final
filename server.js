import express from 'express'
import { RouterParticipantes } from './Router/router.js'
import config from './config.js'


const app = new express()

app.use(express.static('ponerHtmlAca'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/participantes.js', new RouterParticipantes().start())

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando puerto: ${PORT}`))
server.on('error', error => console.log(`Aca esta el error: ${error.message}`))