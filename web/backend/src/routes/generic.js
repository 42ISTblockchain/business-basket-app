const locationRouter = require('express').Router()
const genericController = require('../controllers/generic')

locationRouter.get('/city', genericController.city)
locationRouter.get('/category', genericController.category)

module.exports = locationRouter
