import supertest from 'supertest';
const request = supertest('http://localhost:8080')

import {expect} from 'chai'
import generador from '../generador/participantes.js'

describe('Test api rest full', () => {
    describe('GET', () => {
        it('Debería retornar un status 200 para participantes', async () => {
            let response = await request.get('/api/participantes/traer')
            expect(response.status).to.eql(200)
        })
    })

    describe('GET', () => {
        it('Debería retornar un status 200 para ganadores', async () => {
            let response = await request.get('/api/ganadores/sortear')
            expect(response.status).to.eql(200)
        })
    })

    describe('POST', () => {
        it('Debería incorporar un participante', async () => {
            let participante = generador.get()
            console.log(participante)


            let response = await request.post('/api/participantes').send(participante)
            expect(response.status).to.eql(200)

            const user = response.body
            expect(user).to.include.keys('nombre', 'apellido', 'domicilio', 'mail')
            expect(user.nombre).to.eql(participante.nombre)
            expect(user.apellido).to.eql(participante.apellido)
            expect(user.domicilio).to.eql(participante.domicilio)
            expect(user.mail).to.eql(participante.mail)
        })
    })
})
