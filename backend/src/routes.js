const UserController = require('./Controllers/UsersController');

const express = require('express');
const router = express.Router();

router.post('/users', UserController.store);

module.exports = router;