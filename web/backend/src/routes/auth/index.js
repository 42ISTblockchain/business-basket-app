const authRouter = require('express').Router()
const hireAuth = require("./hire");
const workerAuth = require("./worker");

authRouter.use("/hire", hireAuth)
authRouter.use("/worker", workerAuth)

module.exports = authRouter