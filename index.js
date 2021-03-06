require('dotenv').config();

const express = require('express');

const app = express();


app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.static('./app/static'));

const router = require('./router');

app.use(router);

app.listen(process.env.PORT);