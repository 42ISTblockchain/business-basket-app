const router = require('express').Router()
const HireController = require('../controllers/hire/hire')
const JobController = require('../controllers/hire/job')
const validate = require('../middleware/validate')
const schemas = require("../validations/hire");

router.route('/login').post(validate(schemas.loginValidation), HireController.login)
router.post('/register', HireController.register)

router.get('/job', JobController.list)
router.post('/job/create', JobController.create)
router.put('/job/update/:id', JobController.update)
router.delete('/job/delete/:id', JobController.delete)

module.exports = router
