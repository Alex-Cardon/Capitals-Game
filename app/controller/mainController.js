exports.home = (req, res) => {
    //req.session.gameArray = [];
    req.session.gameArray = [];
    req.session.count = 0;
    req.session.score = 0;
    req.session.scoreArray = [];
    req.session.userAnswer =[];
    req.session.countries = [];
    req.session.capitals = [];
    res.render('index');
}

exports.notFound = (req, res) => {
    res.status(404).render('error');
}