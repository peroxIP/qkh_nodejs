const express = require('express')
const bodyParser = require("body-parser");
const pino = require('express-pino-logger')()
const requestLogger = require("./app/util/request_logger.js");

// Get server config


// Create express app
const app = express();

// Handle json requests
app.use(bodyParser.json());

// Log request for developement
//app.use(requestLogger);

// Log request for prod
app.use(pino);

// Bind routes
require("./app/routes/user.routes.js")(app);
require("./app/routes/tag.routes.js")(app);
require("./app/routes/category.routes.js")(app);
require("./app/routes/favorite.routes.js")(app);
require("./app/routes/rateing.routes.js")(app);
require("./app/routes/meal.routes.js")(app);

// not found middleware
app.use(function (req, res) {
    res.status(404).send({ message: "Not Found" });
});

module.exports = app;