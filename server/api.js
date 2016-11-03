var express = require('express');

var questions = require('./controllers/questions.ctrl');
var users = require('./controllers/users.ctrl');
var bosses = require('./controllers/bosses.ctrl');

var router = express.Router();

router.use('/questions', questions);
router.use('/users', users);
router.use('/bosses', bosses);

module.exports = router;