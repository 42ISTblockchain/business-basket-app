const errorWrapper = require('../../scripts/error/errorWrapper')
const HttpStatus = require('http-status')
const JobApplicationService = require('../../services/hires/job-application')
const JobService = require('../../services/hires/job')
const {JobCategory} = require("../../models");
const {Hire} = require("../../models");
const {getUserId} = require("../../scripts/utils/helper");
const {Op} = require("sequelize");
const jobApplicationService = new JobApplicationService()
const jobService = new JobService()

class FindJob {
    list = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers)
        const jobApplications = await jobApplicationService.list({where: {workerId: workerId}, attributes: ['jobId']})
        const jobIds = jobApplications.map(item => item.jobId)
        const jobs = await jobService.list({
            where: {
                id: {[Op.notIn]: jobIds},
                ...req?.query
            },
            include: [
                {model: JobCategory, attributes:['name', 'id'], as: 'category'},
                {model: Hire, attributes:['companyName', 'id'], as: 'hire'},
            ]
        })
        // url?id=5&status&pending
        res.status(HttpStatus.OK).json(jobs)
    })

    create = errorWrapper(async (req, res) => {
        const job = await jobApplicationService.create(req.body)
        res.status(HttpStatus.CREATED).json(job)
    })
}

module.exports = FindJob
