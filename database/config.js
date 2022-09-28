const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'unhan-backend-app2',
    port: 5432,
    password: 'postgres'
})

module.exports = databaseConfig