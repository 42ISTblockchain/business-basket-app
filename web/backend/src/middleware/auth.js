const httpStatus = require('http-status')
const JWT = require('jsonwebtoken')
const CustomError = require('../scripts/error/CustomError')
const {AUTH_ERROR, INVALID_TOKEN_ERROR} = require("../scripts/error/errorMessages");

const authToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1] || null
    if (token === null)
		throw new CustomError(AUTH_ERROR.name, AUTH_ERROR.message, AUTH_ERROR.status)

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) throw new CustomError(INVALID_TOKEN_ERROR.name, INVALID_TOKEN_ERROR.message, INVALID_TOKEN_ERROR.status)
        req.user = user
        next()
    })
}

module.exports = authToken
