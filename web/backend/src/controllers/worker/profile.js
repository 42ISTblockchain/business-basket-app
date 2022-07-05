const errorWrapper = require("../../scripts/error/errorWrapper");
const ProfileService = require("../../services/worker/profile");
const {getUserId} = require("../../scripts/utils/helper");
const HttpStatus = require("http-status");
const profileService = new ProfileService();

class Profile {
    list = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers);
        const profile = await profileService.list({
            where: {id: workerId}
        });
        res.status(HttpStatus.OK).json(profile[0]);
    })

    update = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers);
        const profile = await profileService.update(workerId, req.body);
        res.status(HttpStatus.OK).json(profile);
    })
}

module.exports = Profile;
