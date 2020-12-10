const request = require('supertest')
const app = require('../app.js')


describe('DELETE /rateing', () => {
    it('delete all current rateing', async () => {
        const res = await request(app)
            .delete('/rateing/all')
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})

describe('Put /rateing', () => {
    it('create rateing without params', async () => {
        const res = await request(app)
            .put('/rateing')
            .send({})
        expect(res.statusCode).toEqual(422)
    })

    it('create rateing with wrong type for user_id', async () => {
        const res = await request(app)
            .put('/rateing')
            .send({
                user_id: "A"
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create rateing with wrong type for meal_id', async () => {
        const res = await request(app)
            .put('/rateing')
            .send({
                user_id: 1,
                meal_id: "A"
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create rateing with wrong type for rateing', async () => {
        const res = await request(app)
            .put('/rateing')
            .send({
                user_id: 1,
                meal_id: 1,
                rateing: "A"
            })
        expect(res.statusCode).toEqual(422)
    })

    it('createing rateing', async () => {
        const res = await request(app)
            .put('/rateing')
            .send({
                user_id: 1,
                meal_id: 1,
                rateing: 1.1
            })
        expect(res.statusCode).toEqual(200)
    })

    it('recreateing same rateing', async () => {
        const res = await request(app)
            .put('/rateing')
            .send({
                user_id: 1,
                meal_id: 1,
                rateing: 1.1
            })
        expect(res.statusCode).toEqual(500)
    })
})

describe('POST /rateing after create', () => {
    it('geting rateing with wrong types', async () => {
        const res = await request(app)
            .post('/rateing')
            .send({
                user_id: "a",
                meal_id: "a"
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('geting rateing', async () => {
        const res = await request(app)
            .post('/rateing')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('rateing')
        expect(res.body.rateing).toEqual(1.1)
    })

})

describe('PATCH /rateing', () => {
    it('patching rateing with wrong types', async () => {
        const res = await request(app)
            .patch('/rateing')
            .send({
                user_id: "a",
                meal_id: "a"
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('patching rateing with wrong rateing type', async () => {
        const res = await request(app)
            .patch('/rateing')
            .send({
                user_id: 1,
                meal_id: 1,
                rateing: "a"
            })
        expect(res.statusCode).toEqual(422)
        expect(res.body).toHaveProperty('errors')
    })

    it('patching rateing with wrong rateing type', async () => {
        const res = await request(app)
            .patch('/rateing')
            .send({
                user_id: 1,
                meal_id: 1,
                rateing: 4.2
            })
        expect(res.statusCode).toEqual(200)
    })
})

describe('POST /rateing after patch', () => {
    it('geting rateing after ptach', async () => {
        const res = await request(app)
            .post('/rateing')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('rateing')
        expect(res.body.rateing).toEqual(4.2)
    })
})

describe('DELETE /rateing ', () => {
    it('removing rateing', async () => {
        const res = await request(app)
            .delete('/rateing')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(200)
    })
})

describe('POST /rateing after delete', () => {
    it('geting rateing after delete', async () => {
        const res = await request(app)
            .post('/rateing')
            .send({
                user_id: 1,
                meal_id: 1
            })
        expect(res.statusCode).toEqual(500)
    })
})