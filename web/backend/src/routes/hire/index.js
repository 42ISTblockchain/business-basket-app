const hireRouter = require('express').Router()
const jobProcess = require("./job")
const jobApplication = require("./job-application")
const profile = require("./profile")
const {getAccessToRoute} = require("../../middleware/auth/auth");

hireRouter.use('/job', getAccessToRoute, jobProcess)
hireRouter.use('/job-application', getAccessToRoute, jobApplication)
hireRouter.use('/profile', getAccessToRoute, profile)

module.exports = hireRouter
