const router = require('express').Router()
const WorkerController = require('../controllers/worker')
const validate = require('../middleware/validate')
const schemas = require('../validations/hire')

/*
router.route('/login').post(validate(schemas.loginValidation), WorkerController.login)
router.route('/register').post(validate(schemas.createValidation), WorkerController.register)
*/

module.exports = router
