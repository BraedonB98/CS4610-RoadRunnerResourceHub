// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Navigation/Footer';

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
            <Toaster />
            <Routes>
              <Route path="/" exact element={<Welcome />} />

              <Route path="/NewStudents" exact element={<NewStudents />} />
              <Route path="/ContinuingStudents" exact element={<ContinuingStudents />} />
              <Route path="/GraduatingStudents" exact element={<GraduatingStudents />} />
              <Route path="/Login" exact element={<Login />} /> 


            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
