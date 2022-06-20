const router = require('express').Router()
const WorkerRoutes = require('./worker')
const HireRoutes = require('./hire')

router.use('/worker', WorkerRoutes)
router.use('/hire', HireRoutes)

module.exports = router
