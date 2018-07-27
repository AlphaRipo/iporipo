var express = require('express');
var actions = require('../methods/actions');

var router = express.Router();

router.post('/send_email', actions.send_email);
router.get('/send_email', actions.send_email);


module.exports = router;