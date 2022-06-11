const httpStatus = require('http-status')

class User {
    index(req, res) {
        res.status(httpStatus.OK).send("hello world")
    }
}

module.exports = new User()
