const workerFindJobRouter = require('express').Router()
const FindController = require('../../controllers/worker/find-job')

const {list, create} = new FindController()

workerFindJobRouter.get('/', list)
workerFindJobRouter.post('/create', create)

module.exports = workerFindJobRouter
