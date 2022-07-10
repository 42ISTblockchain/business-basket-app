const HttpStatus = require('http-status')
const {Worker} = require("../../models");
const {Hire} = require("../../models");
const {Job} = require("../../models");
const {WorkerExperience} = require("../../models");
const {JobCategory} = require("../../models");
const JobApplicationService = require('../../services/hires/job-application')
const WorkerService = require('../../services/hires/worker')
const errorWrapper = require("../../scripts/error/errorWrapper");
const jobApplicationService = new JobApplicationService()
const workerService = new WorkerService()

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

    profile = errorWrapper(async (req, res) => {
        const profile = await workerService.find({
            where: {id: req.params.id},
            include: [
                {
                    model: WorkerExperience,
                    as: 'experiences',
                    attributes: ['companyName', 'description', 'address', 'startDate', 'endDate'],
                }
            ],
            order: [['experiences', 'endDate', 'desc']]
        })
        res.status(HttpStatus.OK).json(profile)
    })

    update = errorWrapper(async (req, res) => {
        const {id} = req.params
        const application = await jobApplicationService.update(id, req.body)
        res.status(HttpStatus.OK).json("application")
    })
}

module.exports = JobApplicationController
