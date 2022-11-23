import { faker } from '@faker-js/faker';
//import { faker } from '@faker-js/faker/locale/es';

const get = () => ({
    nombre: faker.name.firstName().split(' ')[0],
    apellido: faker.name.lastName().split(' ')[0],
    domicilio: faker.address.streetAddress(),
    mail: faker.internet.email(),
})

export default {
    get
}