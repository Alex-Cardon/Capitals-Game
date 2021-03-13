const client = require('./database');

exports.getCountryName = (callback) => {
    client.query(`SELECT * FROM pays ORDER BY RANDOM() LIMIT 1`, (error, data) =>{
        callback(error, data.rows[0]);
    });
}