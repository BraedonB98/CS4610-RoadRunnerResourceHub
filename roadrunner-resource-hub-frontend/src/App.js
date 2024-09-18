//-----------Import React and CSS-----------//
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//-----------Components-----------//
import MainNavigation from './shared/components/Navigation/MainNavigation';

//-----------Pages-----------//
import Welcome from './landing/pages/Welcome.js';
import Freshman from './student_resources/pages/Freshman.js';
import Sophomore from './student_resources/pages/Sophomore.js';
import Junior from './student_resources/pages/Junior.js';
import Senior from './student_resources/pages/Senior.js';

function App() {
  let routes;

  routes = (
    <Routes>
      <Route path = "/" exact element = {<Welcome/>}/>
      <Route path = "/Freshman" exact element = {<Freshman/>}/>
      <Route path = "/Sophomore" exact element = {<Sophomore/>}/>
      <Route path = "/Junior" exact element = {<Junior/>}/>
      <Route path = "/Senior" exact element = {<Senior/>}/>
    </Routes>
  );

  return (
    <Router>
      <MainNavigation/>
      <main>
        {routes}
      </main>
      <footer className='Footer'>
        <p>© 2021 Roadrunner Resource Hub</p>
      </footer>
    </Router>
  );
}

export default App;
