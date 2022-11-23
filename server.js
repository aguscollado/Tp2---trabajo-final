import express from 'express'
import { RouterParticipantes } from './router/router.js'
import { RouterGanadores } from './router/routerGanadores.js'
import config from './config.js'
import nodemailer from 'nodemailer'


const app = express()
/* const router = express.Router() */

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* router.post('/', (req, res) => {
   res.json({nombre: 'juan'})
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user:'jimmy.hodkiewicz@ethereal.email',
            pass:'JXJZE4yVCJ9eW1Rgqe'
        }
    })

    const mailOptions = {
        from: 'Nodemailer test>',
        to: 'agus_coll@hotmail.com',
        subject: 'Super sorteo mundialista en Ort',
        text: 'Saludos afortunado, has ganado un maravillo premio, promocionar la materia!',
        //html: '<p><b>Hello</b> to myself!</p>'
    
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) { 
            console.log('Error occurred. ' + err.message); 
            return process.exit(1); 
        } 
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}) */

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


/* app.use('/send', router) */
app.use('/api/participantes', new RouterParticipantes().start())
app.use('/api/ganadores', new RouterGanadores().start())

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando puerto: ${PORT}`))
server.on('error', error => console.log(`Aca esta el error: ${error.message}`))