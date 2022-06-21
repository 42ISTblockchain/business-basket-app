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
			throw new CustomError(LOGIN_ERROR.name, LOGIN_ERROR.message, LOGIN_ERROR.status)
		}
		hire = {
			hireId: hire.id,
			tokens: {
				access_token: generateAccessToken(hire),
				refresh_token: generateRefreshToken(hire)
			}
		}
		delete hire.password
		res.status(httpStatus.OK).send(hire)
    })

    register = errorWrapper(async (req, res) => {
		let hireData = await hireService.register(req.body)
		delete hireData.dataValues.password
		res.status(httpStatus.OK).json(hireData.dataValues);
	})
	
}

module.exports = new HireController()
