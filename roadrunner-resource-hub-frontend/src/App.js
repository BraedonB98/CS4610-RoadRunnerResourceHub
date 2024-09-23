// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Navigation/Footer';

import Welcome from './landing/pages/Welcome';
import Freshman from './student_resources/pages/Freshman';
import Sophomore from './student_resources/pages/Sophomore';
import Junior from './student_resources/pages/Junior';
import Senior from './student_resources/pages/Senior';
import Transfer from './student_resources/pages/Transfer';

function App() {
  return (
    <div className="page-container">
      <Router>
        <MainNavigation />
        <div className="content-wrap">
          <main className="main-content">
            <Routes>
              <Route path="/" exact element={<Welcome />} />
              <Route path="/Freshman" exact element={<Freshman />} />
              <Route path="/Sophomore" exact element={<Sophomore />} />
              <Route path="/Junior" exact element={<Junior />} />
              <Route path="/Senior" exact element={<Senior />} />
              <Route path="/Transfer" exact element={<Transfer />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
