const { body } = require('express-validator')

exports.create = [
    body("user_id", 'user_id not provided')
        .exists()
        .isInt()
        .withMessage("user_id must be int"),

    body("meal_id", 'meal_id not provided')
        .exists()
        .isInt()
        .withMessage("meal_id must be int"),

    body("rateing", 'rateing not provided')
        .exists()
        .isFloat()
        .withMessage("rateing must be float")
]

exports.update = [
    body("user_id", 'user_id not provided')
        .exists()
        .isInt()
        .withMessage("user_id must be int"),

    body("meal_id", 'meal_id not provided')
        .exists()
        .isInt()
        .withMessage("meal_id must be int"),

    body("rateing", 'rateing not provided')
        .exists()
        .isFloat()
        .withMessage("rateing must be float")
]

exports.remove = [
    body("user_id", 'user_id not provided')
        .exists()
        .isInt()
        .withMessage("user_id must be int"),

    body("meal_id", 'meal_id not provided')
        .exists()
        .isInt()
        .withMessage("meal_id must be int")
]

exports.rateing = [
    body("user_id", 'user_id not provided')
        .exists()
        .isInt()
        .withMessage("user_id must be int"),

    body("meal_id", 'meal_id not provided')
        .exists()
        .isInt()
        .withMessage("meal_id must be int")
]