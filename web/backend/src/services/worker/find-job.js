const {JobApplication} = require("../../models/job-application");
const BaseService = require("../base-services/base-service");

class FindJob extends BaseService {
    constructor() {
        super(JobApplication)
    }
}

module.exports = FindJob
