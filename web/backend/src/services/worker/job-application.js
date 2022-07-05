const {JobApplication} = require('../../models');
const BaseService = require("../base-services/base-service");

class JobApplicationService extends BaseService {
    constructor() {
        super(JobApplication)
    }
}

module.exports = JobApplicationService
