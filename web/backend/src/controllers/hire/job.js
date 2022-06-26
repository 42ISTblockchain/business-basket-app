const HttpStatus = require('http-status')
const errorWrapper = require('../../scripts/error/errorWrapper')
const Service = require('../../services/hires/job')
const { getUserId } = require('../../scripts/utils/helper')
const {Job} = require("../../models/job");
const {JobCategory} = require("../../models/job-category");
const {City} = require("../../models/city");

const jobService = new Service()


class JobController {
    list = errorWrapper(async (req, res) => {
        const jobs = await jobService.list({
                where: {hireId: getUserId(req.headers)},
                order: [['id', 'DESC']],
                include: [
                    {model: JobCategory, attributes:['name'], as: 'category'},
                    {model: City, attributes:['name'], as: 'city'}
                ]
            })
        res.status(HttpStatus.OK).json(jobs)
    })

    create = errorWrapper(async (req, res, next) => {
		req.body.hireId = getUserId(req.headers)
		const job = await jobService.create(req.body)
        res.status(HttpStatus.CREATED).json(job)
    })

    async update(req, res) {
		delete req.body.hireId
        const job = await jobService.update(req.params.id, req.body)
        res.status(HttpStatus.OK).json(job)
    }

    async delete(req, res) {
        const job = await jobService.delete(req.params.id)
        res.status(HttpStatus.OK).json(job)
    }
}

module.exports = new JobController()
