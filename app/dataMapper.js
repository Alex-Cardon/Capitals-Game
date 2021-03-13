const client = require('./database');

exports.getCountryName = (callback) => {
    client.query(`SELECT * FROM country ORDER BY RANDOM() LIMIT 10`, (error, data) =>{
       callback(error, data.rows);
    });
}