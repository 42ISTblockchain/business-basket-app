const workerProfileRouter = require('express').Router()
const ProfileController = require('../../controllers/worker/profile')

const {listProfile, updateProfile, listExperience, createExperience, updateExperience, deleteExperience} = new ProfileController()

workerProfileRouter.get('/', listProfile)
workerProfileRouter.put('/update', updateProfile)

workerProfileRouter.get('/experience', listExperience)
workerProfileRouter.post('/experience/create', createExperience)
workerProfileRouter.put('/experience/update/:id', updateExperience)
workerProfileRouter.delete('/experience/delete/:id', deleteExperience)

module.exports = workerProfileRouter
