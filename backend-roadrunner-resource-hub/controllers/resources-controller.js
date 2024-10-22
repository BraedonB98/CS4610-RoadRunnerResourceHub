//------------------Models------------------------------
const HttpError = require("../models/http-error");
const User = require("../models/user-model");
const Resource = require("../models/resource-model");

//----------------------Controllers------------------

const getNewStudentResources = async (req, res, next) => {
//returns a list of resources for the new students
res.status(200).json({resources: ["resource1", "resource2", "resource3"]});
};

const getContinuingStudentResources = async (req, res, next) => {
//returns a list of resources for continueing students
};

const getGraduatingStudentResources = async (req, res, next) => {

//returns a list of resources for graduating students
};

const getUserResources = async (req, res, next) => {
//returns a list of resources for the user
};

const createResource = async (req, res, next) => {
    //creates a new resource in data base
};



exports.getNewStudentResources = getNewStudentResources;
exports.getContinuingStudentResources = getContinuingStudentResources;
exports.getGraduatingStudentResources = getGraduatingStudentResources;
exports.getUserResources = getUserResources;
exports.createResource = createResource;