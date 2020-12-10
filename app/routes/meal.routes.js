const validateRequest = require("../util/request_validate.js");

module.exports = app => {
    const controller = require("../controller/meal.controller.js");
    const validator = require("../validator/meal.validator.js");

    // Create meal
    app.put("/meal", validator.create, validateRequest(controller.create));

    // Update meal
    app.patch("/meal", validator.update, validateRequest(controller.update));

    // Get meal for tags
    app.post("/meal", validator.getByTags, validateRequest(controller.getByTags));

    // Delete all meals
    app.delete("/meal", controller.removeAll);
}