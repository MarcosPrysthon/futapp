const UserController = require('./Controllers/UsersController');

const express = require('express');
const router = express.Router();

router.post('/users', UserController.store);
router.get('/users', UserController.index);
router.delete('/users/:_id', UserController.delete);

module.exports = router;