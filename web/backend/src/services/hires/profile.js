const BaseService = require('../base-services/base-service')
const {Hire} = require('../../models')

class ProfileService extends BaseService {
    constructor() {
        super(Hire);
    }
}

module.exports = ProfileService
