//------------------Models------------------------------
const HttpError = require("../models/http-error");
const User = require("../models/user-model");
const Resource = require("../models/resource-model");

//----------------------Controllers------------------

const getNewStudentResources = async (req, res, next) => {
//returns a list of resources for the new students

    let resources;
    try{
        resources = await Resource.find({audience: "new"}); // 
    }
    catch(error){
        return next(new HttpError("Could not access database", 500));
    }
    if(!resources || resources.length === 0){
        return next(new HttpError("No resources found", 404));
    }

    res.status(200).json({resources: resources});


};

const getContinuingStudentResources = async (req, res, next) => {
//returns a list of resources for continuing students

    let resources;
    try{
        resources = await Resource.find({audience: "continuing"}); // 
    }
    catch(error){
        return next(new HttpError("Could not access database", 500));
    }
    if(!resources || resources.length === 0){
        return next(new HttpError("No resources found", 404));
    }

    res.status(200).json({resources: resources}); 

};

const getGraduatingStudentResources = async (req, res, next) => {

//returns a list of resources for graduating students
    
        let resources;
        try{
            resources = await Resource.find({audience: "graduating"}); // 
        }
        catch(error){
            return next(new HttpError("Could not access database", 500));
        }
        if(!resources || resources.length === 0){
            return next(new HttpError("No resources found", 404));
        }
    
        res.status(200).json({resources: resources});
};

const getUserResources = async (req, res, next) => {
//returns a list of resources for the user

    const userId = req.params.uid;
    
    let user;
    try {
        user
    }
    catch(error){
        return next(new HttpError("Could not access database", 500));
    }
    if(!user){
        return next(new HttpError("No user found", 404));
    }

    let resources;
    try{
        resources = await Resource.find({users: userId}); // 
    }
    catch(error){
        return next(new HttpError("Could not access database", 500));
    }
    if(!resources || resources.length === 0){
        return next(new HttpError("No resources found", 404));
    }

    res.status(200).json({resources: resources});
};

const createResource = async (req, res, next) => {
    //creates a new resource in data base
    const {title, search, description, link, image, audience} = req.body;
    let existingResource;
    try {
        existingResource = await Resource.findOne({ title: title });
    }
    catch(error){
        return next(new HttpError("Resource creation failed, Could not access database", 500))
    }
    if(existingResource){
        return next(new HttpError("Resource already exists", 422))
    }
    const createdResource = new Resource({
        title,
        search,
        description,
        link,
        image,
        audience
    });
    try {
        await createdResource.save();
    }
    catch(error){
        return next(new HttpError("Resource creation failed, Could not save to database", 500))
    }
    res.status(201).json({resource: createdResource});
};



exports.getNewStudentResources = getNewStudentResources;
exports.getContinuingStudentResources = getContinuingStudentResources;
exports.getGraduatingStudentResources = getGraduatingStudentResources;
exports.getUserResources = getUserResources;
exports.createResource = createResource;