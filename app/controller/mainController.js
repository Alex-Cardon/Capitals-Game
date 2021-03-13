exports.home = (req, res) => {
    req.session.gameArray = [];
    res.render('index');
}

exports.notFound = (req, res) => {
    res.status(404).render('error');
}