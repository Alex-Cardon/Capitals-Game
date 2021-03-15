const dataMapper = require('../dataMapper')

exports.showAddNameForm = ((req, res) => {
    dataMapper.addName(req.query.name, req.session.score, (error, name) => {
        if(error) console.log(error);
        else {
            res.render('addName', {name : req.query.name, score: req.session.score})
        }
    })
})



