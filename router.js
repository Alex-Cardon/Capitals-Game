const express = require('express');

const router = express.Router();

const mainController = require('./app/controller/mainController');
const gameController = require('./app/controller/gameController');
const adminController = require('./app/controller/adminController')

router.get('/', mainController.home);

router.get('/game', gameController.gameInit);

router.get('/game/test', gameController.gameTest);

<<<<<<< HEAD
router.get('/game/addName', adminController.addNameForm)
=======
router.get('/game/addNameForm', adminController.addNameForm)
>>>>>>> 8dbdeac79766ba16f34695f1431c19c94aa53b13

router.get('/leaderboard', adminController.leaderboard)

module.exports = router;