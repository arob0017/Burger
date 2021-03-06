require('dotenv').config();
const mysql = require('mysql');
const util = require("util");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: 'localhost',
    port: 3306,
    user: "root",
    password: process.env.MY_PASSWORD,
    database: 'burger_db',
});
connection.query = util.promisify(connection.query);
module.exports = connection;