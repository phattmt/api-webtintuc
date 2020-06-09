var express = require('express')
var router = express.Router()
var controller = require('../controllers/diaDiem.controller')

// define the home page route
router.get('/', controller.index)
router.get('/:tenKhongDau', controller.getTenKhongDau)

router.get('/create', controller.createDiaDiem)

module.exports = router