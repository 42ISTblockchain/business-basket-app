const router = require('express').Router()
const UserController = require('../controllers/user')
const validate = require('../middleware/validate')
const schemas = require('../validations/user')

router.get('/', UserController.index)
router.route('/create').post(validate(schemas.createValidation), UserController.create)
router.route('/login').post(validate(schemas.loginValidation), UserController.login)
router.put('/update/:id', UserController.update)
router.delete('/delete/:id', UserController.delete)

module.exports = router
