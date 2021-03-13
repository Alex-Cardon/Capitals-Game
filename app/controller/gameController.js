const dataMapper = require('../dataMapper')

exports.gameInit = (req, res) => {
    const checkGameArray = req.session.gameArray[0].length;
    console.log(checkGameArray);
    if (checkGameArray !=10) {
        dataMapper.getCountryName((error, country) => {
            if (error) res.status(500).send("Erreur serveur !");
            else {
                req.session.gameArray.push(country)
                console.log(req.session.gameArray)
                res.render('game', {
                    gameArr: req.session.gameArray
                });
            }
        });
    } else {
        res.render('game', {
            gameArr: req.session.gameArray
        });
    };
}


// if(req.query.answer) {
//     const userAnswer = req.query.answer.toLowerCase();
//     if(userAnswer === country.capital) {
//         console.log(userAnswer, 'Correct');
//     } else {
//         console.log(userAnswer, 'Faux');
//     }
//     } 

// exports.gameTest = (req, res) => {
//     const userAnswer = req.query.answer.toLowerCase();
//     let answer = "";
//     dataMapper.getCountryName((error, country) =>{
//         if(error)console.log(error);
//         else {
//             let capi = country.capital.toLowerCase();
//             console.log(capi);
//             if (userAnswer === capi) {
//                 console.log('coucou :', capi);
//                 answer = 'Correct';
//                 res.render('game', {country, answer});
//             } else {
//                 answer = 'Faux'
//                 res.render('game', {country, answer});
//             }
//         }
//     }) }