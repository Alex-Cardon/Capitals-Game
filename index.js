require('dotenv').config();

const { localsName } = require('ejs');
const express = require('express');

const app = express();

const router = require('./router');

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.static('./app/static'));

const session = require('express-session');
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave:true,
  saveUninitialized:true
}));

app.use((req, res, next) => {
  if(!req.session.gameArray){
   req.session.gameArray = [];
    req.session.count = 0;
    req.session.score = 0;
    req.session.scoreArray = [];
  }  
  next();
})



//app.use((req, res, next) => {
    // si la réponse envoyée par l'utilisateur est = à la capitale de l'obj country (country.capital)
    // alors la variable locals.answer = correct
    // sinon la variable locals.answer = faux
//     if(req.query.answer) {
//     const userAnswer = req.query.answer.toLowerCase();
//     if(userAnswer === country.capital) {
//         console.log(userAnswer, 'Correct');
//     } else {
//         console.log(userAnswer, 'Faux');
//     }
//     } 
//     next();
// })

app.use(router);

app.listen(process.env.PORT);