const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller.js')

router.get('/', Controller.root)

router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister)

router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)

// router.get('/admin/page', Controller.getAdminPage)
// router.post('/admin/page', Controller.postAdminPage)

// router.get('/admin/edit/:id', Controller.getEditStock)

// router.get('/user/buy', Controller.getUserBuy)
// router.post('/user/buy', Controller.postUserBuy)

// router.get('/user/checkout', Controller.getUserCheckout)
// router.post('/user/checkout', Controller.postUserCheckout)

module.exports = router;