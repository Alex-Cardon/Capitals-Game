const dataMapper = require('../dataMapper')

exports.addName = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, result) => {
        if(error) console.log(error);
        else {
            req.session.name = req.query.name;
            res.redirect('/leaderBoard')
         }
    })
})

exports.addNameForm = (req, res) => {
    res.render('addNameForm', {name: req.query.name});
}

exports.leaderboard = ((req, res) => {
    dataMapper.leaderboard((error, names) => {
        if(error) console.log(error);
        else {
            res.render('leaderBoard', {names})
        }
    })
})

