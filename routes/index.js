var express = require('express');
var router = express.Router();
const db = require('../config/database')
const KostController = require('../controllers/KostController')

/* GET home page. */

router.get('/', KostController.index)

module.exports = router;
