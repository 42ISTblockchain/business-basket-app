const JWT = require('jsonwebtoken')
const CustomError = require('../scripts/error/CustomError')
const {AUTH_ERROR, INVALID_TOKEN_ERROR} = require("../scripts/error/errorMessages");

const authenticate = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1] || null
    if (token === null)
		  throw new CustomError(INVALID_TOKEN_ERROR)

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err)
          throw new CustomError(AUTH_ERROR)
        req.user = user
        next()
    })
}

module.exports = authenticate
