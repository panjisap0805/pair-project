const express = require('express')
const app = express()
const session = require('express-session')

app.use(session ({
    secret: 'blabla',
    resave: false,
    saveUninitialized: false
}))

const PORT = 3000

const router = require('./routers/index.js')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(PORT, ()=> {
    console.log('aplikasi jalan di port', PORT)
})