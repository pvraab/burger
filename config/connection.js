// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config()

// Create database connection
// Use either local or JawsDB based on .env flag
var connection = null;
var UseJawsDB = process.env.UseJawsDB;
console.log("UseJawsDB = " + UseJawsDB);

// Open either a JawsDB MySQL connection on Heroku or a local connection
// to MySQL
if (UseJawsDB !== "no") {
  console.log("Inside");
  connection = mysql.createConnection({
    host: "nt71li6axbkq1q6a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "crjik107tr5a7w4q",
    // Your password
    password: "doc5668x383vusib",
    database: "vbjfek89bwdh0lbs"

  });
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nikita2019R",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;