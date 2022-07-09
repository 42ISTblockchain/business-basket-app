const HttpStatus = require('http-status')
const errorWrapper = require('../../scripts/error/errorWrapper')
const JobService = require('../../services/hires/job')
const { getUserId } = require('../../scripts/utils/helper')
const {JobCategory} = require("../../models");
const {City} = require("../../models");
const {Country} = require("../../models");

const jobService = new JobService()


class JobController {
    listJob = errorWrapper(async (req, res) => {
        const jobs = await jobService.list({
                where: {hireId: getUserId(req.headers)},
				attributes: { exclude: ["cityId", "hireId", "jobCategoryId", "deletedAt", "updatedAt"] },
                order: [['id', 'DESC']],
                include: [
                    {model: JobCategory, attributes:['name', 'id'], as: 'category'},
                    {model: City, attributes:['name', 'id'], as: 'city'},
                ]
            })
        res.status(HttpStatus.OK).json(jobs)
    })

    createJob = errorWrapper(async (req, res, next) => {
		req.body.hireId = getUserId(req.headers)
        const job = await jobService.create(req.body)

        const jobs = await jobService.list({
            where: {hireId: getUserId(req.headers), id: job.id},
            attributes: { exclude: ["cityId", "hireId", "jobCategoryId"] },
            order: [['id', 'DESC']],
            include: [
                {model: JobCategory, attributes:['name', 'id'], as: 'category'},
                {model: City, attributes:['name', 'id'], as: 'city'},
            ]
        })

        res.status(HttpStatus.CREATED).json(jobs[0])
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
