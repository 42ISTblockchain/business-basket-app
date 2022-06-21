const httpStatus = require('http-status')
const errorWrapper = require('../../scripts/error/errorWrapper')
const Service = require('../../services/hires/job')
const JWT = require('jsonwebtoken')
const { getUserId } = require('../../scripts/utils/helper')
const { Hire, Job } = require('../../models')
const jobService = new Service()


class JobController {
    list = errorWrapper(async (req, res) => {
        const jobs = await jobService.list({where: {hireId: getUserId(req.headers)}})
        res.status(httpStatus.OK).json(jobs)
    })

    create = errorWrapper(async (req, res, next) => {
		req.body.hireId = getUserId(req.headers)
		const job = await jobService.create(req.body)
        res.status(httpStatus.CREATED).json(job)
    })

    async update(req, res) {
		delete req.body.hireId
        const job = await jobService.update(req.params.id, req.body)
        res.status(httpStatus.OK).json(job)
    }

    async delete(req, res) {
        const job = await jobService.delete(req.params.id)
        res.status(httpStatus.OK).json(job)
    }
}

module.exports = new JobController()
