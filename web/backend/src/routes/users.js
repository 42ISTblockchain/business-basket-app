const router = require('express').Router()
const UserController = require('../controllers/user')

router.get('/', UserController.index)

module.exports = router
