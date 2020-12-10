const request = require('supertest')
const app = require('../app.js')


describe('DELETE /category', () => {
    it('delete all current category', async () => {
        const res = await request(app)
            .delete('/category')
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})


describe('PUT /category', () => {
    it('create category wrong name type', async () => {
        const res = await request(app)
            .put('/category')
            .send({
                "name": 1,
                "imageUrl": "https://cdn.pixabay.com/photo/2018/06/27/20/24/goulash-3502510_960_720.jpg",
                "tags": [
                    { "id": 1 },
                    { "id": 2 }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create category wrong imageUrl type', async () => {
        const res = await request(app)
            .put('/category')
            .send({
                "name": "wwwaa",
                "imageUrl": 1,
                "tags": [
                    { "id": 1 },
                    { "id": 2 }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create category wrong tags type', async () => {
        const res = await request(app)
            .put('/category')
            .send({
                "name": "wwwaa",
                "imageUrl": "https://cdn.pixabay.com/photo/2018/06/27/20/24/goulash-3502510_960_720.jpg",
                "tags": 1
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create category wrong tags content type', async () => {
        const res = await request(app)
            .put('/category')
            .send({
                "name": "wwwaa",
                "imageUrl": 1,
                "tags": [
                    1
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create category', async () => {
        const res = await request(app)
            .put('/category')
            .send({
                "name": "wwwaa",
                "imageUrl": "https://cdn.pixabay.com/photo/2018/06/27/20/24/goulash-3502510_960_720.jpg",
                "tags": [
                    { "id": 1 },
                    { "id": 2 }
                ]
            })
        expect(res.statusCode).toEqual(200)
    })
})

describe('GET /category', () => {
    it('delete all current category', async () => {
        const res = await request(app)
            .get('/category')
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})