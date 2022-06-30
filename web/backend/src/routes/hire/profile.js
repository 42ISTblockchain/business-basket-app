const profileController = require("../../controllers/hire/profile");
const hireProfileRouter = require("express").Router();
const {getOwnerJobAccess} = require("../../middleware/auth/auth");

const {list, update} = new profileController();

hireProfileRouter.get("/", list);
hireProfileRouter.put("/update", update);

module.exports = hireProfileRouter;
