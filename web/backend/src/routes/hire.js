const router = require('express').Router()
const HireController = require('../controllers/hire/auth')
const JobController = require('../controllers/hire/job')
const JobApplicationController = require('../controllers/hire/job-application')
const validate = require('../middleware/validate')
const schemas = require("../validations/hire");
const authenticate = require('../middleware/auth')
const requestFiler = require("../middleware/requestFilter")

router.route('/login').post(validate(schemas.loginValidation), HireController.login)
router.post('/register', requestFiler, HireController.register)

router.get('/job', authenticate, JobController.list)
router.post('/job/create', authenticate, JobController.create)
router.put('/job/update/:id', authenticate, JobController.update)
router.delete('/job/delete/:id', authenticate, JobController.delete)

router.get('/job-application', authenticate, JobApplicationController.list)

module.exports = router
