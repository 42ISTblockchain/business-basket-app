const BaseService = require('../base-services/base-service')
const {Worker} = require('../../models')

class WorkerService extends BaseService {
    constructor() {
        super(Worker)
    }
}

module.exports = WorkerService
