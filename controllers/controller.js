const { Product, User, Transaction } = require('../models/index.js')

class Controller{

    static root(req, res){
        Product.findAll({

        })
        .then(data => {
            res.render('index', {title: "Home", product:data})
            // res.send({title: "Home", product:data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getRegister(req, res){
        res.render('register')
    }

    static postRegister(req, res){
        const objUser = {
            username: req.body.username,
            password: req.body.password
        }
        User.create(objUser)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getLogin(req, res){
        res.render('login', {title: 'login'})
    }

    static postLogin(req, res){
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        .then(data => {
            res.redirect('/user/buy')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getUserBuy(req, res){
        let penampung = {}

        User.findAll()
        .then(data => {
            penampung.dataUser = data.map( e => {
                e.username
                return e
            })
            return Product.findAll()
        })
        .then(data => {
            penampung.dataProduct = data

            res.render('buy', { dataUser: penampung.dataUser, dataProduct: penampung.dataProduct})
        })
    }

    static postUserBuy(req, res){
        Product.findAll({

        })
        .then(data => {
            res.render('/user/checkout', {product: data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getUserCheckout(req, res){
        res.render('checkout', {title: 'checkout'})
    }

    static postUserCheckout(req, res){
        Product.findAll({

        })
        .then(data => {
            res.render()
        })
        .catch(err => {
            res.send(err)
        })
    }

    static 
}

module.exports = Controller