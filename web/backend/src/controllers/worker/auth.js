const AuthService = require("../../services/auth")
const {Worker} = require("../../models")
const { CREATED, OK } = require("http-status");
const errorWrapper = require("../../scripts/error/errorWrapper");

const worker = new AuthService(Worker);

class WorkerController {
  login = errorWrapper(async (req, res) => {

    let response = await worker.login(req.body);
    res.status(OK).json(response);

  });

  register = errorWrapper(async (req, res) => {
    await worker.register(req.body);
    res.status(CREATED).end();
  });
}

module.exports = WorkerController;
