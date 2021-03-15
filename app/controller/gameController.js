const dataMapper = require('../dataMapper')

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

    if (currentCountry.capital.toLowerCase() === userAnswer) {
        console.log('Correct');
        req.session.count++;
        req.session.score++;
        if (req.session.count < 10) {
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
        console.log('faux');
        req.session.count++;
        if (req.session.count < 10) {
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

