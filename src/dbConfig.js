require("dotenv")
const mysql = require("mysql2")
const { promisify } = require("util")

const dbParams = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
}

const pool = mysql.createPool(dbParams)

pool.getConnection((err, connection) => {
    if(err) console.error(`errorDB: ${JSON.stringify(err)}`)
    if(connection) {
        connection.release()
        console.log("DB Connected")
        return
    }
})

pool.query = promisify(pool.query)

module.exports = pool
