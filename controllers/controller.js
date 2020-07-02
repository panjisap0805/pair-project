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
        res.render('login')
    }

    static postLogin(req, res){
        const objUser = {
            username: req.body.username,
            password: req.body.password
        }
    }
}

module.exports = Controller