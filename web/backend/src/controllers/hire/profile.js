const errorWrapper = require('../../scripts/error/errorWrapper')
const {getUserId} = require('../../scripts/utils/helper')
const Service = require('../../services/hires/profile')
const httpStatus = require('http-status')
const profileService = new Service()

class ProfileController {
    list = errorWrapper(async (req, res) => {
        const hireId = getUserId(req.headers);
        const profile = await profileService.list({
            where: {id: hireId},
            attributes: {exclude: ["id", "role", "rememberToken", "resetPasswordToken", "emailVerified"]},
        })
        res.status(httpStatus.OK).json(profile[0]);
    })

    update = errorWrapper(async (req, res) => {
        const id = getUserId(req.headers);
        const profile = await profileService.update(id, req.body);
        res.status(httpStatus.OK).json(profile);
    })
}

module.exports = ProfileController;

