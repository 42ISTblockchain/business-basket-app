const hireAuthRouter = require('express').Router()
const AuthController = require('../../controllers/auth')
const registerReqFilter = require("../../middleware/register/registerReqFilter")
const {Hire} = require("../../models")

const {login, register} = new AuthController(Hire)

hireAuthRouter.post('/login', login)
hireAuthRouter.post('/register', registerReqFilter, register)

// const JobController = require('../../controllers/hire/job')
// const JobApplicationController = require('../../controllers/hire/job-application')
// const authenticate = require('../../middleware/auth')
// hireAuthRouter.get('/job', authenticate, JobController.list)
// hireAuthRouter.post('/job/create', authenticate, JobController.create)
// hireAuthRouter.put('/job/update/:id', authenticate, JobController.update)
// hireAuthRouter.delete('/job/delete/:id', authenticate, JobController.delete)

// hireAuthRouter.get('/job-application', authenticate, JobApplicationController.list)

module.exports = hireAuthRouter
