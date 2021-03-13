const dataMapper = require('../dataMapper')

exports.game = (req, res) => {
    //si le user a entré une réponse
    if (req.query.answer) {
        const userAnswer = req.query.answer.toLowerCase();
        // alors on la compare
        if (userAnswer === country.capital) {
            //si le result est ok 
            //alors on affiche correct
            console.log(userAnswer, 'Correct');
            //sinon on affiche faux
        } else {
            console.log('Faux');
        }
    }
    //ensuite après 2 sec 
    //on relance la query
    dataMapper.getCountryName((error, country) => {
        if (error) console.log(error);
        else {
            foo = function(){
            res.render('game', {country});
            }
        }
    });
    
    setTimeout(foo, 2000);
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