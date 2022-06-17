const router = require('express').Router()
const WorkerRoutes = require('./worker')
const HireRoutes = require('./hire')
const AuthRoutes = require('./auth')
const authenticate = require('../middleware/auth')

router.use('/worker', WorkerRoutes)
router.use('/hire', HireRoutes)

module.exports = router
