const {WorkerExperience}  = require("../../models")
const BaseService = require("../base-services/base-service")

class ExperienceService extends BaseService {
    constructor() {
        super(WorkerExperience)
    }
}

module.exports = ExperienceService
