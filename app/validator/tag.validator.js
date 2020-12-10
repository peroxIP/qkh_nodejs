
const { body, param } = require('express-validator')
const Tag = require("../model/tag.model.js");

exports.create = [
    body("type", 'type not provided')
        .exists()
        .isInt()
        .withMessage("Type must be int"),

    body("name", 'name not provided')
        .exists()
        .isString()
        .withMessage("name must be String")
        .custom((name, { req }) => {
            return Tag.findByNameAndType(name, req.body.type).then(data => {
                if (data.length > 0) {
                    return Promise.reject('Tag already exists');
                }
            })
        })
]

exports.getById = [
    param("tagid", 'tagid is not provided').exists().isInt(),
]