const HttpStatus = require('http-status')
const CustomError = require('../scripts/error/CustomError')
const {LOGIN_ERROR} = require("../scripts/error/errorMessages");

const validate = (schema) => (req, res, next) => {
    const {value, error} = schema.validate(req.body)

    if (error) {
		let customErr = new CustomError(LOGIN_ERROR.name, LOGIN_ERROR.message, HttpStatus.NOT_FOUND)
		next(customErr);
        return ;
    }

    Object.assign(req, value)
    return next()
}

module.exports = validate
