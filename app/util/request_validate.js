const { validationResult } = require('express-validator');
const errorResponse = require("./response_error.js");

// validation wrapper
module.exports = (func) => {
    return (req, res) => {
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        func(req, res).catch(error => {
            // sanity check if some validator failes
            errorResponse(res, error, func.name);
        })
    }
}