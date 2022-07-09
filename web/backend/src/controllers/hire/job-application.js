const HttpStatus = require('http-status')
const {Worker} = require("../../models");
const {Hire} = require("../../models");
const {Job} = require("../../models");
const {JobCategory} = require("../../models");
const Service = require('../../services/hires/job-application')
const {getUserId} = require('../../scripts/utils/helper')
const errorWrapper = require("../../scripts/error/errorWrapper");
const jobApplicationService = new Service()

class JobApplicationController {
    list = errorWrapper(async (req, res) => {
        const applications = await jobApplicationService.list({
                where: {hireId: req.user.id},
                include: [
                    {
                        model: Worker,
                        as: 'worker',
                        attributes: ['id', 'firstName', 'lastName', 'phoneNumber']
                    },
                    {
                        model: Job,
                        as: 'job',
                        include: [
                            {
                                model: JobCategory,
                                as: 'category'
                            }
                        ]
                    },
                    {
                        model: Hire,
                        as: 'hire',
                        attributes: ['id', 'companyName']

                    }
                ]
            }
        )
        res.status(HttpStatus.OK).json(applications)
    })

    update = errorWrapper(async (req, res) => {
        const {id} = req.params
        const application = await jobApplicationService.update(id, req.body)
        res.status(HttpStatus.OK).json(application)
    })
}

module.exports = JobApplicationController