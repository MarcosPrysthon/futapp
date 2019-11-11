const UserController = require('./Controllers/UsersController');
const PlayerController = require('./Controllers/PlayersController');
const MatchController = require('./Controllers/MatchesController');
const SessionController = require('./Controllers/SessionController');

const express = require('express');
const router = express.Router();

router.post('/users', UserController.store);
router.get('/users', UserController.index);
router.delete('/users/:_id', UserController.delete);

router.post('/matches', MatchController.store);
router.put('/matches/:match_id', MatchController.update);
router.get('/matches/:match_id', MatchController.index);

router.post('/players', PlayerController.store);
router.get('/players', PlayerController.index);
router.delete('/players', PlayerController.delete);

router.post('/login', SessionController.store);

module.exports = router;