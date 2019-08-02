const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Anca',
        email: 'a@gmail.com',
        password: 'Hello!4543'
    }).expect(201)
})