const router = require('express').Router()
const HireController = require('../controllers/hire/auth')
const JobController = require('../controllers/hire/job')
const validate = require('../middleware/validate')
const schemas = require("../validations/hire");
const authenticate = require('../middleware/auth')

router.route('/login').post(validate(schemas.loginValidation), HireController.login)
router.post('/register', HireController.register)

router.get('/job', authenticate, JobController.list)
router.post('/job/create', authenticate, JobController.create)
router.put('/job/update/:id', authenticate, JobController.update)
router.delete('/job/delete/:id', authenticate, JobController.delete)

module.exports = router
