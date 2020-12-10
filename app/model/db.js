
var mysql = require('mysql2');
const util = require('util');

const dbConfig = require("../config/db.config.js");

// Create connection with config
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT
});


// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// wtf js go home
const query = util.promisify(connection.query).bind(connection);

module.exports.connection = connection;
module.exports.query = query;