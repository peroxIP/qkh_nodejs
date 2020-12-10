
const { body, param } = require('express-validator')
const User = require("../model/user.model.js");

exports.create = [
    body("username", 'username not provided')
        .exists()
        .isString()
        .custom(value => {
            return User.findByUsername(value).then(user => {
                if (user.length > 0) {
                    return Promise.reject('username already in use');
                }
            })
        }),
    body("password", 'password not provided')
        .exists()
        .isString()
        .withMessage("String required"),

    body("password_confirmation", 'password_confirmation not provided').exists().custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    }),
]

exports.login = [
    body("username", 'username not provided').exists(),
    body("password", 'password not provided').exists(),
]

exports.getById = [
    param("userid", 'userid is not provided').exists().isInt(),
]