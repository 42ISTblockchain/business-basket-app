const router = require('express').Router()
const HireController = require('../controllers/hire')
const validate = require('../middleware/validate')
const schemas = require("../validations/hire");

router.route('/login').post(validate(schemas.loginValidation), HireController.login)
router.post('/register', HireController.register)

module.exports = router
