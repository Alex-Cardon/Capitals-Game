const {Client} = require('pg');

const client = new Client(process.env.PG_URI
 /*   {
    user: "nxicoqaqblguek",
    password: "8d5b7376f4d846e9b56abc4709a64f767bb01b7a37062c467e9a0f5027ae1ae9",
    database: "d4clsj74l7phsd",
    port: 5432,
    host: "ec2-54-73-147-133.eu-west-1.compute.amazonaws.com:5432",
    ssl: { rejectUnauthorized: false }

}
*/);

client.connect();

module.exports = client;