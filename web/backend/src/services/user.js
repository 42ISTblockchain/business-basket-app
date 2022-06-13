const BaseService = require('./base-service')
const BaseModel = require('../models/user')

class UserService extends BaseService {
    constructor(model) {
        super(BaseModel)
    }
}
