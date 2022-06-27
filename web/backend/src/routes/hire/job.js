const jobController = require("../../controllers/hire/job");
const hireJobRouter = require("express").Router();
const {getOwnerJobAccess} = require("../../middleware/auth/auth");
const jobRequestFilter = require("../../middleware/job/jobRequestFilter");

const {listJob, createJob, updateJob, deleteJob} = new jobController();

hireJobRouter.get("/", listJob);
hireJobRouter.post("/create", createJob);
hireJobRouter.put("/update/:id", getOwnerJobAccess, updateJob);
hireJobRouter.delete("/delete/:id", getOwnerJobAccess, deleteJob);

module.exports = hireJobRouter;
