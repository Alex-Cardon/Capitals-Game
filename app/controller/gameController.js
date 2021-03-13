const dataMapper = require('../dataMapper')

exports.game =(req, res) => {
    dataMapper.getCountryName((error, country) =>{
        if(error)console.log(error);
        else {
            res.render('game', {country});
        }
    })
}

exports.gameTest = (req, res) => {
    const userAnswer = req.query.answer.toLowerCase();
    let answer = "";
    dataMapper.getCountryName((error, country) =>{
        if(error)console.log(error);
        else {
            let capi = country.capital.toLowerCase();
            console.log(capi);
            if (userAnswer === capi) {
                console.log('coucou :', capi);
                answer = 'Correct';
                res.render('game', {country, answer});
            } else {
                answer = 'Faux'
                res.render('game', {country, answer});
            }
        }
    })
}