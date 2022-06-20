const BaseService = require('../base-services/base-service')
const {Worker} = require('../../models')

class UserService extends BaseService {
    constructor() {
        super(Worker)
    }
}

module.exports = UserService
