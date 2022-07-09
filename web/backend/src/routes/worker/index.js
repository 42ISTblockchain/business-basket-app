const workerRouter = require('express').Router()
const workerFindJob = require("./find-job")
const workerProfile = require("./profile")
const workerHome = require("./home")

workerRouter.use('/', workerHome)
workerRouter.use('/job-application', workerFindJob)
workerRouter.use('/profile', workerProfile)

module.exports = workerRouter
