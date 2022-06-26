const hireRouter = require('express').Router()
const hireAuth = require("./auth")
const jobProcess = require("./job")

hireRouter.use('/auth', hireAuth)
hireRouter.use('/job', jobProcess)

module.exports = hireRouter
