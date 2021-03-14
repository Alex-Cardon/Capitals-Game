const dataMapper = require('../dataMapper')

exports.gameInit = (req, res) => {
    dataMapper.getCountryName((error, country) => {
        if (error) res.status(500).send("Erreur serveur !");
        else {
            req.session.gameArray.push(country)
            res.render('game', {
                gameArr: req.session.gameArray[0],
                count: req.session.count
            });
        }
    });
};

exports.gameTest = (req, res) => {

    const gameArr = req.session.gameArray[0];
    const userAnswer = req.query.answer.toLowerCase();
    const currentCountry = gameArr[req.session.count]


    console.log(userAnswer)

    if (currentCountry.capital.toLowerCase() === userAnswer) {
        console.log('Correct');
        req.session.count++;
        req.session.score++;
        req.session.userAnswer.push(userAnswer);
        req.session.countries.push(currentCountry.name);
        req.session.capitals.push(currentCountry.capital);
        if (req.session.count < 10) {
            res.render('game', {
                gameArr: req.session.gameArray[0],
                count: req.session.count
            })
        } else {
            res.render('gamescore', {
                score: req.session.score,
                listUserAnswer: req.session.userAnswer,
                listCountry: req.session.countries,
                listCapi: req.session.capitals
            })
        }
    } else {
        console.log('faux');
        req.session.count++;
        req.session.userAnswer.push(userAnswer);
        req.session.countries.push(currentCountry.name);
        req.session.capitals.push(currentCountry.capital);
        if (req.session.count < 10) {
            res.render('game', {
                gameArr: req.session.gameArray[0],
                count: req.session.count
            })
        } else {
            res.render('gamescore', {
                score: req.session.score,
                listUserAnswer: req.session.userAnswer,
                listCountry: req.session.countries,
                listCapi: req.session.capitals
            })
        }
    }




}
