const HireService = require("../../services/hires/hire");
const CustomError = require("../../scripts/error/CustomError");
const errorWrapper = require("../../scripts/error/errorWrapper");
const { CREATED, OK } = require("http-status");
const {
  passwordHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../../scripts/utils/helper");
const {
  LOGIN_ERROR,
  VALUE_NULL_ERROR,
} = require("../../scripts/error/errorMessages");

const hire = new HireService();

class HireController {
  login = errorWrapper(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) throw new CustomError(VALUE_NULL_ERROR);

    let response = await hire.login({
      email,
      password: passwordHash(password),
    });

    if (!response) throw new CustomError(LOGIN_ERROR);

    const { id, companyName } = response.dataValues;

    res.status(OK).json({
      id,
      tokens: {
        access_token: generateAccessToken({ id, email, companyName }),
        refresh_token: generateRefreshToken({ id, email, companyName }),
      },
    });
  });

  register = errorWrapper(async (req, res) => {
    console.log(req.body);
    let hireData = await hire.register(req.body);
	console.log(hireData)
    res.status(CREATED).json(hireData.dataValues);
  });
}

module.exports = new HireController();
