const dataMapper = require('../dataMapper')

exports.addNameForm = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, name) => {
        if(error) console.log(error);
        else {
            req.session.name = req.query.name;
            res.render('addName', {name, score: req.session.score})
        }
    })
})

exports.leaderboard = ((req, res) => {
    dataMapper.leaderboard(req.session.name, req.session.score, (error, names, scores) => {
        if(error) console.log(error);
        else {
            console.log(req.session.name);
            res.render('leaderBoard', {names : req.session.name, scores: req.session.score})
        }
    })
})

