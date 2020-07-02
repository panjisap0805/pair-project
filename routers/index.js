const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller.js')

router.get('/', Controller.root)

router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister)

router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)

router.get('/logout', Controller.logout)

// router.get('/admin/page', Controller.getAdminPage)
// router.post('/admin/page', Controller.postAdminPage)

router.get('/user/checkout', Controller.getUserCheckout)
router.post('/user/checkout', Controller.postUserCheckout)

router.get('/user/checkout/edit/:id', Controller.getUserEdit)
router.post('/user/checkout/edit/:id', Controller.postUserEdit)

router.get('/user/checkout/delete/:id', Controller.getUserDelete)

router.get('/admin/add', Controller.getAddStock)
router.post('/admin/add', Controller.postAddStock)

router.get('/user/buy/:id', Controller.getUserBuy)
router.post('/user/buy/:id', Controller.postUserBuy)

module.exports = router;