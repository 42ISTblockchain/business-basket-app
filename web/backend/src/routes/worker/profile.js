const workerProfileRouter = require('express').Router()
const ProfileController = require('../../controllers/worker/profile')

const {list, update} = new ProfileController()

workerProfileRouter.get('/', list)
workerProfileRouter.put('/update', update)

module.exports = workerProfileRouter
