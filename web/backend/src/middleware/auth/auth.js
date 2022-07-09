const JWT = require("jsonwebtoken");
const CustomError = require("../../scripts/error/CustomError");
const {Job} = require("../../models");
const {
  AUTH_ERROR,
  INVALID_TOKEN_ERROR,
  BAD_REQ_ERROR
} = require("../../scripts/error/errorMessages");
const {OK} = require("http-status")
const errorWrapper = require("../../scripts/error/errorWrapper");

const getAccessToRoute = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1] || null;
  if (token === null) throw new CustomError(INVALID_TOKEN_ERROR);

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) throw new CustomError(AUTH_ERROR);
    req.user = user;
    next();
  });
};

const getOwnerJobAccess = errorWrapper(async (req, res, next) => {
  const job = await Job.findOne({
    attributes: ["hireId"],
    raw: true,
    where: { id: req.params.id },
  });
  if (!job) throw new CustomError(BAD_REQ_ERROR)

  if (job.hireId !== req.user.id) throw new CustomError(AUTH_ERROR);
  next();
});

module.exports = { getAccessToRoute, getOwnerJobAccess };
