const workerRouter = require('express').Router()
const workerAuth = require("./auth")
const workerFindJob = require("./find-job")

workerRouter.use('/auth', workerAuth)
workerRouter.use('/job-application', workerFindJob)

module.exports = workerRouter
