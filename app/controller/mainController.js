exports.home = (req, res) => {
    req.session.gameArray = [];
    req.session.count = 0;
    req.session.score = 0;
    res.render('index');
}

exports.notFound = (req, res) => {
    res.status(404).render('error', {cssFile:'error404.css'});
}

exports.leaderBoard = (req, res) => {
    res.render('leaderBoard', {})
}