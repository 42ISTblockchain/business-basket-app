const {Worker}  = require("../../models")
const BaseService = require("../base-services/base-service")

class ProfileService extends BaseService {
    constructor() {
        super(Worker)
    }
}

module.exports = ProfileService
