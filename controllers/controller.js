const { Product, User, Transaction } = require('../models/index.js')

class Controller {

    static root(req, res) {
        Product.findAll({

        })
            .then(data => {
                res.render('index', { title: "Home", product: data })
                // res.send({title: "Home", product:data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getRegister(req, res) {
        res.render('register')
    }

    static postRegister(req, res) {
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

    static getLogin(req, res) {
        if ( req.session.login ){
            res.redirect(`/user/buy/${req.session.simpan}`)
        }
        else {
            res.render('login', { title: 'login' })
        }
    }

    static postLogin(req, res) {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
            .then(data => {
                // console.log(JSON.stringify(data, null, 2))
                req.session.login = true
                req.session.simpan = data.id
                res.redirect(`/user/buy/${data.id}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getUserBuy(req, res) {
        if ( req.session.login ){
        const paramId = req.params.id
        let penampung = {}
        User.findOne({
            where: {
                id: paramId
            }
        })
            .then(data => {
                penampung.dataUser = data
                // console.log(JSON.stringify(data))
                return Product.findAll()
            })
            .then(data => {
                penampung.dataProduct = data
                // console.log(JSON.stringify(penampung.dataProduct, null, 2))
                
                    res.render('buy', {
                        title: 'a', dataUser: penampung.dataUser,
                        dataProduct: penampung.dataProduct
                    })
            })        
        }
        else{
            res.redirect('/login')
        }
    }

    static postUserBuy(req, res) {
        let obj = {
            ProductId: req.body.product_id,
            UserId: req.params.id,
            total: req.body.product_qty
        }
        // console.log(req.body)
        Transaction.create(obj)
            .then(data => {
                res.redirect('/user/checkout')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getUserCheckout(req, res) {
        Transaction.findAll({
            include: Product
        })
            .then(data => {
                res.render('checkout', {
                    title: 'checkout',
                    dataTransaction: data
                })
                // console.log(JSON.stringify(data[0], null, 2))
            })
    }

    static postUserCheckout(req, res) {
        Transaction.findAll({
            include: Product
        })
            .then(data => {
                res.render('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getUserEdit(req, res) {
        let penampung = {}
        Transaction.findOne({
            where: {
                id: req.params.id
            },
            include: Product
        })
            .then(data => {
                penampung.dataTransaction = data

                return Product.findAll()
            })
            .then(data => {
                penampung.dataProduct = data

                res.render('checkout-edit', {
                    title: 'a',
                    dataTransaction: penampung.dataTransaction,
                    dataProduct: penampung.dataProduct
                })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postUserEdit(req, res) {
        let obj = {
            ProductId: req.body.product_id,
            total: req.body.product_qty
        }
        console.log(req.body)
        Transaction.update(obj, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.redirect('/user/checkout')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res){
        req.session.destroy(err => {
            res.redirect('/login')
        })
    }

    static getUserDelete(req, res){
        Transaction.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/user/checkout')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getAddStock(req, res){
        res.render('admin-add', {title: "add stock"})
    }

    static postAddStock(req, res){
        let obj = {
            name: req.body.product_name,
            size: req.body.product_size
        }
        Product.create(obj)
        .then(data => {
            res.redirect('/admin/page')
        })
        .catch( err => {
            res.send(err)
        })

    }

    static getAdminPage(req, res){

    }

    static postAdminPage(req, res){
        
    }
}

module.exports = Controller