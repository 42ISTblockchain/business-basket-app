const APIRouter = require('express').Router()
const WorkerRoutes = require('./worker')
const HireRoutes = require('./hire')
const GenericRoutes = require('./generic')

APIRouter.use('/hire', HireRoutes)
APIRouter.use('/worker', WorkerRoutes)
APIRouter.use('/generic', GenericRoutes)

module.exports = APIRouter
