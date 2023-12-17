const express = require('express')

const routes = express.Router()

routes.get('/register', (req, res) => {
    return res.send("This is the register route")
})

routes.get('/login', (req, res) => {
    return res.send("This is the login route")
})

module.exports = routes;