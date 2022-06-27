const jobApplicationRouter = require('express').Router()
const JobApplicationController = require('../../controllers/hire/job-application')

const {list, update} = new JobApplicationController()

jobApplicationRouter.get('/', list)
jobApplicationRouter.put('/update/:id', update)

module.exports = jobApplicationRouter
