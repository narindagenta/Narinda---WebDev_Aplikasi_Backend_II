const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'narinda_08',
    port: 5432,
    password: 'terserah'
})

module.exports = databaseConfig
