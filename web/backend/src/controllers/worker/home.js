const errorWrapper = require("../../scripts/error/errorWrapper");
const JobApplicationService = require("../../services/worker/job-application");
const {getUserId} = require("../../scripts/utils/helper");
const HttpStatus = require("http-status");
const {Hire} = require("../../models/hire");
const jobApplicationService = new JobApplicationService();

class Home {
    listJobApplication = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers);
        const jobApplications = await jobApplicationService.list({
            where: {workerId: workerId, ...req?.query}, include: [{
                model: Hire, as: 'hire'
            }]
        });
        res.status(HttpStatus.OK).json(jobApplications);
    })
}

module.exports = Home;
