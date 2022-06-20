const httpStatus = require('http-status')
const Service = require('../../services/hires/job')
const jobService = new Service()


class JobController {
    async list(req, res) {
        const jobs = await jobService.list()
        res.status(httpStatus.OK).json(jobs)
    }

    async create(req, res) {
        const job = await jobService.create(req.body).then(job => console.log(job)).catch(err => console.log(err))
        res.status(httpStatus.OK).json(job)
    }
}

module.exports = new JobController()
