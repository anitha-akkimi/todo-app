const Pool = require('pg').Pool

const pool = new Pool({
    user : 'postgres',
    password :"M546419d@lu",
    host : 'localhost',
    port : 5432,
    database : 'perntodo'
});

module.exports = pool;
