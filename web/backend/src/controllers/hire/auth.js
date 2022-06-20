const Service = require('../../services/hires/hire')
const CustomError = require('../../scripts/error/CustomError');
const httpStatus = require('http-status')
const errorWrapper = require("../../scripts/error/errorWrapper");
const {passwordHash, generateAccessToken, generateRefreshToken} = require("../../scripts/utils/helper");
const {LOGIN_ERROR} = require("../../scripts/error/errorMessages");

const hireService = new Service()


class HireController {

    login = errorWrapper(async (req, res) => {
        req.body.password = passwordHash(req.body.password)
        let hire = await hireService.login(req.body)
		if (!hire){
			throw new CustomError(LOGIN_NAME, USER_NOT_FOUND, httpStatus.NOT_FOUND)
		}
		hire = {
			companyName: hire.companyName,
			email: hire.email,
			tokens: {
				access_token: generateAccessToken(hire),
				refresh_token: generateRefreshToken(hire)
			}
		}
		delete hire.password
		res.status(httpStatus.OK).send(hire)
    })

    register = errorWrapper(async (req, res) => {
		await hireService.register(req.body)
		res.status(httpStatus.OK).send("basarili")
	})
	
}

module.exports = new HireController()
