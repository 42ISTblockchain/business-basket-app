const AuthService = require("../../services/auth");
const CustomError = require("../../scripts/error/CustomError")
const errorWrapper = require("../../scripts/error/errorWrapper")
const { CREATED, OK } = require("http-status")
const { VALUE_NULL_ERROR, LOGIN_ERROR } = require("../../scripts/error/errorMessages")
const {
  passwordHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../../scripts/utils/helper");

class AuthController {
  constructor(model) {
    this.authService = new AuthService(model);
  }

  login = errorWrapper(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) throw new CustomError(VALUE_NULL_ERROR);

    let response = await this.authService.login({ email, password: passwordHash(password) });
    if (!response) throw new CustomError(LOGIN_ERROR);

    response = {
      id: response.id,
      role: response.role,
      email: response.email,
      profile_image: "",
      tokens: {
        access_token: generateAccessToken({ id: response.id, role: response.role, email: response.email }),
        refresh_token: generateRefreshToken({ id: response.id, role: response.role, email: response.email }),
      },
    };
    res.status(OK).json(response);
  });

  register = errorWrapper(async (req, res) => {
    await this.authService.register(req.body);
    res.status(CREATED).end();
  });
}

module.exports = AuthController;
