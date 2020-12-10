const validateRequest = require("../util/request_validate.js");

module.exports = app => {
    const controller = require("../controller/user.controller.js");
    const validator = require("../validator/user.validator.js");

    // Handle user creation
    app.put("/user", validator.create, validateRequest(controller.create));

    // Handle user login
    app.post("/user", validator.login, validateRequest(controller.login));

    // Get all users
    app.get("/user", controller.getAll)

    // Get single user by id.
    app.get("/user/:userid", validator.getById, validateRequest(controller.getById));

    // remove all users
    app.delete("/user", controller.removeAll)

}