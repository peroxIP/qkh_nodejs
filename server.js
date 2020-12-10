const app = require("./app")
const serverConfig = require("./app/config/server.config.js");

// if we run debug we generate discovery scheme
if (serverConfig.DEBUG) {
    const discover = require('express-route-discovery');
    const fs = require("fs");
    let json_string = JSON.stringify(discover(app))
    fs.writeFileSync("discovery.json", json_string)
}

// Start serving with config
app.listen(serverConfig.PORT, () => {
    console.log(`Serving on port ${serverConfig.PORT}`)
});