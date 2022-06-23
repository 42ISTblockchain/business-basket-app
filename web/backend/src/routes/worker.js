const workerRouter = require('express').Router()
const AuthController = require('../controllers/auth')
const {Worker} = require("../models")

const {login, register} = new AuthController(Worker)

workerRouter.post('/login', login)
workerRouter.post('/register', register)


module.exports = workerRouter
