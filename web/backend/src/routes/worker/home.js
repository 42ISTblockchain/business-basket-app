const workerHomeRouter = require('express').Router()
const HomeController = require('../../controllers/worker/home')

const {listJobApplication} = new HomeController()

workerHomeRouter.get('/my-job-application', listJobApplication)

module.exports = workerHomeRouter
