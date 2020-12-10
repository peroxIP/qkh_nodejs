const validateRequest = require("../util/request_validate.js");

module.exports = app => {
    const controller = require("../controller/tag.controller.js");
    const validator = require("../validator/tag.validator.js");

    // Create tag
    app.put("/tag", validator.create, validateRequest(controller.create));

    // Get all tags
    app.get("/tag", controller.getAll);

    // Get tag by id
    app.get("/tag/:tagid", validator.getById, validateRequest(controller.getById));

    //removes all 
    app.delete("/tag", controller.removeAll);
}