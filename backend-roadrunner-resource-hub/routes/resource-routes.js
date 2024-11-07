const express = require("express");

const resourceController = require("../controllers/resource-controller");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

//insert new routes that do not need authentication here
router.get("/resources/newstudent", resourceController.getNewStudentResources);
//!move all of these to the same route ie. resource/:page then return based on page variable
router.get("/resources/continuingstudent", resourceController.getContinuingStudentResources);
router.get("/resources/graduatingstudent", resourceController.getGraduatingStudentResources);

// router.use(checkAuth); // every route after this requires an token//!reenable

router.get("/resources/:uid", resourceController.getUserResources);

router.post("/resources", resourceController.createResource);

module.exports = router;