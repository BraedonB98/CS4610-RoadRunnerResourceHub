// App.js

import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';

//----------------------Importing Components------------------------
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Navigation/Footer';

//----------------------Context------------------------
import { AuthContext } from './shared/context/auth-context';
import { UserContext } from './shared/context/user-context';

//----------------------Hooks-------------------------
import {UserAuth} from './shared/hooks/auth-hook';
import {UserInfo} from './shared/hooks/user-hook';


//----------------------Importing Pages------------------------------
import Welcome from './landing/pages/Welcome';
import NewStudents from './student_resources/pages/NewStudents';
import ContinuingStudents from './student_resources/pages/ContinuingStudents';
import GraduatingStudents from './student_resources/pages/GraduatingStudents';
import Login from './student_resources/pages/Login';


function App() {
  return (
    <div className="page-container">
      <Router>
        <MainNavigation />
        <div className="content-wrap">
          <main className="main-content">
            <Routes>
              <Route path="/" exact element={<Welcome />} />

              <Route path="/NewStudents" exact element={<NewStudents />} />
              <Route path="/ContinuingStudents" exact element={<ContinuingStudents />} />
              <Route path="/GraduatingStudents" exact element={<GraduatingStudents />} />
              <Route path="/Login" exact element={<Login />} /> 


            </Routes>
          </main>
        </Router>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
