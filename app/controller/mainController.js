exports.home = (req, res) => {
    res.render('index');
}

exports.notFound = (req, res) => {
    res.status(404).render('error');
}