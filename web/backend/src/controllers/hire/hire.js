const httpStatus = require('http-status')
const Service = require('../../services/hires/hire')
const {passwordHash, generateAccessToken, generateRefreshToken} = require("../../scripts/utils/helper");
const hireService = new Service()


class HireController {

    async login(req, res) {
        req.body.password = passwordHash(req.body.password)
        await hireService.login(req.body)
            .then((hire) => {
                if (!hire) return res.status(httpStatus.NOT_FOUND).send({message: "Böyle bir kullanıcı bulunamadı!"})
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
            .catch(error => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.toString()))
    }

    async register(req, res) {
        const hire = await hireService.register(req.body).then(hire => console.log(hire)).catch(err => console.log(err.errors))
        res.status(httpStatus.OK).json(hire)
    }
}

module.exports = new HireController()
