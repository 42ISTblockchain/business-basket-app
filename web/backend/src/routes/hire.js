const hireRouter = require('express').Router()
const AuthController = require('../controllers/auth')
const registerReqFilter = require("../middleware/register/registerReqFilter")
const {Hire} = require("../models")
const JobController = require('../controllers/hire/job')
const JobApplicationController = require('../controllers/hire/job-application')
const authenticate = require('../middleware/auth')

const {login, register} = new AuthController(Hire)

hireRouter.post('/login', login)
hireRouter.post('/register', registerReqFilter, register)

// hireRouter.get('/job', authenticate, JobController.list)
// hireRouter.post('/job/create', authenticate, JobController.create)
// hireRouter.put('/job/update/:id', authenticate, JobController.update)
// hireRouter.delete('/job/delete/:id', authenticate, JobController.delete)

// hireRouter.get('/job-application', authenticate, JobApplicationController.list)

module.exports = hireRouter
