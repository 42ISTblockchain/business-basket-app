const workerRouter = require('express').Router()
const workerAuth = require("./auth")

workerRouter.use('/auth', workerAuth)

module.exports = workerRouter
