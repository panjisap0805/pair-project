const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller.js')

router.get('/', Controller.root)

module.exports = router;