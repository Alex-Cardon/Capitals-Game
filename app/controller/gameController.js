const dataMapper = require('../dataMapper')

exports.game = (req, res) => {
    dataMapper.getCountryName((error, country) =>{
        if(error)console.log(error);
        else {
            res.render('game', {country});
        }
    })
}