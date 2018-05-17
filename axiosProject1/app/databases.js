var mysql = require('mysql');

var conn = mysql.createConnection ({
    host : "localhost",
    port : 3306,
    database : "project",
    user : "root",
    password : "123",
    
})

module.exports = conn