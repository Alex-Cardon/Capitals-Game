const client = require('./database');

exports.getCountryName = (callback) => {
    client.query(`SELECT * FROM country ORDER BY RANDOM() LIMIT 10`, (error, data) =>{
       callback(error, data.rows);
    });
}

exports.addName = (name,callback) => {
    client.query(`INSERT INTO "leaderboard"("name") VALUES ($1)`, [name],  (error, result) => {
        callback(error, result);
    })
}

exports.score = (score,callback) => {
    client.query(`INSERT INTO "leaderboard" ("score") VALUES $1`, [score], (error, result) => {
        callback(error, result);
    })
}