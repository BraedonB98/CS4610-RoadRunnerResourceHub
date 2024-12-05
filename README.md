# Road Runner Resource Hub(Depricated-> moved to frontend/backend separated repos)

Welcome to the Road Runner Resource Hub Project. The purpose of this project is to be able to provide MSU Denver students with all the resources they actually need during their time here at MSU Denver. The official MSU Denver website is cluttered, filled with too many links, overwhelming and unsearchable. The RoadRunner Resource Hub allows us to condense down this information into a more readable and digestible format.

# Frontend

## Running Product (to future server admin)

Bellow are listed instructions, resources, and details for accessing, deploying and maintaining the code base for the Road Runner Resource Hub

### Necessary Resources

- Github account (https://github.com/)
- Visual Studio Code (https://code.visualstudio.com/)
- Node Package Manager(https://www.npmjs.com/)
- Server For Deployment(or remote server)

### Steps for Deployment

1. Locate project from the github website (https://github.com/BraedonB98/CS4610-RoadRunnerResourceHub.git)
2. Clone project for local repository
   - open terminal in local directory
   - run "git clone https://github.com/BraedonB98/CS4610-RoadRunnerResourceHub.git"
   - cd CS46100-RoadRunnerResourceHub
   - cd roadrunner-resource-hub-frontend
3. Build project(creates necessary files in a format for deployment)
   - install dependencies
     - run "npm install"
   - install server npm package
     - run "npm install -g serve"
   - run "npm run build"
     - This will generate a build folder
   - on server run "serve -s build -l <portNumber>
4. For Firebase Deployment(https://firebase.google.com/docs/hosting/quickstart)
   - install firebase CLI(https://firebase.google.com/docs/cli#install_the_firebase_cli)
   - initialize project
     - from the frontend folder run "firebase init hosting" (only for first time deployment)
     - run "firebase deploy" and follow on screen instructions

## Developmental Roadmap


# Backend
## API Calls
note all api calls with by /api/<category>/<resourceRequested> formatting after host id. ex. localhost:5000/api/user/create user

### User (/user)
Without Authentication 
- POST /createuser  - will create a new user
- POST /login  - will check if user is in the database, if there is they will be given a session token to be logged in.
With Authentication
- PATCH /:uid/info/photo - will change the users profile photo


### Resources(/resources)
- GET /newstudent - will give a list of resources for new students
- GET /continuingstudent - will give a list of resources for a continueing student
- GET /graduatingstudent - will give a list of resources for a graduating student

With Authentication 
- GET /resources/:uid - will give a list of resources a user has saved in their profile (array of objects)


## IMPORTANT NOTES
- need to change user model to reflect changes in create user controller
