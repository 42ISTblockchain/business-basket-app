const APIRouter = require('express').Router()
const WorkerRoutes = require('./worker')
const HireRoutes = require('./hire')

APIRouter.use('/hire', HireRoutes)
APIRouter.use('/worker', WorkerRoutes)

module.exports = APIRouter
