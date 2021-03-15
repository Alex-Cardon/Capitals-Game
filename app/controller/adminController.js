const dataMapper = require('../dataMapper')

<<<<<<< HEAD
exports.addNameForm = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, name) => {
        if(error) console.log(error);
        else {
            req.session.name = req.query.name;
            res.render('addName', {name, score: req.session.score})
        }
=======
exports.addName = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, _) => {
        if(error) console.log(error);
        else {
            req.session.name = req.query.name;
            res.redirect('/leaderBoard')
         }
>>>>>>> 8dbdeac79766ba16f34695f1431c19c94aa53b13
    })
})
exports.addNameForm = (req, res) => {
    res.render('addNameForm');
}

exports.leaderboard = ((req, res) => {
<<<<<<< HEAD
    dataMapper.leaderboard(req.session.name, req.session.score, (error, names, scores) => {
=======
    dataMapper.leaderboard(req.session.name, req.session.score, (error, names) => {
>>>>>>> 8dbdeac79766ba16f34695f1431c19c94aa53b13
        if(error) console.log(error);
        else {
            console.log(req.session.name);
            res.render('leaderBoard', {names})
        }
    })
})

