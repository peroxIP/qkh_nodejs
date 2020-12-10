const request = require('supertest')
const app = require('../app.js')

createdId = -1
describe('DELETE /meal', () => {
    it('delete all current meals', async () => {
        const res = await request(app)
            .delete('/meal')
            .send({})
        expect(res.statusCode).toEqual(200)
    })
})

describe('PUT /meal', () => {
    it('create meal no data', async () => {
        const res = await request(app)
            .put('/meal')
            .send({})
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong user_id', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": "AAAAAAA",
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong image_url type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": 1,
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong duration type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": "AAAAA",
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong ingredients type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": "AAAAA",
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal ingredient params', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": "asdasd",
                        "amount": "asdadsasd",
                        "measureType": 123
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong steps type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": 1,
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong steps element type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    1
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong complexity type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": "AAA",
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong affodability type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": "AAA",
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong name type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": 1,

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong tags type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": 1
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal wrong tags element type', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    1
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('create meal success', async () => {
        const res = await request(app)
            .put('/meal')
            .send({
                "user_id": 1,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('mealId')
        createdId = res.body.mealId
    })
})

describe('PATCH /meal', () => {
    it('create meal no data', async () => {
        const res = await request(app)
            .patch('/meal')
            .send({})
        expect(res.statusCode).toEqual(422)
    })

    it('update meal wrong mealid', async () => {
        const res = await request(app)
            .patch('/meal')
            .send({
                "meal_id": "AAAAAAA",
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(422)
    })

    it('update meal success', async () => {
        const res = await request(app)
            .patch('/meal')
            .send({
                "meal_id": createdId,
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
                "duration": 10,
                "ingredients": [
                    {
                        "tag_id": 1,
                        "amount": 1,
                        "measureType": "g"
                    }
                ],
                "steps": [
                    "Cut the tomatoes and the onion into small pieces.",
                    "Boil some water - add salt to it once it boils.",
                    "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
                    "In the meantime, heaten up some olive oil and add the cut onion.",
                    "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
                    "The sauce will be done once the spaghetti are.",
                    "Feel free to add some cheese on top of the finished dish."
                ],
                "complexity": 1,
                "affordability": 1,
                "name": "spagetti",

                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(200)
    })
})


describe('POST /meal', () => {
    it('get mail for tag empty req', async () => {
        const res = await request(app)
            .post('/meal')
            .send({})
        expect(res.statusCode).toEqual(422)
    })

    it('get mails for tag wrong tags type', async () => {
        const res = await request(app)
            .post('/meal')
            .send({
                "tags": 1
            })
        expect(res.statusCode).toEqual(422)
    })

    it('get mails for tag', async () => {
        const res = await request(app)
            .post('/meal')
            .send({
                "tags": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ]
            })
        expect(res.statusCode).toEqual(200)
    })

})