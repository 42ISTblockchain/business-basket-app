const workerAuthRouter = require('express').Router()
const AuthController = require('../../controllers/auth')
const registerReqFilter = require("../../middleware/register/registerReqFilter")
const {Worker} = require("../../models")

const {login, register} = new AuthController(Worker)

workerAuthRouter.post('/login', login)
workerAuthRouter.post('/register', register)

module.exports = workerAuthRouter
