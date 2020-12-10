const request = require('supertest')
const app = require('../app.js')


describe('DELETE /tag', () => {
    it('delete all current tags', async () => {
        const res = await request(app)
            .delete('/tag')
            .send()
        expect(res.statusCode).toEqual(200)
    })
})

let createdId = -1;

describe('PUT /tag create', () => {
    it('tag creation no info provided', async () => {
        const res = await request(app)
            .put('/tag')
            .send({})
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('tag creation wrong types', async () => {
        const res = await request(app)
            .put('/tag')
            .send({
                type: "1",
                name: 1
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('tag creation', async () => {
        const res = await request(app)
            .put('/tag')
            .send({
                type: 1,
                name: "ASD"
            })
        createdId = res.body.id
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
    })

    it('tag creation already exists', async () => {
        const res = await request(app)
            .put('/tag')
            .send({
                type: 1,
                name: "ASD"
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })
})

describe('GET /tag', () => {
    it('get all current tags', async () => {
        const res = await request(app)
            .get('/tag')
            .send()
        expect(res.statusCode).toEqual(200)
    })
})

describe('GET /tag/:tagid', () => {
    it('get not existing tag', async () => {
        const res = await request(app)
            .get('/tag/' + createdId + 100)
            .send()
        expect(res.statusCode).toEqual(500)
    })

    it('get tag with wrong type in param', async () => {
        const res = await request(app)
            .get('/tag/asd')
            .send()
        expect(res.statusCode).toEqual(422)
    })

    it('get tag we created', async () => {
        const res = await request(app)
            .get('/tag/' + createdId)
            .send()
        expect(res.statusCode).toEqual(200)
    })
})