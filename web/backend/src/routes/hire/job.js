const jobController = require("../../controllers/hire/job");
const hireJobRouter = require("express").Router();
const {getAccessToRoute, getOwnerJobAccess} = require("../../middleware/auth/auth");
const jobRequestFilter = require("../../middleware/job/jobRequestFilter");

const { listJob, createJob, updateJob, deleteJob } = new jobController();

hireJobRouter.get("/", getAccessToRoute,  listJob);
hireJobRouter.post("/create", getAccessToRoute, createJob);
hireJobRouter.put("/update/:id", getAccessToRoute, getOwnerJobAccess, updateJob);
hireJobRouter.delete("/delete/:id", getAccessToRoute, getOwnerJobAccess, deleteJob);

module.exports = hireJobRouter;
