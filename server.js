import express from 'express'
import { RouterParticipantes } from './Router/router.js'
import config from './config.js'
import nodemailer from 'nodemailer'


const app = express()
const router = express.Router()

app.use(express.static('FormularioHtml'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.post('/send', (req, res) => {
    console.log
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user:'jimmy.hodkiewicz@ethereal.email',
            pass:'JXJZE4yVCJ9eW1Rgqe'
        }
    })
})

/*Name	Jimmy Hodkiewicz
Username	jimmy.hodkiewicz@ethereal.email (also works as a real inbound email address)
Password	JXJZE4yVCJ9eW1Rgqe
transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jimmy.hodkiewicz@ethereal.email',
        pass: 'JXJZE4yVCJ9eW1Rgqe'
    }
});
*/

const mailOptions = {
    from: 'Nodemailer test>',
    to: 'han.adolfo@gmail.com',
    subject: 'Super sorteo mundialista en Ort',
    text: 'Saludos afortunado, has ganado un maravillo premio, promocionar la materia!',
    //html: '<p><b>Hello</b> to myself!</p>'

}


transporter.sendMail(message, (err, info) => {
        if (err) { 
            console.log('Error occurred. ' + err.message); 
            return process.exit(1); 
        } 
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });


app.use('/api/participantes.js', new RouterParticipantes().start())

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando puerto: ${PORT}`))
server.on('error', error => console.log(`Aca esta el error: ${error.message}`))