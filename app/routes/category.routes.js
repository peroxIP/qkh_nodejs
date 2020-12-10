const validateRequest = require("../util/request_validate.js");

module.exports = app => {
    const controller = require("../controller/category.controller.js");
    const validator = require("../validator/category.validator.js");

    // Create category
    app.put("/category", validator.create, validateRequest(controller.create));

    // get all categories
    app.get("/category", controller.getAll)

    // Remove all categories
    app.delete("/category", controller.removeAll)

}