const errorWrapper = require("../../scripts/error/errorWrapper");
const ProfileService = require("../../services/worker/profile");
const ExperienceService = require("../../services/worker/experience");
const {getUserId} = require("../../scripts/utils/helper");
const HttpStatus = require("http-status");
const profileService = new ProfileService();
const experienceService = new ExperienceService();

class Profile {
    listProfile = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers);
        const profile = await profileService.list({
            where: {id: workerId}
        });
        res.status(HttpStatus.OK).json(profile[0]);
    })

    updateProfile = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers);
        const profile = await profileService.update(workerId, req.body);
        res.status(HttpStatus.OK).json(profile);
    })

    listExperience = errorWrapper(async (req, res) => {
        const workerId = getUserId(req.headers);
        const experiences = await experienceService.list({
            where: {workerId: workerId},
            order: [['endDate', 'desc']]
        });
        res.status(HttpStatus.OK).json(experiences);
    })

    updateExperience = errorWrapper(async (req, res) => {
        const experience = await experienceService.update(req.params.id, req.body);
        res.status(HttpStatus.OK).json(experience);
    })

    createExperience = errorWrapper(async (req, res) => {
        const experience = await experienceService.create({
            ...req.body,
            workerId: getUserId(req.headers)
        });
        res.status(HttpStatus.OK).json(experience);
    })

    deleteExperience = errorWrapper(async (req, res) => {
        const experience = await experienceService.delete(req.params.id);
        res.status(HttpStatus.OK).json(experience);
    })
}

module.exports = Profile;
