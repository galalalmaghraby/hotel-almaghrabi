var express = require('express');
var router = express.Router();

let {book,review,getPage} = require('../controllers/index.controller')
/* GET home page. */
router.get('/', getPage);
router.post('/book',book );
router.post('/review',review );

module.exports = router;
