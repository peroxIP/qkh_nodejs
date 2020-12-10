const validateRequest = require("../util/request_validate.js");

module.exports = app => {
    const controller = require("../controller/favorite.controller.js");
    const validator = require("../validator/favorite.validator.js");

    // Create favorite for user
    app.put("/favorite", validator.create, validateRequest(controller.create));

    // Delete favorite of user
    app.delete("/favorite", validator.remove, validateRequest(controller.remove));

    // remove all
    app.delete("/favorite/all", controller.removeAll);

    // Favorite for user 
    app.post("/favorite", validator.isFavorite, validateRequest(controller.isFavorite));
}