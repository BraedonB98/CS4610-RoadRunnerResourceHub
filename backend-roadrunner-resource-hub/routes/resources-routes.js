const express = require("express");
const resourcesController = require("../controllers/resources-controller");
const router = express.Router();
//insert new routes that do not need authentication here
router.get("/resources/newstudent", resourcesController.getNewStudentResources);
router.get("/resources/continuingstudent", resourcesController.getContinuingStudentResources);
router.get("/resources/graduatingstudent", resourcesController.getGraduatingStudentResources);

router.use(checkAuth); // every route after this requires an token

router.get("/resources/:uid", resourcesController.getUserResources);

router.post("/resources", resourcesController.createResource);