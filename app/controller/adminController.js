const dataMapper = require('../dataMapper')

exports.showAddNameForm = ((req, res) => {
    res.render('addName');
})

exports.addName = ((req, res) => {
    const nameInfo = {
        name: req.body.name
    }

    dataMapper.addName (nameInfo ,(error, result) => {
        if(error) res.status(500).send('Erreur serveur');
        else {
            res.redirect('/game/addName' + req.body.name);
        }
    })
})


