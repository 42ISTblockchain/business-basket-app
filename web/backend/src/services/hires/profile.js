const BaseService = require('../base-services/base-service')
const {Job} = require('../../models')

class JobService extends BaseService {
    constructor() {
        super(Job)
    }
}

module.exports = JobService
