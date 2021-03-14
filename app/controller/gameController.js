const dataMapper = require('../dataMapper')

exports.gameInit = (req, res) => {
        dataMapper.getCountryName((error, country) => {
            if (error) res.status(500).send("Erreur serveur !");
            else {
                req.session.gameArray.push(country)
                res.render('game', {
                    gameArr: req.session.gameArray[0],
                    count : req.session.count
                });
            }
        });
    };

    exports.gameTest = (req, res) => {
       const gameArr = req.session.gameArray[0];
       const userAnswer = req.query.answer.toLowerCase();
       const currentCountry = gameArr[req.session.count]
       if(currentCountry.capital.toLowerCase() === userAnswer) {
           console.log('Correct');
            req.session.count++;
            res.render('game', {gameArr: req.session.gameArray[0], count: req.session.count})
       } else {
           console.log('faux');
            req.session.count++;
            res.render('game', {gameArr: req.session.gameArray[0], count: req.session.count})
       }
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