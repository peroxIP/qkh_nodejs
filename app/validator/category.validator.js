const { body } = require('express-validator')
const Category = require("../model/category.model.js");

exports.create = [
    body("imageUrl", 'imageUrl not provided')
        .exists()
        .isURL().withMessage("imageUrl must be an URL"),

    body("name", 'name not provided')
        .exists()
        .isString()
        .withMessage("name must be string")
        .custom((name) => {
            return Category.findByName(name).then(data => {
                if (data.length > 0) {
                    return Promise.reject('Category already exists');
                }
            })
        }),
    body("tags", 'tags not provided')
        .exists()
        .isArray()
        .withMessage("Must be an array"),

    body("tags.*", 'tags not provided').exists().custom(element => {
        if (element.id == undefined) {
            throw Error("No tag id associated with tags")
        }
        return true;
    }),
]
