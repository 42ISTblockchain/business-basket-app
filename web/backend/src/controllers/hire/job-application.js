const httpStatus = require('http-status')
const errorWrapper = require('../../scripts/error/errorWrapper')
const Service = require('../../services/hires/job-application')
const { getUserId } = require('../../scripts/utils/helper')
const jobApplicationService = new Service()

class JobApplicationController {
	list(req, res) {
		const jobs = jobApplicationService.list({where: {hireId: getUserId(req.headers)}})
		res.status(httpStatus.OK).json(jobs)
	}
}

module.exports = new JobApplicationController()