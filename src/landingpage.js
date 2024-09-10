import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage';
import ContactPage from './contactpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
