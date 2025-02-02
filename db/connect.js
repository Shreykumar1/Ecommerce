const mysql = require('mysql2');

const pool = mysql.createPool({
    host : "junction.proxy.rlwy.net",
    user : "root",
    password : "BgXIoEPDfEIjjSHgTEuHIkIPDJbqDOho",
    database : "railway",
    port : "38945"
});

module.exports = pool.promise();