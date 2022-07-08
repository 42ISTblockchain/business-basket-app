const HttpStatus = require('http-status')
const Service = require('../../services/hires/job-application')
const {getUserId} = require('../../scripts/utils/helper')
const Worker = require("../../models/worker");
const Hire = require("../../models/hire");
const Job = require("../../models/job");
const errorWrapper = require("../../scripts/error/errorWrapper");
const JobCategory = require("../../models/job-category");
const jobApplicationService = new Service()

class JobApplicationController {
     list = errorWrapper(async(req, res) => {
        const applications = await jobApplicationService.list({
                where: {hireId: getUserId(req.headers)},
                include: [
                    {model: Worker, as: 'worker'},
                    {model: Hire, as: 'hire'},
                    {model: Job, as: 'job', include: [{model: JobCategory, as: 'category'}]}
                ]
            }
        )
        res.status(HttpStatus.OK).json(applications)
    })

    update = errorWrapper(async(req, res) => {
        const {id} = req.params
        const application = await jobApplicationService.update(id, req.body)
        res.status(HttpStatus.OK).json(application)
    })
}

module.exports = JobApplicationController
