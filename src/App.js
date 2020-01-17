import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './modules/LandingPage.js';
import CoursePage from './CoursePage.js';
import { BrowserRouter as Router , Route} from "react-router-dom";

export default () => {

  return (
    <Router>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/coursePage" component={CoursePage} />
    </Router>
  );
}

