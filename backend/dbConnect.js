const { Client } = require('pg');

//---------------------------------------------- SET POSTGRESQL ENV FOR CONNECTION -------------------------------------
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cqtechnology',
    password: 'ajay',
    port: 5432,
})

//---------------------------------------------- CREATE CONNECTION WITH DATABASE ---------------------------------------
client.connect()
    .then(r => {
    console.log(`Database connected successfully!`);
}).catch(err => {
    console.log(`Database connection failed! >>>[${err}]`);
});

//--------------------------------------------- CREATE POSTGRESQL [PG] PACKAGE OBJECT ----------------------------------
const  DBClient = client;

module.exports = {DBClient}