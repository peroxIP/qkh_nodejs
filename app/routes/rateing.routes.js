const validateRequest = require("../util/request_validate.js");

module.exports = app => {
    const controller = require("../controller/rateing.controller.js");
    const validator = require("../validator/rateing.validator.js");

    // Create rateing
    app.put("/rateing", validator.create, validateRequest(controller.create));

    // update rateing
    app.patch("/rateing", validator.update, validateRequest(controller.update));

    // delete  rateing
    app.delete("/rateing", validator.remove, validateRequest(controller.remove));

    app.delete("/rateing/all", controller.removeAll);

    // Get rateing
    app.post("/rateing", validator.rateing, validateRequest(controller.rateingValue));
}