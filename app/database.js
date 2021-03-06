const {Client} = require('pg');

const client = new Client(process.env.PG_URI);

client.connect();

module.exports = client;