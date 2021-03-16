const dataMapper = require('../dataMapper')
const stringSimilarity = require('string-similarity');

exports.gameInit = (req, res) => {
    dataMapper.getCountryName((error, country) => {
        if (error) res.status(500).send("Erreur serveur !");
        else {
            req.session.gameArray.push(country)
            res.render('game', {
                gameArray: req.session.gameArray[0],
                count: req.session.count
            });
        }
    });
};

exports.gameTest = (req, res) => {

    const gameArray = req.session.gameArray[0];
    const userAnswer = req.query.answer.toLowerCase();
    const currentCountry = gameArray[req.session.count];
    currentCountry.user = userAnswer;
    const dataCountry = currentCountry.capital.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const similarity = stringSimilarity.compareTwoStrings(dataCountry, userAnswer)

    console.log(similarity);
    if (similarity >= 0.5) {
        req.session.count++;
        req.session.score++;
        if (req.session.count < 10) {
            currentCountry.test = true;
            res.render('game', {
                gameArray: req.session.gameArray[0],
                count: req.session.count
            })
        } else {
            res.render('gamescore', {
                score: req.session.score,
                gameArray: req.session.gameArray[0],
            })
        }
    } else {
        req.session.count++;
        if (req.session.count < 10) {
            currentCountry.test = false;
            res.render('game', {
                gameArray: req.session.gameArray[0],
                count: req.session.count
            })
        } else {
            res.render('gamescore', {
                score: req.session.score,
                gameArray: req.session.gameArray[0],
            })
        }
    }
}

