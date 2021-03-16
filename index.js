require('dotenv').config();

const { localsName } = require('ejs');
const express = require('express');

const app = express();

const router = require('./router');

const mainController = require('./app/controller/mainController');

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.static('public'));




const session = require('express-session');
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave:true,
  saveUninitialized:true
}));


app.use(router);
app.use(mainController.notFound);
app.listen(process.env.PORT);