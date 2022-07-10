const jobApplicationRouter = require('express').Router()
const JobApplicationController = require('../../controllers/hire/job-application')

const {list, profile, update} = new JobApplicationController()

jobApplicationRouter.get('/', list)
jobApplicationRouter.get('/profile/:id', profile)
jobApplicationRouter.put('/update/:id', update)

module.exports = jobApplicationRouter
