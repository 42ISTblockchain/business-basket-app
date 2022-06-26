const HttpStatus = require('http-status')
const errorWrapper = require('../../scripts/error/errorWrapper')
const JobService = require('../../services/hires/job')
const { getUserId } = require('../../scripts/utils/helper')

const jobService = new JobService()


class JobController {
    listJob = errorWrapper(async (req, res) => {
        const jobs = await jobService.list({where: {hireId: getUserId(req.headers)}})
        res.status(HttpStatus.OK).json(jobs)
    })

    createJob = errorWrapper(async (req, res, next) => {
		req.body.hireId = getUserId(req.headers)
		const job = await jobService.create(req.body)
        res.status(HttpStatus.CREATED).json(job)
    })

    updateJob = errorWrapper(async(req, res) => {
        const job = await jobService.update(req.params.id, req.body)
        res.status(HttpStatus.OK).json(job)
    })

    deleteJob = errorWrapper(async (req, res) => {
        const job = await jobService.delete(req.params.id)
        res.status(HttpStatus.OK).json(job)
    })
}

module.exports = JobController
