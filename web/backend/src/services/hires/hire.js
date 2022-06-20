const AuthBaseService = require('../base-services/auth-base-service')
const {Hire} = require('../../models')

class HireService extends AuthBaseService {
    constructor() {
        super(Hire);
    }
}

module.exports = HireService
