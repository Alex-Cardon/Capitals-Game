const dataMapper = require('../dataMapper')

exports.showAddNameForm = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, name) => {
        if(error) console.log(error);
        else {
            req.session.name = req.query.name;
            res.render('addName', {name : req.session.name, score: req.session.score})
        }
    })
})

exports.leaderboard = ((req, res) => {
    dataMapper.leaderboard(req.session.name, req.session.score, (error, name, score) => {
        if(error) console.log(error);
        else {
            res.render('leaderBoard', {name : req.session.name, score: req.session.score})
        }
    })
})

