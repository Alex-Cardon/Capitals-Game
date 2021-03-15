const client = require('./database');

exports.getCountryName = (callback) => {
    client.query(`SELECT * FROM country ORDER BY RANDOM() LIMIT 10`, (error, data) =>{
       callback(error, data.rows);
    });
}

exports.addName = (name, score,callback) => {
    client.query(`INSERT INTO "leaderboard"("name", "score") VALUES ($1, $2)`, [name, score],  (error, result) => {
        callback(error, result);
    })
}

exports.leaderboard = (names, scores,callback) => {
    client.query(`SELECT * FROM leaderboard WHERE name = $1 AND score = $2`, [names, scores], (error, result) => {
        callback(error, result.rows);
    })
}
