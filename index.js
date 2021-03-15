require('dotenv').config();

const { localsName } = require('ejs');
const express = require('express');

const app = express();

const router = require('./router');

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

app.listen(process.env.PORT);