import GanadoresSorteados from '../Model/ganadores.js'
import nodemailer from 'nodemailer'

class apiGanadores {

    constructor() {
        this.ganadores = new GanadoresSorteados()
    }

    traerGanadores = async () => {
        try {

            const losGanadores = await this.ganadores.sortear()
            await this.ganadores.devolver()

            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'karson23@ethereal.email',
                    pass: '3d9gsX3wx1bsFuzuj1'
                }
            })

            for (let index = 0; index < losGanadores.length; index++) {
                const ganador = losGanadores[index];

                const mailOptions = {
                    from: 'Nodemailer test',
                    to: ganador.mail,
                    subject: 'Super sorteo mundialista en Ort',
                    text: 'Saludos afortunado, has ganado un maravillo premio, promocionar la materia!',

                }

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log('Error occurred. ' + err.message);
                        process.exit(1);
                    }
                    console.log('Message sent: %s', info.messageId);
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                })
            }
            return losGanadores

        } catch (error) {
            console.log(`ACA ESTA EL ERROR EN API, motivo de error:  ${error.message}`)
        }
    }
}

export default apiGanadores

const test = new apiGanadores()
console.log(`pruebaaaaaaaaaaaaaaaaaaaaaaaaaaa`, await test.traerGanadores())
