const AuthBaseService = require('./base-services/auth-base-service')
const {User} = require('../models')

class AuthService extends AuthBaseService {
    constructor() {
        super(User);
    }
}

module.exports = AuthService
