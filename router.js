const express = require('express');

const router = express.Router();

const mainController = require('./app/controller/mainController');
const gameController = require('./app/controller/gameController');
const adminController = require('./app/controller/adminController')

router.get('/', mainController.home);

router.get('/game', gameController.gameInit);

router.get('/game/test', gameController.gameTest);

router.get('/game/addNameForm', adminController.addNameForm)

router.get('/leaderboard', adminController.leaderboard)

module.exports = router;