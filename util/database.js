const mysql = require('mysql2');

// connecting with sequelize database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'Test1234!!'
})

module.exports = pool.promise();
