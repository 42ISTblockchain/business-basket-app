const hireAuthRouter = require('express').Router()
const AuthController = require('../../controllers/auth')
const registerReqFilter = require("../../middleware/register/registerReqFilter")
const {Hire} = require("../../models")

const {login, register} = new AuthController(Hire)

hireAuthRouter.post('/login', login)
hireAuthRouter.post('/register', registerReqFilter, register)

module.exports = hireAuthRouter
