const mysql = require("mysql2");
const db = mysql.createConnection ({
    host: "127.0.0.1",
    user: "jpgarzon",
    password: "juan1973",
    database: "cursos",
});

db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ("BD Mysql Conectado");
});

module.exports = db;
