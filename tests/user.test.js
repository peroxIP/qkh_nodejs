const request = require('supertest')
const app = require('../app.js')


describe('DELETE /user', () => {
    it('delete all current users', async () => {
        const res = await request(app)
            .delete('/user')
            .send()
        expect(res.statusCode).toEqual(200)
    })
})

let createdId = -1;

describe('PUT /user create', () => {
    it('user creation password_confirmation not provided', async () => {
        const res = await request(app)
            .put('/user')
            .send({
                username: "a",
                password: "a",
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('user creation password_confirmation is not equal to password', async () => {
        const res = await request(app)
            .put('/user')
            .send({
                username: "a",
                password: "a",
                password_confirmation: "b",
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('should create user', async () => {
        const res = await request(app)
            .put('/user')
            .send({
                username: "a",
                password: "A",
                password_confirmation: "A",
            })
        expect(res.body).toHaveProperty('id')
        expect(res.statusCode).toEqual(200)
        createdId = res.body.id
    })

    it('user already exists', async () => {
        const res = await request(app)
            .put('/user')
            .send({
                username: "a",
                password: "A",
                password_confirmation: "A",
            })
        expect(res.body).toHaveProperty('errors')
        expect(res.statusCode).toEqual(422)
    })
})

describe('POST /user login', () => {
    it('username and password are not strings', async () => {
        const res = await request(app)
            .post('/user')
            .send({
                username: 1,
                password: 1,
            })
        expect(res.statusCode).toEqual(500)
        expect(res.body).toHaveProperty('message')
    })

    it('should login', async () => {
        const res = await request(app)
            .post('/user')
            .send({
                username: "a",
                password: "a",
            })
        expect(res.statusCode).toEqual(200)
    })
})

describe('GET /user', () => {
    it('get all users', async () => {
        const res = await request(app)
            .get('/user')
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})

describe('GET /user:userid', () => {
    it('gat single user by nonexisting id ', async () => {
        const res = await request(app)
            .get('/user/' + createdId + 100)
            .send({})
        expect(res.statusCode).toEqual(500)
    })

    it('get with created id', async () => {
        const res = await request(app)
            .get('/user/' + createdId)
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})
