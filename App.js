import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing

import HomePage from './home'; // Ensure correct import paths
import BlogPage from './blog';
import AboutPage from './about';
import Navbar from './navbar';
import BlogContent from './content';

function App() {
  return (
    <Router>
      <Navbar /> {/* Display Navbar on all pages */}
      <Routes>
        <Route path='/' element={<HomePage />} /> {/* Route for Home Page */}
        <Route path='/blog' element={<BlogPage />} /> {/* Route for Blog Page */}
        <Route path='/about' element={<AboutPage />} /> {/* Route for About Page */}
        <Route path='/blog/:id' element={<BlogContent />} /> 
      </Routes>
    </Router>
  );
}

export default App;
