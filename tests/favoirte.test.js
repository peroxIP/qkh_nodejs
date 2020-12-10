const request = require('supertest')
const app = require('../app.js')


describe('DELETE /favorite', () => {
    it('delete all current favorites', async () => {
        const res = await request(app)
            .delete('/favorite/all')
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})


describe('Put /favorite', () => {
    it('create favorite without params', async () => {
        const res = await request(app)
            .put('/favorite')
            .send({})
        expect(res.statusCode).toEqual(422)
    })

    it('create favorite with wrong type for user_id', async () => {
        const res = await request(app)
            .put('/favorite')
            .send({
                user_id: "A"
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create favorite with wrong type for meal_id', async () => {
        const res = await request(app)
            .put('/favorite')
            .send({
                user_id: 1,
                meal_id: "A"
            })
        expect(res.statusCode).toEqual(422)
    })

    it('createing favorite', async () => {
        const res = await request(app)
            .put('/favorite')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
    })

    it('recreateing same favorite', async () => {
        const res = await request(app)
            .put('/favorite')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(500)
    })
})

describe('POST /favorite after create', () => {
    it('geting favorite with wrong types', async () => {
        const res = await request(app)
            .post('/favorite')
            .send({
                user_id: "a",
                meal_id: "a"
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('geting favorite', async () => {
        const res = await request(app)
            .post('/favorite')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('isFavorite')
        expect(res.body.isFavorite).toEqual(true)
    })

    it('geting favorite', async () => {
        const res = await request(app)
            .post('/favorite')
            .send({
                user_id: 1,
                meal_id: 2
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('isFavorite')
        expect(res.body.isFavorite).toEqual(false)
    })
})

describe('DELETE /favorite ', () => {
    it('removing favorite', async () => {
        const res = await request(app)
            .delete('/favorite')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
    })
})

describe('POST /favorite after delete', () => {
    it('geting favorite after delete', async () => {
        const res = await request(app)
            .post('/favorite')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('isFavorite')
        expect(res.body.isFavorite).toEqual(false)
    })
})