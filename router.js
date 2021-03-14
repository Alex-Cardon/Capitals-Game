const express = require('express');

const router = express.Router();

const mainController = require('./app/controller/mainController');
const gameController = require('./app/controller/gameController');

router.get('/', mainController.home);

router.get('/game', gameController.gameInit);

router.get('/game/test', gameController.gameTest);


module.exports = router;