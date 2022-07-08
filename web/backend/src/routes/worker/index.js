const workerRouter = require('express').Router()
const workerAuth = require("./auth")
const workerFindJob = require("./find-job")
const workerProfile = require("./profile")
const workerHome = require("./home")

workerRouter.use('/auth', workerAuth)
workerRouter.use('/', workerHome)
workerRouter.use('/job-application', workerFindJob)
workerRouter.use('/profile', workerProfile)

module.exports = workerRouter
