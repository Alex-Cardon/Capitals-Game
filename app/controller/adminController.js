const dataMapper = require('../dataMapper')

exports.addName = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, _) => {
        if(error) console.log(error);
        else {
            req.session.name = req.query.name;
            res.redirect('/leaderBoard')
         }
    })
})
exports.addNameForm = (req, res) => {
    res.render('addNameForm');
}

exports.leaderboard = ((req, res) => {
    dataMapper.leaderboard((error, names) => {
        if(error) console.log(error);
        else {
            console.log(req.session.name);
            res.render('leaderBoard', {names})
        }
    })
})

