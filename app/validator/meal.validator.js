const { body } = require('express-validator')

exports.create = [
    body("user_id", 'user_id not provided')
        .exists()
        .isInt()
        .withMessage("user_id must be int"),

    body("image_url", 'image_url not provided')
        .exists()
        .isURL()
        .withMessage("image_url must be URL"),

    body("duration", 'duration not provided')
        .exists()
        .isInt()
        .withMessage("duration must be int"),

    body("ingredients", 'ingredients not provided')
        .exists()
        .isArray()
        .withMessage("ingredients must be array"),

    body("ingredients.*", 'ingredients not provided').exists().custom(element => {

        if (element.tag_id == undefined) {
            throw Error("No tag id associated with ingredinet")

        } else {
            if (!Number.isInteger(element.tag_id)) {
                throw Error("tag_id must be number")
            }
        }

        if (element.amount == undefined) {
            throw Error("No amount associated with ingredinet")
        } else {
            if (!Number.isInteger(element.amount)) {
                throw Error("amount must be int")
            }
        }
        if (element.measureType == undefined) {
            throw Error("No measureType associated with ingredinet")
        } else {
            if (typeof element.measureType !== "string") {
                throw Error("measureType must be string")
            }
        }
        return true;
    }),

    body("steps", 'steps not provided')
        .exists()
        .isArray()
        .withMessage("steps must be array"),

    body("steps.*", 'steps not provided')
        .exists()
        .isString()
        .withMessage("steps elements must be string"),

    body("complexity", 'complexity not provided')
        .exists()
        .isInt()
        .withMessage("complexity must be int"),

    body("affordability", 'affordability not provided')
        .exists()
        .isInt()
        .withMessage("affordability must be int"),

    body("name", 'name not provided')
        .exists()
        .isString()
        .withMessage("name must be string"),

    body("tags", 'tags not provided')
        .exists()
        .isArray()
        .withMessage("tags must be array"),

    body("tags.*", 'tags not provided').exists().custom(element => {
        if (element.id == undefined) {
            throw Error("No tag id associated with tags")
        }
        return true;
    }),
]

exports.update = [
    body("meal_id", 'meal_id not provided')
        .exists()
        .isInt()
        .withMessage("user_id must be int"),

    body("image_url", 'image_url not provided')
        .exists()
        .isURL()
        .withMessage("image_url must be URL"),

    body("duration", 'duration not provided')
        .exists()
        .isInt()
        .withMessage("duration must be int"),

    body("ingredients", 'ingredients not provided')
        .exists()
        .isArray()
        .withMessage("ingredients must be array"),

    body("ingredients.*", 'ingredients not provided').exists().custom(element => {

        if (element.tag_id == undefined) {
            throw Error("No tag id associated with ingredinet")

        } else {
            if (!Number.isInteger(element.tag_id)) {
                throw Error("tag_id must be number")
            }
        }

        if (element.amount == undefined) {
            throw Error("No amount associated with ingredinet")
        } else {
            if (!Number.isInteger(element.amount)) {
                throw Error("amount must be int")
            }
        }
        if (element.measureType == undefined) {
            throw Error("No measureType associated with ingredinet")
        } else {
            if (typeof element.measureType !== "string") {
                throw Error("measureType must be string")
            }
        }
        return true;
        return true;
    }),

    body("steps", 'steps not provided')
        .exists()
        .isArray()
        .withMessage("steps must be array"),

    body("steps.*", 'steps not provided')
        .exists()
        .isString()
        .withMessage("steps elements must be string"),

    body("complexity", 'complexity not provided')
        .exists()
        .isInt()
        .withMessage("complexity must be int"),

    body("affordability", 'affordability not provided')
        .exists()
        .isInt()
        .withMessage("affordability must be int"),

    body("name", 'name not provided')
        .exists()
        .isString()
        .withMessage("name must be string"),

    body("tags", 'tags not provided')
        .exists()
        .isArray()
        .withMessage("tags must be array"),

    body("tags.*", 'tags not provided').exists().custom(element => {
        if (element.id == undefined) {
            throw Error("No tag id associated with tags")
        }
        return true;
    }),
]

exports.getByTags = [
    body("tags", 'tags not provided')
        .exists()
        .isArray()
        .withMessage("tags must be array"),

    body("tags.*", 'tags not provided').exists().custom(element => {
        if (element.id == undefined) {
            throw Error("No tag id associated with tags")
        }
        return true;
    }),
]